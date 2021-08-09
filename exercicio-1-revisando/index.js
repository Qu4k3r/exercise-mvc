const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const path = require('path');
const jokeController = require('./controllers/jokeController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/joke', rescue(jokeController.listJokes));

app.use((err, _req, res, _next) =>
  res.status(500).json({ message: err.message }));

app.listen(3000, () => console.log('App running on port 3000'));
