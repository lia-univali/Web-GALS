import { Token } from '../analyser/Token'

export class LineScanner {
  /* 
	Finished

    Modifications:
    - atributes cont converted to readonly
	- changed reMode to regularMode and scMode to _specialCaseMode
	- in nextChar changed  return -1 to ''
*/

  public static readonly ID: number = 0
  public static readonly STR: number = 1
  public static readonly RE: number = 2
  public static readonly COLON: number = 3
  public static readonly EQUALS: number = 4
  public static readonly COMMENT: number = 5
  public static readonly ERROR: number = 6

  private _text: string = ''
  private _pos: number = 0
  private _endPos: number = 0
  private _regularMode: boolean = false
  private _specialCaseMode: boolean = false

  public set text(value: string) {
    this._text = value
    this.setRange(0, this._text.length)
    this._regularMode = false
    this._specialCaseMode = false
  }

  private setRange(start: number, end: number): void {
    this._pos = start
    this._endPos = end
  }

  public nextToken(): Token | null {
    if (!this.hasMoreChars()) return null

    if (this._regularMode) {
      if (this._specialCaseMode) {
        this._regularMode = false
        this._specialCaseMode = false
        return this.nextToken()
      }
      return this.parseRE()
    } else {
      while (this.hasMoreChars()) {
        const start: number = this._pos
        const c: string | null = this.nextChar()

        if (c == null) return null // TODO (added extra)

        switch (c) {
          case '\n':
          case '\r':
            this._specialCaseMode = false
            this._regularMode = false
          case ' ':
          //case '\s':
          case '\t':
            continue
          case ':':
            this._regularMode = true
            return new Token(LineScanner.COLON, ':', start)
          case '=':
            this._specialCaseMode = true
            return new Token(LineScanner.EQUALS, '=', start)
          case '"':
            return this.getString()
          case '/':
            return this.getComment()
          default:
            if (this.isLetter(c)) return this.getId()
            else return this.getError()
        }
      }
      return null
    }
  }

  private parseRE(): Token | null {
    const start: number = this._pos
    this._regularMode = false

    while (this.hasMoreChars()) {
      const c: string | null = this.nextChar()

      if (c == null) return null // TODO (Added Extra)

      if (c == '\n') {
        this._pos--
        break
      } else if (c == '/') {
        if (this.hasMoreChars()) {
          if (this.nextChar() == '/') {
            this._pos -= 2
            this._regularMode = false
            return new Token(LineScanner.RE, this._text.substring(start, this._pos), start)
          }
          this._pos--
        }
      }
    }

    const tok: string = this._text.substring(start, this._pos)
    return new Token(LineScanner.RE, tok, start)
  }

  private getString(): Token {
    const start: number = this._pos - 1

    while (this.hasMoreChars()) {
      const c: string | null = this.nextChar()

      if (c == '\n') break
      else if (c == '"') {
        if (this.hasMoreChars()) {
          if (this.nextChar() != '"') {
            this._pos--
            return new Token(LineScanner.STR, this._text.substring(start, this._pos), start)
          }
        } else return new Token(LineScanner.STR, this._text.substring(start, this._pos), start)
      }
    }
    return new Token(LineScanner.ERROR, this.text.substring(start, this._pos), start)
  }

  private getId(): Token | null {
    const start: number = this._pos - 1

    while (this.hasMoreChars()) {
      const c: string | null = this.nextChar()

      if (c == null) return null // TODO (Added Extra)

      if (!this.isLetterOrDigit(c) && c != '_') {
        this._pos--
        break
      }
    }

    return new Token(LineScanner.ID, this._text.substring(start, this._pos), start)
  }

  private getError(): Token | null {
    const start: number = this._pos - 1

    while (this.hasMoreChars()) {
      if (' \t\n\r'.indexOf(this.nextChar()) == -1) {
        this._pos--
        break
      }
    }

    return new Token(LineScanner.ERROR, this._text.substring(start, this._pos), start)
  }

  private getComment(): Token {
    const start: number = this._pos - 1

    if (this.hasMoreChars()) {
      if (this.nextChar() == '/') {
        while (this.hasMoreChars()) {
          if (this.nextChar() == '\n') {
            this._pos--
            break
          }
        }
        return new Token(LineScanner.COMMENT, this._text.substring(start, this._pos), start)
      }
      this._pos--
    }
    return new Token(LineScanner.ERROR, this._text.substring(start, this._pos), start)
  }

  //TODO Verify if compatible with java functions

  private isLetter(c: string): boolean {
    // TODO Verify if is correct
    return c.toLowerCase() != c.toUpperCase()
  }

  private isLetterOrDigit(c: string): boolean {
    // TODO Verify if is correct
    return c.toLowerCase() != c.toUpperCase() || this.isNumber(c)
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

  private hasMoreChars(): boolean {
    return this._pos < this._endPos
  }

  private nextChar(): string {
    if (this.hasMoreChars()) return this._text.charAt(this._pos++)
    else return String.fromCharCode(-1)
  }
}
