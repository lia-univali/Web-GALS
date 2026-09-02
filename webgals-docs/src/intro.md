# Introdução

O Gerador de Analisadores Léxico e Sintático -- **GALS** (desktop) -- foi desenvolvido por Carlos Eduardo Gesser como Trabalho de Conclusão de Curso do Curso de bacharelado em Ciências da Computação da Universidade Federal de Santa Catarina sob a orientação do Prof. Olinto José Varela Furtado. Posteriormente, o GALS foi redesenhado para o ambiente Web e ampliado, passando a ser chamado de **Web GALS**. A versão Web também foi desenvolvida em Trabalhos de Conclusão de Curso de Ciência da Computação. O Web GALS foi desenvolvido pelos alunos Daniel Akira Nakamura Gullich e Vinícius Schütz Piva, orientados pelo Prof. Eduardo Alves da Silva na Universidade do Vale do Itajaí.

Esta ferramenta pode ser usada em [https://lia-univali.github.io/Web-GALS/](https://lia-univali.github.io/Web-GALS/).

O Web GALS é uma ferramenta de Software Livre. Seu código fonte é liberado sob a Licença Publica GNU. ([http://www.gnu.org/](http://www.gnu.org/))

> [!NOTE]
> A versão antiga da documentação está disponível em [https://lia-univali.github.io/Web-GALS/files/help.html](https://lia-univali.github.io/Web-GALS/files/help.html)

## Uso Geral

O Web GALS apresenta uma área de trabalho com quatro janelas, um gerenciador de projetos e um menu de configurações.

![Interface do Web GALS](./galsinterface.png)
<center><i>Screenshot da interface principal do Web GALS.</i></center>

A interface é utilizada para definir as regras de análise léxica e sintática da linguagem a ser projetada. O Web GALS possui suporte a algoritmos de análise descendente e ascendente, bem como, permite a escolha de linguagem de implementação alvo do compilador via o menu de configurações. Essa interface é ilustrada e detalhada a seguir.

![Interface do Web GALS, anotada](./galsinterfaceannotated.png)
![Interface do Web GALS, anotada](./galsinterfaceannotated2.png)
<center><i>Interface do Web GALS, anotada.</i></center>

A interface principal do Web GALS possui:

1. **Gramática:** Área de texto para escrita das regras gramaticais por meio de uma Gramática Livre de Contexto (GLC) em notação BNF (Backus-Naur Formalism). Na parte superior do editor há um campo para especificar o símbolo inicial da gramática.
2. **Tokens:** Área de texto para a definição de Tokens a serem reconhecidos pelo Analisador Léxico (_scanner_).
3. **Simulação:** Área de texto dedicada aos testes das definições de Tokens e Gramática.
4. **Saída da Simulação:** Local de exibição da saída dos testes do analisador léxico (lista de Tokens) e do analísador sintático (árvore de derivação), dependendo da escolha do usuário.
5. **Diagrama Sintático:** Janela com a visualização da gramática em estilo _railroad_.
6. **Gerar código:** Botão para gerar o código-fonte dos analisadores e construção de compilador da linguagem projetada.
7. **Menu Layout:** Este menu permite o usuário mudar o layout da área de trabalho do Web GALS.
8. **Gerenciador de Projetos:** Opções que permitem o usuário trabalhar em múltiplos projetos (arquivos) ao mesmo tempo.
9. **Tabelas e Documentação do projeto:** Menu com opções de visualização das tabelas dos analisadores de acordo com as definições do projeto selecionado.
10. **Menu de Configurações:** Abrir menu de configurações do projeto selecionado.
11. **Informações do Web GALS:** Exibir as informações do Web GALS.
12. **Espaço de Projetos**: Espaço para selecionar o projeto a ser trabalhado no WebGALS.
13. **Definições Regulares**: Área de texto para escrita das definições regulares e posterior aproveitamento na definição de Tokens.

Após finalizar um projeto no Web GALS, é possível gerar um código *template* que implementa os analisadores léxico e sintático que processam o autômato de reconhecimento da linguagem projetada; Isso serve como ponto de partida para o desenvolvimento do analisador semântico e implementação de um compilador via programação nas linguagens-alvo disponíveis no Web GALS.

![Exemplo de Projeto Gerado](./projexample.png)
<center><i>Exemplo de projeto (arquivos de código-fonte) gerado pelo Web GALS.</i></center>

Tendo de exemplo [o seguinte arquivo de projeto](https://lia-univali.github.io/Web-GALS/files/exemplo.vgls), com a seguinte entrada de simulação, o estado do Web GALS se encontra como no da figura:
```rust
let d = 99;
{
	let a = b * (1 + 2) - c;
};
```
<center><i>Entrada de simulação.</i></center>

<br><br>

![Resultado da simulação](./simimg.png)
<center><i>Estado do Web GALS após simulação sintática.</i></center>
