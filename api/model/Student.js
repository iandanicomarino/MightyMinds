var mongoose = require('mongoose');
var Student = mongoose.Schema({
  firstname:{type: String, require:true},
  lastname:{type: String, require:true},
  middlename:{type: String, require:true},
  suffix: {type: String, required: false},
  address:{type: String, require:true},
  email: {type: String, required: true, unique : true},
  currentfunds : {type:Number, min:0},
  goal : {type:Number, min:0},
  bio: {type: String, required: true},
  future: {type: String, required: true},
  currentschool: {type: String, required: true},
  sponsors:[{type:mongoose.Schema.Types.ObjectId, ref:'Sponsor'}],
  transactions:[{type:mongoose.Schema.Types.ObjectId, ref:'Transaction'}]
});
module.exports = mongoose.model('Student',Student);
