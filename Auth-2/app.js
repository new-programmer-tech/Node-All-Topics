const express = require('express');
const app = express();
const port = 3000;


const cookieParser = require('cookie-parser')
const path = require('path')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

const userModel = require('./models/user');



// app.get('/login', (req, res) => {
//   res.render('login')
// })


app.post('/login', async (req, res) => {
  let email = req.body.email

  let user = await userModel.findOne({ email: email })
  if (!user) return res.send('something went wrong' , 400)

  bcrypt.compare(req.body.password, user.password, (err , result) => {

      if (err) return res.send('something went wrong')

    if (result) {
      let token = jwt.sign({ email }, 'secret')
      res.cookie('token', token)
      res.send('success')
      } else {
        res.send('something went wrong')
        }
    })

})

app.post('/create-user',  (req, res) =>
{
    let { userName, password, email } = req.body
    bcrypt.genSalt(10,  function(err, salt) {
      bcrypt.hash(password, salt, async function (err, hash)
      {
            let newUser = await userModel.create({
              userName,
              password :hash,
              email
            })

        let token = jwt.sign({ email }, 'secret')
        res.cookie('token' , token)
        res.send(newUser)

      });
  });



})


app.get('/logout', (req, res) => {
  req.cookie('token', '')
 })




app.listen(port);