'use strict';
//jshint unused:false

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    question : String,
    choices : [
      {
        label: String,
        ingredient : String
      }
    ],
    random: Number
});

module.exports = mongoose.model('secondquestions', schema);
