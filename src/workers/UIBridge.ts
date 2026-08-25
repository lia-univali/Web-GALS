import { workerRPC } from '@/workers/workerRPC'

function uibridgeimpl_prompt(text: string, defaultValue: string): string | null {
  return window.prompt(text, defaultValue)
}

export function uibridgeimpl(ui: any, worker: any, data: any) {
  let result = null
  switch (data.method) {
    case 'prompt':
      result = uibridgeimpl_prompt(data.payload.text, data.payload.defaultValue)
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

export async function prompt(header: string, def: string): Promise<any> {
  const isMainThread = typeof window !== 'undefined' && typeof window.document !== 'undefined'

  if (isMainThread) {
    return Promise.resolve(uibridgeimpl_prompt(header, def))
  } else
    return workerRPC('prompt', {
      text: header,
      defaultValue: def
    })
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
