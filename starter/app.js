
const express = require('express');
 var app = express()



const tasks = require('./Routes/tasks')
const ConnectDB = require('./db/connect')

require('dotenv').config()      //invoke the config

//Middleware
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/tasks',tasks)   //routes








const port= 3000
console.log('starting')

const start= async ()=> {                   
    try{
        await ConnectDB(process.env.mongo_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))   
     }
     catch(error) {
         console.log(error)
     }
    }

start()


