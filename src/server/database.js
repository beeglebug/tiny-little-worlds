import mongoose from 'mongoose'

const url = process.env.MONGO_URL

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error('MongoDB connection error:', error))
