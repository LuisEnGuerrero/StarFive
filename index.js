const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./connection');
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Lista de rutas base
app.use('/api/estudiantes', require('./routes/estudiantes_route'));
app.use('/api/grupos', require('./routes/grupos_route'));
app.use('/api/instituciones', require('./routes/instituciones_route'));
app.use('/api/materias', require('./routes/materias_route'));
app.use('/api/profesores', require('./routes/profesores_route'));
app.use('/api/tareas', require('./routes/tareas_route'));

//Arranque
app.listen(app.get('port'), () => {
    console.log(process.env.npm_package_name + " iniciando en puerto "+ app.get('port'))
});
