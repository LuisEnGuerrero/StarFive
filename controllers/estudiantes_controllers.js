const coleccionEstudiantes = require('../schemas/estudiante_schemas');
const operacionesEstudiantes = {};

operacionesEstudiantes.getEstudiantes = async function(req, res) {
    const estudiantes = await coleccionEstudiantes.find();
    res.json(estudiantes);
}

operacionesEstudiantes.getEstudiante = async function(req, res) {
    const estudiante = await coleccionEstudiantes.findById(req.params.id);
    res.json(estudiante);
}

operacionesEstudiantes.crearEstudiantes = async function(req, res) {
    const estudiante = new coleccionEstudiantes(req.body);
    await estudiante.save();
    res.json({"status": "Dato de Estudiante guardado"});
}

operacionesEstudiantes.actualizarEstudiantes = async function(req, res) {
    const { id } = req.params;
    const estudiante = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        acudiente: req.body.acudiente,
        correo_acudiente: req.body.correo_acudiente,
        telefono_acudiente: req.body.telefono_acudiente,
        institucion:{
            id: req.body.institucion.id
        }
    }
    console.log(estudiante)
    await coleccionEstudiantes.findByIdAndUpdate(req.params.id, {$set: estudiante}, {new: true});
    res.json({"status":"Dato de Estudiante actualizado"});
}

operacionesEstudiantes.borrarEstudiantes = async function(req, res) {
    await coleccionEstudiantes.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de estudiante borrado!"});
}

module.exports = operacionesEstudiantes