const mongoose = require('mongoose');
// const dotenv = require('dotenv');
mongoose.set("strictQuery", false);
// dotenv.config();
async function getConnection(){
    await mongoose.connect("mongodb+srv://imramagrawal:jaimongodb123@cluster0.r7lshib.mongodb.net/notes?retryWrites=true&w=majority")
    .then(()=>{
        console.log("database connected successfully");
    }).catch(e=>console.log(e));  
    
}
module.exports = getConnection;