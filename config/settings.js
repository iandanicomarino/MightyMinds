var mongoose = require ('mongoose');
var config =require ('./secrets.js');
console.log("db online?"+config.ONLINE)
isOnline=config.ONLINE;
if(isOnline) {
    mongoose.connect('mongodb://nekomarino:nekoana0207@ds021771.mlab.com:21771/mightyminds')
}else {
    mongoose.connect('mongodb://localhost:27017/mightyminds')
}
