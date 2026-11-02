
import { workerRPC } from '@/workers/workerRPC'

type ConflictModalHandler = (
  state: number,
  intext: string,
  conflicts: string[][]
) => Promise<string>

let mainThreadConflictModalHandler: ConflictModalHandler | null = null

export function setConflictModalHandler(callback: ConflictModalHandler) {
  mainThreadConflictModalHandler = callback
}

function uibridgeimpl_prompt(text: string, defaultValue: string): string | null {
  return window.prompt(text, defaultValue)
}

async function uibridgeimpl_conflictModalPrompt(
  state: number,
  intext: string,
  conflicts: string[][],
  conflictModal: ConflictModalHandler
): Promise<string> {
  return await conflictModal(state, intext, conflicts)
}

export async function uibridgeimpl(
  ui: any,
  worker: any,
  data: any,
  conflictModal: ConflictModalHandler
) {
  let result = null

  switch (data.method) {
    case 'prompt':
      result = uibridgeimpl_prompt(
        data.payload.text,
        data.payload.defaultValue
      )
      break

    case 'conflictModalPrompt':
      result = await uibridgeimpl_conflictModalPrompt(
        data.payload.state,
        data.payload.intext,
        data.payload.conflicts,
        conflictModal
      )
      break

    default:
      ui.$toast.error('WORKER RPC UNKNOWN')
      break
  }

  worker.postMessage({
    type: 'rpc_response',
    id: data.id,
    result
  })
}

export async function conflictModalPrompt(
  state: number,
  intext: string,
  conflicts: string[][]
//  header: string,
//  def: string
): Promise<string> {
  const isMainThread =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined'

  if (isMainThread) {
    if (!mainThreadConflictModalHandler) {
      throw new Error('Conflict modal handler has not been registered')
    }

    return mainThreadConflictModalHandler(state, intext, conflicts)
  }

  return workerRPC('conflictModalPrompt', {
    state: state,
    intext: intext,
    conflicts: conflicts
  })
}

export async function prompt(
  header: string,
  def: string
): Promise<string | null> {
  const isMainThread =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined'

  if (isMainThread) {
    return uibridgeimpl_prompt(header, def)
  }

  return workerRPC('prompt', {
    text: header,
    defaultValue: def
  })
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
