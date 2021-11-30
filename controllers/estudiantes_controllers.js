const coleccionEstudiantes = require('../schemas/estudiante_schemas');
const operacionesEstudiantes = {};

operacionesEstudiantes.getEstudiantes = async function (req, res) {
    try {
        const estudiantes = await coleccionEstudiantes.find();
        if (estudiantes != null) {
            res.status(200).json(estudiantes);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operacionesEstudiantes.getEstudiante = async function (req, res) {
    try {
        const estudiante = await coleccionEstudiantes.findById(req.params.id);
        if (estudiante != null) {
            res.status(200).json(estudiante);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operacionesEstudiantes.crearEstudiantes = async function (req, res) {
    try {
        const estudiante = new coleccionEstudiantes(req.body);
        await estudiante.save();

        if (estudiante != null) {
            res.status(200).json({ "status": "Dato de Estudiante guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operacionesEstudiantes.actualizarEstudiantes = async function (req, res) {
    try {
        const { id } = req.params;
        const estudiante = {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            telefono: req.body.telefono,
            acudiente: req.body.acudiente,
            correo_acudiente: req.body.correo_acudiente,
            telefono_acudiente: req.body.telefono_acudiente,
            institucion: {
                id: req.body.institucion.id
            }
        }
        console.log(estudiante)
        await coleccionEstudiantes.findByIdAndUpdate(req.params.id, { $set: estudiante }, { new: true });

        if (estudiante != null) {
            res.status(200).json({ "status": "Dato de Estudiante actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operacionesEstudiantes.borrarEstudiantes = async function (req, res) {
    try {
        const estudiante = await coleccionEstudiantes.findByIdAndRemove(req.params.id);
        if (estudiante != null) {
            res.json({ "status": "Dato de estudiante borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

module.exports = operacionesEstudiantes