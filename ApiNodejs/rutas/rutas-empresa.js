const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getEmpresa/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from empresa where id_e =:id";

    let result = await BD.Open(sql, [id], false);
    Empresa = [];

    result.rows.map(empresa => {
        let empresaSchema = {
            "id_e": empresa[0],
            "nombre_e": empresa[1]
        }

        Empresa.push(empresaSchema);
    })
    
    res.json(Empresa);
})

//Get de todo
router.get('/api-empresa/getEmpresas', async (req, res) => {
    sql = "select * from empresa";

    let result = await BD.Open(sql, [], false);
    Empresas = [];

    result.rows.map(empresa => {
        let empresasSchema = {
            "id_e": empresa[0],
            "nombre_e": empresa[1]
        }

        Empresas.push(empresasSchema);
    })
    
    res.json(Empresas);
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
router.patch("/UpdateEmpresa/:id", async (req, res) => {
    const { id } = req.params;
    const { id_e, nombre_e} = req.body;
    
    sql = "update empresa set nombre_e=:nombre_e where id_e=:id";

    await BD.Open(sql, [nombre_e, id], true);

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