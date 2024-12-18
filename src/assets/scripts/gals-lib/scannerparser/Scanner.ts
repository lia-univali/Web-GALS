import { Token } from '../analyser/Token'
import type { BasicScanner } from '../simulator/BasicScanner'
import { LexicalError } from '../analyser/SystemErros'
import {
  CHAR,
  UNION,
  CLOSURE,
  CLOSURE_OB,
  OPTIONAL,
  PARENTHESIS_OPEN,
  PARENTHESIS_CLOSE,
  BRACKETS_OPEN,
  BRACKETS_CLOSE,
  COMPLEMENT,
  ALL,
  INTERVAL,
  DEFINITION
} from './Constants'

export class Scanner implements BasicScanner {
  private _in: string = ''

  private _pos: number = 0

  private _quote: boolean = false

  public constructor(str?: string) {
    if (str == undefined) {
      this.setInput('')
    } else {
      this.setInput(str)
    }
  }

  setInput(text: string): void {
    this._in = text
    this._pos = 0
  }

  public get position(): number {
    return this._pos
  }

  nextToken(): Token | null {
    let start = this._pos

    while (this.hasMoreChars()) {
      start = this._pos

      let c: string = this.nextChar();

      if (this._quote) {
        if (c == '"') {
          if (this.hasMoreChars()) {
            c = this.nextChar()

            if (c == '"') return new Token(CHAR, '"', this._pos - 2)
            else this._pos--
          }

          this._quote = false

          continue
        } else return this.createToken(CHAR, '' + c)
      }
      switch (c) {
        case ' ':
        case '\n':
        case '\r':
        case '\t':
          continue

        case '"':
          this._quote = true
          continue

        case '|': return this.createToken(UNION, '|');
        case '*': return this.createToken(CLOSURE, '*');
        case '+': return this.createToken(CLOSURE_OB, '+');
        case '?': return this.createToken(OPTIONAL, '?');
        case '(': return this.createToken(PARENTHESIS_OPEN, '(');
        case ')': return this.createToken(PARENTHESIS_CLOSE, ')');
        case '[': return this.createToken(BRACKETS_OPEN, '[');
        case ']': return this.createToken(BRACKETS_CLOSE, ']');
        case '^': return this.createToken(COMPLEMENT, '^');
        case '.': return this.createToken(ALL, '.');
        case '-': return this.createToken(INTERVAL, '-');
        case '\\':return this.processesAdvChar(); // Escaped char to process
        case '{': return this.processesDefinition();

        default: return this.createToken(CHAR, '' + c); // Normal char
      }
    }

    if (this._quote) {
      throw new LexicalError("Era esperado '\"'", start)
    }

    return null
  }

  private processesAdvChar(): Token {
    return new Token(CHAR, '' + this.getSpecialChar(), this._pos - 1)
  }

  public createToken(id: number, lexeme: string): Token {
    return new Token(id, lexeme, this._pos - 1)
  }

  /**

	 * Extrai o caracter especial de uma combinação de character especial

	 * */
  private getSpecialChar(): string | null {
    const start = this._pos

    if (!this.hasMoreChars) throw new LexicalError('Era esperado um Caracter Especial', start)

    const c: string = this.nextChar()

    switch (c) {
      case 'b': return '\b'; // BACKSPACE
      case 'n': return '\n'; // LINE FEED
      case 'f': return '\f'; // FORM FEED
      case 'r': return '\r'; // CARRIAGE RETURN
      case 'e': return String.fromCharCode(27); // SCAPE
      case 't': return '\t'; // TAB
      case '\t':return '\t'; // TAB
      case 's': return ' ';  // SPACE

      case ' ': return ' '; // SPACE
      case '"': return '"'; // DOUBLE QUOTE
      case '\\':return '\\';// BACKSLASH
      case '|': return '|'; // PIPE
      case '*': return '*'; // ASTERISK
      case '+': return '+'; // PLUS
      case '?': return '?'; // QUESTION MARK
      case '(': return '('; // OPEN PARENTHESES | OPEN ROUND BRACKETS
      case ')': return ')'; // CLOSE PARENTHESES | CLOSE ROUND BRACKETS
      case '{': return '{'; // OPEN CURLY BRACKET
      case '}': return '}'; // CLOSE CURLY BRACKET
      case '[': return '['; // OPEN SQUARE BRACKET
      case ']': return ']'; // CLOSE SQUARE BRACKET
      case '.': return '.'; // DOT | PERIOD
      case '^': return '^'; // CARET
      case '-': return '-'; // EN DASH | HYPHEN

      default:
        if (this.isNumber(c)) return this.getCharByCode(c)
        else throw new LexicalError("Caracter especial inválido: '" + c + "'", this._pos)
    }
  }

  private getCharByCode(c: string): string | null {
    // 'c' eh um digito de certeza

    const start: number = this._pos - 1

    if (this.hasMoreChars() && this.isNumber(this.nextChar())) { // 2o char
      if (this.hasMoreChars() && !this.isNumber(this.nextChar())) { //3o char
        this._pos--
      }
    }
    //else { // REVIEW: Bug de parse code ASCII (exemplo: \97) - TESTAR
    //  this._pos--
    //}

    const n: string = this._in.substring(start, this._pos)
    const value : number = parseInt(n,10)
    if (value > 255) throw new LexicalError('Valor decimal inválido (>255)', start)
    return String.fromCharCode(value)
  }

  /**
   * Processa os proximos caracteres e retorna um DEFINITION
   * \{[a-zA-Z][a-zA-Z0-9_]*\}
   */

  private processesDefinition(): Token | null {
    let tok: string = ''
    const start: number = this._pos

    let c: string | null = '{'

    while (this.hasMoreChars()) {
      c = this.nextChar()

      if (c == null) return null

      if (c == '}') break

      if (c != '_' && !this.isLetterOrDigit(c))
        throw new LexicalError("Caracter inválido em uma definição: '" + c + "'", this._pos - 1)

      tok += c
    }

    if (c != '}' && !this.hasMoreChars())
      throw new LexicalError('Fim de expressão inesperado', this._pos)

    return new Token(DEFINITION, tok.toString(), start)
  }

  private hasMoreChars(): boolean {
    return this._pos < this._in.length;
  }

  private nextChar(): string {
    if (this.hasMoreChars()) return this._in.charAt(this._pos++)
    else return String.fromCharCode(-1);
  }

  private isLetterOrDigit(char: string): boolean {
    return (
      char.toLowerCase() != char.toUpperCase() ||
      char.charCodeAt(0) == 170 ||
      char.charCodeAt(0) == 186 ||
      this.isNumber(char)
    )
  }

  private isNumber(str: string): boolean {
    // TODO Verify if is correct
    if (typeof str !== 'string') {
      return false
    }

    if (str.trim() === '') {
      return false
    }

    return !Number.isNaN(Number(str))
  }
}
