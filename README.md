# TACO API

> Brazilian Table of Food Composition (TACO) consumer library

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

## Project TACO

TACO is an initiative between Nucleus of Studies and Research in Food (NEPA) of UNICAMP with a funding from brazilian Ministry of Health (MS) and Ministry of Social Development and Fight against Hunger (MDS) to provide data of a large number of nutrients in national and regional foods obtained through representative sampling and analysis carried out by laboratories with analytical competence proven by interlaboratory studies, according to international criteria.

> [Know more (in pt-br)](http://www.nepa.unicamp.br/taco/home.php?ativo=home)

## About this project

The main goal of this project was to take the data from original research and provide as API using modern development techniques.

Actually the original project have only 2 possible ways to consult the data:

1. By PDF file. In that case, you have to find the food you want and be sure your looking the correct value;
1. By tabulated xls. The researchers have created the XLS to be an database, however, they tabulated it and made nice to print, not to filter or to extract. Also there's 3 different sheet containing specific data for the same food.

The way they've chosen can work if you want to do a quick consult, however, if you want to build an application with this data, you have to format it to make it easy to use and that's this project about: better format.

### Step-by-step

The following steps describe the whole workflow I did to build this project:

1. Extract the original xls, cleaning unnecessary styles, columns and rows;
1. Repeat the above step for each sheet;
1. Merge all 3 sheets into one;
1. Generate a CSV (Comma-separated values) and export it to a JSON format;
1. Create another JSON file containing all `categories` and then create a relation between FOOD - Category;
1. Create 2 end-points `food` and `category` to get this data

### API Documentation

You can consult the API documentation at: https://taco-food-api.herokuapp.com

### Official Research

In order to keep the original research as `source of truth` of this project, I've saved all available files ([got from NEPA website](http://www.nepa.unicamp.br/taco/tabela.php)). You can consult them in [references](./references) folder.

### Stack

- [NodeJS](https://expressjs.com) - as server side
- [ExpressJS](https://expressjs.com) - as HTTP framework
- [Heroku](https://www.heroku.com/) - as cloud platform
- [apidocs](http://apidocjs.com) - as API documentation generator

---

## Want to say something?

If you have any question, suggestion or something, please feel free to open an issue. I'll be happy to answer it! :)

---

## Legal Information

> This is a non-profit project.

All data provided on this project was researched and produced by [UNICAMP](http://www.unicamp.br), therefore all copyright are reserved to them.

### License

[MIT](./LICENSE.md)
