'use strict';

const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: {type:String, required:true, unique:true},
  model: {type:String, required:true, minlength: 3},
  year: {type:Number, required:true},
});

module.exports = mongoose.model('car', carSchema);
