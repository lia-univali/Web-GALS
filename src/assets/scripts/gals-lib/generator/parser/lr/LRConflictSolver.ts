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
        this._conflictListModel = new Array();
    }

    resolve(g: Grammar, input: number): number{
        
        let inText: string;
        
        if (input == 0)
            inText = "$";
        else
            inText = g.terminals[input-1];

        let header = ""; //TODO NEED TO UTILIZE ON UI
        header += "- O estado no topo da pilha é: " + this._state + "\n";
        header += "- O símbolo da entrada é: " + inText + "\n";
        header += "Qual ação a ser executada:";
        
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
            this._conflictListModel.push({label: label, command: i});
        }

        //TODO change to choose conflict resolver and not the first rule
        
        console.log(this._conflictListModel[0].command)
        return this._conflictListModel[0].command;

        //return showDialog();
        //return -1;
    }

    setup(conflict: Command[], state: number){
        this._conflict = conflict;
        this._state = state;
    };

}