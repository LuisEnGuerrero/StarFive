const coleccionMaterias = require('../schemas/materia_schemas');
const operacionesMaterias = {};

operacionesMaterias.getMaterias = async function(req, res) {
    const materias = await coleccionMaterias.find();
    res.json(materias);

}

operacionesMaterias.getMateria = async function(req, res) {
    const materia = await coleccionMaterias.findById(req.params.id);
    res.json(materia);

}

operacionesMaterias.crearMaterias = async function(req, res) {
    const materia = new coleccionMaterias(req.body);
    await materia.save();
    res.json({"status": "Dato de Materia guardado"});

}

operacionesMaterias.actualizarMaterias = async function(req, res) {
    const { id } = req.params;
    const materia = {
        nombre: req.body.nombre,
        grado: req.body.grado
    }
    console.log(materia)
    await coleccionMaterias.findByIdAndUpdate(req.params.id, {$set: materia}, {new: true});
    res.json({"status":"Dato de Materia actualizado"});

}

operacionesMaterias.borrarMaterias = async function(req, res) {
    await coleccionMaterias.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de Materia borrado!"});

}

module.exports = operacionesMaterias