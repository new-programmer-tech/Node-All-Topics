const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();


const bcrypt = require('bcrypt')
const saltRounds = 10;


const jwt = require('jsonwebtoken');

const port = 3000

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie("name", "cookieTest");
  res.send(200);

})

//hashing a password
//encryption
app.get('/password-enc', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash("password", salt, function(err, hash) {
        console.log(hash)
    });
});

})

//password decryption

app.get('/password-dec', (req, res) => {
  bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});

})


app.get('/jwt', (req, res) => {
  let token = jwt.sign({ email: "testjwt@example.com" }, "secret");
  res.cookie('token', token);
  res.send(200);
  console.log(token);

})

app.get('/jwt-check', (req,res) => {
  let verifyJwt = jwt.verify(req.cookies.token, 'secret');
  console.log(verifyJwt);

})


app.listen(port);