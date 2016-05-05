module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var Sponsor     = params.Sponsor;
    var School      = params.School;
    var Student      = params.Student;
    var Account     = params.Account;
    var Transaction = params.Transaction;
    var controllers =[];
    var bcrypt      =params.bcrypt;
    controllers.register= function (req, res){
        console.log(req.body);
        var hashed = bcrypt.hashSync(req.body.password);
        var newSponsor = {
            username:req.body.username,
            password:hashed,
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            address:req.body.address,
            email:req.body.email
        }
        var newAccount = {
            username:req.body.username,
            password:hashed,
            accounttype:"Sponsor"
        }
        Account(newAccount).save(function (err, account){
            if(err){res.status(400).json(err);return;};
            Sponsor(newSponsor).save(function(err,docs){
                if(err){
                    Account.findOneAndRemove({_id:account._id}).exec(function(err,doc){
                        console.log(account._id);
                        res.status(400).send("Duplicate Email on with Sponsor Account");
                        return;
                    });
                }else{
                    res.status(200).send("Success Registering New Sponsor!");
                };
            });

        });
    };
    controllers.viewschools=function (req,res){
        School.find({},{username:0,password:0}).exec(function (err, docs){
            if (err) {res.status(400).send("No Available Schools");return;}
            res.status(200).json(docs);
        });
    }
    controllers.contribute=function(req,res){
        var newTransaction= {
            student:req.params.stdid,
            sponsor:req.params.spnid,
            amount:req.body.amount,
            isanon:req.body.isanon
        }
        Transaction(newTransaction).save(function(err,transaction){
            if (err) {res.json(err).status(400);return}
            Student.findOneAndUpdate({_id:req.params.stdid},{$push:{transactions:transaction._id},$inc:{currentfunds:req.body.amount}})
            .exec(function (err,docs){
                if(err)res.json(err);
                if(docs){
                    Sponsor.findOneAndUpdate({_id:req.params.spnid},{$push:{transactions:transaction._id}})
                    .exec(function (err,docs){
                        if(err)res.json(err);
                        if(docs){
                            res.send("TRANSACTION DONE THANK YOU!");
                        }
                        else {
                            Transaction.findOneAndRemove({_id:transaction._id}).exec(function (err,docs){
                                Student.findOneAndRemove({_id:req.params.stdid}.exec(function (err,docs){
                                    res.send("No such sponsor exist");
                                }));
                            });
                        }
                    })}
                    else {
                        Transaction.findOneAndRemove({_id:transaction._id}).exec(function (err,docs){
                            res.send("No such student exist");
                        });
                    }
                });

            });
        };
    controllers.viewtransactions=function (req,res){
        id=req.params.id
        Transaction.find({sponsor:id}).populate([{path:'student',model:Student}]).exec(function (err,docs){
            if(err||!docs){res.send("No transactions");return};
            res.json(docs);
        })
    }

    controllers.viewscholars = function (req, res) {
        Transaction.find({sponsor:req.params.id},{student:1}).populate([{path:'student',model:Student}]).exec(function (err,docs){
            if(err||!docs){res.send("No scholars");return};
            res.json(docs);
        })
    }

    controllers.editsponsorinfo = function (req,res){
        var id = req.params.id;
        var hashed = bcrypt.hashSync(req.body.password);
        var editsponsor = {
            password:hashed,
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            suffix:req.body.suffix,
            address:req.body.address,
            email:req.body.email
        }
        var editSponsorAcct = {
            password:hashed
        }
        Sponsor.findOneAndUpdate({_id:id},editsponsor).exec(function(err,docs){
            if (err || !docs) {console.log(err);res.status(400).send("Invalid.");return;}
            Account.findOneAndUpdate({username:docs.username},editSponsorAcct).exec(function(err,docs){
                if (err || !docs) {console.log(err);res.status(400).send("Invalid.");return;}
            });
            res.status(200).json(docs);
        })
    }
    return controllers;
}
