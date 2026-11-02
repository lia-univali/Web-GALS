import { ConflictSolver } from '../ConflictSolver'
import { Grammar } from '../Grammar'
import { Command } from './Command'
import { installRPCHandler } from '@/workers/workerRPC'
import { List } from '../../../DataStructures'
import { Production } from '../../../util/Production'
import * as UIBridge from '@/workers/UIBridge'

installRPCHandler()

/**
 * @author Gesser
 *
 * O propósito desta classe é apresentar ao usuário a opção de resolver
 * um conflíto gramatical de forma interativa.
 */
export interface ConflictModel {
  label: string
  command: number
}

export class LRConflictSolver extends ConflictSolver {
  private _conflict: Command[]
  private _state: number
  private _conflictListModel: Array<ConflictModel>
  private _productions: List<Production> | undefined

  constructor(conflict?: Command[], state?: number) {
    super()
    this._conflict = conflict === undefined ? [] : conflict
    this._state = state === undefined ? -1 : state
    this._conflictListModel = new Array<ConflictModel>()
  }

  async resolve(g: Grammar, input: number): Promise<number> {
    let inText: string

    if (input == 0) inText = '$'
    else inText = g.terminals[input - 1]

    this._conflictListModel = []
    
    let conflictstosend = []
    for (let i = 0; i < this._conflict.length; i++) {
      let label: string
      let content: string
      switch (this._conflict[i].getType()) {
        case Command.REDUCE:
          label = 'Reduzir, pela produção'
          content = (this._productions !== undefined ? this._productions.get(this._conflict[i].getParameter()).toString() : this._conflict[i].getParameter()).toString()
          break
        case Command.ACTION:
          label = 'Executar ação semântica'
          content = this._conflict[i].getParameter().toString()
          break
        case Command.SHIFT:
          label = 'Empilhar'
          content = inText
          break
        default:
          label = this._conflict[i].toString()
          content = ""
          break
      }
      conflictstosend.push([label, content])
      this._conflictListModel.push({ label: label, command: i })
    }

    let result: string | null = null

    try {
      result = await UIBridge.conflictModalPrompt(this._state, inText, conflictstosend);
    } catch (e) {
      console.log(e, 'Prompt não encontrado')
    }

    if (result == null) result = '1'

    let resultNumber = Number(result)

    if (isNaN(resultNumber)) resultNumber = 0
    else if (resultNumber < 0 || resultNumber > this._conflict.length) resultNumber = 0
    else resultNumber--

    return this._conflictListModel[resultNumber].command
  }

  // public async handleDialogWithResolved(header: string) {
  //     const [chosenCommand, error] = await resolved(this.showDialog(header, this._conflictListModel));

  //     if (error) {
  //     console.error('Error occurred:', error);
  //     } else {
  //     alert(`Comando escolhido: ${chosenCommand}`);
  //     }
  // }

  showModal(
    message: string,
    confirmText: string,
    cancelText: string,
    confirmCallback?: () => void,
    cancelCallback?: () => void
  ) {
    const modal = document.getElementById('myModal')!
    const confirmBtn = document.getElementById('confirmBtn') as HTMLButtonElement
    const cancelBtn = document.getElementById('cancelBtn') as HTMLButtonElement

    modal.style.display = 'block'
    confirmBtn.textContent = confirmText
    cancelBtn.textContent = cancelText

    confirmBtn.onclick = function () {
      modal.style.display = 'none'
      if (confirmCallback) confirmCallback()
    }

    cancelBtn.onclick = function () {
      modal.style.display = 'none'
      if (cancelCallback) cancelCallback()
    }
  }

  private showDialog(header: string, options: { label: string; command: number }[]) {
    //: number {//Promise<number> {
    //return new Promise((resolve) => {
    const dialog = document.createElement('dialog')
    dialog.style.padding = '20px'
    dialog.innerHTML = `<p>${header}<p>`

    options.forEach((option) => {
      const button = document.createElement('button')
      button.textContent = option.label
      button.onclick = () => {
        dialog.close()
        document.body.removeChild(dialog)
        //option.command;
      }
      dialog.appendChild(button)
      dialog.appendChild(document.createElement('br'))
    })

    dialog.addEventListener('close', () => {
      document.body.removeChild(dialog)
    })

    document.body.appendChild(dialog)
    dialog.showModal()

    //});
  }

  setup(conflict: Command[], state: number, prods?: List<Production>) {
    this._conflict = conflict
    this._state = state
    this._productions = prods
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
