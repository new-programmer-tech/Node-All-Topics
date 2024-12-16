const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  console.log("home");

})

app.get(port, function () {
  console.log("on port" , port);

})