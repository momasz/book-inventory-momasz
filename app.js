var express = require('express');
var app = express();
var bodyParser = require('body-parser');

function init (stockRepository) {
  var routes = require('./routes')(stockRepository);

  app.use(bodyParser.json());
  app.use(logRequest);

  app.get('/books', routes.getBooks);
  app.get('/books/:isbn', routes.getBook);
  app.post('/books', routes.saveBook);

  app.use(clientError);
  app.use(serverError);

  return app;
}

function logRequest(req, res, next) {
  console.log('incoming request ' + new Date());
  next();
}

function clientError(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

function serverError(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  res.json({
    message: err.message,
    error: (process.env.NODE_ENV === 'production') ? {} : err.toString()
  });
}


module.exports = init;