import { List } from "../DataStructures";
import { ErrorLog } from "../ErrorLog";
import { LexicalError } from "../analyser/SystemErros";
import { Token } from "../analyser/Token";
import { FiniteAutomata } from "../generator/FiniteAutomata";
import { LexicalData } from "../generator/scanner/LexicalData";
import { LineParser } from "../scannerparser/LineParser";
import { FiniteAutomataSimulator } from "../simulator/FiniteAutomataSimulator";

enum Mode{ LEXICAL, SYNTATIC, BOTH}

export function simulateLex(input: string, definitions: string, tokens: string): Map<Token, string>{


    let mode: number = Mode.LEXICAL;
    let sensitive: boolean = true;
    let erroLog: ErrorLog = ErrorLog.Instance; 

    //Passo 1 - Gerar o automato finito - gerado com a chamada lp.parseFA - trecho extraído da Classe InputPane - linha 109
    let lp: LineParser = new LineParser();
    let fa: FiniteAutomata = lp.parseFA(definitions, tokens, sensitive);

    // console.log("Ok")
    // console.log(fa)
    // for(let a of fa.transitions){
    //     console.log(a)
    // }

    // Passo 2 - Obter lista de tokens - a partir do automato finito gerado no passo 1 - método getTokens da classe InputPane - linha 113
    let result: List<string> = new List();

    if (mode != Mode.SYNTATIC){
        let tokens: List<string>  = fa.tokens; // Aqui é o automômato gerado no passo 1
    
        for (let i = 0 ; i < tokens.size() ; i++){
            result.add(tokens.get(i));
    //        result.add("\n"); // Verificar se for precisso
        }
    }
    else {
        // StringTokenizer tknzr = new StringTokenizer(tokens.getText(), "\n", true); // Verificar se for precissopara false
        
        // while (tknzr.hasMoreTokens())
        //     result.add(tknzr.nextToken());
    }

    // console.log(result.toArray())

    // Passo 3 - Remover as quebras de linha da lista de tokens gerada no passo 3 - Isso acontece no método getTokens da MainWindow - linha 140

    let tokensNoLine: List<string> =  result;//Passo 2 result linha 24 //inPane.getTokens();
        
    while ( tokensNoLine.remove("\n") );


    //     Ele passa a chamar a lista de tokens de: "terminals" na Classe Actions e "tokenNameList" na SimulateWindow


    // Passo 5 - Se gerar o autômato pela classe LexicalData, o código é o seguinte:
    function  generateTokenListAutomata(scannerCaseSensitive: boolean): FiniteAutomata | null {
            try
            {
                let ld: LexicalData = new LexicalData();
                for (let i = 0; i < tokenNameList.size() ; i++)
                {
                    let tokenPivot: string = tokenNameList.get(i);
                    ld.addToken(tokenPivot, tokenPivot);
                }

                ld.addIgnore("[\\ \\n\\r\\t]");
                
                return ld.getFA(scannerCaseSensitive);
            }
            catch (error) //MetaException
            {
                console.log(error)
                return null;
            }
    }

    // Passo 4 - Cria o Simulador de Autômato Finito na classe SimulateWindow - linha 146 ou linha 159

    let tokenNameList = tokensNoLine;// getTokens passo 3 tokenNameList;
    let faSim: FiniteAutomataSimulator;

    if (fa != null){
        faSim = new FiniteAutomataSimulator(fa, sensitive);
    }
    else{
        const newFa = generateTokenListAutomata(sensitive);
        
        if(newFa == null) throw Error("Finite Automata from Lexical Data is NULL");

        faSim = new FiniteAutomataSimulator(newFa, sensitive); // Seria o passo 5 -  Isso aqui exige a classe LexicalData implementada - BEM IMPORTANTE
    }

    // Passo 6 - Simula os tokens reconhecidos na operação de clique da classe SimulateWindow - método: lexClick


    faSim.setInput(input);

    let tokensModel: Map<Token, string> = new Map;

    try{
        let t: Token | null = faSim.nextToken();
        
        while (t != null)
        {
            let name: string = tokenNameList.get(t.id - 2);
            tokensModel.set(t, name);

            // Fazer print
            // print()

            t = faSim.nextToken();
        }
    } catch (error){

        //TODO Colocar o caracter que gerou erro
        let dummy: Token = new Token(-1, (error as LexicalError).message , (error as LexicalError).position);

        tokensModel.set(dummy, "ERRO LÉXICO");

        console.log(error);
    }

    console.log(tokensModel)

    console.log("DEU")

    return tokensModel;
}