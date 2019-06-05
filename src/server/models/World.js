import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
  slug: String,
  name: String,
  description: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
})

const World = model('World', schema)

export default World
