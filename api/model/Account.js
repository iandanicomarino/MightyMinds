var mongoose = require('mongoose');
var Account = mongoose.Schema({
  username : {type: String, require:true, unique:true},
  password : {type: String, require:true, select:false},
  accounttype :{type: String , enum:["Sponsor","School","Admin"]}
});
module.exports = mongoose.model('Account',Account);
