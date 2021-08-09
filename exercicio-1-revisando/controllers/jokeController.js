const joke = require('../models/joke');

const listJokes = async (_req, res) => {
  const getJoke = await joke.getJokes();

  return res.render('jokeView', { getJoke });
};

module.exports = {
  listJokes,
};
