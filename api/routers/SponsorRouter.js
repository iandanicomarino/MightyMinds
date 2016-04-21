module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/SponsorController')(params);
    router.post('/registersponsor',ctrl.register);
    router.post('/loginsponsor',ctrl.login);
    return router;
};
