var mongoose = require('mongoose');
var Transaction = mongoose.Schema({
  student:{type: mongoose.Schema.Types.ObjectId, ref:"Student",require:true},
  sponsor:{type:mongoose.Schema.Types.ObjectId, ref:"Sponsor",require:true},
  amount:{type: Number,require:true},
  isanon:{type: Boolean,require:true}
});
module.exports = mongoose.model('Transaction',Transaction);
