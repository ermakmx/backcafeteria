var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var Schema = mongoose.Schema;


var usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },

    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es necesario'],
    },

    role: {
        type: String,
        default: 'USER_ROLE',


    },
    estado: {

        type: Boolean,
        default: true

    }


});

usuarioSchema.plugin(uniqueValidator, { message: 'el {PATH} debe ser unico' });


module.exports = mongoose.model('Usuario', usuarioSchema);