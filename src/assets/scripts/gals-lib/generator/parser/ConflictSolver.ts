import { List } from "../../DataStructures";
import { Grammar } from "./Grammar";


export abstract class ConflictSolver // extends Box (Swing Java)
{
    // private static instance: ConflictSolver;

    // // public static getInstance(): ConflictSolver {
    // //     if (!ConflictSolver.instance) {
    // //         ConflictSolver.instance = new ConflictSolver();
    // //     }

    // //     return ConflictSolver.instance;
    // // }

    //private DefaultListModel conflictListModel = new DefaultListModel();
    protected conflictList: List<string> = new List();
    // private JLabel label1 = new JLabel();
    // private JLabel label2 = new JLabel();
    // private JLabel label3 = new JLabel();
    
    constructor()
    {
        // super(BoxLayout.Y_AXIS);
        
        // add(new JLabel("Ocorre um conflito quando:"));                
        // add(label1);
        // add(label2);
        // add(Box.createVerticalStrut(10));
        // add(label3);
        // add(Box.createVerticalStrut(10));
        // add(Box.createVerticalGlue());
        // add(new JScrollPane(conflictList));

    }

    public abstract resolve(g: Grammar, input: number): number;
    
    // export class ProductionItem
    // {
    //     private _index: number;
    //     private _label: string;

    //     public constructor(label: string, index: number)
    //     {
    //         this._index = index;
    //         this._label = label;
    //     }
            
    //     public toString(): string
    //     {
    //         return this._label;
    //     }

    //     public get index(): number
    //     {
    //         return this._index;
    //     }
    // }
}
