const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const hpp = require('hpp')
const cors  = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/UserAPI.js')
const bookRoutes = require('./src/routes/BooksAPI.js')

//Security modules
app.use(helmet())
app.use(hpp())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database connection
// const mongoString = 'mongodb+srv://pathshalaU:pathshalaU@cluster0.z2dcyfe.mongodb.net/PathshalaWeb?retryWrites=true&w=majority&appName=Cluster0';
const mongoString = 'mongodb://localhost:27017/pathshalaWeb';
mongoose.connect(mongoString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Book API Route
app.use('/api', bookRoutes)

//User API Routes
app.use('/user', userRoutes)

//three type of roles : admin = 0, moderator = 1, user = 2

//Connect to Frontend
app.use(express.static('client/dist'))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})





module.exports = app;