const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombre: String,
    grado: String,
});

module.exports = mongoose.model('Materia', esquema);