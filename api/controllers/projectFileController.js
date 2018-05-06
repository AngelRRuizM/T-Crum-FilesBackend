'use strict';

var mongoose = require('mongoose'),
    ProjectFile = mongoose.model('ProjectFile');


exports.list = function(req, res) {
    ProjectFile.find({project_id: req.params.projectId}, function(err, projectFile) {
        if (err)
            res.send(err);
        res.json(projectFile);
    });
};     

exports.create = function(req, res){
    var new_project_file = new ProjectFile(req.body);
    new_project_file.save(function(err, projectFile){
        if (err)
            res.send(err);
        res.json(projectFile);
    })
}

exports.retrieve = function(req, res){
    ProjectFile.findOne({_id: req.params.fileId}, function(err, projectFile){
        if (err)
            res.send(err);
        res.json(projectFile);
    });
};

exports.update = function(req, res){
    ProjectFile.findOneAndUpdate({_id: req.params.fileId}, req.body, {new: true}, function(err, projectFile){
        if (err)
            res.send(err);
        res.json(projectFile);
    });
};

exports.delete = function(req, res){
    ProjectFile.remove({_id: req.params.fileId}, function(err, projectFile){
        if(err)
            res.send(err);
        res.json({message: 'Imagen eliminada' });
    });
};