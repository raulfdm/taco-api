---
title: "FAQ"
---

## Why did you switch from Node to Bun?

Bun is a JavaScript runtime that is entirely focused on performance.

Bun has (almost) all of Node's APIs implemented with zero breaking changes, meaning there is no incompatibility with the Node ecosystem, at most, some APIs that have not yet been implemented.

In addition, Bun includes various integrated functionalities and tools, such as native TypeScript support, dependency management, testing, etc.

Even though it is still in version 1, Bun is already quite mature and ready for production.

## Is there an online demo?

No.
I used to leave a version hosted on Heroku, but people were building apps that hit it directly, and my usage quota expired very quickly.

Also, Heroku stopped offering the free plan, making it even more difficult.

## Can I use this project to build a client application?

Yes, the project is free for anyone to use. However, as I said before, it is no longer available online. You must upload the server to a cloud service if you want access.

## Is the project still maintained?

More or less.
When I created it, I intended to study API builds using NodeJS.
When I want to test something new that fits this scope, I update one thing or another. Still, my career and professional focus is not that. I have little time available, and I always prefer other projects.

## Why did you convert the project from Rest to GraphQL?

I took this decision precisely because I wanted to revisit the creation of APIs in Node but using the new tools, and also because I believe it is much easier and more intuitive to bring the information that the customer needs.
If you are not so familiar with GraphQL, I strongly recommend that you study the basics to at least be able to consume it, or use version 1 of the project.

## Why a database instead of local files?

In version 2, I chose a relational database because I believe that the structure of Taco's data is extremely relational.
There is a relationship between the category and the food, the food and its amino acids, the food, and its nutrients, etc.
Making these relationships using a database is much easier than using JSON files.

## Why SQLite and not Postgresql or another database?

Initially, I started with Postgres. However, I think it offers much more than this application needs (5 or 6 tables with at most 500 rows) and adds complexity to the application deployment.
SQLite allows us to save the database along with the rest of the files, making the whole process easier.

## Legal Information

This is a non-profit project.
All data used was researched and produced by [UNICAMP](http://Unicamp.br), and all copyrights are reserved to the institution.

## Doubts?

If you have any questions or suggestions about this project, look in the "discussion" tab on the GitHub of this repository. If your question is not there, start a new thread [by clicking here](https://github.com/raulfdm/taco-api/discussions/new), and I will answer as soon as possible!
