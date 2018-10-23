var express = require('express'),
    app = express(),
    router = express.Router();
    engines = require('consolidate'),
    MongoCliente = require('mongodb').MongoClient,
    assert = require('assert'),
    bodyParser = require('body-parser');

var urlConnection = 'mongodb://localhost:27017';

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function errorHandle(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', {error: err});
}

app.use(errorHandle);


MongoCliente.connect(urlConnection, function(err, connection) {
    
    assert.equal(null, err);
    console.log('Successfully connected to server');
    
    var db = connection.db('video');
    var moviesCollection = db.collection('movies');

    app.get('/', function(req, res) {
        res.render('form_movie');
    });

    app.route('/post_movie')
    .post(function(req, res, next) {
        moviesCollection.insertOne(req.body, function(err, doc){
            if(!err) {
                res.send('register a movie');
            }
        });
        console.log(req.body);
    });

    var server = app.listen(3500, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
    });
});

