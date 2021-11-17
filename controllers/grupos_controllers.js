const coleccionGrupos = require('../schemas/grupo_schemas');
const operacionesGrupos = {};

operacionesGrupos.getGrupos = async function(req, res) {
    const grupos = await coleccionGrupos.find();
    res.json(grupos);

}

operacionesGrupos.getGrupo = async function(req, res) {
    const grupo = await coleccionGrupos.findById(req.params.id);
    res.json(grupo);

}

operacionesGrupos.crearGrupos = async function(req, res) {
    const grupo = new coleccionGrupos(req.body);
    await grupo.save();
    res.json({"status": "Dato de Grupo guardado"});

}

operacionesGrupos.actualizarGrupos = async function(req, res) {
    const { id } = req.params;
    const grupo = {
        nombre: req.body.nombre,
        grado: req.body.grado,
        cantidad_alumnos: req.body.cantidad_alumnos,
        tareas:{
            id: req.body.tarea.id
        },
        estudiantes:{
            id: req.body.estudiantes.id
        }
    }
    console.log(grupo)
    await coleccionGrupos.findByIdAndUpdate(req.params.id, {$set: grupo}, {new: true});
    res.json({"status":"Dato de Grupo actualizado"});

}

operacionesGrupos.borrarGrupos = async function(req, res) {
    await coleccionGrupos.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de grupo borrado!"});

}

module.exports = operacionesGrupos