const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')

app.use(express.json())

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully! 🎉')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
  })

app.use('/api/blogs', blogsRouter)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})