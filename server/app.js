require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const app     = express();
const axios   = require('axios')

app.use(cors())
 
app.get('/mixes', (req, res) => {
  axios.get(`https://api.mixcloud.com/${req.query.mix}`)
  .then(response => res.json(response.data))
  .catch(err => res.status(500).json(err))
});

module.exports = app;
