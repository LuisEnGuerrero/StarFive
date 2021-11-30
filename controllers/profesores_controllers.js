const coleccionProfesores = require('../schemas/profesor_schemas');
const operacionesProfesores = {};

operacionesProfesores.getProfesores = async function (req, res) {
    try {
        const profesores = await coleccionProfesores.find();
        if (profesores != null) {
            res.status(200).json(profesores);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesProfesores.getProfesor = async function (req, res) {
    try {
        const profesor = await coleccionProfesores.findById(req.params.id);
        if (profesor != null) {
            res.status(200).json(profesor);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesProfesores.crearProfesores = async function (req, res) {
    try {
        const profesor = new coleccionProfesores(req.body);
        await profesor.save();
        if (profesor != null) {
            res.status(200).json({ "status": "Dato de Profesor guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesProfesores.actualizarProfesores = async function (req, res) {
    try {
        const { id } = req.params;
        const profesor = {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            telefono: req.body.telefono,
            institucion: {
                id: req.body.institucion.id
            },
            materia: {
                id: req.body.materia.id
            },
            grupo: {
                id: req.body.grupo.id
            }
        }
        console.log(profesor)
        await coleccionProfesores.findByIdAndUpdate(req.params.id, { $set: profesor }, { new: true });
        if (profesor != null) {
            res.status(200).json({ "status": "Dato de Profesor actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesProfesores.borrarProfesores = async function (req, res) {
    try {
        const profesor = await coleccionProfesores.findByIdAndRemove(req.params.id);
        if (profesor != null) {
            res.status(200).json({ "status": "Dato de Profesor borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operacionesProfesores