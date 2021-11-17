const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
    _id: String,
    titulo: String,
    descripción: String,
    entregada: Boolean,
    calificacion: Number,
    fecha_entrega: {type: Date, required: false},
    fecha_vencimiento: Date,
    materia:
        { String: String }
});

module.exports = mongoose.model('Tarea', esquema);