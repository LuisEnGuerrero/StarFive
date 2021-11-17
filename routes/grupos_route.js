const router = require('express').Router();
const gruposControllers = require('../controllers/grupos_controllers')

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

router.get('/', gruposControllers.getGrupos);
router.get('/:id', gruposControllers.getGrupo);
router.post('/', gruposControllers.crearGrupos);
router.put('/:id', gruposControllers.actualizarGrupos);
router.delete('/:id', gruposControllers.borrarGrupos);

module.exports = router