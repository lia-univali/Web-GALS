import { ConflictSolver } from "../ConflictSolver";
import { Grammar } from "../Grammar";
import { Command } from "./Command";


/**
 * @author Gesser
 *
 * To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Generation - Code and Comments
 */
export interface ConflictModel{
    label: string,
    command: number,
}

export class LRConflictSolver extends ConflictSolver
{
    private _conflict: Command[];
    private _state: number;
    private _conflictListModel: Array<ConflictModel>;

    constructor(conflict?: Command[], state?: number){
        super()
        this._conflict  = (conflict === undefined? [] : conflict);
        this._state     = (state === undefined? -1 : state);
        this._conflictListModel = new Array<ConflictModel>();
    }

    resolve(g: Grammar, input: number): number{
        
        let inText: string;
        
        if (input == 0)
            inText = "$";
        else
            inText = g.terminals[input-1];

        let header = "";
        header += "- O estado no topo da pilha é: " + this._state + "\n";
        header += "- O símbolo da entrada é: " + inText + "\n";
        header += "\nQual ação a ser executada:";
        
        this._conflictListModel = [];
        
        for (let i=0; i < this._conflict.length; i++)
        {
            let label: string;
            switch (this._conflict[i].getType())
            {
                case Command.REDUCE:
                    label = "Reduzir, pela produção "+this._conflict[i].getParameter();
                    break;
                case Command.ACTION:
                    label = "Executar ação semântica "+this._conflict[i].getParameter();
                    break;
                case Command.SHIFT:
                    label = "Empilhar \""+inText+"\"";
                    break;
                default:
                    label = this._conflict[i].toString();
                    break;
            }
            header += "\nOpção "+ (i + 1) + ": " + label;
            this._conflictListModel.push({label: label, command: i});
            
        }

        header += "\n\nOBS: Se cancelar ou digitar opção inválida,\na opção 1 será escolhida como padrão."

        //TODO change to choose conflict resolver and not the first rule
        
        //alert(header)
        
        // if (confirm(header)) {
        //     op = 1
        //     console.log('Thing was saved to the database.');
        //   } else {
        //     op = 2
        //     // Do nothing!
        //     console.log('Thing was not saved to the database.');
        //   }

        let result: string | null = null

        try {
            result = prompt(header, '1')
        } catch {
            console.log('Prompt não encontrado')
        }

        if(result == null)
            result = '1' 

        let resultNumber =  Number(result)

        if(isNaN(resultNumber))
            resultNumber = 0
        else if(resultNumber < 0 || resultNumber > this._conflict.length)
            resultNumber = 0
        else
            resultNumber--

        // this.showModal(
        //     'Are you sure you want to delete this item?',
        //     'Delete',
        //     'Cancel',
        //     () => {
        //         // Delete item logic
        //         op = 1;
        //         console.log('Item deleted');
        //     },
        //     () => {
        //         op = 2;
        //         // Cancel logic
        //         console.log('Action canceled');
        //     }
        // );

        //this.showDialog(header,this._conflictListModel)
        // .then((chosenCommand) => {
        //     alert(`Comando escolhido: ${chosenCommand}`);
        // });

        //alert("Teste: " + resultNumber + "  teste:" + this._conflict.length )
        ////console.log(this._conflictListModel[0].command)
        //return this._conflictListModel[0].command;
        return this._conflictListModel[resultNumber].command
        //return showDialog();
        //return -1;
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
        const modal = document.getElementById('myModal')!;
        const confirmBtn = document.getElementById('confirmBtn') as HTMLButtonElement;
        const cancelBtn = document.getElementById('cancelBtn') as HTMLButtonElement;

        modal.style.display = 'block';
        confirmBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;

        confirmBtn.onclick = function () {
            modal.style.display = 'none';
            if (confirmCallback) confirmCallback();
        }

        cancelBtn.onclick = function () {
            modal.style.display = 'none';
            if (cancelCallback) cancelCallback();
        }
    }
    
    private showDialog(header: string, options: {label: string, command: number}[]){//: number {//Promise<number> {
        //return new Promise((resolve) => {
        const dialog = document.createElement('dialog');
        dialog.style.padding = '20px';
        dialog.innerHTML = `<p>${header}<p>`;

        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.label;
            button.onclick = () => {
                dialog.close();
                document.body.removeChild(dialog);
               //option.command;
            };
            dialog.appendChild(button);
            dialog.appendChild(document.createElement('br'));
        });

        dialog.addEventListener('close', () => {
            document.body.removeChild(dialog);
        });

        document.body.appendChild(dialog);
        dialog.showModal();

        //});
    }


    setup(conflict: Command[], state: number){
        this._conflict = conflict;
        this._state = state;
    };

}