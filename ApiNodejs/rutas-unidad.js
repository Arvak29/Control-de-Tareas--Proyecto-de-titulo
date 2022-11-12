const router = require("express").Router();
const conexion = require("./config/conexion");

//get unidad
router.get("/", (req, res) => {
  let sql = "select * from tb_unidad_interna";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get de un unidad
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_unidad_interna where id_unidad_i = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar unidad ID_RESPONTABLE NO ESTA PUESTO
router.post("/", (req, res) => {
  const { nombre_unidad_i } = req.body;

  let sql = `insert into tb_unidad_interna(nombre_unidad_i) 
            values ('${nombre_unidad_i}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "unidad agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_unidad_interna where id_unidad_i = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "unidad eliminado" });
    }
  });
});

//modificar AGREGAR DATOS DE DATE Y ID_RESPONSABLE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_unidad_i } = req.body;

  let sql = `update tb_unidad_interna set 
                nombre_unidad_i ='${nombre_unidad_i}'
                where id_unidad_i = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "unidad modificado" });
    }
  });
});

module.exports = router;
