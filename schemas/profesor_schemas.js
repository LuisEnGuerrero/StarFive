const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    _id: String,
    nombres: String,
    apellidos: String,
    correo: String,
    telefono: String,
    institucion: { String: String },
    materia: { String: String },
    Grupos: { String: String }
});

module.exports = mongoose.model('Profesor', esquema);