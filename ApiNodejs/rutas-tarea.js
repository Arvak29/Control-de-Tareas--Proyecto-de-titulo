const router = require("express").Router();
const conexion = require("./config/conexion");

//get rol
router.get("/", (req, res) => {
  let sql = "select * from tb_tarea";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get de un rol
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_tarea where id_tarea = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar rol ID_RESPONTABLE NO ESTA PUESTO
router.post("/", (req, res) => {
  const { nombre_tarea, descripcion, fecha_inicio, fecha_termino } = req.body;

  let sql = `insert into tb_tarea(nombre_tarea, descripcion, fecha_inicio, fecha_termino) 
            values ('${nombre_tarea}','${descripcion}','${fecha_inicio}','${fecha_termino}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_tarea where id_tarea = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea eliminado" });
    }
  });
});

//modificar AGREGAR DATOS DE DATE Y ID_RESPONSABLE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_tarea, descripcion, fecha_inicio, fecha_termino } = req.body;

  let sql = `update tb_tarea set 
                nombre_tarea ='${nombre_tarea}',
                descripcion ='${descripcion}',
                fecha_inicio ='${fecha_inicio}',
                fecha_termino ='${fecha_termino}'
                where id_tarea = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea modificado" });
    }
  });
});

module.exports = router;
