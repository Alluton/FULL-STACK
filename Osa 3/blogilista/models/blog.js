const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    minlength: 5
  },
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  url: {
    type: String,
    required: true,
    minlength: 5
  },
  likes:{
    type: String,
    required: true
  },
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
