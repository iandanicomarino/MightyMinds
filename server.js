//dependecies
var isOnline =true;
var express= require ('express');
var bodyparser= require ('body-parser');
var mongoose = require ('mongoose');
var settings =require ('./config/settings.js');
var app=express();
var cors = require('cors');
var router = express.Router();
var params=
{
    express     :express,
    bodyparser  :bodyparser,
    mongoose    :mongoose,
    settings    :settings,
    School      :require ('./api/model/School.js'),
    Sponsor     :require ('./api/model/Sponsor.js'),
    Student     :require ('./api/model/Student.js'),
    Account     :require ('./api/model/Account.js'),
    Transaction :require ('./api/model/Transaction.js'),
    router      :router
}

app.use(cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Authorization, AuthExpiry, Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Expose-Headers", "Authorization, AuthExpiry");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, HEAD, DELETE");
    next();
});

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.use('/',require('./api/routers/SchoolRouter.js')(params));
app.use('/',require('./api/routers/SponsorRouter.js')(params));
app.use('/',require('./api/routers/AccountRouter.js')(params));
//server actions



//app.listen(6443);
if (isOnline==true){
    app.listen(process.env.PORT);
    console.log("server started online");
}else {
    console.log("settings:"+settings.isOnline)
    app.listen(6443);
    console.log("server started: port 6443")
};

//server init
