import { SemanticError } from '../analyser/SystemErros'
import { IntegerSet, List } from '../DataStructures'
import { HTMLDialog } from '../HTMLDialog'
import { FiniteAutomataSimulator } from '../simulator/FiniteAutomataSimulator'

/*
Missing to String and to HTML
*/

export class KeyValuePar {
  public key: string
  public value: number

  constructor(key: string, value: number) {
    this.key = key
    this.value = value
  }

  public toString(): string {
    return '[' + this.key + '->' + this.value + ']'
  }
}

export class FiniteAutomata {
  private _transitions: List<Map<string, number>>
  private _finals: number[]
  private _context: number[][]
  private _alphabet: IntegerSet
  private _tokenNames: List<string>
  private _errors: string[] = []
  private _hasContext: boolean = false
  private _specialCasesIndexes: number[][]
  private _specialCases: KeyValuePar[]

  constructor(
    alphabet: IntegerSet,
    transitions: List<Map<string, number>>,
    finals: number[],
    specialCasesIndexes: number[][],
    specialCases: KeyValuePar[],
    context: number[][],
    tokenNames: List<string>,
    sensitive: boolean
  ) {
    this._alphabet = alphabet
    this._transitions = transitions
    this._finals = finals
    this._context = context
    this._specialCasesIndexes = specialCasesIndexes
    this._specialCases = specialCases
    this._tokenNames = tokenNames

    for (let ctx of context) {
      if (ctx[0] == 1) {
        this._hasContext = true
        break
      }
    }

    this.buildErrors()

    this.checkSpecialCases(sensitive)
  }

  private checkSpecialCases(sensitive: boolean) {
    // throws SemanticError

    let sim: FiniteAutomataSimulator = new FiniteAutomataSimulator(this, sensitive)

    for (let i = 0; i < this._specialCasesIndexes.length; i++) {
      let index: number[] = this._specialCasesIndexes[i]

      for (let j = index[0]; j < index[1]; j++) {
        if (sim.analyse(this._specialCases[j].key) != i)
          throw new SemanticError(
            'O valor "' +
              this._specialCases[j].key +
              '" não é válido como caso especial de \'' +
              this._tokenNames.get(i - 2) +
              "', na definição de '" +
              this._tokenNames.get(this._specialCases[j].value - 2) +
              "'"
          )
      }
    }
  }

  public nextState(c: string, state: number): number {
    let inState: number | undefined = this._transitions.get(state).get(c)

    if (inState == undefined) return -1
    else return inState
  }

  public tokenForState(state: number): number {
    if (state < 0 || state >= this._finals.length) return -1

    return this._finals[state]
  }

  //TODO Representation methods go here

  private finalStatesFromState(state: number): Set<number> {
    let visited: Set<number> = new Set<number>()

    visited.add(state)

    let changed: boolean = true

    //TODO Testar os breaks
    loop: while (changed) {
      changed = false
      for (let st of visited) {
        for (let v of this._alphabet.list()) {
          let c: string = String.fromCodePoint(v)

          let next: number = this.nextState(c, st)

          if (next != -1 && !visited.has(next)) {
            visited.add(next)
            changed = true
            //continue loop;
            break
          }
        }

        if (changed) {
          break
        }
      }
    }

    let result: Set<number> = new Set<number>()

    for (let i of visited) {
      let token = this.tokenForState(i)

      if (token >= 0) result.add(i)
    }

    return result
  }

  private tokensFromState(state: number): Set<number> {
    let visited: Set<number> = this.finalStatesFromState(state)

    let result: Set<number> = new Set<number>()

    for (let i of visited) {
      let token: number = this.tokenForState(i)

      if (token >= 0) result.add(token)
    }

    return result
  }

  private buildErrors() {
    this._errors = []

    /*
     *
     * if (tokenForState(0) >= 0)
     *
     * errors[0] = "";
     *
     * else
     */

    this._errors[0] = 'Caractere não esperado'

    for (let i = 1; i < this._transitions.size(); i++) {
      if (this.tokenForState(i) >= 0) this._errors[i] = ''
      else {
        let tokens: Set<number> = this.tokensFromState(i)

        let bfr: string = 'Erro identificando '

        for (let t of tokens) {
          if (t > 0) bfr += this._tokenNames.get(t - 2)
          else bfr += '<ignorar>'

          bfr += ' ou '
        }

        //TODO Verify result
        //bfr.setLength(bfr.length() - 4);
        bfr = bfr.substring(0, bfr.length - 4)

        this._errors[i] = bfr.toString()
      }
    }
  }

