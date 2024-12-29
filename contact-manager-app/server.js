const express = require('express')
const dotenv = require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000




// app.get('/api/contacts', (req, res) => {
//   res.send("Welcome")

// })


app.use('/api/contacts' , require('./routes/contactRoutes'))



app.listen(port, () => {
  console.log('listening on port ' + port)
})