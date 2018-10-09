# TACO - API
> TACO - Tabela Brasileira de Composição de Alimentos

## Goal

The main goal of this project is create a Restful API to be consumed from a client-side app and makes easier to consult all the informations about the Brazilian Food Composition Table made by UNICAMP.

For more informations about this Table you can consult [here](http://www.nepa.unicamp.br/taco/tabela.php).

## Technologies

The technologies used are:

* [NodeJS](https://nodejs.org) - Server
* [ExpressJS](http://expressjs.com/) - Framework node.js
* [MongoDB](https://www.mongodb.com/) - NoSql database
* [Heroku](https://www.heroku.com/) - Web platform


## Informations
All the informations used in this application was picked on oficial XLS Database offered by UNICAMP in their on [website](http://www.unicamp.br/nepa/taco/tabela.php?ativo=tabela), however, I migrate (not fully yet) it to JSON scruture to make easy to manipulate and distribute it.

## API

> Consult food all classes registred

|   Method      |       URL                                             | Response      |
|   ---         |                       ---                             | ---           |
|   GET         |   https://taco-alimentos.herokuapp.com/categorias     | Collection    |

---

> Consult food classes by ID

|   Method      |       URL                                                 | Response  |
|   ---         |                       ---                                 | ---       |
|   GET         |   https://taco-alimentos.herokuapp.com/categorias/{id}    | Class     |

---

> Consult all foods registred

|   Method      |       URL                                             | Response      |
|   ---         |                       ---                             | ---           |
|   GET         |   https://taco-alimentos.herokuapp.com/alimentos      | Collection    |

---

> Consult food by ID

|   Method      |       URL                                                 | Response  |
|   ---         |                       ---                                 | ---       |
|   GET         |   https://taco-alimentos.herokuapp.com/alimentos/{id}      | Food      |

---

## Legal Informations
All data used here was made by UNICAMP and all copyrights are reserverd to the university.

This is a non-profit project.
