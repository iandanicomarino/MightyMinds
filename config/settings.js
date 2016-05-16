var mongoose = require ('mongoose');
var isOnline;
isOnline=false;
if(isOnline) {
    mongoose.connect('mongodb://nekomarino:nekoana0207@ds021771.mlab.com:21771/mightyminds')
}else {
    mongoose.connect('mongodb://localhost:27017/mightyminds')
}
