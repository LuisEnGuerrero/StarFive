const coleccionInstituciones = require('../schemas/institucion_schemas');
const operacionesInstituciones = {};

operacionesInstituciones.getInstituciones = async function (req, res) {
    try {
        const instituciones = await coleccionInstituciones.find();
        if (instituciones != null) {
            res.status(200).json(instituciones);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesInstituciones.getInstitucion = async function (req, res) {
    try {
        const institucion = await coleccionInstituciones.findById(req.params.id);
        if (institucion != null) {
            res.status(200).json(institucion);
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesInstituciones.crearInstituciones = async function (req, res) {
    try {
        const institucion = new coleccionInstituciones(req.body);
        await institucion.save();
        if (institucion != null) {
            res.status(200).json({ "status": "Dato de Institucion guardado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesInstituciones.actualizarInstituciones = async function (req, res) {
    try {
        const { id } = req.params;
        const institucion = {
            nombres: req.body.nombres,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            pais: req.body.pais,
            telefono: req.body.telefono
        }
        console.log(institucion)
        await coleccionInstituciones.findByIdAndUpdate(req.params.id, { $set: institucion }, { new: true });
        if (institucion != null) {
            res.status(200).json({ "status": "Dato de Institucion actualizado" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

operacionesInstituciones.borrarInstituciones = async function (req, res) {
    try {
        const institucion = await coleccionInstituciones.findByIdAndRemove(req.params.id);
        if (institucion != null) {
            res.status(200).json({ "status": "Dato de Institucion borrado!" });
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operacionesInstituciones