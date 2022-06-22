const exp = require('constants')
const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const {connectDB} = require('./config/db')

connectDB()
const app = express()
//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))
//routes
app.use('/', require('./routes/getURL'))
 app.use('/api/url', require('./routes/postURL'))

app.listen(PORT,()=> console.log('server running on port...'+ PORT))