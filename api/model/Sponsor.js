var mongoose = require('mongoose');
var Sponsor = mongoose.Schema({
  username:{type: String, require:true, unique:true},
  password:{type: String, require:true},
  firstname:{type: String, require:true},
  middlename:{type: String},
  lastname:{type: String, require:true},
  address:{type: String, require:true}
});
module.exports = mongoose.model('Sponsor',Sponsor);
