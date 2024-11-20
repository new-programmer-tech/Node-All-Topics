const mongoose = require('mongoose');


// database creation
mongoose.connect("mongodb://127.0.0.1:/27017/revision");


const userSchema = mongoose.Schema(
  {
    userName: String,
    name: String,
    age: Number
  }
)

module.exports = mongoose.model("User", userSchema)