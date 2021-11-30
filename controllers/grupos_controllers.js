const coleccionGrupos = require('../schemas/grupo_schemas');
const operacionesGrupos = {};

operacionesGrupos.getGrupos = async function (req, res) {
    try {
        const grupos = await coleccionGrupos.find();
        if (grupos != null) {
            res.status(200).json(grupos);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesGrupos.getGrupo = async function (req, res) {
    try {
        const grupo = await coleccionGrupos.findById(req.params.id);
        if (grupo != null) {
            res.status(200).json(grupo);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesGrupos.crearGrupos = async function (req, res) {
    try {
        const grupo = new coleccionGrupos(req.body);
        await grupo.save();
        if (grupo != null) {
            res.status(200).json({ "status": "Dato de Grupo guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesGrupos.actualizarGrupos = async function (req, res) {
    try {
        const { id } = req.params;
        const grupo = {
            nombre: req.body.nombre,
            grado: req.body.grado,
            cantidad_alumnos: req.body.cantidad_alumnos,
            tareas: {
                id: req.body.tarea.id
            },
            estudiantes: {
                id: req.body.estudiantes.id
            }
        }
        console.log(grupo)
        await coleccionGrupos.findByIdAndUpdate(req.params.id, { $set: grupo }, { new: true });
        if (grupo != null) {
            res.status(200).json({ "status": "Dato de Grupo actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesGrupos.borrarGrupos = async function (req, res) {
    try {
        const grupo = await coleccionGrupos.findByIdAndRemove(req.params.id);
        if (grupo != null) {
            res.status(200).json({ "status": "Dato de grupo borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operacionesGrupos

/*
    try {

    }
    else {
        res.status(404).json({ message: "Not found" })
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }


            if (grupo!=null){
            res.status(200)
*/