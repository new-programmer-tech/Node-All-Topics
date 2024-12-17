const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/authTestApp`)


const userSchema = mongoose.Schema(
  {
    userName: String,
    password: String,
    email: String
  }
)

module.exports = mongoose.model('user', userSchema)
