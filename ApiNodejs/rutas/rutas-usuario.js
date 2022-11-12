const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getUsuario/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from usuario where id_u =:id";

    let result = await BD.Open(sql, [id], false);
    Usuario = [];

    result.rows.map(usuario => {
        let usuarioSchema = {
            "id_u": usuario[0],
            "nombre_u": usuario[1],
            "email_u": usuario[2],
            "password_u": usuario[3],
            "id_c": usuario[4]
        }

        usuario.push(usuarioSchema);
        Usuario = [usuarioSchema];
    })
    
    res.json(Usuario);
})

//Get de todo
router.get('/getUsuarios', async (req, res) => {
    sql = "select * from usuario";

    let result = await BD.Open(sql, [], false);
    Usuarios = [];

    result.rows.map(usuario => {
        let usuariosSchema = {
            "id_u": usuario[0],
            "nombre_u": usuario[1],
            "email_u": usuario[2],
            "password_u": usuario[3],
            "id_c": usuario[4]
        }

        usuario.push(usuariosSchema);
    })

    res.json(Usuarios);
})

//Agregar
router.post('/addUsuario', async (req, res) => {
    const {id_u, nombre_u, email_u, password_u, id_c} = req.body;

    sql = "insert into usuario(id_u, nombre_u, email_u, password_u, id_c) values (:id_u, :nombre_u, :email_u, :password_u, :id_c)";

    await BD.Open(sql, [id_u, nombre_u, email_u, password_u, id_c], true);

    res.status(200).json({
        "id_u": id_u,
        "nombre_u": nombre_u,
        "email_u": email_u,
        "password_u": password_u,
        "id_c": id_c
    })
})

//Actualizar
router.put("/UpdateUsuario", async (req, res) => {
    const {id_u, nombre_u, email_u, password_u, id_c} = req.body;
    
    sql = "update usuario set nombre_u=:nombre_u, email_u=:email_u, password_u=:password_u, id_c=:id_c where id_u=:id_u";

    await BD.Open(sql, [id_u, nombre_u, email_u, password_u, id_c], true);

    res.status(200).json({
        "id_u": id_u,
        "nombre_u": nombre_u,
        "email_u": email_u,
        "password_u": password_u,
        "id_c": id_c
        })
})

//Borrar
router.delete("/deleteUsuario/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete usuario where id_u=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Usuario Eliminado" })
})

module.exports = router;