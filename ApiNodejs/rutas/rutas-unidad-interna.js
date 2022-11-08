const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


// get especifico
router.get('/getUI/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from unidad_interna where id_ui =:id";

    let result = await BD.Open(sql, [id], false);

    result.rows.map(unidad_interna => {
        let unidad_internaSchema = {
            "id_ui": unidad_interna[0],
            "nombre_ui": unidad_interna[1]
        }

        unidad_interna.push(unidad_internaSchema);
        Unidad_Interna = [unidad_internaSchema];
    })
    
    res.json(Unidad_Interna);
})

// get de todo
router.get('/getUSIS', async (req, res) => {
    sql = "select * from unidad_interna";

    let result = await BD.Open(sql, [], false);
    Unidades_Internas = [];

    result.rows.map(unidad_interna => {
        let unidades_internasSchema = {
            "id_r": unidad_interna[0],
            "nombre_r": unidad_interna[1]
        }

        Unidades_Internas.push(unidades_internasSchema);
    })

    res.json(Unidades_Internas);
})

//agregar
router.post('/addUI', async (req, res) => {
    const { id_ui, nombre_ui} = req.body;

    sql = "insert into unidad_interna(id_ui, nombre_ui) values (:id_ui, :nombre_ui)";

    await BD.Open(sql, [id_ui, nombre_ui], true);

    res.status(200).json({
        "id_ui": id_ui,
        "nombre_ui": nombre_ui
    })
})

//Actualizar
router.put("/UpdateUI", async (req, res) => {
    const { id_ui, nombre_ui} = req.body;
    
    sql = "update unidad_interna set nombre_ui=:nombre_ui where id_ui=:id_ui";

    await BD.Open(sql, [nombre_ui, id_ui], true);

    res.status(200).json({
            "id_ui": id_ui,
            "nombre_ui": nombre_ui
        })
})

//DELETE
router.delete("/deleteUI/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete unidad_interna where id_ui=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Unidad Interna Eliminada" })
})

module.exports = router;