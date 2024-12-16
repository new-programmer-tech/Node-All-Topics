const mongoose = require('mongoose')

const port=27017

mongoose.connect(`mongodb://localhost:${port}/mongoTest`)


const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String
})


module.exports = mongoose.model('user', userSchema)
