import { LexicalError, SyntacticError } from '../analyser/SystemErros'
import { MetaException } from '../util/MetaException'
import { LineScanner } from './LineScanner'
import { FiniteAutomataGenerator } from './FiniteAutomataGenerator'
import { AnalysisError } from '../analyser/AnalysisError'
import { FiniteAutomata } from '../generator/FiniteAutomata'
import { Token } from '../analyser/Token'
import { REParser } from './REParser'
import { Node } from './Node'
import { ErrorLog } from '../ErrorLog'

export class LineParser {
  private scanner: LineScanner = new LineScanner()
  private pos: number = 0
  private gen: FiniteAutomataGenerator | null = null

  parseFA(defs: string, tokens: string, scannerCaseSensitive: boolean): FiniteAutomata {
    //throws MetaException{

    this.gen = new FiniteAutomataGenerator(scannerCaseSensitive)

    try {
      this.parseDefs(defs)
    } catch (error) {
      ErrorLog.Instance.add(error as AnalysisError)
    }

    this.parseTokens(tokens)

    try {
      const fa: FiniteAutomata | null = this.gen.generateAutomata()

      if (fa == null) throw new AnalysisError('Automato gerado é nulo')

      return fa
    } catch (error) {
      console.log(error)
      throw new MetaException(MetaException.Mode.TOKEN, 0, error as AnalysisError)
    }
  }

  private parseDefs(str: string) {
    // throws MetaException

    if (this.gen == null) return

    const tknzr: string[] = str.split(/(\n)/g)
    let lineCount: number = 0

    for (const line of tknzr) {
      if (line == '\n') {
        lineCount++

        continue
      }

      this.scanner.text = line

      try {
        let t: Token | null = this.nextToken()

        this.pos = 0
        if (t != null && t.id == LineScanner.ID) {
          const id: string = t.lexeme

          this.pos = t.position + id.length

          t = this.nextToken()

          if (t != null && t.id == LineScanner.COLON) {
            this.pos = t.position + 1
            t = this.nextToken()

            if (t != null && t.id == LineScanner.RE) {
              const re: string = t.lexeme

              try {
                const tokenParsed: Node | undefined = this.parseRE(re)
                if (tokenParsed == undefined) return
                this.gen.addDefinition(id, tokenParsed)
              } catch (e) {
                const analysisError = e as AnalysisError
                analysisError.position = analysisError.position + this.pos
                throw analysisError
              }
            } else throw new SyntacticError('Era esperado uma Expressão Regular', this.pos)
          } else throw new SyntacticError("Era esperado ':'", this.pos)
        } else if (t == null) continue
        else throw new SyntacticError('Era esperado um identificador', this.pos)
      } catch (e) {
        throw new MetaException(MetaException.Mode.DEFINITION, 0, e as AnalysisError)
      }
    }
  }

  //    private parseDefs(string: string){ // throws MetaException

  // 	   //StringTokenizer tknzr = new StringTokenizer(string, "\n");
  //       let tknzr: string[] =  string.split(/(\n)/g);

  // 		let lineCount: number = 0;

  // 		for(let line of tknzr){

  // 			if (line == "\n"){
  // 				lineCount++;
  // 				continue;
  // 			}

  // 			this.scanner.text = line;

  // 			try{

  // 				let t: Token | null = this.nextToken();

  // 				this.pos = 0;

  // 				if (t != null && t.id == LineScanner.ID){

  // 					let id: string = t.lexeme;

  // 					this.pos = t.position +id.length;

  // 					t = this.nextToken();

  // 					if (t != null && t.id == LineScanner.COLON){

  // 						this.pos = t.position + 1;

  // 						t = this.nextToken();

  // 						if (t != null && t.id == LineScanner.RE){

  // 							let re: string = t.lexeme;

  // 							try{

  // 								if(this.gen == null) throw new AnalysisError("Gerador de Automatos Finitos é nulo!");

  // 								let node: Node | undefined =  this.parseRE(re);
  // 								if(node != undefined)

  // 								this.gen.addDefinition(id, node);
  // 							}
  // 							catch (e){

  //                         		let analysisError =  e as AnalysisError;
  // 								analysisError.position = (analysisError.position + this.pos);

  // 								throw analysisError;
  // 							}
  // 						} else throw new SyntacticError("Era esperado uma Expressão Regular", this.pos);

  // 					} else throw new SyntacticError("Era esperado ':'", this.pos);

  // 				} else if (t == null) continue;

  // 				else throw new SyntacticError("Era esperado um identificador", this.pos);

  // 			}catch (e){
  // 				throw new MetaException(MetaException.Mode.DEFINITION, lineCount, e as AnalysisError);
  // 			}

  // 		}

  // 	}

