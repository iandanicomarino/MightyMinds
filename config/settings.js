var mongoose = require ('mongoose');
var settings =require ('./settings.js');
isOnline=settings.ONLINE;
if(isOnline) {
    mongoose.connect('mongodb://nekomarino:nekoana0207@ds021771.mlab.com:21771/mightyminds')
}else {
    mongoose.connect('mongodb://localhost:27017/mightyminds')
}
