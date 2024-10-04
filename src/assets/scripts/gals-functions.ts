//npm start
//node ./dist/main.js
import TreeMap from 'ts-treemap'
import { List, TreeNode } from './gals-lib/DataStructures'
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
import type { BasicScanner } from './gals-lib/simulator/BasicScanner'
import { FiniteAutomataSimulator } from './gals-lib/simulator/FiniteAutomataSimulator'
import { LRParserSimulator } from './gals-lib/simulator/LRParserSimulator'
import { MetaException } from './gals-lib/util/MetaException'
import { JavaCommonGenerator } from './gals-lib/generator/java/JavaCommonGenerator'
import { JavaScannerGenerator } from './gals-lib/generator/java/JavaScannerGenerator'
import { JavaParserGenerator } from './gals-lib/generator/java/JavaParserGenerator'
import { CppCommomGenerator } from './gals-lib/generator/cpp/CppCommomGenerator'
import { CppScannerGeneretor } from './gals-lib/generator/cpp/CppScannerGeneretor'
import { CppParserGenerator } from './gals-lib/generator/cpp/CppParserGenerator'
import { DelphiCommomGenerator } from './gals-lib/generator/delphi/DelphiCommomGenerator'
import { DelphiScannerGenerator } from './gals-lib/generator/delphi/DelphiScannerGenerator'
import { DelphiParserGenerator } from './gals-lib/generator/delphi/DelphiParserGenerator'
import { LL1ParserSimulator } from './gals-lib/simulator/LL1ParserSimulator'
import { LLParser } from './gals-lib/generator/parser/ll/LLParser'

enum Mode {
  LEXICAL,
  SYNTATIC,
  BOTH
}

function parseDefsOnTokens(def: string, tok: string): string{
  const tknzr: string[] = def.split('\n').filter(Boolean)
  const defTermo : Map<string, string> = new Map()

  for (let line of tknzr) {
    line = line.trim();
    const termo = line.split(':').filter(Boolean);

    // Reuso de uma Definição Regular em outra Definição
    let defExpression : string = termo[1].trim()
    const existentDefs = defExpression.match(/{[a-zA-Z_][a-zA-Z0-9_]*}/g)
    if(existentDefs !== null) {
      for(const exDef of existentDefs) {
        if( !defTermo.has(exDef) ) {
          throw new LexicalError(`Definições Regulares: A definição ${exDef} usada em '${line}' não existe.`);
        } else {
          // @ts-expect-error: Object is possibly 'null'.
          defExpression = defExpression.replace(exDef, defTermo.get(exDef))
        }
      }
    }
    
    defTermo.set('{' + termo[0].trim() + '}', defExpression)
  }


  for (const [key, value] of defTermo.entries()) {
    const regex = new RegExp(key, "g");
    tok = tok.replace(regex, value)
  }

  return tok;
}

export function lexicalSimulation(
  input: string,
  definitions: string,
  tokens: string,
  fa?: FiniteAutomata
): Map<Token, string> {
  const mode: number = Mode.LEXICAL

  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message);
  }


  const sensitive: boolean = true

  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()
  
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 2 - Obter lista de tokens - a partir do automato finito gerado no passo 1 - método getTokens da classe InputPane - linha 113
  const result: List<string> = new List()

  if (mode != Mode.SYNTATIC) {
    const tokens: List<string> = fa.tokens // Aqui é o automômato gerado no passo 1

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
  const tokensNoLine: List<string> = result //Passo 2 result linha 24 //inPane.getTokens();
  while (tokensNoLine.remove('\n'));

  // Ele passa a chamar a lista de tokens de: "terminals" na Classe Actions e "tokenNameList" na SimulateWindow
  // Passo 5 - Se gerar o autômato pela classe LexicalData, o código é o seguinte:
  function generateTokenListAutomata(scannerCaseSensitive: boolean): FiniteAutomata | null {
    try {
      const ld: LexicalData = new LexicalData()
      for (let i = 0; i < tokenNameList.size(); i++) {
        const tokenPivot: string = tokenNameList.get(i)
        ld.addToken(tokenPivot, tokenPivot)
      }

      ld.addIgnore('[\\ \\n\\r\\t]')

      return ld.getFA(scannerCaseSensitive)
    } catch (
      error //MetaException
      ) {
      console.warn(error)
      return null
    }
  }

  // Passo 4 - Cria o Simulador de Autômato Finito na classe SimulateWindow - linha 146 ou linha 159
  const tokenNameList = tokensNoLine // getTokens passo 3 tokenNameList;
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

  const tokensModel: Map<Token, string> = new Map()

  try {
    let t: Token | null = faSim.nextToken()

    while (t != null) {
      const name: string = tokenNameList.get(t.id - 2)
      tokensModel.set(t, name)
      t = faSim.nextToken()
    }
  } catch (error) {
    //TODO Colocar o caracter que gerou erro
    const dummy: Token = new Token(
      -1,
      (error as LexicalError).message,
      (error as LexicalError).position
    )

    tokensModel.set(dummy, 'ERRO LÉXICO')

    console.warn(error)
  }

  // //console.log(tokensModel)

  // //console.log('Simulação Comcluida')

  return tokensModel
}

