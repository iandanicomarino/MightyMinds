module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var Sponsor     = params.Sponsor;
    var controllers =[];

    controllers.register= function (req, res){
        var newSponsor = {
            username:req.body.username,
            password:req.body.password,
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            address:req.body.address
        }
        Sponsor(newSponsor).save(function (err, docs){
            if(err){res.status(400).json(err);return;};
            res.status(200).send("Success Registering New Sponsor!");
        });
    };
    controllers.login= function (req, res){
        var username=req.body.username;
        var password=req.body.password;
        console.log(req.body);
        Sponsor.findOne({$and:[{username:username},{password:password}]}).exec(function (err,docs){
            if(err ||!docs ){res.status(400).send("FAIL LOGIN");return;};
            res.json(docs);
        });
    };
    return controllers;
}
