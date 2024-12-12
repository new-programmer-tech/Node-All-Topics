const express = require('express');

const app = express();
const port =3000
//by this we can use our forms
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index")
})


app.listen(port, function ()
{
  console.log("listening on port", port);

})