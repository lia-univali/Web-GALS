import { syntacticSimulation } from '@/assets/scripts/gals-functions'
import { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar';
import { LRParserSimulator } from '@/assets/scripts/gals-lib/simulator/LRParserSimulator';
import { LL1ParserSimulator } from '@/assets/scripts/gals-lib/simulator/LL1ParserSimulator';

let gramatica: Grammar            | undefined = undefined;
let lrSim:     LRParserSimulator  | undefined = undefined;
let ll1Sim:    LL1ParserSimulator | undefined = undefined;

self.onmessage = (event) => {
  if (event.data.type !== 'rpc_response')
    try {
      const args = event.data

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
        gramatica,
        lrSim,
        ll1Sim
      )
        .then(([root, g, lr, ll]) => {

          gramatica = g;
          lrSim     = lr;
          ll1Sim    = ll;

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
