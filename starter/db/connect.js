const mongoose = require('mongoose')



const connetDB = (url) => {
    return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false , useCreateIndex: true})

                        // ........ return a promise....
}
  
  
    //  .then(()=> console.log("Connected to DB..."))
  //  .catch((error)=>console.log(error))

module.exports = connetDB