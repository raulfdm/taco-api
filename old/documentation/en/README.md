# Home

## About the project TACO

TACO is an initiative between the Nucleus of Studies and Research in Food (NEPA) of UNICAMP with funding from the Brazilian Ministry of Health (MS) and Ministry of Social Development and Fight against Hunger (MDS).

The goal is to provide data of many nutrients in national and regional foods obtained through representative sampling and analysis carried out by laboratories with analytical competence proven by interlaboratory studies, according to international criteria.

::: tip Tip
To know more, read the [official website (in Portuguese)](http://www.nepa.unicamp.br/taco/home.php?ativo=home)
:::

## About this project

O objetivo principal deste projeto é usar os dados originais da pesquisa da TACO e provê-los através de uma API para ser utilizado para construção de aplicações.

The main goal of this project is to use the official data from the TACO research and provide them through a REST API.

Initially, TACO research provides the data in only two ways:

1. PDF File. In this case, you have to search the food name manually and check-in its row the reference values;
2. A XLS (Excel) file, where the researchers have created a database. Despite, the data formatting is far from ideal, and it's still hard to normalize the information there.

It wouldn't be a big problem for a dietist to consult food information in both cases. However, if someone wants to use the data to create an application, it becomes a real problem.

### Data sanitization process

For creating this project, I've done the following actions:

1. Download the original XLS file and clean up the unnecessary styles, empty rows, color, etc., (this process is applied on the three tabs);
2. Merge the three tabs into a single one because it's the same food but with different data;
3. Generate a CSV (comma-separated value) and export those data into a JSON format;
4. Create another JSON file containing food `categories`;
5. Create a relation between `food` and its `category`;
6. Create two endpoints (`food` and `category`) to expose those data via `/api/v1/<end-point>`;

### Oficial data and research

To preserve the original data used in this project, I've saved all files from the [official research website](https://www.nepa.unicamp.br/taco/tabela.php?ativo=tabela) at `<rootDir>/references` folder.

It's essential to keep these files in case the original website went shut down or appears offline for any reason.

### Tech Behind

- [NodeJS](https://nodejs.org/en/) - JS Backend;
- [ExpressJS](https://expressjs.com) - HTTP Framework;
- [apidocs](http://apidocjs.com) - Auto doc-gen for Rest APIs;
- [Vuepress](https://vuepress.vuejs.org/) - Markdown-based static site generate for this overall documentation;

## Getting Started

### Running the API

For any of the following cases, the API will be boot at `http://localhost:4000`. When you hit this URL, you'll access the auto-gen API docs where you can see what's available to use.

#### Via container

If you're familiar with Docker, there are two ways of running this project:

The first is building the image locally. To do that, make sure you have docker-compose installed. Then, in the root level of this project run:

```bash
docker-compose up
```

The second way is by using the public image hosted at Docker hub. For that, first, download the `taco-api` image:

```bash
docker pull raulfdm/taco-api
```

Then run the following command:

```bash
docker run -it --rm --name taco -p 4000:4000 raulfdm/taco-api
```

#### No container

If you want to run the API without a container, all you need to do is install the project dependencies with `npm`:

```bash
cd taco-api
npm install
```

Then boot the server with `npm start`.

## Questions and Suggestions

If you have any questions, concerns, or suggestions, you can always check Github's repo's "discussion" tab at this project.

If you can't find what you're looking for, create a [new discussion](https://github.com/raulfdm/taco-api/discussions/new) I can visualize and answer as soon as possible.

## FAQ

### Is the API offline?

Yes, I've shut it down.

The reason for that is that I've initially hosted it on my personal Heroku account. Because some people created projects on top of it, TACO API always stayed online, consuming my entire quota (which is limited since I use the free-tier and share it with other projects).

### Can I use this project to build a client?

Yes, the project is free to use. The only thing you have to do is host it yourself wherever cloud platform you want to.

::: tip
I often use Heroku because it's straightforward, but it can be any other.

[Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
:::

### Is the project still being maintained?

Somewhat.

When I've created this project, the end goal was to learn about Backend with node and REST APIs. However, today I'm focused on other subjects and studies.

Maybe for the future would be lovely to convert this into GraphQL, fix some data inconsistencies and even add data from different countries (TACO is a Brazilian project).

## Legal information

This project is non-profitable.

All used data were part of a research made by [UNICAMP](http://Unicamp.br)(Campina's University), and all rights are reserved to them.

## Licença

[MIT](./LICENSE.md)

---
