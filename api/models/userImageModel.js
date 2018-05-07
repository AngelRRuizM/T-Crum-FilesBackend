'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserImageSchema = new Schema({
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
        required: "Por favor incluya el id de un usuario",
        unique: true

    },
    image: {
        type: Buffer,
        contentTYpe: String,
        required: "Por favor incluye la imagen" 
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserImage', UserImageSchema);