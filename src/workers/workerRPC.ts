let rpcCounter = 0

const pendingRPC = new Map<number, (value: any) => void>()

export function workerRPC(method: string, payload: any): Promise<any> {
  return new Promise((resolve) => {
    const id = rpcCounter++

    pendingRPC.set(id, resolve)

    self.postMessage({
      type: 'rpc_request',
      id,
      method,
      payload
    })
  })
}

export function installRPCHandler(): void {
  self.addEventListener('message', (event) => {
    const msg = event.data

    if (msg.type === 'rpc_response') {
      const resolve = pendingRPC.get(msg.id)

      if (resolve) {
        pendingRPC.delete(msg.id)
        resolve(msg.result)
      }
    }
  })
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
