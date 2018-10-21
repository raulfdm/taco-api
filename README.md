# TACO.js

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

## About this project

The main goal of this project was to provide a better format to the data provided on TACO research. Actually they have only 2 possible ways to consult their data:

1. By PDF file. In that case, you have to find your food and follow the lines;
1. By tabulated xls. The researchers define all data in a way to make easy to print but not to filter or use it. Also there's 3 sheet inside with different information about the same food.

Of course it can work as basic consult but as a development information isn't so good.

With this API now you can consult the same data but in JSON API format with some filters/routes.

## API Documentation

You can consult the API documentation at: https://taco-food-api.herokuapp.com/docs

## Official Research

In order to keep the original research as `source of truth` of this project, I've saved all available files ([got from NEPA website](http://nepa.unicamp.br/taco/tabela.php)). You can consult them in [references](./references) folder.

## Stack

- [NodeJS](https://expressjs.com) - as server side
- [ExpressJS](https://expressjs.com) - as HTTP framework
- [Heroku](https://www.heroku.com/) - as cloud platform
- [apidocs](http://apidocjs.com) - as API documentation generator

## Want to say something?

If you have any question, suggestion or something, please feel free to open an issue. I'll be happy to answer it! :)

## Legal Information

> This is a non-profit project.

All data provided on this project was researched and produced by [UNICAMP](http://Unicamp.br), therefore all copyright are reserved to them.

### License

[MIT](./LICENSE.md)
