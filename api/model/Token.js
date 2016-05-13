var mongoose = require('mongoose');
var Token = mongoose.Schema({
  email: {type: String, required: true},
  token: {type: String, required: true}
});
module.exports = mongoose.model('Token',Token);
