const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    telefono: String,
    institucion: { String: String },
    materia: { String: String },
    Grupos: { String: String }
});

module.exports = mongoose.model('Profesor', esquema);