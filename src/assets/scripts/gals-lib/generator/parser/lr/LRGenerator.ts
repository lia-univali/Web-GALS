/**
 * @author Gesser
 */

import { OrderedIntegerSet, List } from '../../../DataStructures'
import { HTMLDialog } from '../../../HTMLDialog'
import { Production } from '../../../util/Production'
import { Grammar } from '../Grammar'
import { Command } from './Command'
import { LRConflictSolver } from './LRConflictSolver'
import { LRItem } from './LRItem'

export abstract class LRGenerator {
  protected g: Grammar
  protected itemList: List<List<LRItem>>
  protected semanticStart: number
  protected firstSementicAction: number

  private lalrgotocache: Map<string, List<LRItem>> = new Map()

  constructor(g: Grammar) {
    this.semanticStart = g.FIRST_SEMANTIC_ACTION()
    this.firstSementicAction = g.FIRST_SEMANTIC_ACTION()

    this.g = g.asNormalLR()

    this.initCaches()
    this.itemList = this.computeItems()
  }

  protected getLalrGotoCache() {
    return this.lalrgotocache
  }

  protected abstract initCaches(): void

  public getErrors(table: Command[][]): List<string> {
    const result = new List<string>()

    for (let state = 0; state < table.length; state++) {
      const bs: OrderedIntegerSet = new OrderedIntegerSet()
      for (let j = 1; j < this.g.FIRST_NON_TERMINAL; j++) {
        if (table[state][j - 1].getType() != Command.ERROR) bs.add(j)
      }
      let bfr: string = ''
      const total: number = bs.size
      let count: number = 0
      for (const i of bs.list()) {
        if (i == 1)
          //DOLAR
          bfr += 'fim de sentença'
        else bfr += this.g.symbols[i]

        if (total - count == 2) bfr += ' ou '
        else if (total - count > 2) bfr += ', '

        count++
      }
      result.add(bfr.toString())
    }

    return result
  }

  public get grammar(): Grammar {
    return this.g
  }

  public get firstSemanticAction(): number {
    return this.firstSementicAction
  }

  /*
   * Estas são as funções que um gerador LR precisam implementar.
   **/

  /**
   * A função closure recebe a lista de itens de um estado e retorna a nova
   * versão deste estado, unido a estados equivalentes.
   *
   * Por exemplo, considere a produção A → a.By
   *
   * Esta produção, na versão não determinística do autômato, implicará
   * em um estado com a produção B → .b, onde há uma ε-transição A → B que,
   * quando convertido a umm autômato determinístico, ambos A e B serão unidos
   * em um único estado.
   *
   * A função closure recebe o estado original e retorna a versão dele unido com
   * todas suas ε-transições, ou seja, entra:
   *
   *     A → a.By | c.Dn | ...
   *
   * sai:
   *
   *     A → a.By | c.Dn | ...
   *     B → .b
   *     D → .d
   *     ...
   *
   * @param items Lista de itens LR do estado
   * @returns Nova lista de itens do estado
   */
  protected abstract closure(items: List<LRItem>): List<LRItem>

  /**
   * A função goTo calcula os estados de transição quando é efetuado a leitura
   * de uma sequência.
   *
   * Por exemplo, tendo um estado E com produção A → a.By | c.Dn | ..., a função
   * goTo considerará todos os estados que representam a leitura de uma sequência
   * no qual o item anterior esteja presente em E; entra:
   *
   *     A → a.By | c.Dn | ...,   com s = B
   *
   * sai:
   *
   *     CLOSURE(A → aB.y)
   *
   * Então este resultado deve ser usado para criar as transições no autômato:
   *
   *       B
   *     A → goTo(A, B)
   *
   * @param items Lista de itens LR do estado
   * @param s Terminal/Não-terminal de transição.
   * @returns Estados no qual `items` transiciona via `s`.
   */
  protected abstract goTo(items: List<LRItem>, s: number): List<LRItem>

