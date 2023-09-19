// require("dotenv").config();
const mongoose = require("mongoose");
const URL = ("mongodb://localhost:27017/todo")
module.exports = () => {
  return mongoose.connect(URL);
};
