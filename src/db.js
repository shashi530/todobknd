// require("dotenv").config();
const mongoose = require("mongoose");
const URL = "mongodb+srv://shashipatil:shashi530@cluster0.hum9krc.mongodb.net/?retryWrites=true&w=majority"
module.exports = () => {
  return mongoose.connect(URL);
};