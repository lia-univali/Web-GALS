//npm start
//node ./dist/main.js
import { List, TreeNode } from './gals-lib/DataStructures'
import { ErrorLog } from './gals-lib/ErrorLog'
import { LexicalError, SyntaticError } from './gals-lib/analyser/SystemErros'
import { Token } from './gals-lib/analyser/Token'
import { FiniteAutomata } from './gals-lib/generator/FiniteAutomata'
import { Options } from './gals-lib/generator/Options'
import { Grammar } from './gals-lib/generator/parser/Grammar'
import { LRGenerator } from './gals-lib/generator/parser/lr/LRGenerator'
import { LRGeneratorFactory } from './gals-lib/generator/parser/lr/LRGeneratorFactory'
import { LexicalData } from './gals-lib/generator/scanner/LexicalData'
import { Parser } from './gals-lib/parserparser/Parser'
import { LineParser } from './gals-lib/scannerparser/LineParser'
import { BasicScanner } from './gals-lib/simulator/BasicScanner'
import { FiniteAutomataSimulator } from './gals-lib/simulator/FiniteAutomataSimulator'
import { LRParserSimulator } from './gals-lib/simulator/LRParserSimulator'
import { MetaException } from './gals-lib/util/MetaException'

enum Mode {
  LEXICAL,
  SYNTATIC,
  BOTH
}

export function lexicalSimulation(
  input: string,
  definitions: string,
  tokens: string
): Map<Token, string> {
  let mode: number = Mode.LEXICAL

  let sensitive: boolean = true
  let erroLog: ErrorLog = ErrorLog.Instance

  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  let lp: LineParser = new LineParser()
  let fa: FiniteAutomata = lp.parseFA(definitions, tokens, sensitive)

  // Passo 2 - Obter lista de tokens - a partir do automato finito gerado no passo 1 - método getTokens da classe InputPane - linha 113
  let result: List<string> = new List()

  if (mode != Mode.SYNTATIC) {
    let tokens: List<string> = fa.tokens // Aqui é o automômato gerado no passo 1

    for (let i = 0; i < tokens.size(); i++) {
      result.add(tokens.get(i))
      //        result.add("\n"); // Verificar se for precisso
    }
  } else {
    // StringTokenizer tknzr = new StringTokenizer(tokens.getText(), "\n", true); // Verificar se for precissopara false
    // while (tknzr.hasMoreTokens())
    //     result.add(tknzr.nextToken());
  }

  // Passo 3 - Remover as quebras de linha da lista de tokens gerada no passo 3 - Isso acontece no método getTokens da MainWindow - linha 140
  let tokensNoLine: List<string> = result //Passo 2 result linha 24 //inPane.getTokens();
  while (tokensNoLine.remove('\n'));

  // Ele passa a chamar a lista de tokens de: "terminals" na Classe Actions e "tokenNameList" na SimulateWindow
  // Passo 5 - Se gerar o autômato pela classe LexicalData, o código é o seguinte:
  function generateTokenListAutomata(scannerCaseSensitive: boolean): FiniteAutomata | null {
    try {
      let ld: LexicalData = new LexicalData()
      for (let i = 0; i < tokenNameList.size(); i++) {
        let tokenPivot: string = tokenNameList.get(i)
        ld.addToken(tokenPivot, tokenPivot)
      }

      ld.addIgnore('[\\ \\n\\r\\t]')

      return ld.getFA(scannerCaseSensitive)
    } catch (
      error //MetaException
    ) {
      console.log(error)
      return null
    }
  }

  // Passo 4 - Cria o Simulador de Autômato Finito na classe SimulateWindow - linha 146 ou linha 159
  let tokenNameList = tokensNoLine // getTokens passo 3 tokenNameList;
  let faSim: FiniteAutomataSimulator

  if (fa != null) {
    faSim = new FiniteAutomataSimulator(fa, sensitive)
  } else {
    const newFa = generateTokenListAutomata(sensitive)

    if (newFa == null) throw Error('Finite Automata from Lexical Data is NULL')

    faSim = new FiniteAutomataSimulator(newFa, sensitive) // Seria o passo 5 -  Isso aqui exige a classe LexicalData implementada - BEM IMPORTANTE
  }

  // Passo 6 - Simula os tokens reconhecidos na operação de clique da classe SimulateWindow - método: lexClick

  faSim.setInput(input)

  let tokensModel: Map<Token, string> = new Map()

  try {
    let t: Token | null = faSim.nextToken()

    while (t != null) {
      let name: string = tokenNameList.get(t.id - 2)
      tokensModel.set(t, name)
      t = faSim.nextToken()
    }
  } catch (error) {
    //TODO Colocar o caracter que gerou erro
    let dummy: Token = new Token(
      -1,
      (error as LexicalError).message,
      (error as LexicalError).position
    )

    tokensModel.set(dummy, 'ERRO LÉXICO')

    console.log(error)
  }

  // console.log(tokensModel)

  // console.log('Simulação Comcluida')

  return tokensModel
}

