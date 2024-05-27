export class Options {
  public scannerName: string = 'Lexico'
  public parserName: string = 'Sintatico'
  public semanticName: string = 'Semantico'
  public pkgName: string = ''

  public generateScanner: boolean = true
  public generateParser: boolean = true

  public static readonly LANG_JAVA: number = 0
  public static readonly LANG_CPP: number = 1
  public static readonly LANG_DELPHI: number = 2

  public language: number = Options.LANG_JAVA

  public static readonly PARSER_LR: number = 0
  public static readonly PARSER_LALR: number = 1
  public static readonly PARSER_SLR: number = 2
  public static readonly PARSER_LL: number = 3
  public static readonly PARSER_REC_DESC: number = 4

  public parser: number = Options.PARSER_SLR

  public scannerCaseSensitive: boolean = true

  public static readonly SCANNER_TABLE_FULL: number = 0
  public static readonly SCANNER_TABLE_COMPACT: number = 1
  public static readonly SCANNER_TABLE_HARDCODE: number = 2

  public scannerTable: number = Options.SCANNER_TABLE_FULL

  public static readonly INPUT_STREAM: number = 0
  public static readonly INPUT_STRING: number = 1

  public input: number = Options.INPUT_STRING

  public toString(): string {
    let bfr = ''

    bfr += 'GenerateScanner = ' + this.generateScanner
    bfr += '\nGenerateParser = ' + this.generateParser

    bfr += '\nLanguage = '
    switch (this.language) {
      case Options.LANG_CPP:
        bfr += 'C++'
        break
      case Options.LANG_JAVA:
        bfr += 'Java'
        break
      case Options.LANG_DELPHI:
        bfr += 'Delphi'
        break
    }

    bfr += '\nScannerName = ' + this.scannerName
    if (this.generateParser) {
      bfr += '\nParserName = ' + this.parserName
      bfr += '\nSemanticName = ' + this.semanticName
    }
    if (this.pkgName.length > 0) bfr += '\nPackage = ' + this.pkgName // TODO verificar se precisa manter a flag para ativar a opção
    if (this.generateScanner) {
      bfr += '\nScannerCaseSensitive = ' + this.scannerCaseSensitive

      bfr += '\nScannerTable = '
      switch (this.scannerTable) {
        case Options.SCANNER_TABLE_FULL:
          bfr += 'Full'
          break
        case Options.SCANNER_TABLE_COMPACT:
          bfr += 'Compact'
          break
        case Options.SCANNER_TABLE_HARDCODE:
          bfr += 'Hardcode'
          break
      }

      bfr += '\nInput = '
      switch (this.input) {
        case Options.INPUT_STREAM:
          bfr += 'Stream'
          break
        case Options.INPUT_STRING:
          bfr += 'String'
          break
      }
    }
    if (this.generateParser) {
      bfr += '\nParser = '
      switch (this.parser) {
        case Options.PARSER_LR:
          bfr += 'LR'
          break
        case Options.PARSER_LALR:
          bfr += 'LALR'
          break
        case Options.PARSER_SLR:
          bfr += 'SLR'
          break
        case Options.PARSER_LL:
          bfr += 'LL'
          break
        case Options.PARSER_REC_DESC:
          bfr += 'RD'
          break
      }
    }
    return bfr
  }

  public constructorFromString(str: string): Options {
    // eslint-disable-next-line prefer-const
    let o = new Options()

    if (str === undefined) return o

    const lineArray = str.split('\n')

    for (const line of lineArray) {
      const [name, value] = line.split('=')
      o.setOption(name.trim(), value.trim())
    }

    return o
  }

  /**
   * @param name
   * @param value
   */
  public setOption(name: string, value: string) {
    if (name.toUpperCase() === 'GenerateScanner'.toUpperCase())
      this.generateScanner = /true/i.test(value)
    else if (name.toUpperCase() === 'GenerateParser'.toUpperCase())
      this.generateParser = /true/i.test(value)
    else if (name.toUpperCase() === 'Language'.toUpperCase()) {
      if (value.toUpperCase() === 'C++'.toUpperCase()) this.language = Options.LANG_CPP
      else if (value.toUpperCase() === 'Java'.toUpperCase()) this.language = Options.LANG_JAVA
      else if (value.toUpperCase() === 'Delphi'.toUpperCase()) this.language = Options.LANG_DELPHI
      else throw new Error('Erro processando arquivo')
    } else if (name.toUpperCase() === 'ScannerName'.toUpperCase()) this.scannerName = value
    else if (name.toUpperCase() === 'ParserName'.toUpperCase()) this.parserName = value
    else if (name.toUpperCase() === 'SemanticName'.toUpperCase()) this.semanticName = value
    else if (name.toUpperCase() === 'Package'.toUpperCase()) this.pkgName = value
    else if (name.toUpperCase() === 'ScannerCaseSensitive'.toUpperCase())
      this.scannerCaseSensitive = /true/i.test(value)
    else if (name.toUpperCase() == 'ScannerTable'.toUpperCase()) {
      if (value.toUpperCase() === 'Full'.toUpperCase())
        this.scannerTable = Options.SCANNER_TABLE_FULL
      else if (value.toUpperCase() === 'Compact'.toUpperCase())
        this.scannerTable = Options.SCANNER_TABLE_COMPACT
      else if (value.toUpperCase() === 'Hardcode'.toUpperCase())
        this.scannerTable = Options.SCANNER_TABLE_HARDCODE
      else throw new Error('Erro processando arquivo')
    } else if (name.toUpperCase() === 'Input'.toUpperCase()) {
      if (value.toUpperCase() === 'Stream'.toUpperCase()) this.input = Options.INPUT_STREAM
      else if (value.toUpperCase() === 'String'.toUpperCase()) this.input = Options.INPUT_STRING
      else throw new Error('Erro processando arquivo')
    } else if (name.toUpperCase() === 'Parser'.toUpperCase()) {
      if (value.toUpperCase() === 'LR'.toUpperCase()) this.parser = Options.PARSER_LR
      else if (value.toUpperCase() === 'LALR'.toUpperCase()) this.parser = Options.PARSER_LALR
      else if (value.toUpperCase() === 'SLR'.toUpperCase()) this.parser = Options.PARSER_SLR
      else if (value.toUpperCase() === 'LL'.toUpperCase()) this.parser = Options.PARSER_LL
      else if (value.toUpperCase() === 'RD'.toUpperCase()) this.parser = Options.PARSER_REC_DESC
      else throw new Error('Erro processando arquivo')
    } else throw new Error('Erro processando arquivo')
  }
}
