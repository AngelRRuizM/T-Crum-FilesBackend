'use strict';

var mongoose = require('mongoose'),
    UserImage = mongoose.model('UserImage');

exports.create = function(req, res){
    var new_user_image = new UserImage(req.body);
    new_user_image.save(function(err, userImage){
        if (err)
            res.send(err);
        res.json(userImage);
    })
}

exports.retrieve = function(req, res){
    UserImage.findOne({user_id: req.params.userId}, function(err, userImage){
        if (err)
            res.send(err);
        if (userImage == null)
            res.status("400").json({err: "No hay imagen"})
        else
            res.json(userImage);
    });
};

exports.update = function(req, res){
    UserImage.findOneAndUpdate({user_id: req.params.userId}, req.body, {new: true}, function(err, userImage){
        if (err)
            res.send(err);
        res.json(userImage);
    });
};

exports.delete = function(req, res){
    UserImage.remove({user_id: req.params.userId}, function(err, userImage){
        if(err)
            res.send(err);
        res.json({message: 'Imagen eliminada' });
    });
};