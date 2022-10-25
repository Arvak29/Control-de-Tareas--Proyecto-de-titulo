const router = require("express").Router();
const conexion = require("./config/conexion");

//get tarea-sub
router.get("/", (req, res) => {
  let sql = "select * from tb_tarea_subordinada";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get de un tarea-sub
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_tarea_subordinada where id_tarea_sub = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar tarea-sub
router.post("/", (req, res) => {
  const { nombre_tarea_sub, descripcion_sub, fecha_comienzo, fecha_entrega } =
    req.body;

  let sql = `insert into tb_tarea_subordinada(nombre_tarea_sub, descripcion_sub, fecha_comienzo, fecha_entrega) 
            values ('${nombre_tarea_sub}','${descripcion_sub}','${fecha_comienzo}','${fecha_entrega}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea subordinada agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_tarea_subordinada where id_tarea_sub = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea subordinada eliminado" });
    }
  });
});

//modificar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_tarea_sub, descripcion_sub, fecha_comienzo, fecha_entrega } =
    req.body;

  let sql = `update tb_tarea_subordinada set 
                nombre_tarea_sub ='${nombre_tarea_sub}',
                descripcion_sub ='${descripcion_sub}',
                fecha_comienzo ='${fecha_comienzo}',
                fecha_entrega ='${fecha_entrega}'
                where id_tarea_sub = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "tarea subordinada modificado" });
    }
  });
});

module.exports = router;
