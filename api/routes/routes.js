'use strict';
module.exports = function(app) {
    var userImage = require('../controllers/userImageController');
    
    // User Image Routes
    app.route('/userImage')
        .post(userImage.create);


    app.route('/userImage/:userId')
        .get(userImage.retrieve)
        .put(userImage.update)
        .delete(userImage.delete);

     
};
