# About Week One - Introduction

Brief the Week One from M101JS.

## Homework Folder Quick Access

| Homework  | Topic |
| ------------- | ------------- |
| Homework 1  | [Hello MongoDB](https://github.com/lucascco/mongoDBUniversity-M101JS/tree/master/homework/week1/hw1-1)  |
| Homework 2  | [Run Node](https://github.com/lucascco/mongoDBUniversity-M101JS/tree/master/homework/week1/hw1-2)  |
| Homework 3  | [Run Express](https://github.com/lucascco/mongoDBUniversity-M101JS/tree/master/homework/week1/hw1-3)  |


## What is MongoDB?

MongoDB is a document database non relational that provide features to insert, update, find and delete data in format JSON. There are a set of functionality to create and manager the MongoDB with scalability and safety.

## Important Concepts

| Concept  | Describe |
| ------------- | ------------- |
| Document | Document is single record in MongoDB, can be for instance: Book, Person, City   |
| Collection  | Collection is a documents list, can be: Library, Crowd, Country  |
| Database  | Database is union of all collection from one applications  |
| MongoShell  | CLI Program to work with MongoDB, like a app client doing CRUD on database  |
| MongoDB  | Instance of server database listen on default port 27017 |
| JSON  | Data Structure of documents and collection on MongoDB  |
| BSON  | Format which MongoDB store the data  |


## Most Important Learned Commands

### Start server database

```sh
mongod
```
### Start CLI program called MongoShell

```sh
mongo
```

### In MongoShell
#### Set a current database. If not exist, create it.

```sh
use db01
```
#### Insert a document in collection movies from current database with alias db.
```sh
db.movies.insert({name: "The Lion King" , year: 1996})
```

#### Find a document in collection movies, all document with the year 1996.
```sh
db.movies.find({year: 1996})
```


## Key Words
#JSON #BSON #Non-Relational #Collections #Documents #Database #V8JavaScript #C++ #mongo #mongod #Node.js #Express