export function lexicalTable(
  definitions: string,
  tokens: string,
  fa?: FiniteAutomata
): string {

  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message)
  }

  const sensitive: boolean = true
  const lp: LineParser = new LineParser()
  
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  return fa.asHTML();
}

export function syntacticSimulation(
  input: string,
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string,
  parser: number,
  needRebuildGram: boolean,
  faSim?: BasicScanner,
  fa?: FiniteAutomata,
  g?: Grammar
): [TreeNode<string>, Grammar] {

  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error)
    throw new LexicalError((error as LexicalError).message)
  }

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  const mode: number = Mode.BOTH
  const sensitive: boolean = true
  //const erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()
  
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
    needRebuildGram = false;
    // Cria Grammar InputPane.java getGrammar (line 69)
    // Pega tokens e tranforma pelo finite automata input pane getTokens

    const tokensList: List<string> =  new List;

    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {
      const tokenModelsList = fa.tokens;
      for (let i = 0 ; i < tokenModelsList.size() ; i++){
        tokensList.add(tokenModelsList.get(i));
        tokensList.add("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const tknzr: string[] = tokens.split(/(\n)/g);
      tknzr.forEach(t => tokensList.add(t));
    }

    // Retorna InputPane getGrammar
    // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
    const nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

    //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

    const nonTerminalDividedList: List<string> = new List();

    nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

    g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
    // //console.log("______________________________GRAMAR IS PARSED______________________________");
  }

  // Passo 4 continua  Actions.java simulate
  // MainWindow.java List terminals = MainWindow.getInstance().getTokens()
  const terminals: Array<string> = fa.tokens.toArray();

  if(g === undefined) throw new SyntaticError("Grammar is Undefined");

  let lrSim: LRParserSimulator | null = null;
  let ll1Sim: LL1ParserSimulator | null = null;
  let parserResult: LRGenerator | null = null;
  let parserResultLL: LLParser | null = null;

  switch (parser)
  {
    case Options.PARSER_REC_DESC:
    case Options.PARSER_LL:
      [ll1Sim, faSim, parserResultLL] = simulateLL(fa, g,  terminals, faSim, sensitive);
      break;
    case Options.PARSER_SLR:
    case Options.PARSER_LALR:
    case Options.PARSER_LR:
      [lrSim, faSim, parserResult] = simulateLR(fa, g,  terminals, faSim, sensitive, parser);
      break;
  }

  if(parserResult === null && parserResultLL === null) throw new SyntaticError("Erro na criação do Parser Sintático");

  // //console.log("______________Simulator Created______________");

  // //console.log("\n\n********* Finite Automata HTML (Lexico) *********\n\n");
  // //console.log(fa.asHTML());

  // //console.log("\n\n********* Parser HTML (Sintatico) *********\n\n");
  // //console.log(parserResult.tableAsHTML());

  // //console.log("\n\n______________Tree Creation______________\n\n");

  // Passo 5 Simula os tokens reconhecidos na operação de clique da classe SimulateWindow - método: syntClick

  let root: TreeNode<string> = new TreeNode("Derivação");

  if(faSim === undefined) throw new SyntaticError("Finite Automata Simulator is Null")

  faSim.setInput(input);

  if (ll1Sim != null)
  {
    root = ll1Sim.parse(faSim, root);
  }
  else if (lrSim != null)
  {
    root = lrSim.parse(faSim, root);
  }

  return [root, g] ;
}