export function lexicalTable(
  definitions: string,
  tokens: string
): string {
  let sensitive: boolean = true
  let lp: LineParser = new LineParser()
  let fa: FiniteAutomata = lp.parseFA(definitions, tokens, sensitive)

  return fa.asHTML();
}

export function syntacticSimulation(
  input: string,
  definitions: string,
  tokens: string,
  startSymbol: string, 
  grammar: string,
  parser: number,
  faSim: BasicScanner | null
): TreeNode<string> {

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  let results = new Set<string>();
  
  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });
  
  // Move a posição do Simbolo inicial da gramatica pada indice 0

  let resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  let needRebuildGram: boolean = true; // depois colocar para fora

  let mode: number = Mode.BOTH
  let sensitive: boolean = true
  let erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  let lp: LineParser = new LineParser()
  let fa: FiniteAutomata = lp.parseFA(definitions, tokens, sensitive) // depois colocar em um if se não necessita modificar


  let g: Grammar | undefined = undefined; //TODO: DEPOIS COLOCAR NA PARTE EXTERIOR


  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
      needRebuildGram = false;
      // Cria Grammar InputPane.java getGrammar (line 69)
      // Pega tokens e tranforma pelo finite automata input pane getTokens
      
      let tokensList: List<string> =  new List;

      if (mode == Mode.BOTH || mode == Mode.LEXICAL)
      {
        let tokenModelsList = fa.tokens;
        for (let i = 0 ; i < tokenModelsList.size() ; i++){
          tokensList.add(tokenModelsList.get(i));
          tokensList.add("\n");
        }
      }
      else //mode == SYNTATIC
      {
        let tknzr: string[] = tokens.split(/(\n)/g);
        tknzr.forEach(t => tokensList.add(t));
      }
      
      // Retorna InputPane getGrammar 
      // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
      let nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

      //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

      let nonTerminalDividedList: List<string> = new List();

      nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

      g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
      console.log("______________________________GRAMAR IS PARSED______________________________");
    } else {
      g = undefined; //TODO: Pegar da classe para não refazelo
    }

  // Passo 4 continua  Actions.java simulate 
  // MainWindow.java List terminals = MainWindow.getInstance().getTokens()
  let terminals: Array<string> = fa.tokens.toArray();
  
  if(g === undefined) throw new SyntaticError("Grammar is Undefined");
  
  let lrSim: LRParserSimulator | null = null;
  let ll1Sim: null = null; // LL1ParserSimulator | null = null;
  let parserResult: LRGenerator | null = null;

  switch (parser)
  {
    case Options.PARSER_REC_DESC:
    case Options.PARSER_LL:
      simulateLL(fa, g,  terminals, faSim, sensitive);
      break;
    case Options.PARSER_SLR:
    case Options.PARSER_LALR:
    case Options.PARSER_LR:
      [lrSim, faSim, parserResult] = simulateSLR(fa, g,  terminals, faSim, sensitive);
      break;  
  }

  if(parserResult === null) throw new SyntaticError("Erro na criação do Parser Sintático");

  console.log("______________Simulator Created______________");

  console.log("\n\n********* Finite Automata HTML (Lexico) *********\n\n");
  console.log(fa.asHTML());

  console.log("\n\n********* Parser HTML (Sintatico) *********\n\n");
  console.log(parserResult.tableAsHTML());

  console.log("\n\n______________Tree Creation______________\n\n");

  // Passo 5 Simula os tokens reconhecidos na operação de clique da classe SimulateWindow - método: syntClick

  let root: TreeNode<string> = new TreeNode("Derivação");

  if(faSim === null) throw new SyntaticError("Finite Automata Simulator is Null")

  faSim.setInput(input);
  
  try
  {
    if (ll1Sim != null)
    {		
      //ll1Sim.parse(faSim, root);
    }		
    else if (lrSim != null)
    {
      root = lrSim.parse(faSim, root);			
    }
  }
  catch(e)
  {
    throw e;
  }
  return root;
}


