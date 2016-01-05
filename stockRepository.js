var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/book_inventory';

var collection = MongoClient.connect(url).then(function (db) {
  return db.collection('books');
});

function getAll () {
  return collection
    .then(function (collection) {
      return collection.find({}).toArray();
    });
}

function save (object) {
  return collection
    .then(function (collection) {
      return collection.updateOne({isbn: object.isbn}, object, {
        upsert: true
      });
    });
}

function checkISBN (isbn) {
  return collection
    .then(function (collection) {
      return collection.find({isbn: isbn}).toArray();
    })
    .then(function (result) {
      return result.length;
    });
}

module.exports = {
  getAll: getAll,
  save: save,
  checkISBN: checkISBN
};
