
import { workerRPC } from '@/workers/workerRPC'

type ConflictModalHandler = (
  text: string,
  defaultValue: string
) => Promise<string>

let mainThreadConflictModalHandler: ConflictModalHandler | null = null

export function setConflictModalHandler(callback: ConflictModalHandler) {
  mainThreadConflictModalHandler = callback
}

function uibridgeimpl_prompt(text: string, defaultValue: string): string | null {
  return window.prompt(text, defaultValue)
}

async function uibridgeimpl_conflictModalPrompt(
  text: string,
  defaultValue: string,
  conflictModal: ConflictModalHandler
): Promise<string> {
  return await conflictModal(text, defaultValue)
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
        data.payload.text,
        data.payload.defaultValue,
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
  header: string,
  def: string
): Promise<string> {
  const isMainThread =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined'

  if (isMainThread) {
    if (!mainThreadConflictModalHandler) {
      throw new Error('Conflict modal handler has not been registered')
    }

    return mainThreadConflictModalHandler(header, def)
  }

  return workerRPC('conflictModalPrompt', {
    text: header,
    defaultValue: def
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
