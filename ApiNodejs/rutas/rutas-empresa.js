const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getEmpresa/:id', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo
router.get('/api-empresa/getEmpresas', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/addEmpresa', async (req, res) => {

    try{
        const { id_e, nombre_e} = req.body;

        sql = "insert into empresa(id_e, nombre_e) values (:id_e, :nombre_e)";
        
        await BD.Open(sql, [id_e, nombre_e], true);

        res.status(200).json({
            "id_e": id_e,
            "nombre_e": nombre_e
        })
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/UpdateEmpresa/:id", async (req, res) => {

    try{
        const { id } = req.params;
        const { id_e, nombre_e} = req.body;
        
        sql = "update empresa set nombre_e=:nombre_e where id_e=:id";

        await BD.Open(sql, [nombre_e, id], true);

        res.status(200).json({
            "id_e": id_e,
            "nombre_e": nombre_e
        })
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/deleteEmpresa/:id", async (req, res) => {

    try{
        const { id } = req.params;

        sql = "delete empresa where id_e=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Empresa eliminada" })
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;