export function syntacticTable(
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string,
  parser: number,
  needRebuildGram: boolean,
  fa?: FiniteAutomata,
  g?: Grammar
): [string, Grammar] {

  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message)
  }

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  const mode: number = Mode.BOTH
  const sensitive: boolean = true
  //const erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()
  
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
    needRebuildGram = false;
    // Cria Grammar InputPane.java getGrammar (line 69)
    // Pega tokens e tranforma pelo finite automata input pane getTokens

    const tokensList: List<string> =  new List;

    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {
      const tokenModelsList = fa.tokens;
      for (let i = 0 ; i < tokenModelsList.size() ; i++){
        tokensList.add(tokenModelsList.get(i));
        tokensList.add("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const tknzr: string[] = tokens.split(/(\n)/g);
      tknzr.forEach(t => tokensList.add(t));
    }

    // Retorna InputPane getGrammar
    // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
    const nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

    //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

    const nonTerminalDividedList: List<string> = new List();

    nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

    g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
    // //console.log("______________________________GRAMAR IS PARSED______________________________");
  }

  if(g === undefined) throw new SyntaticError("Grammar is Undefined");

  let parserResultLR: LRGenerator | null = null;
  let parserResultLL: LLParser | null = null;

  switch (parser)
  {
    case Options.PARSER_REC_DESC:
    case Options.PARSER_LL:
      parserResultLL = new LLParser(g);
      break;
    case Options.PARSER_SLR:
    case Options.PARSER_LALR:
    case Options.PARSER_LR:
      parserResultLR = LRGeneratorFactory.createGenerator(g, parser);
      break;
  }

  if(parserResultLR !== null)
    return [parserResultLR.tableAsHTML(), g];
  else if(parserResultLL !== null)
    return [parserResultLL.tableAsHTML(), g];
  else throw new SyntaticError("Erro na criação do Parser Sintático");
}

export function syntacticSetTable(
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string,
  parser: number,
  needRebuildGram: boolean,
  fa?: FiniteAutomata,
  g?: Grammar
): [string, Grammar] {
  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message)
  }

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  const mode: number = Mode.BOTH
  const sensitive: boolean = true
  //const erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()
  
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
    needRebuildGram = false;
    // Cria Grammar InputPane.java getGrammar (line 69)
    // Pega tokens e tranforma pelo finite automata input pane getTokens

    const tokensList: List<string> =  new List;

    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {
      const tokenModelsList = fa.tokens;
      for (let i = 0 ; i < tokenModelsList.size() ; i++){
        tokensList.add(tokenModelsList.get(i));
        tokensList.add("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const tknzr: string[] = tokens.split(/(\n)/g);
      tknzr.forEach(t => tokensList.add(t));
    }

    // Retorna InputPane getGrammar
    // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
    const nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

    //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

    const nonTerminalDividedList: List<string> = new List();

    nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

    g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
    // //console.log("______________________________GRAMAR IS PARSED______________________________");
  }

  if(g === undefined) throw new SyntaticError("Grammar is Undefined");

  let parserResultLR: LRGenerator | null = null;
  let parserResultLL: LLParser | null = null;

  switch (parser)
  {
    case Options.PARSER_REC_DESC:
    case Options.PARSER_LL:
      parserResultLL = new LLParser(g);
      break;
    case Options.PARSER_SLR:
    case Options.PARSER_LALR:
    case Options.PARSER_LR:
      parserResultLR = LRGeneratorFactory.createGenerator(g, parser);
      break;
  }

  if(parserResultLR === null && parserResultLL === null) throw new SyntaticError("Erro na criação do Parser Sintático");

  if(parserResultLR != null)
    return [parserResultLR.itemsAsHTML(), g];
  if(parserResultLL != null)
    return [parserResultLL.tableAsHTML(), g];

  return ['ERROR', g]
}

