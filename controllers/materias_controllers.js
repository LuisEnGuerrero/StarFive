const coleccionMaterias = require('../schemas/materia_schemas');
const operacionesMaterias = {};

operacionesMaterias.getMaterias = async function (req, res) {
    try {
        const materias = await coleccionMaterias.find();
        if (materias != null) {
            res.status(200).json(materias);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesMaterias.getMateria = async function (req, res) {
    try {
        const materia = await coleccionMaterias.findById(req.params.id);
        if (materia != null) {
            res.status(200).json(materia);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesMaterias.crearMaterias = async function (req, res) {
    try {
        const materia = new coleccionMaterias(req.body);
        await materia.save();
        if (materia != null) {
            res.status(200).json({ "status": "Dato de Materia guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesMaterias.actualizarMaterias = async function (req, res) {
    try {
        const { id } = req.params;
        const materia = {
            nombre: req.body.nombre,
            grado: req.body.grado
        }
        console.log(materia)
        await coleccionMaterias.findByIdAndUpdate(req.params.id, { $set: materia }, { new: true });
        if (materia != null) {
            res.status(200).json({ "status": "Dato de Materia actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesMaterias.borrarMaterias = async function (req, res) {
    try {
        const materia = await coleccionMaterias.findByIdAndRemove(req.params.id);
        if (materia != null) {
            res.status(200).json({ "status": "Dato de Materia borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operacionesMaterias