  /**
   * Este é o função principal para a geração do autômato.
   *
   * Ele cria todos os estados no autômato gerados via goTo().
   *
   * Notavelmente, o nome `computeItems` é um tanto confuso, já que ele computa
   * estados, não itens.
   *
   * As transições são calculadas na função buildTable().
   *
   * @returns Estados do autômato.
   */
  protected abstract computeItems(): List<List<LRItem>>

  /**
   * Esta função transforma finaliza autômato aplicando a regra algorítmica
   * implementada e gerando a tabela.
   *
   * @returns Tabela de comandos LR.
   */
  public abstract buildTable(): Promise<Command[][]>

  public async buildIntTable(): Promise<number[][][]> {
    const commands: Command[][] = await this.buildTable()

    const result: number[][][] = []

    for (let i = 0; i < commands.length; i++) {
      result[i] = []
      for (let j = 0; j < commands[i].length; j++) {
        result[i][j] = []
        result[i][j][0] = commands[i][j].getType()
        result[i][j][1] = commands[i][j].getParameter()
      }
    }
    return result
  }

  protected async resolveConflicts(table: Set<Command>[][]): Promise<Command[][]> {
    const result: Command[][] = []

    const error: Command = Command.createError()
    for (let i = 0; i < table.length; i++) {
      result[i] = []
      for (let j = 0; j < table[0].length; j++) {
        switch (table[i][j].size) {
          case 0:
            result[i][j] = error
            break
          case 1:
            result[i][j] = table[i][j].values().next().value! //.iterator().next();
            break
          default:
            result[i][j] = await this.solve(table[i][j], i, j)
            break
        }
      }
    }

    return result
  }

  private async solve(set: Set<Command>, state: number, input: number): Promise<Command> {
    const cmds: Command[] = []
    let i = 0

    for (const iter of set) {
      cmds[i] = iter //TODO VERIFY MODIFICATION
      i++
    }

    let equals = true
    for (let j = 1; j < cmds.length; j++) {
      equals = equals && cmds[j - 1].equals(cmds[j])
      if (!equals) break
    }

    if (equals) return cmds[0]
    else {
      const lrConflictSolver: LRConflictSolver = new LRConflictSolver()
      lrConflictSolver.setup(cmds, state)
      return cmds[await lrConflictSolver.resolve(this.g, input)]
    }
  }

  public async tableAsHTML(): Promise<string> {
    let result = ''

    result +=
      '<HTML>' +
      '<HEAD>' +
      '<TITLE>Tabela SLR(1)</TITLE>' +
      '</HEAD>' +
      '<BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">' +
      '<TABLE border=1 cellspacing=0>'

    const table: Command[][] = await this.buildTable()

    result += '<TR>'
    result +=
      '<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>'
    result +=
      '<TD  align=center colspan=' +
      (this.g.FIRST_NON_TERMINAL - 1) +
      ' bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>'
    result +=
      '<TD  align=center colspan=' +
      (this.g.FIRST_SEMANTIC_ACTION() - this.g.FIRST_NON_TERMINAL) +
      ' bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>'
    result += '</TR>'

    result += '<TR>'
    //result += "<TD  align=center bgcolor=black>&nbsp;</TD>");
    for (let i = 0; i < table[0].length - 1; i++) {
      result +=
        '<TD  align=center bgcolor=black nowrap><FONT color=white><B>' +
        HTMLDialog.translateString(this.g.symbols[i + 1]) +
        '</B></FONT></TD>'
    }
    result += '</TR>'

    for (let i = 0; i < table.length; i++) {
      const line: Command[] = table[i]

      result += '<TR>'

      result +=
        '<TD bgcolor=black align=right nowrap><FONT color=white><B>' + i + '</B></FONT></TD>'

      for (let j = 0; j < line.length - 1; j++) {
        const cmd: Command = line[j]
        let value = ''

        if (cmd != null) value = cmd.toString()

        const color: string = j + 1 < this.g.FIRST_NON_TERMINAL ? '#F5F5F5' : '#E6E6E6'

        result += '<TD bgcolor=' + color + ' align=center nowrap>' + value + '</TD>'
      }
      result += '</TR>'
    }

    result += '</TABLE>' + '</FONT></BODY>' + '</HTML>'

    return result.toString()
  }

