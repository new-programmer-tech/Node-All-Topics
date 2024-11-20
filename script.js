const express = require('express')
const app = express()


app.set('view engine', 'ejs')

// Set the view engine to EJS
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(function (req, res, next) {
  console.log("middleware");
  next();

})

app.get('/index', function (req, res) {
  res.render('index')
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

// dynamic routing

app.get('/profile/:username',function (req, res) {

})


app.listen(3000)