import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: String,
  provider: String,
})

const User = mongoose.model('User', schema)

export default User
