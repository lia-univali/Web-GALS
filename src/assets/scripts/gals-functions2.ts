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
import { Diagram, Choice, Sequence, NonTerminal, Terminal, Comment, Stack } from '@/vendor/railroad.js'


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
  tokens: string,
  fa?: FiniteAutomata
): FiniteAutomata {
  const sensitive: boolean = true


  try {
    tokens = parseDefsOnTokens(definitions, tokens)
  } catch (error) {
    throw new LexicalError((error as LexicalError).message)
  }


  const lp: LineParser = new LineParser()

  if (fa == undefined) {
    fa = lp.parseFA('', tokens, sensitive)
  }

  return fa
}

export function parse_nonterminals_from_grammar_string(startSymbol: string, grammar: string): List<string> {
  // Pega não terminais direto do grammar
  const lines = grammar.split('\n')
  const results = new Set<string>()

  lines.forEach((line) => {
    const matches = line.match(/^[^:]+(?=\s*::=)/)
    if (matches) {
      results.add(matches[0].trim())
    }
  })

  const resultsArray = Array.from(results)
  const startSymbolIndex = resultsArray.indexOf(startSymbol.trim())

  if (startSymbolIndex == -1)
    throw new SyntacticError('Símbolo inicial da Gramática não encontrado.')

  const itemToMove = resultsArray.splice(startSymbolIndex, 1)[0]

  resultsArray.splice(0, 0, itemToMove)

  // TODO: RETIRAR OS NÃO TERMINAIS DIRETO DA GRAMATICA
  const nonTerminalDivided: string[] = resultsArray
  const nonTerminalDividedList: List<string> = new List()

  nonTerminalDivided.forEach((i) => nonTerminalDividedList.add(i))

  return nonTerminalDividedList;
}

/** parse_grammar
 * Gera o objeto Grammar que reflete a gramática.
 * @param startSymbol Símbolo inicial da gramática.
 * @param grammar Código-fonte da gramática.
 * @param fa Automato finito do lexer associado a gramática.
 * @returns Grammar a gramática.
 */
export function parse_grammar(startSymbol: string, grammar: string, fa: FiniteAutomata): Grammar {

  const nonTerminalDividedList = parse_nonterminals_from_grammar_string(startSymbol, grammar);
  const tokensList: List<string> = new List()

  const tokenModelsList = fa.tokens
  for (let i = 0; i < tokenModelsList.size(); i++) {
    tokensList.add(tokenModelsList.get(i))
    tokensList.add('\n')
  }

  const g = new Parser().parse(tokensList, nonTerminalDividedList, grammar)

  return g
}

/** Funções para a visualização do grafo sintático */

const MAKE_DIAGRAM_HORIZONTAL_SEQUENCE_BREAK_LEN:    number = 5;
const MAKE_DIAGRAM_HORIZONTAL_SEQUENCE_GROUPING_LEN: number = 3;

// https://stackoverflow.com/questions/8495687/split-array-into-chunks#comment126404349_55435856
function* chunks(arr: any, n: any): any {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

/** generate_syntactic_graph_svg
 * Cria o diagrama sintático SVG da produção especificada.
 * @param prod_to_process A produção a ser processada. Deve ser o texto do nome da produção, entre angle-brackets, eg.: "<scope>".
 * @param grammar A gramatica no qual a produção esta associada.
 * @returns A imagem SVG.
 */
export function generate_syntactic_graph_svg(
  prod_to_process: string,
  grammar:         Grammar,
  makelinks:       boolean = false,
): SVGSVGElement {

  prod_to_process = prod_to_process.trim()

  let name_to_id_map: { [key: string]: number } = {}
  let unique_lens:    { [key: number]: number } = {}
  let unique_indices: { [key: number]: number } = {}
  {
    let copy_of_productions = [...grammar.productions]

    let last_seen = -1
    let last_len = 0
    let last_index = 0

    const unique_productions = copy_of_productions.filter((p) => {
      if (p.get_lhs() != last_seen) {
        unique_lens[last_seen] = last_len
        unique_indices[last_seen] = last_index
        last_seen = p.get_lhs()
        last_index += last_len
        last_len = 1
        return true
      } else {
        last_len++
        return false
      }
    })

    unique_lens[last_seen] = last_len
    unique_indices[last_seen] = last_index

    let index = 0

    for (let nt of grammar.nonTerminals) {
      name_to_id_map[nt] = unique_productions[index++].get_lhs()
    }

    index = 2
    for (let tt of grammar.terminals) {
      name_to_id_map[tt] = index++
    }
  }

  const prodid = name_to_id_map[prod_to_process]

  if (prodid == undefined) {
    throw new Error('PRODID UNDEFINED')
  }

  let sequences = []

  for (let i = 0; i < unique_lens[prodid]; i++) {
    let real_i = unique_indices[prodid] + i
    let sequence = []
    const prodseq = grammar.productions.get(real_i).get_rhs()
    for (let psi of prodseq) {
      if (psi >= grammar.FIRST_SEMANTIC_ACTION()) {
        sequence.push(new Comment(`#${psi - grammar.FIRST_SEMANTIC_ACTION()}`))
      } else if (psi >= grammar.FIRST_NON_TERMINAL) {
        if (makelinks) {
          sequence.push(new NonTerminal(grammar.symbols[psi], { href: `#${grammar.symbols[psi]}` }))
        } else {
          sequence.push(new NonTerminal(grammar.symbols[psi]))
        }
      } else {
        sequence.push(new Terminal(grammar.symbols[psi]))
      }
    }
    if (sequence.length == 0) {
      sequences.push(new Terminal('ε'))
    } else {
      if (sequence.length <= MAKE_DIAGRAM_HORIZONTAL_SEQUENCE_BREAK_LEN) {
        sequences.push(new Sequence(...sequence))
      } else {
        let newseq = []
        for (let sqch of chunks(sequence, MAKE_DIAGRAM_HORIZONTAL_SEQUENCE_GROUPING_LEN)) {
          newseq.push(new Sequence(...sqch));
        }
        sequences.push(new Stack(...newseq))
      }
    }
  }

  const rootChoice = new Choice(Math.trunc(sequences.length / 2), ...sequences)

  return new Diagram(rootChoice).toSVG();
}

/** Funções auxíliares */

export function is_token_grammar_pair_valid(
  definitions: string,
  tokens: string,
  startSymbol: string,
  grammar: string
): boolean {
  // Isso é no que da usar execções...
  try {
    const fa = parse_lexingrules(definitions, tokens, undefined)
    parse_grammar(startSymbol, grammar, fa)
  } catch (_error) {
    return false
  }

  return true
}

/** Modelines; ponha a sua aqui */

// kate: replace-tabs on; indent-width 2; tab-width 2;
