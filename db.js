const dotenv = require("dotenv")
dotenv.config({path: "./.env"})
const mongoose = require("mongoose");

require("./.env")
// # MONGO_URI = mongodb+srv://imramagrawal:jaimongodb123@cluster0.s07gac8.mongodb.net/inotebook?retryWrites=true&w=majority
// //mongoose.set("strictQuery", false)
dotenv.config()
const DB = process.env.DATABASE
//async function getConnection(){
    mongoose.connect(DB,
    // remove this mongoose.connect and move the option object to the above mongoose.connect
     {
    
      useNewUrlParser: "true",
      useUnifiedTopology: "true"
    
    })
.then(()=> {console.log("connection successfull...")})
.catch((err)=> {console.log(err)})

//module.exports = getConnection
// import mongoose from 'mongoose';

// const connectDB =  async ()=>{
//     if (!process.env.MONGO_URI) {
//         console.error('MONGO_URI environment variable is not defined')
//         process.exit(1)
//       }

//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI,{
//             //must add in order to not get any error masseges:
//             useUnifiedTopology:true,
//             useNewUrlParser: true,
//             useCreateIndex: true
//         })
//         console.log(`mongo database is connected!!! ${conn.connection.host} `)
//     }catch(error){
//         console.error(`Error: ${error} `)
//         process.exit(1) //passing 1 - will exit the proccess with error
//     }

// }
// module.exports = connectDB;