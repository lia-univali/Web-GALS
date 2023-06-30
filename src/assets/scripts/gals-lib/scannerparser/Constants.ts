
export const EPSILON: number  = 0;
export const EPSILON_STR: string =  "î"

export const DOLLAR: number   = 1;


export const UNION: number             =  2; // |

export const CLOSURE: number           =  3; // *

export const CLOSURE_OB: number        =  4; // +

export const OPTIONAL: number          =  5; // ?

export const PARENTHESIS_OPEN: number  =  6; // (

export const PARENTHESIS_CLOSE: number =  7; // )

export const BRACKETS_OPEN: number     =  8; // [

export const BRACKETS_CLOSE: number    =  9; // ]

export const ALL: number               = 10; // .

export const COMPLEMENT: number        = 11; // ^

export const INTERVAL: number          = 12; //  -

export const DEFINITION: number        = 13; // \[[a-zA-Z][a-zA-Z0-9_]*\]

export const CHAR: number              = 14; // CHAR



export const START_SYMBOL: number = 15;


export const FIRST_TERMINAL: number  = 2;
export const FIRST_NON_TERMINAL: number    = 15;

export const FIRST_SEMANTIC_ACTION: number = 26;



export const SYNT_TABLE: number[][] =
[

    [ -1, -1, -1, -1, -1,  0, -1,  0, -1, -1,  0, -1,  0,  0 ],

    [ -1, -1, -1, -1, -1,  1, -1,  1, -1, -1,  1, -1,  1,  1 ],

    [  3,  2, -1, -1, -1, -1,  3, -1, -1, -1, -1, -1, -1, -1 ],

    [  5,  5, -1, -1, -1,  4,  5,  4, -1, -1,  4, -1,  4,  4 ],

    [ -1, -1, -1, -1, -1,  6, -1,  6, -1, -1,  6, -1,  6,  6 ],

    [ 10, 10,  7,  8,  9, 10, 10, 10, -1, -1, 10, -1, 10, 10 ],

    [ -1, -1, -1, -1, -1, 11, -1, 12, -1, -1, 13, -1, 14, 15 ],

    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, -1, -1, -1, 17 ],

    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18 ],

    [ -1, -1, -1, -1, -1, -1, -1, -1, 20, -1, -1, 19, -1, 20 ],

    [ -1, -1, -1, -1, -1, -1, -1, -1, 22, -1, -1, -1, -1, 21 ]

];



export const PRODUCTIONS: number[][] = 
[

    [ 16, 27, 17 ],

    [ 19, 28, 18 ],

    [  2, 16, 29, 17 ],

    [  0 ],

    [ 19, 30, 18 ],

    [  0 ],

    [ 21, 20 ],

    [  3, 31 ],

    [  4, 32 ],

    [  5, 33 ],

    [  0 ],

    [  6, 34, 15,  7, 35 ],

    [  8, 22 ],

    [ 11, 38 ],

    [ 13, 40 ],

    [ 14, 39 ],

    [ 10, 23, 25,  9, 36 ],

    [ 23, 25,  9 ],

    [ 14, 39, 24 ],

    [ 12, 14, 41 ],

    [  0 ],

    [ 23, 25, 37 ],

    [  0 ]

];