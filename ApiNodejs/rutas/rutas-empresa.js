const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getEmpresa/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from empresa where id_e =:id";

    let result = await BD.Open(sql, [id], false);
    res.json(result.rows);
})

//Get de todo
router.get('/getEmpresas', async (req, res) => {
    sql = "select * from empresa";

    let result = await BD.Open(sql, [], false);
    res.json(result.rows);
})

//Agregar
router.post('/addEmpresa', async (req, res) => {
    const { id_e, nombre_e} = req.body;

    sql = "insert into empresa(id_e, nombre_e) values (:id_e, :nombre_e)";
    
    await BD.Open(sql, [id_e, nombre_e], true);

    res.status(200).json({
        "id_e": id_e,
        "nombre_e": nombre_e
    })
})

//Actualizar
router.put("/UpdateEmpresa", async (req, res) => {
    const {id, id_e, nombre_e} = req.body;
    
    sql = "update empresa set nombre_e=:nombre_e where id_e=:id_e";

    await BD.Open(sql, [nombre_e, id_e], true);

    res.status(200).json({
        "id_e": id_e,
        "nombre_e": nombre_e
    })
})

//Borrar
router.delete("/deleteEmpresa/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete empresa where id_e=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Empresa eliminada" })
})

module.exports = router;