  private parseTokens(tokenInput: string) {
    // throws MetaException

    let lineCount: number = 0
    //StringTokenizer tknzr = new StringTokenizer(string, "\n", true);
    //let tknzr: string[] =  tokenInput.split(/(\n)/g);
    const tknzr: string[] = tokenInput.split(/(\n)/g)

    for (const line of tknzr) {
      if (line === '\n') {
        lineCount++

        continue
      }

      this.scanner.text = line

      try {
        const t: Token | null = this.nextToken()

        this.pos = 0
        if (t != null) {
          this.pos = t.position + t.lexeme.length

          switch (t.id) {
            case LineScanner.COLON:
              this.parseIgnore()
              break

            case LineScanner.ID:
            case LineScanner.STR:
              this.parseId(t)
              break

            default:
              throw new LexicalError('Era esperado um identificador', 0)
          }
        }
      } catch (e) {
        console.warn("No parseTokens",e)
        throw new MetaException(MetaException.Mode.TOKEN, lineCount, e as AnalysisError)
      }
    }
  }

  private parseIgnore() {
    // throws AnalysisError

    const t: Token | null = this.nextToken()

    if (t != null && t.id == LineScanner.RE) {
      const re: string = t.lexeme

      try {
        if (this.gen == null)
          throw new AnalysisError('Gerador de Autômatos Finitos não inicializado!')

        if (re.charAt(0) == '!') {
          const node: Node | undefined = this.parseRE(re.substring(1))
          if (node != undefined) this.gen.addIgnore(node, false)
        } else {
          const node: Node | undefined = this.parseRE(re)
          if (node != undefined) this.gen.addIgnore(node, true)
        }
      } catch (e) {
        const analysisError = e as AnalysisError

        analysisError.position = analysisError.position + t.position

        throw analysisError
      }
    } else throw new LexicalError('Era esperado uma Expressão Regular', this.pos)
  }

  //TODO Weird
  private parseId(t: Token | null) {
    // throws AnalysisError

    if (t == null) return

    const id: string = t.lexeme

    t = this.nextToken()

    if (t == null) {
      try {
        if (this.gen == null) return
        const node: Node | undefined = this.parseRE(id)
        if (node == undefined) return

        this.gen.addExpression(id, node, true)
      } catch (e) {
        const analysisError = e as AnalysisError
        //analysisError.position = analysisError.position //+ t.position); // TODO NULL DONT HAVE POSITION
        throw analysisError
      }
    } else {
      this.pos = t.position + t.lexeme.length

      switch (t.id) {
        case LineScanner.COLON:
          this.parseIdEnd(id)
          break
        case LineScanner.EQUALS:
          this.parseSpecialCase(id)
          break
        default:
          this.pos = t.position
          throw new LexicalError("Era esperado ':' ou '='", this.pos)
      }
    }
  }

  private parseIdEnd(id: string) {
    // throws AnalysisError

    const t: Token | null = this.nextToken()

    if (t == null || t.id != LineScanner.RE) {
      throw new LexicalError('Era esperado uma Expressão Regular', this.pos)
    }

    const re: string = t.lexeme
    try {
      if (this.gen == null) return

      if (re.charAt(0) == '!') {
        const node: Node | undefined = this.parseRE(re.substring(1))
        if (node != undefined) this.gen.addExpression(id, node, false)
      } else {
        const node: Node | undefined = this.parseRE(re)
        if (node != undefined) 
          this.gen.addExpression(id, node, true)
        else
          throw new LexicalError(`Definição Regular "${re}" indefinida no Token '${id}'`, this.pos)
      }
    } catch (e) {
      const analysisError = e as AnalysisError
      analysisError.position = analysisError.position + t.position
      throw analysisError
    }
  }

  private parseSpecialCase(id: string) {
    // throws AnalysisError

    let t: Token | null = this.nextToken()

    if (t != null && t.id == LineScanner.ID) {
      const id2: string = t.lexeme

      this.pos = t.position + id.length

      t = this.nextToken()

      if (t != null && t.id == LineScanner.COLON) {
        this.pos = t.position + 1

        t = this.nextToken()

        if (t != null && t.id == LineScanner.STR) {
          let re: string = t.lexeme

          re = re.substring(1, re.length - 1)

          try {
            if (this.gen == null) return
            this.gen.addSpecialCase(id, id2, re)
          } catch (e) {
            const analysisError = e as AnalysisError
            analysisError.position = analysisError.position + t.position
            throw analysisError
          }

          t = this.nextToken()

          if (t != null)
            throw new SyntacticError('Só é permitido uma definição por linha', t.position)
        } else throw new SyntacticError('Era esperado uma Expressão Regular', this.pos)
      } else throw new SyntacticError("Era esperado ':'", this.pos)
    } else throw new SyntacticError('Era esperado um Identificador', this.pos)
  }

  private nextToken(): Token | null {
    //  throws LexicalError

    let t: Token | null = this.scanner.nextToken()
    if (t != null) {
      if (t.id == LineScanner.COMMENT) t = this.nextToken()
      else if (t.id == LineScanner.ERROR) throw new LexicalError('Token inválido', t.position)
    }
    return t
  }

  private parseRE(re: string): Node | undefined {
    //  throws AnalysisError

    const parser: REParser = new REParser()

    if (this.gen != null) return parser.parse(re, this.gen)
    else return undefined
  }
}
