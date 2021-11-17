const coleccionProfesores = require('../schemas/profesor_schemas');
const operacionesProfesores = {};

operacionesProfesores.getProfesores = async function(req, res) {
    const profesores = await coleccionProfesores.find();
    res.json(profesores);

}

operacionesProfesores.getProfesor = async function(req, res) {
    const profesor = await coleccionProfesores.findById(req.params.id);
    res.json(profesor);

}

operacionesProfesores.crearProfesores = async function(req, res) {
    const profesor = new coleccionProfesores(req.body);
    await profesor.save();
    res.json({"status": "Dato de Profesor guardado"});

}

operacionesProfesores.actualizarProfesores = async function(req, res) {
    const { id } = req.params;
    const profesor = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        institucion:{
            id: req.body.institucion.id
        },
        materia:{
            id: req.body.materia.id
        },
        grupo:{
            id: req.body.grupo.id
        }
    }
    console.log(profesor)
    await coleccionProfesores.findByIdAndUpdate(req.params.id, {$set: profesor}, {new: true});
    res.json({"status":"Dato de Profesor actualizado"});

}

operacionesProfesores.borrarProfesores = async function(req, res) {
    await coleccionProfesores.findByIdAndRemove(req.params.id);
    res.json({"status":"Dato de Profesor borrado!"});

}

module.exports = operacionesProfesores