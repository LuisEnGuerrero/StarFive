const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombres: String,
    direccion: String,
    ciudad: String,
    pais: String,
    telefono: String,
});

module.exports = mongoose.model('Institucion', esquema);