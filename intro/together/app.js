var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb'),
    assert = require('assert');

var urlConnection = 'mongodb://localhost:27017';

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect(urlConnection, function(err, connection) {
    
    assert.equal(null, err);
	console.log("Successfully connected to server");
    
    
    app.get('/', function(req, res) {
        var db = connection.db('video');
        var moviesCollection = db.collection('movies');
        moviesCollection.find({}, function(err, docsMovies) {
            docsMovies.toArray(function(err, movies) {
                res.render('movies', { 'movies': movies });
            });
        });
    });
    

    app.use(function(req, res) {
        res.sendStatus(404);
    });

    // connection.close();
    
    console.log("Called find()");
    
    var server = app.listen(3500, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
    });

});