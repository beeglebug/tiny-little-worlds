import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  id: String,
  provider: String,
  displayName: String,
  email: String,
})

const User = mongoose.model('User', schema)

export default User
