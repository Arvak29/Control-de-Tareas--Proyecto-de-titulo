const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const puerto = 3000;

//imports
const RutasRol = require("./rutas/rutas-rol");
const RutasUnidadInterna = require("./rutas/rutas-unidad-interna");
const RutasUsuario = require("./rutas/rutas-usuario");
const RutasCargo = require("./rutas/rutas-cargo");
const RutasEmpresa = require("./rutas/rutas-empresa");
const RutasTarea = require("./rutas/rutas-tarea");
const RutasTareaSub = require("./rutas/rutas-tarea-sub");
const RutasFlujoTarea = require("./rutas/rutas-flujo-tarea");
const RutasAsignacionTarea = require("./rutas/rutas-asignacion-tarea");
const RutasAsignacionTareaSub = require("./rutas/rutas-asignacion-tarea-subordinada");
const RutasEjecucionFlujoTarea = require("./rutas/rutas-ejecucion-flujo-tarea");
const RutasReporteProblema = require("./rutas/rutas-reporte-problema");
const RutasPorcGlobal = require("./rutas/rutas-porcentaje-global");
const RutasNotificacion = require("./rutas/rutas-notificacion");


//settings
app.set("port", puerto);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(
  RutasRol,
  RutasUnidadInterna,
  RutasUsuario,
  RutasCargo,
  RutasEmpresa,
  RutasTarea,
  RutasTareaSub,
  RutasFlujoTarea,
  RutasAsignacionTarea,
  RutasAsignacionTareaSub,
  RutasEjecucionFlujoTarea,
  RutasReporteProblema,
  RutasPorcGlobal,
  RutasNotificacion 
);

//run
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("error al iniciar el servidor: " + error);
  } else {
    console.log("servidor iniciado en el puerto: " + puerto);
  }
});
