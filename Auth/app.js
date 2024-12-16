const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => {
  res.cookie("name", "cookieTest");
  res.send(200);

})


app.listen(port);