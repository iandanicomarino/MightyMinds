module.exports = function (params){
    var express     = params.express;
    var paramsparser  = params.paramsparser;
    var mongoose    = params.mongoose;
    var School      = params.School;
    var Sponsor     = params.Sponsor;
    var Account     = params.Account;
    var controllers = [];

    controllers.login =function (req,res){
        var username=req.body.username;
        var password=req.body.password;
        console.log(req.body);
        Account.findOne({$and:[{username:username},{password:password}]}).exec(function (err,doc){
            if(err  || !doc ){res.status(400).send("FAIL LOGIN");return;};
            if (doc.accounttype=="School"){
                School.findOne({$and:[{username:username},{password:password}]}).exec(function (err,docs){
                    if(err  || !docs ){res.status(400).send("Fail Login");return;};
                    res.status(200).json({result:docs, accounttype:doc.accounttype})
                    return;
                });
            }
            else{
                Sponsor.findOne({$and:[{username:username},{password:password}]}).exec(function (err,docs){
                    if(err ||!docs ){res.status(400).send("Fail Login");return;};
                    res.send({result:docs,accounttype:doc.accounttype}).status(200);
                    return;
                });
            }
        });
    };
    return controllers;
}
