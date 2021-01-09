const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// End point for get request to exercises/
// .find mongoose method will get a list of all exercises from db.
// Returns a promise then .json()
// Error handling if 404 Error occurs.
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

//End point for post requests to /add
// Creates new exericse with info and saves it's to the db.
// Error handling if 400 Error occurs.
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
