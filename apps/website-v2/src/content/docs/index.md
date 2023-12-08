---
title: "TACO GraphQL API"
---

# Início

## Sobre o projeto TACO

O projeto TACO (Tabela Brasileira de Composição de Alimentos), coordenado pelo Núcleo de Estudos e Pesquisas em Alimentação (NEPA) da UNICAMP e com financiamento do Ministério da Saúde – MS e Ministério do Desenvolvimento Social e Combate à FOME – MDS é uma iniciativa para proporcionar dados de um grande número de nutrientes em alimentos nacionais e regionais obtidos por meio de amostragem representativa e análises realizadas por laboratórios com competência analítica comprovada por estudos interlaboratoriais, segundo critérios internacionais.

::: tip
Para saber mais, leia o [site oficial](http://www.nepa.unicamp.br/taco/home.php?ativo=home)
:::

## Sobre este projeto

Originalmente, o projeto TACO possui somente 2 maneiras de consumir esses dados. São elas:

1. Através de um arquivo PDF. Neste caso, você precisa buscar o alimento desejado e seus respectivos valores;
2. Através de um arquivo Excel (xls) que em tese, representa o "banco de dados" dos alimentos.

Em ambos casos, a construção de uma aplicação é quase impossível, dado que precisamos dos dados corretamente formatados, bem estruturados e com relações claras entre as informações.

Assim, o objetivo principal deste projeto é usar os dados originais da pesquisa da TACO e estruturar de tal forma que fique fácil para construção de um cliente (mobile ou web).

### Processamento dos dados

O início do processo se baseia inteiramente no banco de dados (arquivo .xls) disponibilizado por eles. Entretanto, para conseguir um resultado satisfatório e poder inseri-los em um banco de dados relacional, as seguintes etapas foram feitas:

1. Baixei a planilha original e subi para o Google Sheets;
2. Converti de `.xls` (formato proprietário da Microsoft) para `.xlsx` (formato do Office Open XML) para dar mais acessibilidade;
3. Fiz a limpeza de todas as formatações de linhas, colunas, fontes. Removi as linhas vazias, unifiquei linhas duplicadas ou que foram adicionadas para melhor visualização no estudo;
4. Substitui os valores não numéricos, onde:
   - `NA` (não aplicável) foi convertido para vazio (`null`);
   - `*` (valores enviados para re-análise) foi convertido para vazio (`null`);
   - `Tr` (valores entre um certo range) foi convertido para para zero (`0`);
5. Defini nomes em inglês para as colunas;
6. Criei uma outra planilha (ainda no mesmo documento) que contém todas as categorias possíveis e linkei seus respectivos `id`s na planilha dos alimentos;
7. Criei uma outra planilha (ainda no mesmo documento) que contém informações nutricionais e linkei com o `id` do alimento;
8. Exportei cada planilha no documento para `.csv` e baixei dentro do projeto;
9. Fiz a modelagem do banco de dados usando uma ferramenta chamada `Prisma`;
10. Criei um scripts para popular o banco de dados na ordem correta, e fazendo a relação entre a informação e o alimento

### Dados oficiais

Para manter os dados originais da pesquisa utilizado para realização desse projeto, [salvei todos os arquivos do site original](https://www.nepa.unicamp.br/taco/tabela.php?ativo=tabela) e você pode consultados na pasta `/references/*`

### Tecnologias

- [Bun](https://bun.sh/) - JavaScript runtime
- [ExpressJS](https://expressjs.com) - Framework HTTP
- [Prisma](https://www.prisma.io/) - JavaScript Object-Relational Mapping (ORM) para popular o banco de dados e definir a relação;
- [SQLite](https://sqlite.org/) - Mini banco de dados relacional;
- [GraphQL](https://graphql.org/) - Query language para a API;
- [Vuepress](https://v2.vuepress.vuejs.org/) - Site da documentação

## Contribuindo

### Pré-requisitos

Para rodar o projeto localmente, você vai precisar ter instalado:

- [NodeJS versão 20 or higher](https://nodejs.org/en) - O Prisma ainda precisa de Node pra gerar os arquivos;
- [Bun](https://bun.sh/) - Para instalar as dependencias, rodar o servidor e os scripts;
- Algum GraphQL cliente para poder inspecionar a API. Eu recomendo o [Altair GraphQL](https://altairgraphql.dev/)

### Rodando o projeto

Primeiro, instale todas as dependências do projeto:

```bash
bun install
```

Depois, navegue até a pasta da API pra facilitar rodar os comandos:

```bash
cd apps/taco
```

Agora, rode o servidor:

```bash
bun run dev
```

Feito isso, o servidor estará rodando no `http://localhost:4000/grapqhl`. Agora, basta copiar este endereço dentro do seu cliente GraphQL para poder rodar queries e ver a documentação da API.

#### Prisma ORM e o Banco de dados

Porque o projeto utiliza SQLite e esse gera um arquivo que está sendo comitado, provavelmente você não precisará rodar nenhum dos comandos do data base.

Mas, se forkar o projeto e quiser fazer alterações nos modelos, você provavelmente precisará fazer uma migration no banco de dados para que as novas colunas/tabelas sejam inseridas.

Ao fazer qualquer alteração no arquivo `src/infrastructure/prisma/schema.prisma`, rode o seguinte comando:

```bash
bun run db:migrate –name <nome-da-alteração>
```

Isso irá criar um arquivo de migration que deve ser commitado.

Caso queira limpar o banco de dados e reinserir os dados originais, pode usar o comando:

```bash
bun run db:reset
```

Caso queira ver o banco de dados em um dashboard, você pode subir o Prisma studio:

```bash
bun run studio
```

#### Documentação da API

Na versão 1, a documentação era gerada através do APIDocs.
Agora que o projeto utiliza GraphQL, você pode ver a documentação da API (exemplo de queries, campos, etc) através do seu cliente GraphQL.

## Usando em produção

Caso você queira rodar o projeto em modo de produção (para deployment), existem duas maneiras.

### Sem docker

Aqui, você vai precisar seguir o mesmo pré-requisito da etapa de contribuição.
Uma vez que tem as dependências instaladas, poderá rodar o comando:

```bash
bun start
```

Isso colocará o projeto em modo de produção (com os logs desabilitados) e também estará disponível no endereço `http://localhost:4000/grapqhl`.

### Com docker

Caso você tenha familiaridade com docker, existe a opção de rodar o projeto através de uma imagem.
Dentro do repositório, existe uma arquivo de configuração para subir o projeto usando docker compose, assim, você pode fazer apenas:

```bash
docker compose up –-build
```

Caso queira usar a imagem remota, pode rodar:

```bash
docker run -it --rm --name taco -p 4000:4000 raulfdm/taco-api
```

## FAQ

### Por que você migrou de Node pra Bun?

Bun é um runtime JavaScript que tem foco total em performance.

Bun possui (quase) todas APIs do Node implementadas com zero breaking change, ou seja, não possui nenhum incompatibilidade com o ecossistema Node, no máximo, alguma API que ainda não foi implementada.

Além disso, Bun conta com várias funcionalidades e ferramentas integradas, como por exemplo, suporte nativo à TypeScript, gerenciamento de dependencias, tests, etc.

Ainda que esteja na versão 1, Bun já está bem maduro e pronto pra produção.

### Existe uma demo online?

Não.
Antigamente eu deixava uma versão hospedada no heroku, mas as pessoas estavam construindo aplicações que batiam diretamente nele e a minha quota de uso expirava muito rápido.

Além disso, o Heroku deixou de oferecer o plano gratuito, dificultando ainda mais o processo.

### Posso utilizar esse projeto para construir uma aplicação cliente?

Sim, o projeto é livre para qualquer pessoa utilizar. Porém, como disse anteriormente, ele não está mais disponível online, ou seja, você precisará subir o servidor em algum serviço de cloud caso queira ter acesso.

### O projeto ainda é mantido?

Mais ou menos.
Quando eu o criei, a intenção era estudar construções de API utilizando NodeJS.
Quando quero testar algo novo e que cabe neste escopo, eu atualizo uma coisa ou outra, mas como meu foco de carreira e profissional não é esse e eu tenho pouco tempo disponível, sempre dou preferência para outros projetos.

### Por que você converteu o projeto de Rest para GraphQL?

Eu tomei essa decisão justamente porque queria revisitar a criação de APIs em Node, mas utilizando as novas ferramentas, e também porque eu acredito ser muito mais fácil e intuitivo você trazer as informações que o consumidor precisa.
Caso você não esteja tão familiarizado com GraphQL, recomendo fortemente que estude o básico para pelo menos conseguir consumir, ou então, utilize a versão 1 do projeto.

### Por que um banco de dados ao invés dos arquivos locais?

Na versão 2, eu escolhi um banco de dados relacional porque acredito que a estrutura dos dados da Taco é extremamente relacional.
Existe uma relação entre a categoria e o alimento, o alimento e seus aminoácidos, o alimento e seus nutrientes, etc.
Fazer essas relações utilizando um banco de dados é muito mais fácil do que utilizar arquivos JSON.

### Por que SQLite e não Postgresql ou outro banco de dados?

Inicialmente eu comecei com Postgres. Porém, acho que ele oferece muito mais do que essa aplicação de fato precisa (umas 5 ou 6 tabelas com no máximo 500 linhas), além de adicionar complexidade no deploy da aplicação.
O SQLite permite a gente gravar a base de dados junto com o restante dos arquivos, e isso facilita todo o processo.

## Informações Legais

Este é um projeto sem fins lucrativos.
Todos os dados utilizados foram pesquisados e produzidos pela [UNICAMP](http://Unicamp.br), e todo direito autoral é reservado à instituição.

## Dúvidas?

Se você tiver alguma dúvida ou sugestão sobre este projeto, procure na aba "discussão" no Github deste repositório. Caso sua dúvida não esteja lá, inicie uma nova discussão [clicando aqui](https://github.com/raulfdm/taco-api/discussions/new) e eu responderei o quanto antes!
