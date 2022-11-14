const router = require("express").Router();
const BD = require("../config/configbd");

//Get especifico
router.get("/getUsuario/:id", async (req, res) => {
  const { id } = req.params;
  sql = "select * from usuario where id_u =:id";

  let result = await BD.Open(sql, [id], false);
  Usuario = [];

  result.rows.map((usuario) => {
    let usuarioSchema = {
      "id_u": usuario[0],
      "nombre_u": usuario[1],
      "email_u": usuario[2],
      "password_u": usuario[3],
      "id_c": usuario[4],
      "id_e": usuario[5]
    }

    usuario.push(usuarioSchema);
    Usuario = [usuarioSchema];
  })

  res.json(Usuario);
})

//Get de todo
router.get("/getUsuarios", async (req, res) => {
  sql = "select * from usuario";

  let result = await BD.Open(sql, [], false);
  Usuarios = [];

  result.rows.map((usuario) => {
    let usuariosSchema = {
      "id_u": usuario[0],
      "nombre_u": usuario[1],
      "email_u": usuario[2],
      "password_u": usuario[3],
      "id_c": usuario[4],
      "id_e": usuario[5]
    };

    Usuarios.push(usuariosSchema);
  })

  res.json(Usuarios);
})

//Agregar
router.post("/addUsuario", async (req, res) => {
  const { id_u, nombre_u, email_u, password_u, id_c, id_e } = req.body;

  sql = "insert into usuario(id_u, nombre_u, email_u, password_u, id_c, id_e) values (:id_u, :nombre_u, :email_u, :password_u, :id_c, :id_e)";

  await BD.Open(sql, [id_u, nombre_u, email_u, password_u, id_c, id_e], true);

  res.status(200).json({
    "id_u": id_u,
    "nombre_u": nombre_u,
    "email_u": email_u,
    "password_u": password_u,
    "id_c": id_c,
    "id_e": id_e
  })
})

//Actualizar
router.put("/UpdateUsuario", async (req, res) => {
  const { id_u, nombre_u, email_u, password_u, id_c, id_e } = req.body;

  sql =
    "update usuario set nombre_u=:nombre_u, email_u=:email_u, password_u=:password_u, id_c=:id_c, id_e=:id_e where id_u=:id_u";

  await BD.Open(sql, [nombre_u, email_u, password_u, id_c, id_e, id_u], true);

  res.status(200).json({
    id_u: id_u,
    nombre_u: nombre_u,
    email_u: email_u,
    password_u: password_u,
    id_c: id_c,
    id_e: id_e
  })
})

//Borrar
router.delete("/deleteUsuario/:id", async (req, res) => {
  const { id } = req.params;

  sql = "delete usuario where id_u=:id";

  await BD.Open(sql, [id], true);

  res.json({ msg: "Usuario Eliminado" })
})

//Autenticacion
const jwt = require("jsonwebtoken");

router.post("/api-usuario/signin", async (req, res) => {
  const { email_u, password_u } = req.body;
  sql = "select email_u, id_c from usuario where email_u=:email_u and password_u=:password_u";

  let result = await BD.Open(sql, [email_u, password_u], false);
  try {
    if (result.rows.length > 0) {
      let data = JSON.stringify(result.rows[0]);
      const token = jwt.sign(data, "stil");
      res.json({ token });
    } else {
      res.json("Usuario y clave incorrrectos");
    }
  } catch (error) {
    res.json(result.rows);
  }
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