  public itemsAsHTML(): string {
    let result = ''

    result +=
      '<HTML>' +
      '<HEAD>' +
      '<TITLE>Itens SLR(1)</TITLE>' +
      '</HEAD>' +
      '<BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">' +
      '<TABLE border=1 cellspacing=0>'

    const l: List<List<LRItem>> = this.itemList

    result += '<TR>'
    result += '<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>'
    result += '<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>'
    result += '<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>'
    result += '</TR>'

    for (let i = 0; i < l.size(); i++) {
      const color: string = i % 2 == 0 ? '#F5F5F5' : '#E6E6E6'

      const item: List<LRItem> = l.get(i)

      result += '<TR>'
      result += '<TD bgcolor=' + color + ' align=right rowspan=' + item.size() + '>' + i + '</TD>'
      //result += "<TD bgcolor="+color+" nowrap>"+item.get(0).toString()+"</TD>";
      result +=
        '<TD bgcolor=' +
        color +
        ' nowrap>' +
        HTMLDialog.translateString(item.get(0).toString()) +
        '</TD>'

      let it: LRItem = item.get(0)
      let p: Production = it.production
      if (p.get_rhs().length > it.position) {
        const x: number = p.get_rhs()[it.position]
        const next: List<LRItem> = this.goTo(item, x)
        const pos: number = this.getIndexFromList(l, next)
        result += '<TD bgcolor=' + color + ' align=right>' + pos + '</TD>'
      } else result += '<TD bgcolor=' + color + ' align=right>' + '&nbsp' + '</TD>'
      result += '</TR>'

      for (let j = 1; j < item.size(); j++) {
        result += '<TR>'
        result +=
          '<TD bgcolor=' +
          color +
          ' nowrap>' +
          HTMLDialog.translateString(item.get(j).toString()) +
          '</TD>'

        it = item.get(j)
        p = it.production
        if (p.get_rhs().length > it.position) {
          const x: number = p.get_rhs()[it.position]
          const next: List<LRItem> = this.goTo(item, x)
          const pos: number = this.getIndexFromList(l, next)
          result += '<TD bgcolor=' + color + ' align=right>' + pos + '</TD>'
        } else result += '<TD bgcolor=' + color + ' align=right>' + '&nbsp' + '</TD>'
        result += '</TR>'
      }

      result += '</TR>'
    }

    result += '</TABLE>' + '</FONT></BODY>' + '</HTML>'

    return result.toString()
  }

  protected getIndexFromList(list: List<List<LRItem>>, item: List<LRItem>): number {
    const listArray: List<LRItem>[] = list.toArray()

    const itemArray: LRItem[] = item.toArray()

    for (let i = 0; i < listArray.length; i++) {
      const pivot = listArray[i]

      if (pivot.size() !== item.size()) {
        continue
      }

      const pivotArray = pivot.toArray()
      let contained = true

      for (let x = 0; x < pivotArray.length; x++) {
        const pivotItem: LRItem = pivotArray[x]
        const it: LRItem = itemArray[x]
        if (!pivotItem.equals(it)) {
          contained = false
          break
        }
      }

      if (contained) return i
    }

    return -1
  }

  /**
   * Função canonizar. Usada para converter um estado do tipo List<LRItem> para string.
   *
   * Usado para funções de cache.
   *
   * @param s Estado a ser canonizado.
   * @returns String, que serve de identificador único da entrada
   */
  protected canonize(s: List<LRItem>): string {
    let resl: string[] = []
    for (let i of s) {
      resl.push(`${this.g.id_for_production(i.production)}:${i.position}:${i.lookahead}`)
    }
    resl = [...new Set(resl)].sort()
    let res = resl.join('|')
    return res
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
