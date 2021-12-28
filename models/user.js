const mongoose = require("mongoose");
const { stringify } = require("querystring");
// user Schema

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  age: String,
});

const userModel = mongoose.model("fullstack", userSchema, "fullstack");

module.exports = userModel;
