const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const DB = process.env.DATABASE;

mongoose.connect(DB)
  .then(() => { console.log("connection successful...") })
  .catch((err) => { console.log(err) });

  // {"name":"backend","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1", "start": "node index.js"},"author":"","license":"ISC","dependencies":{"bcryptjs":"^2.4.3","cors":"^2.8.5","dotenv":"^16.0.3","express":"^4.18.2","express-validator":"^7.0.1","jsonwebtoken":"^9.0.0","mongoose":"^7.0.5"},  "engines": {
//     "node": "18.14.0"
//   }}