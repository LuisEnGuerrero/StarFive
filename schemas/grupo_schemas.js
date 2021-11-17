const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombre: String,
    grado: String,
    cantidad_alumnos: Number,
    tareas: { Integer: String },
    estudiantes:
        { Integer: String }
});

module.exports = mongoose.model('Grupo', esquema);
