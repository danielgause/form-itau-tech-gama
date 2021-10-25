# Desafio Individual – Formulário de cadastro Pessoal

## Autor:

- Daniel Gause
- **Idade**: 43 anos
- **Tipo de deficiência:** Cegueira total
- **CID:** H54.1 e h54.1

## Objetivo:

Desenvolvimento de um cadastro simples e acessível em html, css e usando funções de javascript. 
## Ferramenta:

Visual Studio Code no Windows.

## Linguagens: 

- CSS
- HTML
- JavaScript

## Descrição do site

### HTML

Inicia com `<!DOCTYPE HTML>`, uma declaração para avisar aos navegadores que é um documento HTML, e dentro `<html>` representa a raiz de um documento HTML e contém o atributo "lang" onde declara o idioma da página web a fim de ajudar os mecanismos de busca e os navegadores. 

Dentro dele, o elemento `<head>` designado para informar os metadados e buscar os recursos. Está entre `<html>` e `<body>`. 

#### Metadados

- O `<link>` é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:
  - O atributo "`rel`" é um relacionamento de tipo de arquivo;
  - O atributo "`type`" é um tipo de arquivo;
  - O atributo "`media`" especifica quais os dispositivos o documento deve ser renderizado.

- `<meta charset="UTF-8">`: É um elemento de metadado para a codificação e a renderização de caracteres para o documento HTML
- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: É um elemento de metadado de fornecimento de HTTP para o conteúdo do navegador
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: É um elemento de metadado para renderizar a compatibilidade de visualização da página com todos os dispositivos
- `<title>Formulário de Cadastro</title>`: O <title> é um elemento que renderiza o título para a aba do navegador

#### Corpo

O elemento `<body>` renderiza todo o corpo de um documento.

No corpo são encontrados os elementos <div>, que são divisões ou seções num documento HTML. O atributo "`class`" é um nome de classe para um elemento para pegar os seletores de um arquivo CSS.

Além disso, numa divisão, temos:

- `<h1>` é um cabeçalho de primeiro grau.
- `<p>` é uma definição de parágrafos.

#### Formulário

O `<form>` é um elemento de criação de formulário usado para onde o usuário possa preencher os campos. Nele, tem um atributo "`onsubmit`" é um evento de submissão em JavaScript que executa a função.

No form temos:

##### Rótulos

- O `<label>` é um elemento que rotula a informação.
  - O atributo "`for`" é um método que pega o identificador do campo de entrada.

##### Campos de entrada

- O `<input>` é um elemento de campo de entrada para o usuário escrever o valor e preenchê-lo.
  - O atributo "`id`" é uma vinculação do campo ao rótulo.
  - O atributo "`required`" significa que o campo não pode ser vazio.
  - O atributo "`maxlength`" define o limite de caracteres.
  - O atributo "`placeholder`" é um valor da dica ou do exemplo.
O atributo "`autocomplete="off""` foi usado em entradas específicas para proteção de dados sensíveis.





#### Fim

O atributo  "`onkeydown`" foi usado para executar a função de preenchimento dos pontos e ífem da máscara do cpf. 
O comando onblur="pesquisacep(this.value);" possue um evento "onblur" que checa se o CEP é válido ou não e também preenche todos os campos de endereço de forma automática. 
O comando `<input type="reset" id="limpar" value="Limpar dados" />` é um botão com valor de reset, ou seja,limpa o formulário
O comando `<input id="cadastrar" type="submit" value="Enviar dados">` é um botão de submissão com um valor para renderizar

O comando `<script type="text/javascript" src="js/script.js"></script>` é elemento para anexar o arquivo externo em JavaScript e define o tipo de documento



### JavaScript

Foi desenvolvido para esse projeto 3 máscaras em javascript para os campos: Cpf, telefone fixo e telefone celular.

Foi usado nesse projeto a API do ViaCep.

No fim, na última função, temos um comando `window.location.href`, que encaminha para próxima página de mensagem enviada com sucesso. 

## Referências

### HTML

Vídeos da trilha de aprendizagem da Gama Academy, e apostilas diversas.

### JavaScript

- [Validação de CEP pelo ViaCEP](https://viacep.com.br/#:~:text=Acessando%20o%20webservice%20de%20CEP,piped%22%20ou%20%22querty%22.)

### CSS

https://www.devmedia.com.br/css3-flexbox-funcionamento-e-propriedades/29532

E método de erro e acerto, visto ser deficiente visual total e não ter uma exata noção do visual, com a colaboração de pessoas que veem.