  public get transitions(): List<Map<string, number>> {
    return this._transitions
  }

  public get tokens(): List<string> {
    return this._tokenNames
  }

  public get specialCases(): KeyValuePar[] {
    return this._specialCases
  }

  public get errors(): string[] | null {
    return this._errors
  }

  public getError(i: number): string {
    let error: string | undefined = this._errors[i]

    if (error != undefined) return error
    else throw Error('Sem erros')
  }

  public getSpecialCasesIndexes(): number[][] {
    return this._specialCasesIndexes
  }

  public isContext(state: number): boolean {
    return this._context[state][0] == 1
  }

  public getOrigin(state: number): number {
    return this._context[state][1]
  }

  public hasContext(): boolean {
    return this._hasContext
  }

  public translateString(str: string): string {

		let result = "";
		for (let i=0; i < str.length; i++)
		{
			let c = str.charAt(i);
      
			switch (c)
			{
				case '"':
					result+="&quot;";
					break;
				case '&':
					result+="&amp;";
					break;
				case '<':
					result+="&lt;";
					break;
				case '>':
					result+="&gt;";
					break;
				default:
					result+=c;
			}
		}
			
		return result;
  } 


  public asHTML(): string {
    let result = "";
  
    result +=
    "<HTML>"+
    "<HEAD>"+
    "<TITLE> Tabela de Transições </TITLE>"+
    "</HEAD>"+
    "<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">"+
    "<TABLE border=1 cellspacing=0>";
    
    result +=
                "<TR align=center>"+
                "<TD rowspan=\"2\" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD>"+
                "<TD rowspan=\"2\" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD>"+
                "<TD colspan=\""+ this._alphabet.size +"\" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD>"+
        "</TR>"+
        "<TR align=center>";
      
    for(let x of this._alphabet.list()){
      let c: string = this.escapeSpecialCharacters(String.fromCodePoint(x));
			result += "<TD bgcolor=#99FF66 nowrap><B>"+ c +"</B></TD>";
    }

    result += "</TR>";
                      
    for (let it = 0; it < this._transitions.size(); it++ ) {
      result += "<TR align=center>"+
              "<TD bgcolor=#99FF66><B>"+it+"</B></TD>";

      let t = this._finals[it];
      let clr: string | null = null;
      
      if (t > 0)
      {
        if (clr == null)
          clr = "#FFFFCC";
          
        let caption: string = HTMLDialog.translateString(this._tokenNames.get(t-2));
        
        if (this.getOrigin(it) >= 0)
          caption += " / "+ this.getOrigin(it);
        result += "<TD bgcolor="+clr+" nowrap>" + caption + "</TD>";
      }
      else if (t == 0)
      {
        if (clr == null)
          clr = "#99CCFF";
        result+="<TD bgcolor="+clr+"><B>:</B></TD>";
      }
      else if (t == -2)
        result+="<TD bgcolor=#FF0000>?</TD>";
      else
      {
        if (clr == null)
          clr = "#FFCC99";
        result+="<TD bgcolor="+clr+">?</TD>";
      }
        
      let x: Map<string, number> = this._transitions.get(it);

      for(let i of this._alphabet.list()){
        result += "<TD width=40 bgcolor=#F5F5F5>";
        let integ = x.get( String.fromCodePoint(i));
        
        if (integ != undefined && integ >= 0)
          result+=integ;
        else
          result+="-";
          
        result+="</TD>";
      }
      result+="</TR>";
    }
    
    result+=
    "</TABLE>"+
    "</FONT></BODY>"+
    "</HTML>"+
    "";

    // // var uri = "data:text/html," + encodeURIComponent(result);var newWindow = window.open(uri);
    // var tab = window.open('about:blank', '_blank'); 
    // if(tab ==  null) return result;
    // tab.document.write(result); // where 'html' is a variable containing your HTML tab.document.close(); // to finish loading the page

    return result;
  }

  escapeSpecialCharacters(input: string) {
    return input
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\r/g, '\\r')
    .replace(/\s/g, "' '")
  }
}
