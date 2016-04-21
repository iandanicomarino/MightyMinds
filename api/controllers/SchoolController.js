module.exports = function (params){
    var express     = params.express;
    var paramsparser  = params.paramsparser;
    var mongoose    = params.mongoose;
    var School      = params.School;
    var Account      = params.Account;
    var controllers =[];

    controllers.login =function (req,res){
        var username=req.body.username;
        var password=req.body.password;
        console.log(req.body);
        School.findOne({$and:[{username:username},{password:password}]}).exec(function (err,docs){
            if(err  || !docs ){res.status(400).send("FAIL LOGIN");return;};
            res.status(200).json(docs);
        });
    };

    controllers.addschool =function (req,res){
        var newSchool = {
            username:req.body.username,
            password:req.body.password,
            schooolname:req.body.schoolname,
            address:req.body.address,
            email:req.body.email
        }
        var newAccount = {
            username:req.body.username,
            password:req.body.password,
            accounttype:"School"
        }
        Account(newAccount).save(function (err,docs) {
            if(err){res.status(400).json(err);return;};
            School(newSchool).save();
            res.status(200).send("Success Sending New School!");
        });
    };

    return controllers;
}
