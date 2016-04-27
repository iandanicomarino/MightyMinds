module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/SchoolController')(params);
    router.post('/addschool',ctrl.addschool);
    router.post('/school/addstudent/:id',ctrl.addstudent);
    router.delete('/school/deletestudent/:id/:sid',ctrl.deletestudent);
    router.get('/school/liststudents/:id',ctrl.liststudents);
    router.get('/school/viewstudent/:id',ctrl.viewstudent);
    router.post('/school/editstudent/:id',ctrl.editstudent);
    router.get('/school/viewtransactions/:id',ctrl.viewtransactions);
    router.post('/school/editschoolinfo/:id',ctrl.editschoolinfo);
    return router;
};
