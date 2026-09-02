import { generateCode } from '@/assets/scripts/gals-functions'
import { syntacticSimulation } from '@/assets/scripts/gals-functions'
import { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar';
import { LRParserSimulator } from '@/assets/scripts/gals-lib/simulator/LRParserSimulator';
import { LL1ParserSimulator } from '@/assets/scripts/gals-lib/simulator/LL1ParserSimulator';
import JSZip from 'jszip';

let gramatica: Grammar            | undefined = undefined;
let lrSim:     LRParserSimulator  | undefined = undefined;
let ll1Sim:    LL1ParserSimulator | undefined = undefined;

self.onmessage = (event) => {
	if (event.data.type !== 'rpc_response') {
		switch (event.data.type) {
			case 'emitcode':
			{
        try {
          const args = event.data

          const opts = JSON.parse(args.options)

          /* Reutilizar gramatica, lrSim, ll1Sim quando args.necessarioRecriar == true */
          generateCode(
            args.regularDefinitions,
            args.tokens,
            args.nonTerminals,
            args.grammar,
            opts,
            args.necessarioRecriar,
            undefined,
            gramatica
          )
            .then(([allFiles, , foldered, mainfunc]) => {
              if (allFiles == null) return

              try {
                const zip = new JSZip()
                let fld: JSZip | null = null

                if (foldered) {
                  fld = zip.folder(opts.pkgName)
                  if (fld == null) throw Error('FLD é nulo')
                }

                for (const [fileName, content] of allFiles.entries()) {
                  if (foldered && fld != null) {
                    fld.file(fileName, content)
                  } else {
                    zip.file(fileName, content)
                  }
                }

                if (mainfunc != null) {
                  zip.file('main.py', mainfunc)
                }

                zip.generateAsync({ type: 'blob' }).then((content) => {
                  const url = URL.createObjectURL(content)
                  self.postMessage({
                    type: 'emitcode',
                    success: true,
                    result: [url, args.fileName, args.linguagemString]
                  })
                })
              } catch (error) {
                self.postMessage({
                  type: 'emitcode',
                  success: false,
                  error: (error as Error).message
                })
              }
            })
            .catch((error) =>
              self.postMessage({
                type: 'emitcode',
                success: false,
                error: (error as Error).message
              })
            )
        } catch (error) {
          self.postMessage({
            type: 'emitcode',
            success: false,
            error
          })
        }
			}
			break;
			case 'syntactic':
			{
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

              let result = JSON.stringify(root)

              self.postMessage({
                type: 'syntactic',
                success: true,
                result
              })
              })
              .catch((error) => {
                self.postMessage({
                  type: 'syntactic',
                  success: false,
                  error: (error as Error).message
                })
						})
					} catch (error) {
            self.postMessage({
              type: 'syntactic',
              success: false,
              error: (error as Error).message
            })
					}
			}
			break;
		}
	}
}


// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
