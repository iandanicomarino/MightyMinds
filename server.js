//dependecies
var express= require ('express');
var bodyparser= require ('body-parser');
var mongoose = require ('mongoose');
var settings =require ('./config/settings.js');
var app=express();
var router = express.Router();
var params=
{
    express     :express,
    bodyparser  :bodyparser,
    mongoose    :mongoose,
    settings    :settings,
    School      :require ('./api/model/School.js'),
    Sponsor     :require ('./api/model/Sponsor.js'),
    router      :router
}
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.use('/',require('./api/routers/SchoolRouter.js')(params));
app.use('/',require('./api/routers/SponsorRouter.js')(params));
//server actions


app.listen(6443);
console.log("server started: port 6443")
//server init
