const router = require('express').Router();
const institucionesControllers = require('../controllers/instituciones_controllers')

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

router.get('/', institucionesControllers.getInstituciones);
router.get('/:id', institucionesControllers.getInstitucion);
router.post('/', institucionesControllers.crearInstituciones);
router.put('/:id', institucionesControllers.actualizarInstituciones);
router.delete('/:id', institucionesControllers.borrarInstituciones);

module.exports = router