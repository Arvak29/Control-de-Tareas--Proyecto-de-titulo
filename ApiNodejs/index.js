const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const puerto = 3000;

//imports
const RutasTarea = require('./rutas/rutas-tarea');
const RutasRol = require('./rutas/rutas-rol');
const RutasUnidadInterna = require('./rutas/rutas-unidad-interna');
const RutasTareaSub = require('./rutas/rutas-tarea-sub');
const RutasFlujoTarea = require('./rutas/rutas-flujo-tarea');
const RutasUsuario = require('./rutas/rutas-usuario');
const RutasCargo = require('./rutas/rutas-cargo');
const RutasReporteProblema = require('./rutas/rutas-reporte-problema');

//settings
app.set('port', puerto);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(RutasTarea, RutasRol, RutasUnidadInterna, RutasTareaSub, RutasFlujoTarea, RutasUsuario, RutasCargo, RutasReporteProblema );

//run
app.listen(app.get('port'), () => {
    console.log('Server on Port 3000')
})