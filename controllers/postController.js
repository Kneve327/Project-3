const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      // console.log(req.body)
  },

  findAll: function(req, res) {
    // console.log(res)
    db.Post
      .findAll()
      .then(dbModel => {
        // console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
