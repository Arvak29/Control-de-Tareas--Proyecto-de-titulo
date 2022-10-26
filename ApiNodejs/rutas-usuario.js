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
  const { nombre_usuario, email_usuario, password_usuario, rol } = req.body;

  let sql = `insert into tb_usuario(nombre_usuario, email_usuario, password_usuario, rol) 
            values ('${nombre_usuario}','${email_usuario}','${password_usuario}', '${rol}')`;
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
  const { nombre_usuario, email_usuario, password_usuario, rol } = req.body;

  let sql = `update tb_usuario set 
                nombre_usuario ='${nombre_usuario}',
                email_usuario ='${email_usuario}',
                password_usuario ='${password_usuario}',
                rol ='${rol}'
                where id_usuario = '${id}'`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "usuario modificado" });
    }
  });
});

//
const jwt = require("jsonwebtoken");

router.post("/singin", (req, res) => {
  const { nombre_usuario, password_usuario } = req.body;
  conexion.query(
    "select nombre_usuario,rol from tb_usuario where nombre_usuario=? and password_usuario=?",
    [nombre_usuario, password_usuario],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length > 0) {
          let data = JSON.stringify(rows[0]);
          const token = jwt.sign(data, "stil");
          res.json({ token });
        } else {
          res.json("Usuario y clave incorrrectos");
        }
      } else {
        res.json(rows);
      }
    }
  );
});

router.post("/test", verifyToken, (req, res) => {
  res.json("Informacion secreta");
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) return res.status(401).json("No autorizado");

  const token = req.headers.authorization.substr(7);
  if (token !== "") {
    const content = jwt.verify(token, "stil");
    req.data = content;
    next();
  } else {
    res.status(401).json("token vacio");
  }
}

module.exports = router;
