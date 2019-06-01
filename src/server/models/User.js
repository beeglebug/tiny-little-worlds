import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
  provider: String,
  username: String,
})

const User = model('User', schema)

export default User
