import { OrderedIntegerSet } from "../../../DataStructures";
import { ConflictSolver } from "../ConflictSolver";
import { Grammar } from "../Grammar";

export class LLConflictSolver extends ConflictSolver{

    private conflict: OrderedIntegerSet | null = null;
    private stackTop: number | null = null;

    resolve(g: Grammar, input: number): number{
        return 1;
    }

    setup(conflict: OrderedIntegerSet, stackTop: number){
        this.conflict = conflict;
        this.stackTop = stackTop;
    };
}