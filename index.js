const express = require('express');
const app = express();
var router = express.Router();
const userModel = require('./app');

app.listen(3001)

app.get('/create', async function (req, res) {
  const newUser = await userModel.create({
    userName: "john.paul",
    name: "john",
    age: 30
  });
  res.send(newUser)
})
