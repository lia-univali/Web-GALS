
import { generateCode } from "@/assets/scripts/gals-functions";
import JSZip from "jszip";

self.onmessage = (event) => {

    if (event.data.type !== 'rpc_response') try {
      const args = event.data

      const opts = JSON.parse(args.options);

        generateCode(
          args.regularDefinitions,
          args.tokens,
          args.nonTerminals,
          args.grammar,
          opts,
          args.necessarioRecriar,
          args.fa,
          args.g
        ).then(([allFiles, , foldered, mainfunc]) => {
				if (allFiles == null) return;

        try {
          const zip = new JSZip()
          let fld: JSZip | null = null;

          if (foldered) {
            fld = zip.folder(opts.pkgName);
            if (fld == null) throw Error("FLD é nulo");
          }

          for (const [fileName, content] of allFiles.entries())
          {
            if (foldered && (fld != null)) {
              fld.file(fileName, content)
            } else {
              zip.file(fileName, content)
            }
          }

          if (mainfunc != null) {
            zip.file("main.py", mainfunc)
          }

          zip.generateAsync({ type: 'blob' }).then((content) => {
            const url = URL.createObjectURL(content)
            self.postMessage({
              success: true,
              result: url,
            })
          });

        } catch (error) {
          self.postMessage({
            success: false,
            error: (error as Error).message,
          })
        }

			}).catch((error) => self.postMessage({
				success: false,
				error:   (error as Error).message
			}))
    } catch (error) {
        self.postMessage({
            success: false,
            error,
        })
    }


}
