var collections = [];

function getAll () {
  return Promise.resolve(collections);
}

function save (object) {
  collections.push(object);

  return Promise.resolve(object);
}

function checkISBN (isbn) {
  var result = collections.find((element) => element.isbn === isbn);
  return Promise.resolve(result ? 1 : 0);
}

module.exports = {
  getAll: getAll,
  save: save,
  checkISBN: checkISBN
};
