const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    telefono: String,
    institucion: { _id: String },
    materia: { _id: String },
    Grupos: { _id: String }
});

module.exports = mongoose.model('Profesor', esquema);