export function syntacticTable(
  definitions: string,
  tokens: string,
  startSymbol: string, 
  grammar: string,
  parser: number,
  faSim: BasicScanner | null
): string {

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  let results = new Set<string>();
  
  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });
  
  // Move a posição do Simbolo inicial da gramatica pada indice 0

  let resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  let needRebuildGram: boolean = true; // depois colocar para fora

  let mode: number = Mode.BOTH
  let sensitive: boolean = true
  let erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  let lp: LineParser = new LineParser()
  let fa: FiniteAutomata = lp.parseFA(definitions, tokens, sensitive) // depois colocar em um if se não necessita modificar


  let g: Grammar | undefined = undefined; //TODO: DEPOIS COLOCAR NA PARTE EXTERIOR


  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
      needRebuildGram = false;
      // Cria Grammar InputPane.java getGrammar (line 69)
      // Pega tokens e tranforma pelo finite automata input pane getTokens
      
      let tokensList: List<string> =  new List;

      if (mode == Mode.BOTH || mode == Mode.LEXICAL)
      {
        let tokenModelsList = fa.tokens;
        for (let i = 0 ; i < tokenModelsList.size() ; i++){
          tokensList.add(tokenModelsList.get(i));
          tokensList.add("\n");
        }
      }
      else //mode == SYNTATIC
      {
        let tknzr: string[] = tokens.split(/(\n)/g);
        tknzr.forEach(t => tokensList.add(t));
      }
      
      // Retorna InputPane getGrammar 
      // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
      let nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

      //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

      let nonTerminalDividedList: List<string> = new List();

      nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

      g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
      console.log("______________________________GRAMAR IS PARSED______________________________");
    } else {
      g = undefined; //TODO: Pegar da classe para não refazelo
    }

  // Passo 4 continua  Actions.java simulate 
  // MainWindow.java List terminals = MainWindow.getInstance().getTokens()
  let terminals: Array<string> = fa.tokens.toArray();
  
  if(g === undefined) throw new SyntaticError("Grammar is Undefined");
  
  let lrSim: LRParserSimulator | null = null;
  let ll1Sim: null = null; // LL1ParserSimulator | null = null;
  let parserResult: LRGenerator | null = null;

  switch (parser)
  {
    case Options.PARSER_REC_DESC:
    case Options.PARSER_LL:
      simulateLL(fa, g,  terminals, faSim, sensitive);
      break;
    case Options.PARSER_SLR:
    case Options.PARSER_LALR:
    case Options.PARSER_LR:
      [lrSim, faSim, parserResult] = simulateSLR(fa, g,  terminals, faSim, sensitive);
      break;  
  }

  if(parserResult === null) throw new SyntaticError("Erro na criação do Parser Sintático");

  return parserResult.tableAsHTML();
}

export function nonTerminalsFromGrammar(  startSymbol: string, grammar: string,): string{

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  let results = new Set<string>();
  
  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });
  
  // Move a posição do Simbolo inicial da gramatica pada indice 0
  
  let resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex != -1){
    const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];
    resultsArray.splice(0, 0, itemToMove);
  }else{
    resultsArray.splice(0, 0, startSymbol);
  }

  return resultsArray.join("\n");
}

function transformToken(mode: Mode, inputString: string, fa?: FiniteAutomata, ): Array<string> {
    let result: Array<string> = [];
    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {

      if(fa == undefined) throw new SyntaticError("Automato Finito é nulo.");

      let tokens = fa.tokens;
      for (let i = 0 ; i < tokens.size() ; i++)
      {
        result.push(tokens.get(i));
        result.push("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const regex = /\n|(\n)/; 
      const result: string[] = [];
      
      const tokensArray = inputString.split(regex);
      
      for (const token of tokensArray) {
          if (token.length > 0) {
              result.push(token);
          }
      }
    }
    return result;
}

function simulateLL(
  fa: FiniteAutomata, 
  g: Grammar, 
  tokenNameList: Array<string>, 
  faSim: BasicScanner | null, sensitive: boolean
  )
{	
  // lex.setEnabled(fa != null);
  // synt.setEnabled(g != null);
  
  // this.tokenNameList = tokenNameList;
  
  // let faSim: BasicScanner | null;

  if (fa != null)
  {
    faSim = new FiniteAutomataSimulator(fa, sensitive);
  }
  else
  {
    faSim = new FiniteAutomataSimulator(generateTokenListAutomata(tokenNameList, sensitive), sensitive);
  }
    
  if (g != null)
  {
    // let ll1: LLParser = new LLParser(g);
    // this.ll1Sim = new LL1ParserSimulator(ll1);
    // lrSim = null;
  }
  
  // show();
}

function simulateSLR(fa: FiniteAutomata, g: Grammar, tokenNameList: Array<string>, faSim: BasicScanner | null, sensitive: boolean)
: [LRParserSimulator, BasicScanner, LRGenerator]
{	
  console.log("___________________________simulateSLR___________________________");
  // lex.setEnabled(fa != null);
  // synt.setEnabled(g != null);
  
  // this.tokenNameList = tokenNameList;
  
  if (fa != null)
  {
    faSim = new FiniteAutomataSimulator(fa, sensitive);
  }
  else
  {
    faSim = new FiniteAutomataSimulator(generateTokenListAutomata(tokenNameList, sensitive), sensitive);
  }
  
  let lrSim;
  let parser: LRGenerator | null;
  if (g != null)
  {
    parser = LRGeneratorFactory.createGenerator(g, Options.PARSER_SLR);
    if(parser === null) throw new SyntaticError("Parser is Null");
    lrSim = new LRParserSimulator(parser);
    // console.log(parser.tableAsHTML());
  }else throw new SyntaticError("Grammar is Null");
  
  return [lrSim, faSim, parser];
  // show();
}

function generateTokenListAutomata(tokenNameList: Array<string>, sensitive: boolean): FiniteAutomata
{
  try
  {
    let ld: LexicalData = new LexicalData();
    for (let i=0; i< tokenNameList.length; i++)
    {
      let token: string = tokenNameList[i];
      ld.addToken(token, token);
    }
    ld.addIgnore("[\\ \\n\\r\\t]");
    return ld.getFA(sensitive);
  }
  catch (e)
  {
    throw e as MetaException;
  }
}