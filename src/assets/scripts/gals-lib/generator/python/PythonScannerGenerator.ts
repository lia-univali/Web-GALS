import { List } from '../../DataStructures'
import { FiniteAutomata } from '../FiniteAutomata'
import { Options } from '../Options'

/**
 * @author Vinícius
 */

export class PythonScannerGenerator {
  public generate(fa: FiniteAutomata, options: Options): Map<string, string> {
    const result: Map<string, string> = new Map()

    let scanner: string = ''
    const classname: string = options.scannerName

    if (options.generateScanner == true) {
      if (fa != null) {
        scanner = this.buildScanner(fa, options)
      } else {
        scanner = ''
      }

      result.set(classname + '.py', scanner)
    }

    return result
  }

  private bidistream(options: Options): string {
    if (options.input == Options.INPUT_STREAM) {
      return (
        'from io                 import StringIO\n\n' +
        'class BidirectionalStream:\n' +
        '\tdef __init__(self, src: StringIO):\n' +
        '\t\tself.src       = src\n' +
        '\t\tself.shadow    = ""\n' +
        '\t\tself.shadowpos = 0\n' +
        '\t\tself.read      = 0\n\n' +
        '\tdef rewind(self, pos):\n' +
        '\t\tself.shadowpos = pos\n\n' +
        '\tdef next_char(self):\n' +
        '\t\tif self.shadowpos == self.read:\n' +
        '\t\t\tres = self.src.read(1)\n' +
        "\t\t\tif res == '':\n" +
        '\t\t\t\treturn -1\n' +
        '\t\t\telse:\n' +
        '\t\t\t\tself.shadow    += res\n' +
        '\t\t\t\tself.shadowpos += 1\n' +
        '\t\t\t\tself.read      += 1\n' +
        '\t\t\t\treturn ord(res)\n' +
        '\t\telse:\n' +
        '\t\t\tres = self.shadow[self.shadowpos]\n' +
        '\t\t\tself.shadowpos += 1\n' +
        '\t\t\treturn ord(res)\n\n'
      )
    } else {
      return ''
    }
  }

