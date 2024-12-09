const express = require('express');

const app = express();

const port = 3000


//middle ware

app.use(function (req, res , next) {
  console.log("middleWare");
  next();

})

app.get('/', function (req, res) {
  res.send('Welcome to /')
})


app.get('/api/profile', function (req, res) {
res.send('Welcome')

})



app.listen(port);