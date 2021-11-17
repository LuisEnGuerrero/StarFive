const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    telefono: String,
    acudiente: String,
    correo_acudiente: String,
    telefono_acudiente: String,
    institucion:
        { _id: String }
});

module.exports = mongoose.model('Estudiante', esquema);

