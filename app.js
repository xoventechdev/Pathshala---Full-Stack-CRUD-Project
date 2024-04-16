const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const hpp = require('hpp')
const cors  = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/UserAPI.js')

//Security modules
app.use(helmet())
app.use(hpp())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Database connection
mongoose.connect('mongodb+srv://pathshalaU:pathshalaU@cluster0.z2dcyfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// mongoose.connect('mongodb+srv://minbarapps:minbarapps@todo.jveh43o.mongodb.net/todo').then(()=>{
//     console.log('Connected to MongoDB');
// })

//API Route
// app.use('/api', routes)

//User Routes
app.use('/user', userRoutes)



//Connect to Frontend
app.use(express.static('client/dist'))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})





module.exports = app;