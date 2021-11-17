const router = require('express').Router();
const materiasControllers = require('../controllers/materias_controllers');

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

router.get('/', materiasControllers.getMaterias);
router.get('/:id', materiasControllers.getMateria);
router.post('/', materiasControllers.crearMaterias);
router.put('/:id', materiasControllers.actualizarMaterias);
router.delete('/:id', materiasControllers.borrarMaterias);

module.exports = router