const coleccionTareas = require('../schemas/tarea_schemas');
const operacionesTareas = {};

operacionesTareas.getTareas = async function (req, res) {
    try {
        const tareas = await coleccionTareas.find();
        if (tareas != null) {
            res.status(200).json(tareas);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesTareas.getTarea = async function (req, res) {
    try {
        const tarea = await coleccionTareas.findById(req.params.id);
        if (tarea != null) {
            res.status(200).json(tarea);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesTareas.crearTareas = async function (req, res) {
    try {
        const tarea = new coleccionTareas(req.body);
        await tarea.save();
        if (tarea != null) {
            res.status(200).json({ "status": "Dato de Tarea guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesTareas.actualizarTareas = async function (req, res) {
    try {
        const { id } = req.params;
        const tarea = {
            titulo: req.body.titulo,
            descripción: req.body.descripción,
            entregada: req.body.entregada,
            calificacion: req.body.calificacion,
            fecha_entrega: req.body.fecha_entrega,
            fecha_vencimiento: req.body.fecha_vencimiento,
            materia: {
                id: req.body.materia.id
            }
        }
        console.log(tarea)
        await coleccionTareas.findByIdAndUpdate(req.params.id, { $set: tarea }, { new: true });
        if (tarea != null) {
            res.status(200).json({ "status": "Dato de Tarea actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesTareas.borrarTareas = async function (req, res) {
    try {
        const tarea = await coleccionTareas.findByIdAndRemove(req.params.id);
        if (tarea != null) {
            res.status(200).json({ "status": "Dato de Tarea borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operacionesTareas