const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    titulo: String,
    descripcion: String,
    entregada: Boolean,
    calificacion: Number,
    fecha_entrega: {type: Date, required: false},
    fecha_vencimiento: Date,
    materia: String
});

module.exports = mongoose.model('Tarea', esquema);