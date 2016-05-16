var mongoose = require('mongoose');
var School = mongoose.Schema({
  username:{type: String, require:true, unique:true},
  password:{type: String, require:true, select:false},
  schoolname:{type: String, require:true},
  address:{type: String, require:true},
  email: {type: String, required: true, unique : true},
  students:[{type: mongoose.Schema.Types.ObjectId, ref:"Student"}]
});
module.exports = mongoose.model('School',School);
