var mongoose = require('mongoose');
var Sponsor = mongoose.Schema({
  username:{type: String, require:true, unique:true},
  password:{type: String, require:true},
  firstname:{type: String, require:true},
  middlename:{type: String},
  lastname:{type: String, require:true},
  suffix: {type: String, required: false},
  address:{type: String, require:true},
  email: {type: String, required: true, unique : true},
  students: [{type:mongoose.Schema.Types.ObjectId}]
});
module.exports = mongoose.model('Sponsor',Sponsor);
