'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectFileSchema = new Schema({
    name: {
        type: String,
        required: 'Por favor ingresa un nombre'
    },
    sufix: {
        type: String,
        required: "Por favor ingresa una extensión"
    },
    user_id: {
        type: String, 
        required: "Por favor incluya el id de un usuario"

    },
    project_id: {
        type: Number,
        min: 1,
        required: "Por favor incluya el id de un proyecto"
    },
    file: {
        type: Buffer,
        required: "Por favor incluye el archivo" 
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProjectFile', ProjectFileSchema);