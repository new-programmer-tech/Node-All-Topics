


const userSchema = mongoose.Schema(
  {
    fullName: String,
    email: String,
    passport: String,
    cart: {
      type: Array,
      default:[]
    },
    isAdmin: Boolean,
    orders: {
      type: Array,
      default:[]
    },
    contact: Number,
    picture:String

  }
)


module.exports = mongoose.model('user', userSchema)
