# Aspectos Sintáticos

Os Aspectos Sintáticos são compostos pela declaração de Símbolos Terminais (Tokens), Símbolos Não-Terminais, Produções e Símbolo Inicial. 

### Símbolos Terminais, Não-Terminais e Produções

Símbolos terminais é o nome dado aos Tokens dentro do analisador sintático, já símbolos não-terminais são gerados pelas produções compostas de múltiplos itens dentre terminais e não-terminais (isto incluí recursão).

Uma produção é uma regra gramatical que relaciona símbolos terminais e não-terminais de forma que possam ser reconhecidos em uma frase. O Web GALS usa a notação BNF para especificar produções. Por exemplo:

```
<A> ::= <B> <C> | <D>;
```

é uma produção onde `<A>` é um não-terminal produzido ou pela sequência de `<B>` com `<C>`, ou somente `<D>`.

Podemos então definir `<B>`, `<C>` e `<D>`:

```
<B> ::= CALL_STMT IDENTIFIER;
<C> ::= OPEN_PARENTHESIS <D> CLOSE_PARENTHESIS; 
<D> ::= NUMBER PLUS_OPTR NUMBER;
```

onde `B` é um não-terminal produzido pela sequência do terminais `CALL_STMT` seguido de `IDENTIFIER`, que poderiam, por exemplo, ser um Token "call" e um Token de identificador alfanumérico. `C` é um não terminal produzido pela sequência do terminal `OPEN_PARENTHESIS` seguido do não-terminal `<D>` seguido de `CLOSE_PARENTHESIS`, representando o corpo de chamada de uma função, por exemplo. E `D` poderia representar a soma de dois números.

Um programa válido segundo esta linguagem, dando `<A>` como símbolo inicial é:

```
call myfunc(1 + 2)
```

Outro programa válido é `55 + 44`.

Em geral, terminais são representados pelo seu nome (definido na janela de Tokens), e não-terminais são representados da mesma maneira, mas envoltos por `<>`.

Como visto nos exemplos, um não-terminal é definido com o operador `::=` na janela de Gramática, e a notação BNF suporta também o operador `|`, que permite a gramática fazer uma escolha entre duas ou mais regras de derivação para uma produção.

### Restrições

Existem restrições impostas à forma das produções, de acordo com a classe de analisador sintático que se pretende gerar. Para Analisadores Descendentes (LL e Descendente Recursivo) não é permitido que a gramática possua recursão à esquerda ou que não esteja na sua forma fatorada. 
A tentativa de gerar um analisador com uma gramática neste estado resultará em erro. 

As duas restrições podem ser facilmente removidas aplicando-se algoritmos de transformação à gramática. Gramáticas com este problema são ambíguas, e durante a geração do analisador será informado ao usuário que não é possível gerar o analisador.

Analisadores Ascendentes (LR, LALR e SLR) não possuem restrições na construção da gramática. Ou seja, têm suporte à recursão à esquerda e gramática não fatoradas. Mesmo assim não conseguem tratar gramáticas ambíguas. Neste caso, o usuário deverá escolher qual ação tomar em casos de ambiguidade entre empilhar um símbolo (operação de shift) ou reduzir (operação reduce) por uma produção, 
ou então entre duas produções por meio das quais se pode reduzir. Em outras palavras, fica a cargo do projetista da linguagem de programação resolver a ambiguidade manualmente na geração dos autômatos.

### Exemplo

Segue um exemplo de uma linguagem de programação, feita para análise ascendente:

##### Tokens

```
:[\n\r\s\t]*

NUMBER : [0-9]+
IDENT  : [a-zA-Z_][0-9a-zA-Z_]*

LET = IDENT : "let"

O_ASSIGN : "="

O_PLUS : "+"
O_MINUS: "-"
O_TIMES: "*"
O_DIV  : "/"

OPEN : "("
CLOSE: ")"

SEMI : ";"

BLOCK : "{"
KCOLB : "}"
```

##### Gramática

```
// inicial é <scope>
<scope> ::= <statement> SEMI | <statement> SEMI <scope>;

<statement> ::= <let> | <expr1> | <block>;

<block> ::= BLOCK <scope> KCOLB;
<let>   ::= LET IDENT O_ASSIGN <expr1>;

<term>  ::= NUMBER | IDENT | OPEN <expr1> CLOSE;
<expr1> ::= <expr2> | <expr2> <optr1> <expr1>;
<expr2> ::= <term>  | <term>  <optr2> <expr2>;

<optr1> ::= O_PLUS  | O_MINUS;
<optr2> ::= O_TIMES | O_DIV;
```