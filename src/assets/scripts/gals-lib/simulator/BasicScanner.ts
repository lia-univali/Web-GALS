import type { Token } from "../analyser/Token";

export interface BasicScanner{

    setInput(text: string): void;
    nextToken():Token | null;// Adicionar lexical exception

}