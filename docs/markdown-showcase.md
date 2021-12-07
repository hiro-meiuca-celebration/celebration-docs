---
sidebar_position: 1
id: markdown-showcase
title: Referência e vitrine do Markdown
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ImageText from '../src/components/ImageText'

# Referência e vitrine das marcações em Markdown

Esse documento destina-se a referência e vitrine para consultas rápidas. Para mais informações completas, veja [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

Essa folha de referência foi escrita especiamente para uma versão de Markdown suportada pelo Github, além da introdução de código JSX para componentes customizados. Para uma melhor visualização do documento final, compile o projeto e visualize na ferramenta escolhida pelo time.

##### Tabela de conteúdos
[Estrutura básica](#basic-structure)  
[Headers](#headers)  
[Ênfases](#emphasis)  
[Listas](#lists)  
[Links](#links)  
[Imagens](#images)  
[Códigos e realce de sintaxe](#code-and-syntax-highlighting)  
[Blocos de citação](#blockquotes)  
[HTML em linha](#inline-html)  
[Linhas horizontais](#horizontal-rule)  
[Quebras de linhas](#line-breaks)  
[Admoestrações](#admonitions)  
[Componentes customizados](#custom-components)


---
## Estrutura básica {#basic-structure}

Todos os documentos escritos dentro do Docusaurus devem seguir o modelo a seguir

:::note Head

São as informações de metadata que serão utilizadas para ordenar no menu lateral, criar um id único e nomear o documento. Assim como na sequência abaixo.

```no-highlight
---
sidebar_position: 1
id: markdown-showcase
title: Referência e vitrine do Markdown
---
```
:::

:::note Imports

São os componentes customizados em React importados para o documento para utilização.

```no-highlight
import ImageText from '../src/components/ImageText.js'
```
:::

:::note Body

O conteúdo do documento em si. Começando sempre com uma tag H1 para seguir a semântica e hierarquia Web.

```no-highlight
# Título primário (H1)

Olá, esse é um texto livre dentro do documento.

## Título secundário (H2)

Este conteúdo percente ao segundo nível de hierarquia da documentação.

(...)

```
:::


:::tip Dica
Abra este aquivo para ver a aplicação das regras. Fica bem mais fácil de ver como a mágica acontece 👍
:::

---
## Headers

Os headers são escritos utilizando a marcação de cerquilha (**#**), onde o número delas indica o nível na hierarquia. Por exemplo:

```no-highlight
# H1 => primeiro nível
## H2
### H3
#### H4
##### H5
###### H6 => último nível
```

##### Resultado:

# H1
## H2
### H3
#### H4
##### H5
###### H6


:::tip Dica
Por boa prática, sempre utilizar a semântica e hierarquia das páginas Web. Assim, cada documento deve possuir apenas **UM H1**, sempre no começo do documento como sendo a primeira marcação feita. Os demais níveis podem ser utilizados livremente.
:::

:::note Nota
O título escolhido para o documento será o mesmo do menu lateral caso não tenha configurado o metadado no header.
:::

:::info Informação
As referências serão adicionadas ao índice à direita até o **nível TRÊS (H3)** da hierarquia.
:::

---
## Ênfases {#emphasis}

```no-highlight
Ênfases, conhecido como itálicos, com *asteríscos* ou _underscores_.

Ênfases fortes, também conhecido como negrito, como **asteríscos** ou __underscores__ duplos.

Também podemos combinar os dois como **asteríscos e _underscores_**.
```

##### Resultado:

Ênfases, conhecido como itálicos, com *asteríscos* ou _underscores_.

Ênfases fortes, também conhecido como negrito, como **asteríscos** ou __underscores__ duplos.

Também podemos combinar os dois como **asteríscos e _underscores_**.

---
## Listas {#lists}

```no-highlight
###### Itens ordenados
1. Primeiro item da lista  
2. Outro item  
3. As marcações são exatamente as indicadas:  
  1. Sublista ordenada  
  10. Item com numeração esquisita.  

###### Itens sem ordenação 
* Listas não ordenadas são criadas com asteríscos  
- Ou sinal de subtração  
+ Até com sinal de soma  

###### Combinando os dois
1. Item ordenado  
  - Sub item não ordenado  
  - Outro sub item não ordenado  
2. Outro item ordenado  
  2.1 Sub item ordenado  
  2.2 Sub item ordenado de novo  
    * Terceiro nível de itens  
```
##### Resultado:
###### Itens ordenados
1. Primeiro item da lista  
2. Outro item  
3. As marcações são exatamente as indicadas:  
  1. Sublista ordenada  
  10. Item com numeração esquisita.  

###### Itens sem ordenação 
* Listas não ordenadas são criadas com asteríscos  
- Ou sinal de subtração  
+ Até com sinal de soma  

###### Combinando os dois
1. Item ordenado  
  - Sub item não ordenado  
  - Outro sub item não ordenado  
2. Outro item ordenado  
  2.1 Sub item ordenado  
  2.2 Sub item ordenado de novo  
    * Terceiro nível de itens  

:::caution Atenção
Sempre adicionar **DOIS ESPAÇOS** a cada final de linha. A linguagem Markdown só entende quebra de linha dessa maneira.
:::

---
## Links

```no-highlight
A estrutura é bem simples!
- Na primeira parte, em colchetes, colocamos o texto que se tornará um link.
- Na parte dos parênteses, colocamos o link em si.  
[Example site](https://example.com)
```

##### Resultado:
A estrutura é bem simples!
- Na primeira parte, em colchetes, colocamos o texto que se tornará um link.  
- Na parte dos parênteses, colocamos o link em si.  
[Example site](https://example.com)

:::caution Atenção
Os links devem sempre estar acompanhados do protocolo HTTP/HTTPS [http(s)://]. Caso contrário a referência do link falhará.
:::

---
## Images

```no-highlight
As imagens seguem uma estrutura bem parecida dos links.
- Entre colchetes: O texto alternativo da imagem  
- Entre parênteses: O link da imagem (https ou caminho local)  
- Entre aspas: O título da imagem que aparecerá no tooltip

**Como link https:**  
![Docusaurus logo](https://raw.githubusercontent.com/facebook/docusaurus/main/website/static/img/docusaurus.png "Logo do Docusaurus")  

**Como link caminho no projeto:**  
![Docusaurus logo](../static/img/docusaurus.png "Logo do Docusaurus") 

```
##### Resultado:
As imagens seguem uma estrutura bem parecida dos links.
- Entre colchetes: O texto alternativo da imagem  
- Entre parênteses: O link da imagem (https ou caminho local)  
- Entre aspas: O título da imagem que aparecerá no tooltip

**Como link https:**  
![Docusaurus logo](https://raw.githubusercontent.com/facebook/docusaurus/main/website/static/img/docusaurus.png "Logo do Docusaurus")  

**Como link caminho no projeto:**  
![Docusaurus logo](../static/img/docusaurus.png "Logo do Docusaurus") 


:::caution Atenção
Quando relacionar um caminho de dentro do projeto, não se esqueça de utilizar o caminho **../static/img/** para colocar as imagens.
:::

---
## Códigos e realce de sintaxe {#code-and-syntax-highlighting}

Blocos de código são parte da especificação do Markdown, porém o realce de sintaxe não. Porém, diversas ferramentas (como o Github) dão suporte a essa ferramenta visual.

Para saber quais linguagens são suportadas, basta olhar na lista do [hightlight.js](http://softwaremaniacs.org/media/soft/highlight/test.html).

:::note Códigos em linha
```no-highlight
O `acento grave` é usado para marcar `códigos em linha`.
```

##### Resultado:
O `acento grave` é usado para marcar `códigos em linha`.
:::


:::note Blocos de código
```no-highlight
Para criar blocos de código, basta utilizar o "```".

Adicionando a linguagem logo após o início do bloco, temos o realce ajustado para ela.
```

```js title='&#96;&#96;&#96;js'
var s = "JavaScript syntax highlighting";
alert(s);
```

```python title='&#96;&#96;&#96;python'
s = "Python syntax highlighting"
print s
```

```no-highlight title='&#96;&#96;&#96;no-highlight ou vazio'
Quando a linguagem não é indicada no início do bloco ou é utilizada a tag "```no-highlight".
```

```no-highlight title="Adicionando um título"
Primeiro especifique a linguagem e depois adicione a propriedade title="seu título".

Exemplos:
```no-highlight title="Nome do bloco de código"
```js title="Snippet de código em JavaScript"
```
:::


:::tip Dica
Sempre explicite o `no-highlight` quando não houver especificação da linguagem. Só assim é possível inserir um título no bloco de código.
:::

---
## Blocos de citação {#blockquotes}
Os blocos de citação são escritos utilizando a marcação de chevron (**>**), iniciando a linha. Por exemplo:

```no-highlight
> Blocos de citação são bem úteis em diversas marcações de texto!
> Essa linha faz parte da de cima.

###### Quebra de linhas

> Essa é uma linha bem comprida de texto. E para ter certeza de que o bloco vai quebrar a linha, vamos escrever mais um pouquinho. Ah, lembrando que você pode colocar *Markdown* no bloco também!
```
##### Resultado:
> Blocos de citação são bem úteis em diversas marcações de texto!
> Essa linha faz parte da de cima.

###### Quebra de linhas

> Essa é uma linha bem comprida de texto. E para ter certeza de que o bloco vai quebrar a linha, vamos escrever mais um pouquinho. Ah, lembrando que você pode colocar *Markdown* no bloco também!

---
## HTML em linha {#inline-html}

Você também pode usar HTML no Markdown, funciona quase tudo perfeitamente. Aqui alguns exemplos comuns de uso:

```no-highlight
<dl>
  <dt>Lista de definição</dt>
  <dd>É algo que algumas pessoas usam de vez em quando.</dd>

  <dt>Markdown no HTML</dt>
  <dd>*Não* funciona *dentro* das tags. Use HTML <em>tags</em>.</dd>
</dl>

<table>
  <tr>
    <th></th>
    <th>Tabelas</th>
    <th>São</th>
    <th>Legais</th>
  </tr>
  <tr>
    <th>Linhas de</th>
    <td>Zebras</td>
    <td>São</td>
    <td>Bonitas</td>
  </tr>
  <tr>
    <th>Aqui</th>
    <td>É</td>
    <td>Outra</td>
    <td>Linha</td>
  </tr>
</table>
```

##### Resultado:
<dl>
  <dt>Lista de definição</dt>
  <dd>É algo que algumas pessoas usam de vez em quando.</dd>

  <dt>Markdown no HTML</dt>
  <dd>*Não* funciona *dentro* das tags. Use HTML <em>tags</em>.</dd>
</dl>

<table>
  <tr>
    <th></th>
    <th>Tabelas</th>
    <th>São</th>
    <th>Legais</th>
  </tr>
  <tr>
    <th>Linhas de</th>
    <td>Zebras</td>
    <td>São</td>
    <td>Bonitas</td>
  </tr>
  <tr>
    <th>Aqui</th>
    <td>É</td>
    <td>Outra</td>
    <td>Linha</td>
  </tr>
</table>

:::tip Dica
Use as tags HTML com moderação. Se um componente for muito complexo, prefira criá-lo em React e importar no projeto.
:::

---
## Linhas horizontais {#horizontal-rule}

```
Podem ser feitas de três maneiras, sempre com três caracteres:

###### Hífens:
---


###### Asteríscos:
***


###### Underscores:
___

```

##### Resultado:
Podem ser feitas de três maneiras, sempre com três caracteres:

###### Hífens:
---


###### Asteríscos:
***


###### Underscores:
___

## Quebras de linhas {#line-breaks}

```
A forma mais simples de quebrar linhas é adicionar dois espaços no final da linha.  
Essa linha foi quebrada.
*Essa não*
```

##### Resultado:
A forma mais simples de quebrar linhas é adicionar dois espaços no final da linha.  
Essa linha foi quebrada.
*Essa não*

---
## Admoestrações {#admonitions}

São cards criados para tomar nota, dar dicas e alertar o usuário. São feitas da seguinte maneira

```no-highlight
:::note Nota
Algum conteúdo de nota. Suporta *Markdown*.
:::

:::tip Dica
Algum conteúdo de dica. Suporta *Markdown*.
:::

:::info Informação
Algum conteúdo de informação. Suporta *Markdown*.
:::

:::caution Atenção
Algum conteúdo de atenção. Suporta *Markdown*.
:::

:::danger Perigo
Algum conteúdo de perigo. Suporta *Markdown*.
:::
```

##### Resultado:
:::note Nota
Algum conteúdo de nota. Suporta *Markdown*.
:::

:::tip Dica
Algum conteúdo de dica. Suporta *Markdown*.
:::

:::info Informação
Algum conteúdo de informação. Suporta *Markdown*.
:::

:::caution Atenção
Algum conteúdo de atenção. Suporta *Markdown*.
:::

:::danger Perigo
Algum conteúdo de perigo. Suporta *Markdown*.
:::


---
## Componentes customizados {#custom-components}

Os elementos customizados precisam ser importados como código e utilizados como tags HTML.

```no-highlight
###### Essa linha no começo do documento, logo após o HEAD.
import useBaseUrl from '@docusaurus/useBaseUrl';
import ImageText from '../src/components/ImageText.js'

###### Esse é um componente que renderiza a imagem em tabela com descrição do lado direito.
<ImageText 
  image={useBaseUrl("/img/docusaurus.png")}
  title="Título da imagem"
  text="Essa é uma descrição bem curtinha sobre a imagem ao lado. Um dinossauro verde, gordinho e fofinho."
/>
```

##### Resultado:
<ImageText 
  image={useBaseUrl("/img/docusaurus.png")}
  title="Título da imagem"
  text="Essa é uma descrição bem curtinha sobre a imagem ao lado. Um dinossauro verde, gordinho e fofinho."
/>