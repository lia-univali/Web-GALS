
import { generateCode } from "@/assets/scripts/gals-functions";
import JSZip from "jszip";
import TreeMap from "ts-treemap";

self.onmessage = (event) => {

    try {
        const args = event.data

        const opts = JSON.parse(args.options);

		let allFiles:   TreeMap<string, string> | null = null
		let foldered:   boolean = false;
		let mainfunc:   string | null = null;

		try {
			[allFiles, , foldered, mainfunc] = generateCode(
				args.regularDefinitions,
				args.tokens,
				args.nonTerminals,
				args.grammar,
				opts,
				args.necessarioRecriar,
				args.fa,
				args.g
			)
		} catch (error) {
			console.log("B")
			self.postMessage({
				success: false,
				error:   (error as Error).message
			})
		}

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
				error,
			})
		}

    } catch (error) {
        self.postMessage({
            success: false,
            error,
        })
    }


}
