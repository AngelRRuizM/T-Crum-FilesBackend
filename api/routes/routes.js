'use strict';
module.exports = function(app) {
    var userImage = require('../controllers/userImageController');
    var projectFile = require('../controllers/projectFileController');
    
    // User Image Routes
    app.route('/userImage')
        .post(userImage.create);


    app.route('/userImage/:userId')
        .get(userImage.retrieve)
        .put(userImage.update)
        .delete(userImage.delete);

    // Project Files Routes
    app.route('/projectFile')
        .post(projectFile.create);

    app.route('/projectFile/:fileId')
        .get(projectFile.retrieve)
        .put(projectFile.update)
        .delete(projectFile.delete);


    app.route('/projectFile/list/:projectId') 
        .get(projectFile.list); 
};
