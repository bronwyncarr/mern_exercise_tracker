const router = require('express').Router();
let User = require('../models/user.model');

// End point for get request to users/ 
// .find mongoose method will get a list of all users from db.
// Returns a promise then .json()
// Error handling if 404 Error occurs.
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//End point for post requests to /add
// Creates new user with username and saves it's to the db.
// Error handling if 400 Error occurs.
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;