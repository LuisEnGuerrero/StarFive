const router = require('express').Router();
const tareasControllers = require('../controllers/tareas_controllers');

/*
	Archivo de operaciones
	-----------------------------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	-----------------------------------------
	'/api/grupos'

	Puntos de conexión (endpoints)
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/

router.get('/', tareasControllers.getTareas);
router.get('/:id', tareasControllers.getTarea);
router.post('/', tareasControllers.crearTareas);
router.put('/:id', tareasControllers.actualizarTareas);
router.delete('/:id', tareasControllers.borrarTareas);

module.exports = router