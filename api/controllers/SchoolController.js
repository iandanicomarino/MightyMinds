module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var School      = params.School;
    var Student     = params.Student;
    var Account     = params.Account;
    var Transaction =params.Transaction;
    var bcrypt      =params.bcrypt;
    var controllers =[];

    controllers.addschool =function (req,res){
        console.log(req.body);
        var hashed = bcrypt.hashSync(req.body.password);
        var newSchool = {
            username:req.body.username,
            password:hashed,
            schoolname:req.body.schoolname,
            address:req.body.address,
            email:req.body.email
        }
        var newAccount = {
            username:req.body.username,
            password:hashed,
            accounttype:"School"
        }
        Account(newAccount).save(function (err,account) {
            if(err){res.status(400).send("Duplicate Email on Account");return;};
            School(newSchool).save(function(err,school){
                if (err){
                    Account.findOneAndRemove({_id:account._id}).exec(function(err,doc){
                        console.log(account._id);
                        res.status(400).send("Duplicate Email on with School Account");
                        return;
                    });
                }else{
                    res.status(200).send("Success Sending New School!");
                }
            });

        });
    };
    controllers.addstudent =function (req,res){
        var id = req.params.id;
        var newStudent = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            middlename:req.body.middlename,
            suffix:req.body.suffix,
            address:req.body.address,
            email:req.body.email,
            currentfunds: req.body.currentfunds,
            goal :req.body.goal,
            bio:req.body.bio,
            future:req.body.future,
            currentschool:id
        }
        Student(newStudent).save(function (err,student){
            if(err){res.json(err);return;};
            School.findOneAndUpdate({_id:id},{$push:{students:student._id}}).exec(function (err,docs){
                if(err){res.status(400).send(err+"Unsuccessful");return};
                res.status(200).send("Successful");
            });
        });
    }
    controllers.deletestudent = function (req,res){
        var id=req.params.id;
        var sid=req.params.sid;
        School.findOneAndUpdate({_id:id},{$pull:{students:sid}}).exec( function(err,docs){
            if (err){console.log(err);return;};
            Student.findOneAndRemove({_id:sid}).exec(function (err,docs){
                if(docs==null){res.send("Nothing Deleted id not existing");return};
                if (err){console.log(err);return;};
                res.json({status:"success delete",deleted:docs});
            });
        })
    }
    controllers.liststudents = function (req,res){

        // var pageOptions = {
        //     page: req.query.page || 0;
        //     limit:req.query.limit || 10;
        // }

        var id = req.params.id;
        School.findOne({_id:id},{students:1})
        //.skip(pageOptions.page*pageOptions.limit)
        //.limit(pageOptions.limit)
        .populate({
            path:'students',
            model:Student,
            populate:{
                path:'currentschool',
                model:School
            }
        }).exec(function (err, docs){
            console.log(docs);
            if (err||!docs){console.log(err+"imhere");res.json({status:"Failed"});return;};
            res.status(200).json(docs);
        })
    }
    controllers.viewstudent = function (req,res){
        var id = req.params.id;
        Student.findOne({_id:id}).populate([{path:'transactions',model:Transaction},{path:'currentschool',model:School}]).exec(function (err, docs){
            if (err||!docs){console.log(err);return;};
            res.status(200).json(docs);
        })
    }
    controllers.editstudent = function (req,res){
        var id = req.params.id;
        var editStudent = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            middlename:req.body.middlename,
            suffix:req.body.suffix,
            address:req.body.address,
            email:req.body.email,
            currentfunds: req.body.currentfunds,
            goal :req.body.goal,
            bio:req.body.bio,
            future:req.body.future,
            currentschool:req.body.currentschool
        }
        Student.findOneAndUpdate({_id:id},editStudent).exec(function (err, docs){
            if (err || !docs){console.log(err);res.status(400).send("Invalid. Make sure email is unique or id is valid");return;};
            res.status(200).json(docs);
        });
    }
    controllers.viewtransactions = function (req,res){
        var schoolid=req.params.id;
        console.log(req.params.id);
        Student.find({$and:[{$where:"this.transactions.length>1"},{currentschool:schoolid}]}).populate([{path:'transactions',model:Transaction}]).exec(function (err,docs){
            if (err || docs){console.log(err);return;};
            res.status(200).json(docs);
        });
    }
    controllers.editschoolinfo = function (req,res){
        var id = req.params.id;
        var hashed = bcrypt.hashSync(req.body.password);
        console.log(hashed)
        var editSchool = {
            schoolname:req.body.schoolname,
            address:req.body.address,
            email:req.body.email,
            password: hashed
        }
        var editSchoolAcct = {
            password: hashed
        }
        School.findOneAndUpdate({_id:id},editSchool).exec(function(err,docs){
            if (err || !docs) {console.log(err);res.status(400).send("Invalid.");return;}
            Account.findOneAndUpdate({username:docs.username},editSchoolAcct).exec(function(err,docs){
                if (err || !docs) {console.log(err);res.status(400).send("Invalid.");return;}
                res.status(200).json(docs);
            });
        })
    }
    return controllers;
}
