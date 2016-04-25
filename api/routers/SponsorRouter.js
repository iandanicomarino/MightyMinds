module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/SponsorController')(params);
    router.post('/registersponsor',ctrl.register);
    router.get('/sponsor/viewschools',ctrl.viewschools);
    router.post('/sponsor/:spnid/contribute/:stdid',ctrl.contribute);
    router.get('/sponsor/viewtransactions/:id',ctrl.viewtransactions);
    return router;
};
