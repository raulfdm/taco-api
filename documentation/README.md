# TACO API

> Tabela Brasileira de Composição Alimentar

<p align="center">
  <a href="https://travis-ci.org/raulfdm/taco-api">
    <img src="https://travis-ci.org/raulfdm/taco-api.svg?branch=master"
         alt="build status">
  </a>
  <a href="https://david-dm.org/raulfdm/taco-api">
    <img src="https://david-dm.org/raulfdm/taco-api/status.svg"
         alt="dependencies Status">
  </a>
  <a href="https://david-dm.org/raulfdm/taco-api?type=dev">
    <img src="https://david-dm.org/raulfdm/taco-api/dev-status.svg"
         alt="devDependencies Status">
  </a>
</p>

## Sobre o projeto TACO

O projeto TACO (Tabela Brasileira de Composição de Alimentos), coordenado pelo Núcleo de Estudos e Pesquisas em Alimentação (NEPA) da UNICAMP e com financiamento do Ministério da Saúde – MS e Ministério do Desenvolvimento Social e Combate à FOME – MDS é uma iniciativa para proporcionar dados de um grande número de nutrientes em alimentos nacionais e regionais obtidos por meio de amostragem representativa e análises realizadas por laboratórios com competência analítica comprovada por estudos interlaboratoriais, segundo critérios internacionais.

> [Para saber mais](http://www.nepa.unicamp.br/taco/home.php?ativo=home)

## Configuração

### Docker

Se você está familiarizado ou prefere usar Docker, existem duas maneiras de subir um container deste projeto.

A primeira é utilizando a imagem pública no Docker hub deste projeto. Ao final, ambos os processos deixarão disponíveis a documentação da API em `http://localhost:4000`.

#### Imagem publica

Primeiro, baixe a imagem via docker hub:

```bash
docker pull raulfdm/taco-api
```

Feito isso, rode suba um container utilizando a imagem baixada:

```bash
docker run -it --rm --name taco -p 4000:4000 raulfdm/taco-api
```

#### Utilizando o projeto

Caso queira usar docker em tempo de desenvolvimento, basta clonar este repositório:

```bash
git clone https://github.com/raulfdm/taco-api.git
```

E rodar o docker compose para subir o container:

```bash
docker-compose up
```

### Sem Container

Caso não queira rodar através de um container, primeiro, clone este repositório e instale as dependências:

```bash
cd taco-api
npm install
```

Agora, suba o servidor através do comando `start`:

```bash
npm start
```

Feito isso, você pode checar a documentação da API em `http://localhost:4000`.

## Sobre este projeto

O objetivo principal deste projeto é usar os dados originais da pesquisa da TACO e prove-los através de uma API para ser utilizado para construção de aplicações.

Originalmente, o projeto TACO possui somente 2 maneiras de consumir esses dados. São elas:

1. Através de um arquivo PDF. Neste caso, você precisa buscar o alimento desejado e seus respectivos valores;
2. Através de um arquivo Excel (xls). Os pesquisadores que criaram esse arquivo com o intuito de servir como um banco de dados, porém, a formatação dos dados está longe de ser otimizada para busca e consumo.

Em ambos casos, para uma consulta rápida de um nutricionista, talvez não seja nenhum problema, porém, impossibilita a criação de alguma aplicação cliente (mobile ou web).

### Processo de formatação dos dados

Para criar esse projeto, eu segui os seguintes passos:

1. Baixar e fazer a limpeza do XLS original, limpando estilos desnecessários e removendo colunas e linhas em branco. Esse processo é aplicado nas 3 abas da planilha;
2. Fundir (merge) as 3 abas em apenas uma aba para um ponto central de dados;
3. Gerar um CSV (Comma-separated value ou valores separados por virgula) e exportar esses dados em um formato JSON;
4. Criar outro arquivo JSON, contendo todas as `categorias` (`categories`) e criar uma relação entre ALIMENTO (FOOD) e CATEGORIA (CATEGORY);
5. Criar 2 end-points `food` e `category` para expor os dados.

E assim, você pode consultar tanto os dados via `/api/v1/<end-point>`.

### Documentação da API

Ao subir o servidor e acessar `http://localhost:4000`, você verá a documentação com exemplos e descrição dos endpoints existentes e como consumi-los.

### Official Research

In order to keep the original research as `source of truth` of this project, I've saved all available files ([got from NEPA website](http://nepa.unicamp.br/taco/tabela.php)). You can consult them in [references](./references) folder.

### Tecnologias

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [ExpressJS](https://expressjs.com) - Framework HTTP
- [apidocs](http://apidocjs.com) - Gerador de documentação de APIS

---

## Quer dizer alguma coisa?

Se você tiver alguma dúvida ou sugestão sobre este projeto, procure na aba "discussion" no Github deste repositório. Caso sua dúvida não esteja lá, inicie uma nova discussão [clicando aqui](https://github.com/raulfdm/taco-api/discussions/new) e eu responderei o quanto antes!

---

## Informações Legais

> This is a non-profit project.

Este é um projeto sem fins lucrativos.

Todos os dados utilizados foram pesquisados e produzidos pela [UNICAMP](http://Unicamp.br), e todo direito autoral é reservado à instituição.

## Licença

[MIT](./LICENSE.md)
