/* eslint-disable max-len */
const axios = require('axios');

const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => {
  const response = await axios.get(url);

  const { data: { joke } } = response;
  return joke;
};

module.exports = {
  getJokes,
};
