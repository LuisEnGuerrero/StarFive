const coleccionTareas = require('../schemas/tarea_schemas');
const operacionesTareas = {};

operacionesTareas.getTareas = async function(req, res) {

    const tareas = await coleccionTareas.find();
    res.json(tareas);

}

operacionesTareas.getTarea = async function(req, res) {
    const tarea = await coleccionTareas.findById(req.params.id);
    res.json(tarea);

}

operacionesTareas.crearTareas = async function(req, res) {
    const tarea = new coleccionTareas(req.body);
    await tarea.save();
    res.json({"status": "Dato de Tarea guardado"});

}

operacionesTareas.actualizarTareas = async function(req, res) {
    const { id } = req.params;
    const tarea = {
        titulo: req.body.titulo,
        descripción: req.body.descripción,
        entregada: req.body.entregada,
        calificacion: req.body.calificacion,
        fecha_entrega: req.body.fecha_entrega,
        fecha_vencimiento: req.body.fecha_vencimiento,
        materia:{
            id: req.body.materia.id
        }
    }
    console.log(tarea)
    await coleccionTareas.findByIdAndUpdate(req.params.id, {$set: tarea}, {new: true});
    res.json({"status":"Dato de Tarea actualizado"});

}

operacionesTareas.borrarTareas = async function(req, res) {
    await coleccionTareas.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de Tarea borrado!"});

}

module.exports = operacionesTareas