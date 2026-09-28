# Árvore Sintática em Memória

## Árvore abstrata

Tradicionalmente o processamento semântico e geração de código feito por um compilador
acontece via o uso das ações semânticas; identificadores numéricos presente na gramática que
realizam *callbacks* a funções no compilador quando identificadas pelo analisador sintático
(no Web GALS tais funções sendo escritas dentro do método `executeAction()` da classe Semântico.).

Este método é simples na implementação, porém restringe a complexidade do compilador já
que em nenhum momento da compilação o compilador tem acesso completo a árvore sintática
derivada pelo analisador sintático.

De fato, no uso das ações semânticas não só se limita as informações do programa disponíveis ao compilador
(somente Tokens associados a uma ação semântica são enviados à classe Semântica), como conjuntos
de informações outrora sequenciais são quebrados em múltiplas chamadas de função (como no caso de lista de
identificadores em uma chamada de função, ou uma expressão binária).

Uma alternativa ao uso do sistema de ações semânticas é guardar a árvore sintática
derivada pelo analisador sintático na memoria e processa-la posteriormente. Esta árvore
dada pelo analisador denomina-se **Árvore Sintática Concreta**, já que ela representa precisamente
o que o analisador aceitou. No momento que se modifica uma árvore sintática concreta, ela se torna
uma **Árvore Sintática Abstrata** (*AST*), já que ela representa o programa, mas não necessariamente
o que o analisador sintático aceitou. Por questões de brevidade este documento usará o termo *AST* para
referir-se a ambas.

O Web GALS suporta na sua geração de código uma biblioteca para a criação e manipulação de árvores sintáticas
abstratas, com múltiplas transformações pré implementadas prontas ao uso.

> [!NOTE]
> A biblioteca vem desativada por padrão, e é ativada no menu de configurações do Web GALS na secção sintática.

Ao habilitar a biblioteca, a função `parse()` da classe Sintático para de executar as ações semânticas e passa
a retornar a árvore sintática. Por questões de compatibilidade, caso a gramática possua ações semânticas, essas
são postas na árvore concreta em suas devidas posições, na qual podem ser processadas da maneira tradicional
posteriormente via uma *transformação*, exemplificado em Rust:

```rust
let mut tree = syn.parse()?;
tree.try_transform(&mut |n| {
	if let NodeKind::SemanticAction(a) = n.get_kind() {
		sem.execute_action((*a + 1) as u32, n.get_actionlex().expect("token"))?;
	};
	Ok(())
})?;
```

Transformações são o coração desta metodologia. Uma transformação é uma função executada em todos os nós da
árvore seguindo uma ordem específica (a transformação acima sendo pós-ordem em profundidade).

Com o uso das transformações é possível simplificar e reorganizar a árvore abstrata, adicionar informações
a ela (como informações de tipagem), ou até mesmo usa-la de referência para a geração de código.

## Classe Node

A classe `Node` é a classe que representa os nós da árvore abstrata, e é o tipo retornado pela função `parse()`.
De dados, elas possuem o parâmetro `kind`, a variante (*tagged union*/*enum*) de que tipo de nó é esse, tendo quatro
opções: terminal, não-terminal, ação semântica e nó customizado; e `children`, sua lista de filhos. Métodos estão
disponíveis para acessar e modificar ambos.

> [!NOTE]
> Devido a grande quantidade de código presente nesta classe, vezes quatro, uma para cada implementação,
> somente suas descrições estão presentes neste documento. Peço que busquem protótipos de função no próprio
> código fonte dos arquivos gerados.

## Transformações Prontas

A biblioteca vem com seis transformações parametrizáveis que permitem modificar a árvore, no intuito de simplifica-la
para visualização e posterior processamento.

#### `assimilate`

- `assimilate(newkind: NodeKind, similars: List<NodeKind>)`: Esta transformação ira percorrer a árvore procurando por
nós que se assemelham a qualquer `NodeKind` presente em `similars` e, caso ache, os morfará para `newkind`. Esta
transformação é útil para padronizar nós que representam a mesma informação. Por exemplo, dado a gramática:
```
<expr>  ::= <expr1>;
<expr1> ::= <expr2> | <expr2> <optr1> <expr1>;
<expr2> ::= <term>  | <term>  <optr2> <expr2>;
<optr1> ::= ...;
<optr2> ::= ...;
<term>  ::= <value> | OPEN <expr> CLOSE;
```
as regras `<expr>`, `<expr1>`, `<expr2>` e `<term>` representam as mesma informações, mas necessitam ser não-terminais diferentes
por questões de precedência e ambiguidade. As regras de operador sofrem um problema parecido.
Uma transformação `assimilate(<expr>, [<expr1>, <expr2>, <term>])` e uma transformação `assimilate(<optr>, [<optr1>, <optr2>])`
irá padronizar uma árvore abstrata como mostrado abaixo:

<center><img src="./assimilate.png" alt="Exemplo de transformação assimilate"></center>
<center><i>Exemplo de transformação assimilate.</i></center>

> [!NOTE]
> A função `assimilate()`, e todas as transformações prontas, esperam argumentos do tipo NodeKind. Por exemplo,
> em Rust, uma das transformações acima seria escrita da seguinte forma:
> ```rust
> n.assimilate(NodeKind::NonTerminal(NonTerm::nt_expr), &[
> 	NodeKind::NonTerminal(NonTerm::nt_expr1),
> 	NodeKind::NonTerminal(NonTerm::nt_expr2),
> 	NodeKind::NonTerminal(NonTerm::nt_term),
> ])
> ```
> A enumeração `NonTerm` está disponível no arquivo de constantes gerado com o projeto.

#### `squash`

- `squash(target: NodeKind)`: Esta transformação procura por nós similares a `target` nos quais tem somente
um nó filho e, caso o seu nó filho tenha o mesmo nodekind que seu pai, o filho é deletado, com os netos sendo transferidos para
o pai, eg.: `A tem B tem C,D,E → A tem C,D,E; B deletado`. Esta transformação é util uso conjunto com a transformação anterior,
para deletar nós reduntantes na árvore. Por exemplo, digamos que as padronizações de expressão anteriores foram executadas:
há uma grande chance que "cadeias" de `<expr>` aninhadas umas dentro das outras hajam formadas. A transformação `squash()` ira
"esmagar" estas cadeidas em um nó só. A figura abaixo exemplifica:

<center><img src="./squash.png" alt="Exemplo de transformação squash"></center>
<center><i>Exemplo de transformação squash.</i></center>

## Transformações Customizadas

As transformações são implementadas via a chamada do método correspondente em qualquer nó da árvore,
dando uma função lambda como argumento (que realizará a operação da transformação). A função lambda em sí
recebe um único argumento: o nó que está sendo atualmente processado. A função de transformação então irá
percorrer todos os nós filhos do nó na qual a transformação iniciada, executando a função lambda fornecida
tende eles de argumento.

O primeiro e principal método de transformação fornecida é, nomeada de acordo, `transform()`, específica com código
Rust abaixo:

```rust
pub fn transform<F>(self: &mut Box<Self>, t: &mut F)
where
	F: FnMut(&mut Box<Self>),
{
	self.children.iter_mut().for_each(|c| c.transform(t));
	t(self);
}
```

-
	* *Método 2: manipulação da arvore*
		- *Explicar as transformações*
		- *Explicar as seis transformações pre-feitas*
		* Exemplo: Símbolos

- *Nós customizados*
	- Explicar uso
	- Exemplo: Tipagem

- *API*
	listar api
