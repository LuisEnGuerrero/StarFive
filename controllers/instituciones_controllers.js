const coleccionInstituciones = require('../schemas/institucion_schemas');
const operacionesInstituciones = {};

operacionesInstituciones.getInstituciones = async function(req, res) {
    const instituciones = await coleccionInstituciones.find();
    res.json(instituciones);

}

operacionesInstituciones.getInstitucion = async function(req, res) {
    const institucion = await coleccionInstituciones.findById(req.params.id);
    res.json(institucion);

}

operacionesInstituciones.crearInstituciones = async function(req, res) {
    const institucion = new coleccionInstituciones(req.body);
    await institucion.save();
    res.json({"status": "Dato de Institucion guardado"});

}

operacionesInstituciones.actualizarInstituciones = async function(req, res) {
    const { id } = req.params;
    const institucion = {
        nombres: req.body.nombres,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        pais: req.body.pais,
        telefono: req.body.telefono
    }
    console.log(institucion)
    await coleccionInstituciones.findByIdAndUpdate(req.params.id, {$set: institucion}, {new: true});
    res.json({"status":"Dato de Institucion actualizado"});

}

operacionesInstituciones.borrarInstituciones = async function(req, res) {
    await coleccionInstituciones.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de Institucion borrado!"});

}

module.exports = operacionesInstituciones