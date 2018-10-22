var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var urlConnetcion = 'mongodb://localhost:27017';

MongoClient.connect(urlConnetcion, function(err, connection) {
	assert.equal(null, err);
	console.log("Successfully connected to server");
	var db = connection.db('video');
	var moviesCollection = db.collection('movies');
	moviesCollection.find({}, function(err, docsMovies) {
		docsMovies.forEach(function(movie) {
			console.log(movie.title);
		});

	});

	connection.close();

	console.log("Called find()");
});
