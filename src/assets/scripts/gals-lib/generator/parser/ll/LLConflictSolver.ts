import { IntegerSet } from "../../../DataStructures";
import { ConflictSolver } from "../ConflictSolver";
import { Grammar } from "../Grammar";

export class LLConflictSolver extends ConflictSolver{

    private conflict: IntegerSet | null = null;
    private stackTop: number | null = null;

    resolve(g: Grammar, input: number): number{
        return 1;
    }

    setup(conflict: IntegerSet, stackTop: number){
        this.conflict = conflict;
        this.stackTop = stackTop;
    };
}