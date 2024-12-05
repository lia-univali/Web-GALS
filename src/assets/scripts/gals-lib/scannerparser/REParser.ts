import { Token } from '../analyser/Token'
import { Scanner } from './Scanner'
import { Node } from './Node'
import { FiniteAutomataGenerator } from './FiniteAutomataGenerator'
import { SemanticAnalyser } from './SemanticAnalyser'
import { DOLLAR } from './Constants'
import { SyntacticError } from '../analyser/SystemErros'
import { PARSER_ERROR } from './ParserConstants'
import { AnalysisError } from '../analyser/AnalysisError'

//TODO verificar o uso de ! nos atributos

export class REParser {
  private _currentToken: Token | null = null

  private _previousToken: Token | null = null

  private _scanner: Scanner | null = null

  private _semanticAnalyser: SemanticAnalyser | null = null

  public parse(str: string, gen: FiniteAutomataGenerator): Node | undefined {
    this._scanner = new Scanner(str)
    this._semanticAnalyser = new SemanticAnalyser(gen)
    this._currentToken = this._scanner.nextToken()

    if (this._currentToken == null) this._currentToken = new Token(DOLLAR, '$', 0)

    this.reg_exp_ctxt()

    if (this._currentToken.id != DOLLAR)
      throw new SyntacticError(PARSER_ERROR[DOLLAR], this._currentToken.position)

    return this._semanticAnalyser.root
  }

  private match(token: number) {
    // throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo durante comparação do REParser.')
    if (this._scanner == null) throw new AnalysisError('Scanner é nulo.')

    if (this._currentToken.id == token) {
      this._previousToken = this._currentToken

      this._currentToken = this._scanner.nextToken()

      if (this._currentToken == null) {
        let pos: number = 0

        if (this._previousToken != null) {
          pos = this._previousToken.position + this._previousToken.lexeme.length
        }

        this._currentToken = new Token(DOLLAR, '$', pos)
      }
    } else throw new SyntacticError(PARSER_ERROR[token], this._currentToken.position)
  }

