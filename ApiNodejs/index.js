require("./config/conexion");

const express = require("express");
const port = process.env.port || 3000;

//express
const app = express();

//administrar
app.use(express.json());

//config
app.set("port", port);

//rutas
app.use("/api-rol", require("./rutas-rol"));
app.use("/api-tarea", require("./rutas-tarea"));
app.use("/api-usuario", require("./rutas-usuario"));

//iniciar espress
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("error al iniciar el servidor: " + error);
  } else {
    console.log("servidor iniciado en el prueto: " + port);
  }
});
