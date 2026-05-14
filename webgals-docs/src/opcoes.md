# Opções

O Web GALS oferece opções para configuração de cada projeto. As configuraçõe são apresentadas em três abas no menu de configurações acessível na barra lateral esquerda da interface.

## Opções Gerais

A janela de configurações gerais permite o usuário escolher o quê será gerado e em qual linguagem-alvo, junto às escolhas de nomes de arquivos específicos do projeto.

<center><img src="./confg.png" alt="Diálogo de Configurações Gerais"></center>
<center><i>Diálogo das Configurações Gerais.</i></center>

#### Modal - Gerar

Estas opções permitem ao usuário escolher quais analisadores devem ser gerados:

- **Analisador Léxico:** Somente o analisador léxico.
- **Analisador Sintático:** Somente o analisador sintático.
- **Analisadores Léxico e Sintático:** Analisadores Léxico e Sintático combinados.

> [!NOTE]
> Para a opção de somente gerar o Analisador Sintático, o usuário terá que implementar manualmente o fornecimento de Tokens ao analisador sintático.

#### Modal - Linguagem

Estas opções permitem o usuário escolher a **linguagem-alvo** para implementação do compilador, dentre:

- **Java**
- **C++**
- **Delphi**
- **Python**
- **Rust**

> [!WARNING]
> A implementação em linguagem Delphi não tem suporte testato para todas as funcionalidades providas pelo Web GALS.

#### Entrada - Classes

Estas opções permitem o usuário escolher **o nome das classes e da hierarquía** do código gerado.

- **Analisador Léxico**
- **Analisador Sintático**
- **Analisador Semântico**
- **Package / Namespace / Module**

Para Java e C++ pode-se especificar a *package* e o *namespace* respectivamente onde serão geradas as classes. 
Para Python e Rust é possível especificar o *module* das classes, onde é criada a hierarquia de diretórios correspondente.

> [!NOTE]
> Não foi implementado para Delphi suporte para o sistema de nomeamento e hierarquia.

## Opções do Analisador Léxico

A aba de opções do analisador léxico permite o usuário configurar a forma de entrada e a implementação do autômato de reconhecimento léxico.

<center><img src="./confl.png" alt="Diálogo da Configurações Léxicas"></center>
<center><i>Diálogo das Configurações Léxicas.</i></center>


#### Forma de Entrada

- **Stream:** Esta opção faz com que o Lexer seja implementado com o equivalente de uma *Stream* contínua. *Streams* carregam contínuamente a sua entrada ao invéz de tudo de uma véz só, e são propícios para a leitura de arquivos em disco, por exemplo.
- **String:** Esta opção faz com que o Lexer seja implementado com o equivalente de uma *String* de tamanho fixo e conhecido. Esta é a opção de mais simples implementação, porém terá dificuldades em carregar arquivos muito grandes devido a necessidade de manter todo o arquivo em memória; é porém proprícia para editores interativos, por exemplo.

Quanto a implementação desses sistemas, segue a tabela de classes:

| Linguagem | Forma de Entrada | Classe             |
|-----------|------------------|--------------------|
| Java      | Stream           | java.io.Reader     |
| C++       | Stream           | std::istream       |
| Delphi    | Stream           | TStream            |
| Python    | Stream           | io.StringIO        |
| Rust      | Stream           | std::fs::BufReader |
| --        | --               | --                 |
| Java      | String           | String             |
| C++       | String           | std::string        |
| Delphi    | String           | string             |
| Python    | String           | str                |
| Rust      | String           | String             |

> [!CAUTION]
> A implementação do modo *Stream* para C++, Java e Delphi, no momento, simplesmente leem o arquivo todo e o convertem para String, quebrando a expectativa de leitura gradual esperada desse modo.
>
> A implementação para Python e Rust faz uso correto dos *Streams*, porém acumulam memória devido a necessidade de backtracking arbitrário por parte do Lexer. Então em quesito de **uso de memória** ele é identico a versão modo *String*.

#### Implementação do Autômato

O analisador léxico é implementado sobre um autômato finito, e é possível selecionar a implementação da função `next_state()` do autômato, tendo como escolha:

- **Tabela Completa:** Um *lookup* em tabela pré-gerada.
- **Tabela Compactada:** (Java) Similar a anterior; utiliza um *HashMap* para usar menos memória, porém é mais lento.
- **Específica:** O comportamento da função é codificada de forma explícita usando condicionais.

#### Checkbox - Diferenciar maiúscula/minúscula em casos especiais

O analisador gerado sempre passa os tokens ao sintático (que passa ao semântico) exatamente como eles estavam no texto original, sem qualquer conversão entre maiúsculas e minúsculas.

Se o analisador léxico não deve ser sensível à caixa nos casos de definições especiais de tokens, ou seja, não diferenciar maiúsculas de minúsculas, o que significa postergar esse tipo de verificação para outra etapa da compilação, esta opção permite configurar isso.

Então para que serve esta opção?

Esta opção tem a ver com casos especiais, utilizados (geralmente) para a definição de palavras chave. Com esta opção desabilitada, tanto `Begin` quanto `begin` quanto `BEGIN` seriam reconhecidos como o mesmo token, caso se tenha um caso especial de identificador com a representação igual a `begin`. 

## Opções do Analisador Sintático

A aba de opções do Analisador Sintático permite o usuário configurar qual algoritmo de análise será gerado/utilizado.

<center><img src="./confs.png" alt="Diálogo de Configurações Sintáticas"></center>
<center><i>Diálogo das Configurações Sintáticas.</i></center>

#### Classe do Analisador Sintático

##### Descendentes
- **Descendente Recursivo:** Analisador descendente via chamadas de funções recursivas. Muito popular entre compiladores implementados a mão.
- **LL(1):** A versão tabelada do descendente recursivo.
##### Ascendentes
- **SLR(1):** Uma implementação do *Simple LR(1)*, parser ascendente tabelado e que utiliza esquema *Shift-Reduce*.
- **LALR(1):** Uma versão do LR(1) Canônico onde estados identicos mas com lookaheads diferentes são juntos em um só estado. Maior poder do que o SLR(1) mas menor poder do que o LR(1) canônico.
- **LR(1) Canônico:** A versão "correta" do algorítmo *Shift-Reduce*. O seu problema é a explosão na quantidade de estados em função da complexidade da gramática.

> [!CAUTION]
> O LR(1) Canônico e por consequência o LALR(1) podem travar o Web GALS caso a gramática seja muito complexa.

Algumas classes impõem restrições na construção da gramática que devem ser observadas quando for descrevê-la.

<!-- Levando em consideração minha descoberta que a unica diferença entre o SLR(1), LALR(1) e LR(1)
     é a tabela gerada, é muito provável que o Delphi tem suporte sim ao LALR(1) e LR(1). Só não vou
     testar pois não estou com vontade de comprar uma licença de Delphi (principalmente já que tal nem
     suporta Linux para começo de conversa, e acho um insulto ter que rodar um compilador via Wine.)
> [!NOTE]
> Os analisadores `LALR(1)` e `LR(1)` não estão disponíveis para Delphi.
-->
