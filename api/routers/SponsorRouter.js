module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/SponsorController')(params);
    router.post('/registersponsor',ctrl.register);
    router.get('/sponsor/viewschools',ctrl.viewschools);
    router.post('/sponsor/:spnid/contribute/:stdid',ctrl.contribute);
    router.get('/sponsor/viewtransactions/:id',ctrl.viewtransactions);
    router.get('/sponsor/viewscholars/:id',ctrl.viewscholars);
    router.post('/sponsor/editsponsorinfo/:id',ctrl.editsponsorinfo);
    return router;
};
