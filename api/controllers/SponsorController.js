module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var Sponsor     = params.Sponsor;
    var Account     = params.Account;
    var controllers =[];

    controllers.register= function (req, res){
        var newSponsor = {
            username:req.body.username,
            password:req.body.password,
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            address:req.body.address,
            email:req.body.email
        }
        var newAccount = {
            username:req.body.username,
            password:req.body.password,
            accounttype:"Sponsor"
        }
        Account(newAccount).save(function (err, docs){
            if(err){res.status(400).json(err);return;};
            Sponsor(newSponsor).save();
            res.status(200).send("Success Registering New Sponsor!");
        });
    };
    return controllers;
}
