import { syntacticSimulation } from "@/assets/scripts/gals-functions"

self.onmessage = (event) => {

    try {
        const args = event.data

        /*
         * TODO: Não é possível mandar a gramática atravéz de workers
         * devido a uma referencia circular; consertar.
         */
        const [root, _g, _ll, _lr] = syntacticSimulation(
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

        let result = [JSON.stringify(root), undefined, undefined, undefined];

        self.postMessage({
            success: true,
            result
        })
    } catch (error) {
        self.postMessage({
            success: false,
            error: (error as Error).message
        })
    }


}
