const axios = require('axios');

const getCategories = async () => {
  const baseUrl = 'https://api.chucknorris.io/jokes/categories';
  const categories = await axios.get(baseUrl);

  return categories.data;
};

const getJokeByCategory = async (category) => {
  const baseUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  const getJoke = await axios.get(baseUrl);

  return getJoke;
};

module.exports = {
  getCategories,
  getJokeByCategory,
};
