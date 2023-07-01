import HashMap from 'hashmap'
import { List } from '../../DataStructures'
import { Token } from '../../analyser/Token'
import { FiniteAutomata } from '../FiniteAutomata'
import { REParser } from '../../scannerparser/REParser'
import { FiniteAutomataGenerator } from '../../scannerparser/FiniteAutomataGenerator'
import { MetaException } from '../../util/MetaException'
import { AnalysisError } from '../../analyser/AnalysisError'
import { Node } from '../../scannerparser/Node'

class SpecialCaseValue {
  // Using static in the original code

  private _lexeme: string

  private _base: string

  constructor(lexeme: string, base: string) {
    this._lexeme = lexeme

    this._base = base
  }

  public get lexeme(): string {
    return this._lexeme
  }

  public get base(): string {
    return this._base
  }
}

export class LexicalData {
  private _expressionFor: Map<string | null, string> = new Map<string | null, string>()

  private _specialCasesValues: Map<string | null, SpecialCaseValue> = new Map<
    string | null,
    SpecialCaseValue
  >()

  private _definitions: List<string> = new List<string>()

  private _tokens: List<string> = new List<string>()

  private _specialCases: List<string> = new List<string>()

  private _ignore: string = ''

  public addDefinition(token: string, expression: string) {
    this._definitions.add(token)
    this._expressionFor.set(token, expression)
  }

  public addToken(token: string, expression: string) {
    this._tokens.add(token)
    this._expressionFor.set(token, expression)
  }

  public clear() {
    this._definitions.clear
    this._tokens.clear
    this._specialCases.clear
    this._expressionFor.clear
    this._specialCasesValues.clear
  }

  public expressionFor(token: string) {
    return this._expressionFor.get(token)
  }

  public get tokens(): List<string> {
    return this._tokens
  }

  public get definitions(): List<string> {
    return this._definitions
  }

  public get specialCases(): List<string> {
    return this._specialCases
  }

  public get ignore(): string {
    return this._ignore
  }

  public addIgnore(ignore: string) {
    if (this._ignore.length > 0) this._ignore = this.ignore + '|' + ignore
    else this._ignore = ignore
  }

  public addSpecialCase(name: string, value: string, base: string) {
    this._specialCases.add(name)
    this._specialCasesValues.set(name, new SpecialCaseValue(value, base))
  }

  public getSpecialCaseValue(name: string): SpecialCaseValue | undefined {
    return this._specialCasesValues.get(name)
  }

  public getFA(scannerCaseSensitive: boolean): FiniteAutomata {
    let parser: REParser = new REParser()
    let gen: FiniteAutomataGenerator = new FiniteAutomataGenerator(scannerCaseSensitive)

    let i: number = -1

    try {
      for (i = 0; i < this._definitions.size(); i++) {
        let expression: string | undefined = this.expressionFor(this._definitions.get(i))
        if (expression == undefined) throw new AnalysisError('Expressão de Definições vazia.')

        let n: Node | undefined = parser.parse(expression, gen)
        if (n == undefined) throw new AnalysisError('Erro no Parse do Automata Finito.')

        gen.addDefinition(this._definitions.get(i), n)
      }
    } catch (error) {
      throw new MetaException(MetaException.Mode.DEFINITION, i, error as AnalysisError)
    }

    try {
      for (i = 0; i < this._tokens.size(); i++) {
        let expression: string | undefined = this.expressionFor(this._tokens.get(i))
        if (expression == undefined) throw new AnalysisError('Expressão de Token vazia.')

        let n: Node | undefined = parser.parse(expression, gen)
        if (n == undefined) throw new AnalysisError('Erro no Parse do Automata Finito.')

        gen.addExpression(this._tokens.get(i), n, true)
      }
    } catch (error) {
      throw new MetaException(MetaException.Mode.TOKEN, i, error as AnalysisError)
    }

    try {
      for (i = 0; i < this._specialCases.size(); i++) {
        let t: string = this._specialCases.get(i)

        let v: SpecialCaseValue | undefined = this._specialCasesValues.get(t)
        if (v == undefined) throw new AnalysisError('Valor do Caso Especial vazio.')

        gen.addSpecialCase(t, v.base, v.lexeme)
      }
    } catch (error) {
      throw new MetaException(MetaException.Mode.TOKEN, i, error as AnalysisError)
    }

    try {
      if (this._ignore.length > 0) {
        let n: Node | undefined = parser.parse(this._ignore, gen)
        if (n == undefined) throw new AnalysisError('Nó ignorado vazio.')

        gen.addIgnore(n, true)
      }
    } catch (error) {
      throw new MetaException(MetaException.Mode.TOKEN, this._tokens.size(), error as AnalysisError)
    }

    try {
      let fa: FiniteAutomata | null = gen.generateAutomata()
      if (fa == null) throw new AnalysisError('Erro ao criar Autômato Finito.')

      return fa
    } catch (error) {
      throw new MetaException(MetaException.Mode.TOKEN, this._tokens.size(), error as AnalysisError)
    }
  }
}
