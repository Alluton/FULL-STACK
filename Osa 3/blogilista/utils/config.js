require('dotenv').config()

let PORT = 3004//process.env.PORT
let MONGODB_URI = 'mongodb+srv://fullstack:fullstack@cluster0-hlvte.mongodb.net/test?retryWrites=true&w=majority' //process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}