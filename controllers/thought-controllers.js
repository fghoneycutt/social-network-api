const { Thought, User } = require('../models');
const thoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
    },
    //get one thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res
                .status(404)
                .json({ message: "No thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
    },
    //create new thought
    addThought({ params, body }, res) {
        Thought.create(body)
          //not done with this one chief
    }
}