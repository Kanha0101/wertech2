var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")

// Connect Mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/weRtech")

// Mongo DB Schema
const userschema = mongoose.Schema({
  username: String,
  age: Number
})

// Mongo DB export
module.exports = mongoose.model("user", userschema)

module.exports = router;
