const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ results: allJokes });
        })
        .catch(err => res.json({ message: 'Something went wrong at find all', error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(singleJoke => {
            res.json({ results: singleJoke });
        })
        .catch(err => res.json({ message: 'Something went wrong at find one', error: err }));
};

module.exports.createNewJoke = (req, res) => {
    console.log('body is', req.body);
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ results: newlyCreatedJoke });
        })
        .catch(err => res.json({ message: 'Something went wrong at create', error: err }));
};

module.exports.randomJoke = (req, res) => {
    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };
    Joke.find()
    .then(allJokes => {
        let ranDex = getRandomInt(allJokes.length);
        res.json({results: allJokes[ranDex]});
    })
    .catch(err => res.json({ message: 'Something went wrong at finding random', error: err}));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke });
        })
        .catch(err => res.json({ message: 'Something went wrong at update', error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(deletedJoke => {
            res.json({ results: deletedJoke });
        })
        .catch(err => res.json({ message: 'Something went wrong at delete', error: err }));
};