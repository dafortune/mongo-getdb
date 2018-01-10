An opinionated way to connect with the mongodb driver.

## Installation

	npm install mongo-getdb



## Usage

~~~javascript
const mongoGetDb = require('mongo-getdb');
const getDb = mongoGetDb('mongo://localhost/mydb');

getDb(function (db) {
	db.collection('products')
	  .find({})
	  .toArray(function(er, prods) {

	  });
});
~~~

mongoGetDb allows the same parameters than [MongoClient.connect](https://github.com/mongodb/node-mongodb-native/blob/master/docs/articles/MongoClient.md#mongoclientconnect).

## Why?

Because I keep doing the same thing over and over everytime I want to use mongodb from node and because this is what works for us most of the time.

This will "memoize" the result of MongoClient.connect, so you can use getDb anywhere.

## Usage with multiples databases

~~~javascript
const mongoGetDb = require('mongo-getdb');

const getDb1 = mongoGetDb('mongodb://localhost/mydb');
const getDb2 = mongoGetDb('mongodb://localhost/mydb2');

getDb1(function (db) {
	db.collection('products')
	  .find({})
	  .toArray(function(er, prods) {

	  });
});
~~~

## License

MIT - 2013 - José F. Romaniello
