import { List, OrderedIntegerSet } from '../../../DataStructures'
import { ConflictSolver } from "../ConflictSolver";
import { Grammar } from "../Grammar";
import type { Production } from '@/assets/scripts/gals-lib/util/Production'

export class LLConflictSolver extends ConflictSolver{

    private conflict: OrderedIntegerSet | null = null;
    private stackTop: number | null = null;

    resolve(g: Grammar, input: number): number{
        let inText: string;

        if (this.stackTop == null) throw SyntaxError("Stack de Não terminais é nulo");
        if (this.conflict == null) throw SyntaxError("Conflict é nulo");


        if (input == 0)
            inText = "$";
        else
            inText = g.terminals[input-1];

        let header = "";
        header += "- O símbolo no topo da pilha é: " + g.nonTerminals[this.stackTop] + "\n";
        header += "- O símbolo da entrada é: " + inText + "\n";
        header += "\nQual produção deve ser utilizada?";

        const productions: List<Production> = g.productions

        const conflict: Map<number, number> = new Map();
        let choice = 1
        for (const i of this.conflict.list()){

            header += `\nOpção ${choice} : ${productions.toArray()[i]}\n`;

            conflict.set(choice, i)

            choice++
        }


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
            resultNumber = 1
        else if(resultNumber < 1 || resultNumber > conflict.size)
            resultNumber = 1

        return conflict.get(resultNumber) ?? (() => { throw new Error(`Opção não encontrada de conflito: ${resultNumber}`) })();
    }

    setup(conflict: OrderedIntegerSet, stackTop: number){
        this.conflict = conflict;
        this.stackTop = stackTop;
    };
}