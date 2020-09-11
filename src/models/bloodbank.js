/* eslint-disable no-var */
const mongoose = require('mongoose');

var bloodbankSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    phone:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    }


  })
module.exports = mongoose.model("bloodbank", bloodbankSchema);