export function syntacticFirstFollowTable(
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string,
  parser: number,
  needRebuildGram: boolean,
  fa?: FiniteAutomata,
  g?: Grammar
): [string, Grammar]{
  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message)
  }

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  const mode: number = Mode.BOTH
  const sensitive: boolean = true
  //const erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()
  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
    needRebuildGram = false;
    // Cria Grammar InputPane.java getGrammar (line 69)
    // Pega tokens e tranforma pelo finite automata input pane getTokens

    const tokensList: List<string> =  new List;

    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {
      const tokenModelsList = fa.tokens;
      for (let i = 0 ; i < tokenModelsList.size() ; i++){
        tokensList.add(tokenModelsList.get(i));
        tokensList.add("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const tknzr: string[] = tokens.split(/(\n)/g);
      tknzr.forEach(t => tokensList.add(t));
    }

    // Retorna InputPane getGrammar
    // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
    const nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

    //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

    const nonTerminalDividedList: List<string> = new List();

    nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

    g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
    // //console.log("______________________________GRAMAR IS PARSED______________________________");
  }

  // Passo 4 continua  Actions.java simulate
  // MainWindow.java List terminals = MainWindow.getInstance().getTokens()
  fa.tokens.toArray();

  if(g === undefined) throw new SyntaticError("Grammar is Undefined");

  return [g.ffAsHTML(), g];
}


export function nonTerminalsFromGrammar(  startSymbol: string, grammar: string,): string{

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex != -1){
    const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];
    resultsArray.splice(0, 0, itemToMove);
  }else{
    resultsArray.splice(0, 0, startSymbol);
  }

  return resultsArray.join("\n");
}

export function generateCode(
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string,
  options:Options,
  needRebuildGram: boolean,
  fa?: FiniteAutomata,
  g?: Grammar): [TreeMap<string, string>, Grammar] {

  try {
    tokens = parseDefsOnTokens(definitions, tokens)
    definitions = ''
  } catch (error) {
    console.warn(error);
    throw new LexicalError((error as LexicalError).message)
  }

  // Pega não terminais direto do grammar
  const lines = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  // Move a posição do Simbolo inicial da gramatica pada indice 0

  const resultsArray = Array.from(results)

  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1) throw new SyntaticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);

  //Instanciação inicial
  //let nonTerminal: string = "";

  const mode: number = Mode.BOTH
  const sensitive: boolean = true
  //const erroLog: ErrorLog = ErrorLog.Instance

  //Passo 0 - Utiliza a ação simulate da Actions.java (line 276)
  //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
  const lp: LineParser = new LineParser()

  if(fa == undefined){
    fa = lp.parseFA(definitions, tokens, sensitive)
  }

  // Passo 3 - Pega grammatica da MainWindow.java getGrammar
  if (needRebuildGram || g == undefined){
    needRebuildGram = false;
    // Cria Grammar InputPane.java getGrammar (line 69)
    // Pega tokens e tranforma pelo finite automata input pane getTokens

    const tokensList: List<string> =  new List;

    if (mode == Mode.BOTH || mode == Mode.LEXICAL)
    {
      const tokenModelsList = fa.tokens;
      for (let i = 0 ; i < tokenModelsList.size() ; i++){
        tokensList.add(tokenModelsList.get(i));
        tokensList.add("\n");
      }
    }
    else //mode == SYNTATIC
    {
      const tknzr: string[] = tokens.split(/(\n)/g);
      tknzr.forEach(t => tokensList.add(t));
    }

    // Retorna InputPane getGrammar
    // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
    const nonTerminalDivided: string[] = resultsArray;// nonTerminal.split(/(\n)/g);

    //tokensList.toArray().forEach( token => nonTerminalDivided.push(token));

    const nonTerminalDividedList: List<string> = new List();

    nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

    g = new Parser().parse(tokensList, nonTerminalDividedList, grammar); //
    // //console.log("______________________________GRAMAR IS PARSED______________________________");
  }

  // Passo 4 continua  Actions.java simulate 
  // MainWindow.java List terminals = MainWindow.getInstance().getTokens()
  fa.tokens.toArray();

  if(g === undefined) throw new SyntaticError("Grammar is Undefined");

  // Produção de codigo
  const allFiles: TreeMap<string, string> = new TreeMap();

  switch (options.language)
  {
    case Options.LANG_JAVA:
      allFiles.setAll( new JavaCommonGenerator().generate(fa, g, options) );
      allFiles.setAll( new JavaScannerGenerator().generate(fa, options) );
      allFiles.setAll( new JavaParserGenerator().generate(g, options));
      break;
    case Options.LANG_CPP:
      allFiles.setAll( new CppCommomGenerator().generate(fa, g, options) );
      allFiles.setAll( new CppScannerGeneretor().generate(fa, options) );
      allFiles.setAll( new CppParserGenerator().generate(g, options) );
      break;
    case Options.LANG_DELPHI:
      allFiles.setAll( new DelphiCommomGenerator().generate(fa, g, options) );
      allFiles.setAll( new DelphiScannerGenerator().generate(fa, options) );
      allFiles.setAll( new DelphiParserGenerator().generate(g, options));
      break;
  }

  return [allFiles, g];
}

