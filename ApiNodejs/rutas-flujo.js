const router = require("express").Router();
const conexion = require("./config/conexion");

//get flujo
router.get("/", (req, res) => {
  let sql = "select * from tb_flujo_tarea";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get de un flujo
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_flujo_tarea where id_flujo = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar flujo ID_RESPONTABLE NO ESTA PUESTO
router.post("/", (req, res) => {
  const { nombre_flujo, descripcion_flujo, fecha_comienzo, fecha_entrega } =
    req.body;

  let sql = `insert into tb_flujo_tarea(nombre_flujo, descripcion_flujo, fecha_comienzo, fecha_entrega) 
            values ('${nombre_flujo}','${descripcion_flujo}','${fecha_comienzo}','${fecha_entrega}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "flujo agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_flujo_tarea where id_flujo = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "flujo eliminado" });
    }
  });
});

//modificar AGREGAR DATOS DE DATE Y ID_RESPONSABLE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_flujo, descripcion_flujo, fecha_comienzo, fecha_entrega } =
    req.body;

  let sql = `update tb_flujo_tarea set 
                nombre_flujo ='${nombre_flujo}',
                descripcion_flujo ='${descripcion_flujo}',
                fecha_comienzo ='${fecha_comienzo}',
                fecha_entrega ='${fecha_entrega}'
                where id_flujo = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "flujo modificado" });
    }
  });
});

module.exports = router;
