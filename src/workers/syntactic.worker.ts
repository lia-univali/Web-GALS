import { syntacticSimulation } from '@/assets/scripts/gals-functions'

self.onmessage = (event) => {
  if (event.data.type !== 'rpc_response')
    try {
      const args = event.data

      /*
       * TODO: Não é possível mandar a gramática atravéz de workers
       * devido a uma referencia circular; consertar.
       */
      syntacticSimulation(
        args.textSimulator,
        args.regularDefinitions,
        args.tokens,
        args.nonTerminals,
        args.grammar,
        args.parser,
        args.necessarioRecriar,
        undefined,
        undefined,
        args.gramatica,
        args.lrSim,
        args.ll1Sim
      )
        .then(([root, _g, _ll, _lr]) => {
          let result = [JSON.stringify(root), undefined, undefined, undefined]

          self.postMessage({
            success: true,
            result
          })
        })
        .catch((error) => {
          self.postMessage({
            success: false,
            error: (error as Error).message
          })
        })
    } catch (error) {
      self.postMessage({
        success: false,
        error: (error as Error).message
      })
    }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
