var mongoose = require('mongoose');
var School = mongoose.Schema({
  username:{type: String, require:true, unique:true},
  password:{type: String, require:true},
  schoolname:{type: String, require:true},
  address:{type: String, require:true}
});
module.exports = mongoose.model('School',School);
