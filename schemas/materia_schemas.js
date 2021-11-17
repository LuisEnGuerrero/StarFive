const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    _id: String,
    nombre: String,
    grado: String,
});

module.exports = mongoose.model('Materia', esquema);