const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    nombre: String,
    grado: String,
    cantidad_alumnos: Number,
    tareas: { _id: String },
    estudiantes:
        { _id: String }
});

module.exports = mongoose.model('Grupo', esquema);
