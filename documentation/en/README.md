# Home

## About the TACO Project

The TACO project (Brazilian Table of Food Composition), coordinated by the Center for Studies and Research in Food (NEPA) at UNICAMP and funded by the Ministry of Health - MS and Ministry of Social Development and Fight Against Hunger - MDS is an initiative to provide data on a large number of nutrients in national and regional foods obtained through representative sampling and analysis performed by laboratories with analytical competence proven by inter-laboratory studies, according to international criteria.

::: tip
To learn more, read the [official site](http://www.nepa.unicamp.br/taco/home.php?ativo=home)
:::

## About this project

Initially, the TACO project has only 2 ways to consume this data. These are:

1. Through a PDF file. In this case, you need to search for the desired food and its values;
2. Through an Excel file (xls) which, in theory, represents the "database" of foods.

Building an application is almost impossible in both cases since we need the data correctly formatted, well structured, and with clear relationships between the information.

So the main goal of this project is to use the original TACO research data and structure it so that it is easy to build a client (mobile or web).

### Data processing

The beginning of the process is based entirely on the database (.xls file) they made available. However, to achieve a satisfactory result and to be able to insert it into a relational database, the following steps were taken:

1. I downloaded the original spreadsheet and uploaded it to Google Sheets;
2. I converted it from `.xls` (proprietary Microsoft format) to `.xlsx` (Office Open XML format) for better accessibility;
3. I cleaned up all the rows, columns, and font formatting. I removed empty rows, merged duplicate rows or rows that were added for better visualization in the study;
4. Replaced the non-numeric values, where:
   - `NA` (not applicable) was converted to empty (`null`);
   - `*` (values sent for re-analysis) has been converted to empty (`null`);
   - `Tr` (values between a specific range) has been converted to zero (`0`);
5. I defined English names for the columns;
6. I created another worksheet (still in the same document) that contains all the possible categories and linked theirs `id's to the food worksheet;
7. I created another sheet (still in the same document) that contains nutritional information and linked it to the `id` of the food;
8. I exported each spreadsheet in the document to `.csv` and downloaded it into the project;
9. I modeled the database using a tool called `Prisma`;
10. I created a script to populate the database in the correct order and make the relationship between the information and the food.

### Official data

To keep the original research data used for this project, [I have saved all the files from the original site](https://www.nepa.unicamp.br/taco/tabela.php?ativo=tabela) and you can consult them in the `/references/*` folder

### Technologies

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [ExpressJS](https://expressjs.com) - HTTP framework
- [Prisma](https://www.prisma.io/) - JavaScript Object-Relational Mapping (ORM) to populate the database and define the relationship;
- [SQLite](https://sqlite.org/) - Mini relational database;
- [GraphQL](https://graphql.org/) - Query language for the API;
- [Vuepress](https://v2.vuepress.vuejs.org/) - Documentation site

## Contributing

### Prerequisites

To run the project locally, you will need to have installed the following:

- [NodeJS version 18](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (dependency manager). You can follow the installation steps by clicking [here](https://pnpm.io/installation#using-corepack).
- A GraphQL client to be able to inspect the API.
  I recommend [Altair GraphQL](https://altairgraphql.dev/)

### Running the project

First, install all the dependencies for the project:

```bash
pnpm install
```

Then, run the server:

```bash
pnpm run dev
```

Now the server is running at `http://localhost:4000/grapqhl`. Now just copy this address into your GraphQL client so you can run queries and view the API documentation.

#### Prisma ORM and the Database

Because the project uses SQLite, and this generates a file that is being committed, you probably don't need to run any of the commands from the database.

But if you fork the project and want to make changes to the models, you will probably need to do a database migration so that the new columns/tables can be inserted.

When making any changes to the `src/infrastructure/prisma/schema.prisma` file, run the following command:

```bash
pnpm run db:migrate -name <change-name>
```

This will create a migration file that must be committed.

If you want to clean out the database and re-insert the original data, you can use the command:

```bash
pnpm run db:reset
```

If you want to see the database in a dashboard, you can run Prisma studio:

```bash
pnpm run studio
```

#### API Documentation

In version 1, the documentation was generated through APIDocs.
Now that the project uses GraphQL, you can view the API documentation (sample queries, fields, etc.) through your GraphQL client.

## Using in production

If you want to run the project in production mode (for deployment), there are two ways.

### Without docker

Here, you will need to follow the same prerequisite as in the contribution step.
Once you have the dependencies installed, you can run the command:

```bash
pnpm start
```

This will put the project into production mode (with logs disabled) and will also be available at the `http://localhost:4000/grapqhl` address.

### With docker

If you are familiar with docker, you have the option of running the project from an image.
Within the repository, there is a configuration file to upload the project using docker-compose, so you can just do:

```bash
docker compose up -build
```

If you want to use the remote image, you can run the following:

```bash
docker run -it --rm --name taco -p 4000:4000 raulfdm/taco-api
```

## FAQ

### Is there an online demo?

No.
I used to leave a version hosted on Heroku, but people were building apps that hit it directly, and my usage quota expired very quickly.

Also, Heroku stopped offering the free plan, making it even more difficult.

### Can I use this project to build a client application?

Yes, the project is free for anyone to use. However, as I said before, it is no longer available online. You must upload the server to a cloud service if you want access.

### Is the project still maintained?

More or less.
When I created it, I intended to study API builds using NodeJS.
When I want to test something new that fits this scope, I update one thing or another. Still, my career and professional focus is not that. I have little time available, and I always prefer other projects.

### Why did you convert the project from Rest to GraphQL?

I took this decision precisely because I wanted to revisit the creation of APIs in Node but using the new tools, and also because I believe it is much easier and more intuitive to bring the information that the customer needs.
If you are not so familiar with GraphQL, I strongly recommend that you study the basics to at least be able to consume it, or use version 1 of the project.

### Why a database instead of local files?

In version 2, I chose a relational database because I believe that the structure of Taco's data is extremely relational.
There is a relationship between the category and the food, the food and its amino acids, the food, and its nutrients, etc.
Making these relationships using a database is much easier than using JSON files.

### Why SQLite and not Postgresql or another database?

Initially, I started with Postgres. However, I think it offers much more than this application needs (5 or 6 tables with at most 500 rows) and adds complexity to the application deployment.
SQLite allows us to save the database along with the rest of the files, making the whole process easier.

## Legal Information

This is a non-profit project.
All data used was researched and produced by [UNICAMP](http://Unicamp.br), and all copyrights are reserved to the institution.

## Doubts?

If you have any questions or suggestions about this project, look in the "discussion" tab on the GitHub of this repository. If your question is not there, start a new thread [by clicking here](https://github.com/raulfdm/taco-api/discussions/new), and I will answer as soon as possible!
