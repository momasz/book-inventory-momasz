module.exports = function (stockRepository) {
  return {
    getBooks: function (req, res) {
      stockRepository
        .getAll()
        .then(function (result) {
          res.json(result);
        })
        .catch(function (err) {
          console.error(err);
          res.status(500).json({"message": "server error"});
        });
    },
    getBook: function (req, res) {
      var isbn = req.params.isbn;

      stockRepository
        .checkISBN(isbn)
        .then(function (result) {
          if (result > 0) {
            res.status(200).json({count: result });
          } else {
            res.status(404).send({message: "Not Found"});
          }
        })
        .catch(function (e) {
          console.error(err);
          res.status(500).json({"message": "server error"});
        });
    },
    saveBook: function (req, res) {
      var object = req.body;

      stockRepository
        .save(object)
        .then(function (result) {
          res.json(result);
        })
        .catch(function (e) {
          console.error(err);
          res.status(500).json({"message": "server error"});
        });
    }
  };
};