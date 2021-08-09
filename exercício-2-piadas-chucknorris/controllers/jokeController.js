const jokeModel = require('../models/jokeModel');

const getCategories = async (req, res, next) => {
  const categories = await jokeModel.getCategories();

  return res.render('categories/index', { categories });
};

const getCategoryByParams = async (req, res, next) => {
  const { category } = req.params;
  const joke = await jokeModel.getJokeByCategory(category);

  return res.render('jokes', { joke: joke.data });
};

module.exports = {
  getCategories,
  getCategoryByParams,
};
