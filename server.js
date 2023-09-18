const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const env = require('dotenv')

const port = process.env.PORT || 9000
const db = require('./utils/db.js')

//parser middleware

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//routes
const bannerRoute = require('./routes/bannerRoute')

//env config files
// env.config()

//server connection string or db connection
db

// mongoose
//   .connect(
//     `mongodb+srv://hasnat_arman:hasnat_arman_112233@cluster0.dk5gi9i.mongodb.net/photography?retryWrites=true&w=majority`,

//     { useNewUrlParser: true, useUnifiedTopology: true },
//   )
//   .then(() => {
//     console.log('Database connected')
//   })



//parser

//middleware
app.get('/Test',(req,res)=>{
  res.send({message:'Server established successfully'})
})
app.use('/api/v1', bannerRoute)



app.all("*",(req,res)=>{
    res.send('No route found')
})

// listen to port
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`)
})
