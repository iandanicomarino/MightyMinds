module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/AccountController')(params);
    router.post('/login',ctrl.login);

    return router;
};
