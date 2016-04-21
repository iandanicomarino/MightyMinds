module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/SchoolController')(params);
    router.post('/addschool',ctrl.addschool);
    
    return router;
};
