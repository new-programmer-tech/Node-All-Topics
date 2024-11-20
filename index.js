const express = require('express');
var router = express.Router();
const userModel = require('./app');


router.get('/create', async function (req, res) {
  const newUser = await userModel.create({
    userName: john.paul,
    name: john,
    age: 30
  });
  res.send(newUser)
})