const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/dataAssociation`)


const userSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    age: Number,
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'post'
      }
    ]
  }
)

module.exports =  mongoose.model('user', userSchema)