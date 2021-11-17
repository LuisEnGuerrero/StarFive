const router = require('express').Router();
const profesoresControllers = require('../controllers/profesores_controllers');

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

router.get('/', profesoresControllers.getProfesores);
router.get('/:id', profesoresControllers.getProfesor);
router.post('/', profesoresControllers.crearProfesores);
router.put('/:id', profesoresControllers.actualizarProfesores);
router.delete('/:id', profesoresControllers.borrarProfesores);

module.exports = router