  private reg_exp_ctxt() {
    // throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante reg_exp_ctxt do REParser.')

    switch (this._currentToken.id) {
      case 6: // "("
      case 8: // "["
      case 10: // "."
      case 13: // DEFINITION
      case 14: // CHAR
        this.reg_exp()
        this.context()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[15], this._currentToken.position)
    }
  }

  private reg_exp() {
    // throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante reg_exp do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 6: // "("
      case 8: // "["
      case 10: // "."
      case 13: // DEFINITION
      case 14: // CHAR
        this.exp()
        this._semanticAnalyser.executeAction(1, this._previousToken)
        this.reg_exp_c()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[16], this._currentToken.position)
    }
  }

  private reg_exp_c() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante reg_exp_c do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 1: // $
      case 7: // ")"
      case 11: // "^"
        // EPSILON
        break

      case 2: // "|"
        this.match(2) // "|"
        this.exp()
        this._semanticAnalyser.executeAction(2, this._previousToken)
        this.reg_exp_c()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[17], this._currentToken.position)
    }
  }

  private exp() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante exp do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 6: // "("
      case 8: // "["
      case 10: // "."
      case 13: // DEFINITION
      case 14: // CHAR
        this.term()
        this._semanticAnalyser.executeAction(4, this._previousToken)
        this.exp_c()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[18], this._currentToken.position)
    }
  }

  private exp_c() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante exp_c do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 1: // $
      case 2: // "|"
      case 7: // ")"
      case 11: // "^"
        // EPSILON
        break

      case 6: // "("
      case 8: // "["
      case 10: // "."
      case 13: // DEFINITION
      case 14: // CHAR
        this.term()
        this._semanticAnalyser.executeAction(5, this._previousToken)
        this.exp_c()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[19], this._currentToken.position)
    }
  }

  private context() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante context do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 1: // $
        // EPSILON
        break

      case 11: // "^"
        this.match(11) // "^"
        this.reg_exp()
        this._semanticAnalyser.executeAction(3, this._previousToken)
        break

      default:
        throw new SyntacticError(PARSER_ERROR[20], this._currentToken.position)
    }
  }

  private term() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante term do REParser.')

    switch (this._currentToken.id) {
      case 6: // "("
      case 8: // "["
      case 10: // "."
      case 13: // DEFINITION
      case 14: // CHAR
        this.factor()
        this.op()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[21], this._currentToken.position)
    }
  }

  private op() {
    //throws AnalysisError

    if (this._currentToken == null) throw new AnalysisError('Atributo Nulo durante op do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 1: // $
      case 2: // "|"
      case 6: // "("
      case 7: // ")"
      case 8: // "["
      case 10: // "."
      case 11: // "^"
      case 13: // DEFINITION
      case 14: // CHAR
        // EPSILON
        break

      case 3: // "*"
        this.match(3) // "*"
        this._semanticAnalyser.executeAction(6, this._previousToken)
        break

      case 4: // "+"
        this.match(4) // "+"
        this._semanticAnalyser.executeAction(7, this._previousToken)
        break

      case 5: // "?"
        this.match(5) // "?"
        this._semanticAnalyser.executeAction(8, this._previousToken)
        break

      default:
        throw new SyntacticError(PARSER_ERROR[22], this._currentToken.position)
    }
  }

  private factor() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante factor do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 6: // "("
        this.match(6) // "("
        this.reg_exp()
        this.match(7) // ")"
        this._semanticAnalyser.executeAction(9, this._previousToken)
        break

      case 8: // "["
        this.match(8) // "["
        this.end_class()
        break

      case 10: // "."
        this.match(10) // "."
        this._semanticAnalyser.executeAction(10, this._previousToken)
        break

      case 13: // DEFINITION
        this.match(13) // DEFINITION
        this._semanticAnalyser.executeAction(11, this._previousToken)
        break

      case 14: // CHAR
        this.match(14) // CHAR
        this._semanticAnalyser.executeAction(12, this._previousToken)
        break

      default:
        throw new SyntacticError(PARSER_ERROR[23], this._currentToken.position)
    }
  }

  private end_class() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante end_class do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 11: // "^"
        this.match(11) // "^"
        this.item()
        this.class_c()
        this.match(9) // "]"
        this._semanticAnalyser.executeAction(13, this._previousToken)
        break

      case 14: // CHAR
        this.item()
        this.class_c()
        this.match(9) // "]"
        break

      default:
        throw new SyntacticError(PARSER_ERROR[24], this._currentToken.position)
    }
  }

  private class_c() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante class_c do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 9: // "]"
        // EPSILON
        break

      case 14: // CHAR
        this.item()
        this.class_c()
        this._semanticAnalyser.executeAction(14, this._previousToken)
        break

      default:
        throw new SyntacticError(PARSER_ERROR[25], this._currentToken.position)
    }
  }

  private item() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante item do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 14: // CHAR
        this.match(14) // CHAR
        this._semanticAnalyser.executeAction(12, this._previousToken)
        this.end_interval()
        break

      default:
        throw new SyntacticError(PARSER_ERROR[26], this._currentToken.position)
    }
  }

  private end_interval() {
    //throws AnalysisError

    if (this._currentToken == null)
      throw new AnalysisError('Atributo Nulo durante end_interval do REParser.')
    if (this._semanticAnalyser == null) throw new AnalysisError('Analisador Semântico é nulo.')

    switch (this._currentToken.id) {
      case 9: // "]"
      case 14: // CHAR
        // EPSILON
        break

      case 12: // "-"
        this.match(12) // "-"
        this.match(14) // CHAR
        this._semanticAnalyser.executeAction(15, this._previousToken)
        break

      default:
        throw new SyntacticError(PARSER_ERROR[27], this._currentToken.position)
    }
  }
}