  private buildScanner(fa: FiniteAutomata, options: Options): string {
    const classname: string = options.scannerName
    const pkgname: string = options.pkgName !== '' ? options.pkgName + '.' : ''
    const stream: boolean = options.input == Options.INPUT_STREAM

    let result =
      `from ${pkgname}Constants import *\n` +
      `from ${pkgname}Errors    import LexicalError\n` +
      `from ${pkgname}Token     import Token\n\n` +
      this.bidistream(options) +
      'class ' +
      classname +
      ':\n\n' +
      `\tdef __init__(self, input: ${stream ? 'StringIO' : 'str'} = None):\n` +
      '\t\tself.set_input(input)\n\n' +
      (stream
        ? '\tdef set_input(self, input: StringIO):\n' +
          '\t\tself.input = BidirectionalStream(input)\n\n'
        : '\tdef set_input(self, input: str):\n' +
          '\t\tself.input    = input\n' +
          '\t\tself.position = 0\n\n') +
      '\tdef next_token(self):\n\n' +
      (stream
        ? '\t\tstart    = self.input.shadowpos\n' + '\t\tnewchar  = 0\n' + '\t\titers    = 0\n'
        : '\t\tif self.has_input() == False:\n' +
          '\t\t\treturn None\n\n' +
          '\t\tstart    = self.position\n') +
      '\t\tstate    = 0\n' +
      '\t\toldState = 0\n' +
      '\t\tendState = -1\n' +
      '\t\tend      = -1\n\n' +
      (fa.hasContext() ? '\t\tctxtState = -1\n' + '\t\tctxtEnd   = -1\n' : '') +
      `\t\twhile ${stream ? 'True' : 'self.has_input()'}:\n\n` +
      (stream
        ? '\t\t\tnewchar = self.input.next_char()\n' +
          '\t\t\tif newchar == -1:\n' +
          '\t\t\t\tbreak\n\n' +
          '\t\t\titers += 1\n\n'
        : '') +
      '\t\t\toldState = state\n' +
      `\t\t\tstate    = self.next_state(${stream ? 'newchar' : 'self.next_char()'}, state)\n\n` +
      '\t\t\tif state < 0:\n' +
      '\t\t\t\tbreak\n\n' +
      '\t\t\telse:\n' +
      '\t\t\t\tif self.token_for_state(state) != None:\n' +
      '\t\t\t\t\tendState = state\n' +
      `\t\t\t\t\tend      = ${stream ? 'self.input.shadowpos' : 'self.position'}\n\n` +
      (fa.hasContext()
        ? '\t\t\tif SCANNER_CONTEXT[state][0] == 1:\n' +
          '\t\t\t\tctxtStatet = state\n' +
          `\t\t\t\tctxtEnd    = ${stream ? 'self.input.shadowpos' : 'self.position'}\n`
        : '') +
      (stream
        ? '\t\tif newchar == -1 and iters == 0:\n' +
          '\t\t\tself.input.rewind(start)\n' +
          '\t\t\treturn None\n\n'
        : '') +
      '\t\tif endState < 0 or (endState != state and self.token_for_state(oldState) == -2):\n' +
      '\t\t\traise LexicalError(SCANNER_ERROR[oldState], start)\n\n' +
      (fa.hasContext()
        ? '\t\tif ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState:\n' +
          '\t\t\tend = ctxtEnd'
        : '') +
      (stream ? '\t\tself.input.rewind(end)\n\n' : '\t\tself.position = end\n\n') +
      '\t\ttoken = self.token_for_state(endState)\n\n' +
      '\t\tif token == 0:\n' +
      '\t\t\treturn self.next_token()\n' +
      '\t\telse:\n' +
      `\t\t\tlexeme = self.input${stream ? '.shadow' : ''}[start:end]\n` +
      '\t\t\tif TOKEN_DEPENDENCY or CASE_INSENSITIVITY:\n' +
      '\t\t\t\ttoken = self.lookup_token(token, lexeme)\n' +
      '\t\t\treturn Token(TokenId(token), lexeme, start)\n\n' +
      '\tdef next_state(self, c: int, state: int):\n' +
      this.nextStateImpl(fa, options) +
      '\n' +
      '\tdef token_for_state(self, state: int):\n' +
      '\t\ttoken = -1\n\n' +
      '\t\tif state >= 0 and state < STATES_COUNT:\n' +
      '\t\t\ttoken = TOKEN_STATE[state]\n\n' +
      '\t\treturn token\n\n' +
      '\tdef lookup_token(self, base: int, key: str):\n' +
      '\t\tstart =  SPECIAL_CASES_INDEXES[base]\n' +
      '\t\tend   =  SPECIAL_CASES_INDEXES[base+1]-1\n\n' +
      '\t\tkey_u = key\n' +
      '\t\tif CASE_INSENSITIVITY:\n' +
      '\t\t\tkey_u = key.upper()\n\n' +
      '\t\twhile start <= end:\n' +
      '\t\t\thalf    = (start + end) // 2\n' +
      '\t\t\tcurrent = SPECIAL_CASES_KEYS[half]\n\n' + // TODO: uppercase?
      '\t\t\tif current == key_u:\n' +
      '\t\t\t\treturn TokenId(SPECIAL_CASES_VALUES[half])\n' +
      '\t\t\telif current < key_u:\n' +
      '\t\t\t\tstart = half + 1\n' +
      '\t\t\telse:\n' +
      '\t\t\t\tend   = half - 1\n\n' +
      '\t\treturn base\n\n' +
      (stream
        ? ''
        : '\tdef has_input(self):\n' +
          '\t\treturn self.position < len(self.input)\n\n' +
          '\tdef next_char(self):\n' +
          '\t\tif self.has_input():\n' +
          '\t\t\tres = self.input[self.position]\n' +
          '\t\t\tself.position += 1\n' +
          '\t\t\treturn ord(res)\n' +
          '\t\telse:\n' +
          '\t\t\treturn -1\n\n')

    return result
  }

  private nextStateImpl(fa: FiniteAutomata, opt: Options): string {
    switch (opt.scannerTable) {
      case Options.SCANNER_TABLE_FULL:
      case Options.SCANNER_TABLE_COMPACT:
        return '\t\treturn SCANNER_TABLE[state][c]\n'
      case Options.SCANNER_TABLE_HARDCODE: {
        const trans: List<Map<string, number>> = fa.transitions
        let casesState = ''
        for (let i = 0; i < trans.size(); i++) {
          const m = trans.get(i)
          if (m.size == 0) continue

          casesState += '\t\t\tcase ' + i + ':\n' + '\t\t\t\tmatch c:\n'

          for (const [key, value] of m.entries()) {
            const ch = key
            const it = value
            casesState += `\t\t\t\t\tcase ${ch.charCodeAt(0)}:\n\t\t\t\t\t\treturn ${it};\n`
          }

          casesState += '\t\t\t\t\tcase _:\n\t\t\t\t\t\treturn -1\n'
        }

        return '\t\tmatch state:\n' + casesState.toString() + '\t\t\tcase _:\n\t\t\t\treturn -1\n'
      }
      default:
        return '' // null;
    }
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
