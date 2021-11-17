const router = require('express').Router();
const estudiantesControllers = require('../controllers/estudiantes_controllers');


/*
	Archivo de operaciones
	-----------------------------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	-----------------------------------------
	'/api/estudiantes'

	Puntos de conexión (endpoints)
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/

router.get('/', estudiantesControllers.getEstudiantes);
router.get('/:id', estudiantesControllers.getEstudiante);
router.post('/', estudiantesControllers.crearEstudiantes);
router.put('/:id', estudiantesControllers.actualizarEstudiantes);
router.delete('/:id', estudiantesControllers.borrarEstudiantes);

module.exports = router