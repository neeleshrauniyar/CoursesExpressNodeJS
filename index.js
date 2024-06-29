const express= require('express')
const app= express()
const router= require('./routes/courses')

// //Importing Middlewares
// const logger= require('./middlewares/logger')

app.use('/', router)

// //Using Middlewares
//app.use(express.json())
// app.use(logger)

//env variable for port
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log("Listening at 3000..."))