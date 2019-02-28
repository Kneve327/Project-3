const db = require("../models");

// Defining methods for the booksController
module.exports = {

  create: function(req, res) {
    db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

   findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login: function(req, res) {
    // const {email, password} = req.body;
    db.User
    .findOne({where: {email: req.body.email, password: req.body.password} })
    .then(dbModel => res.json(dbModel))
    
    console.log(res)
    // .catch(err => res.status(422).json(err));
    

  }
  
};
