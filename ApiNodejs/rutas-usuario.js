const router = require("express").Router();
const conexion = require("./config/conexion");

//get usuario
router.get("/", (req, res) => {
  let sql = "select * from tb_usuario";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get de un usuario
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_usuario where id_usuario = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar usuario ID_ROL NO ESTA PUESTO
router.post("/", (req, res) => {
  const { nombre_usuario, email_usuario, password_usuario } = req.body;

  let sql = `insert into tb_usuario(nombre_usuario, email_usuario, password_usuario) 
            values ('${nombre_usuario}','${email_usuario}','${password_usuario}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "usuario agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_usuario where id_usuario = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "usuario eliminado" });
    }
  });
});

//modificar AGREGAR DATOS DE DATE Y ID_ROL
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_usuario, email_usuario, password_usuario } = req.body;

  let sql = `update tb_usuario set 
                nombre_usuario ='${nombre_usuario}',
                email_usuario ='${email_usuario}',
                password_usuario ='${password_usuario}'
                where id_usuario = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "usuario modificado" });
    }
  });
});

module.exports = router;
