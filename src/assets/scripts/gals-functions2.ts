/*
 * Considerando a bagunça presente no gals-functions.ts, acho que vai ser
 * mais fácil organizar aquele arquivo puxando algumas funções para fora dele
 * temporariamente.
 */

import { Grammar } from './gals-lib/generator/parser/Grammar'
import { Parser } from './gals-lib/parserparser/Parser'
import { List } from './gals-lib/DataStructures'
import { LexicalError, SyntacticError } from './gals-lib/analyser/SystemErros'
import { LineParser } from './gals-lib/scannerparser/LineParser'
import { FiniteAutomata } from './gals-lib/generator/FiniteAutomata'
import { parseDefsOnTokens } from './gals-functions'

/** Funções para geração dos automatos léxicos e sintáticos */

/** parse_lexingrules
 * Gera o automato finito do lexer.
 *
 * Caso `fa` não seja undefined, será pulado sua criação.
 * Fornecer um automato existente e código-fonte de definição e/ou token
 * que difere do automato é _undefined behaviour_.
 *
 * @param definitions Código fonte das definições regulares.
 * @param tokens Código fonte dos tokens.
 * @param fa? Automato finito anterior.
 * @returns FiniteAutomata O novo automato finito.
 */
export function parse_lexingrules(
  definitions: string,
  tokens:      string,
  fa?:         FiniteAutomata
): FiniteAutomata {

  const sensitive: boolean = true;

  try {
    tokens = parseDefsOnTokens(definitions, tokens);
  } catch (error) {
    throw new LexicalError((error as LexicalError).message);
  }

  const lp: LineParser = new LineParser();

  if(fa == undefined){
    fa = lp.parseFA('', tokens, sensitive);
  }

  return fa;
}

/** parse_grammar
 * Gera o objeto Grammar que reflete a gramática.
 * @param startSymbol Símbolo inicial da gramática.
 * @param grammar Código-fonte da gramática.
 * @param fa Automato finito do lexer associado a gramática.
 * @returns Grammar a gramática.
 */
export function parse_grammar(
  startSymbol: string,
  grammar:     string,
  fa:  FiniteAutomata,
): Grammar {

  // Pega não terminais direto do grammar
  const lines   = grammar.split('\n');
  const results = new Set<string>();

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/);
    if (matches) {
      results.add(matches[0].trim());
    }
  });

  const resultsArray     = Array.from(results)
  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if(startSymbolIndex == -1)
    throw new SyntacticError("Símbolo inicial da Gramática não encontrado.");

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0];

  resultsArray.splice(0, 0, itemToMove);;

  const tokensList: List<string> =  new List;

  const tokenModelsList = fa.tokens;
  for (let i = 0 ; i < tokenModelsList.size() ; i++){
    tokensList.add(tokenModelsList.get(i));
    tokensList.add("\n");
  }

  // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
  const nonTerminalDivided:     string[]     = resultsArray;
  const nonTerminalDividedList: List<string> = new List();

  nonTerminalDivided.forEach( i => nonTerminalDividedList.add(i));

  const g = new Parser().parse(tokensList, nonTerminalDividedList, grammar);

  return g;
}

/** Funções auxíliares */

export function is_token_grammar_pair_valid(
  definitions: string,
  tokens:      string,
  startSymbol: string,
  grammar:     string,
): boolean {

  // Isso é no que da usar execções...
  try {
    const fa = parse_lexingrules(definitions, tokens, undefined);
    parse_grammar(startSymbol, grammar, fa);
  } catch (_error) {
    return false;
  }

  return true;
}

/** Modelines; ponha a sua aqui */

// kate: replace-tabs on; indent-width 2; tab-width 2;
