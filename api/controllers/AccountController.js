module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var School      = params.School;
    var Sponsor     = params.Sponsor;
    var Account     = params.Account;
    var bcrypt      = params.bcrypt;
    var controllers = [];

    controllers.login =function (req,res){
        var username=req.body.username;
        var password=req.body.password;
        console.log(req.body);
        Account.findOne({username:username}).exec(function (err,doc){
            if(err  || !doc ){res.status(400).send("FAIL LOGIN");return;};
            if(bcrypt.compareSync(password,doc.password)){
                if (doc.accounttype=="School"){
                    School.findOne({username:username}).exec(function (err,docs){
                        if(err  || !docs ){res.status(400).send("Fail Login");return;};
                        res.status(200).json({result:docs, accounttype:doc.accounttype})
                        return;
                    });
                }
                else if (doc.accounttype=="Admin") {
                        res.status(200).json({accounttype:doc.accounttype});
                        return;
                }
                else{
                    Sponsor.findOne({username:username}).exec(function (err,docs){
                        if(err ||!docs ){res.status(400).send("Fail Login");return;};
                        res.send({result:docs,accounttype:doc.accounttype}).status(200);
                        return;
                    });
                }
            }
            else{
                res.status(400).send("FAIL LOGIN");
                return;
            }
        });
    };
    controllers.addAdmin = function (req,res){
        var username=req.body.username;
        var password=bcrypt.hashSync(req.body.password);
        var newadmin = {
            username:username,
            password:password,
            accounttype:"Admin"
        }
        Account(newadmin).save(function (err,account){
            if(err){res.json(err);return;};
            res.status(200).send("Successful Adding New Admin");
            });
    }
    return controllers;
}