// function transformToken(mode: Mode, inputString: string, fa?: FiniteAutomata, ): Array<string> {
//   const result: Array<string> = [];
//   if (mode == Mode.BOTH || mode == Mode.LEXICAL)
//   {
//
//     if(fa == undefined) throw new SyntaticError("Automato Finito é nulo.");
//
//     const tokens = fa.tokens;
//     for (let i = 0 ; i < tokens.size() ; i++)
//     {
//       result.push(tokens.get(i));
//       result.push("\n");
//     }
//   }
//   else //mode == SYNTATIC
//   {
//     const regex = /\n|(\n)/;
//     const result: string[] = [];
//
//     const tokensArray = inputString.split(regex);
//
//     for (const token of tokensArray) {
//       if (token.length > 0) {
//         result.push(token);
//       }
//     }
//   }
//   return result;
// }

function simulateLL(
  fa: FiniteAutomata,
  g: Grammar,
  tokenNameList: Array<string>,
  faSim: BasicScanner | undefined, 
  sensitive: boolean
): [LL1ParserSimulator, BasicScanner, LLParser]
{
  if (fa != undefined)
  {
    faSim = new FiniteAutomataSimulator(fa, sensitive);
  }
  else
  {
    faSim = new FiniteAutomataSimulator(generateTokenListAutomata(tokenNameList, sensitive), sensitive);
  }

  let llSim;
  let parser: LLParser | null;
  if (g != null)
  {
    parser = new LLParser(g);
    if(parser === null) throw new SyntaticError("Parser is Null");
    llSim = new LL1ParserSimulator(parser);
    // //console.log(parser.tableAsHTML());
  }else throw new SyntaticError("Grammar is Null");

  return [llSim, faSim, parser];
}

function simulateLR(fa: FiniteAutomata, g: Grammar, tokenNameList: Array<string>, faSim: BasicScanner | undefined, sensitive: boolean, parserEnum: number)
  : [LRParserSimulator, BasicScanner, LRGenerator]
{
  // //console.log("___________________________simulateSLR___________________________");
  // lex.setEnabled(fa != null);
  // synt.setEnabled(g != null);

  // this.tokenNameList = tokenNameList;

  if (fa != undefined)
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
    parser = LRGeneratorFactory.createGenerator(g, parserEnum);
    if(parser === null) throw new SyntaticError("Parser is Null");
    lrSim = new LRParserSimulator(parser);
    // //console.log(parser.tableAsHTML());
  }else throw new SyntaticError("Grammar is Null");

  return [lrSim, faSim, parser];
  // show();
}

function generateTokenListAutomata(tokenNameList: Array<string>, sensitive: boolean): FiniteAutomata
{
  try
  {
    const ld: LexicalData = new LexicalData();
    for (let i=0; i< tokenNameList.length; i++)
    {
      const token: string = tokenNameList[i];
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