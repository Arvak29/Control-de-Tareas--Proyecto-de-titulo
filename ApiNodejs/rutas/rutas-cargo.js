const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getCargo/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from cargo where id_c =:id";

    let result = await BD.Open(sql, [id], false);
    Cargo = [];

    result.rows.map(cargo => {
        let cargoSchema = {
            "id_c": cargo[0],
            "nombre_c": cargo[1],
            "id_ui": cargo[0],
            "id_r": cargo[0],
        }

        cargo.push(cargoSchema);
        Cargo = [cargoSchema];
    })
    
    res.json(Cargo);
})

//Get de todo
router.get('/getCargo', async (req, res) => {
    sql = "select * from cargo";

    let result = await BD.Open(sql, [], false);
    Cargos = [];

    result.rows.map(cargo => {
        let cargosSchema = {
            "id_c": cargo[0],
            "nombre_c": cargo[1],
            "id_ui": cargo[0],
            "id_r": cargo[0],
        }

        cargos.push(cargosSchema);
    })

    res.json(Cargos);
})

//Agregar
router.post('/addCargo', async (req, res) => {
    const {id_c, nombre_c, id_ui, id_r} = req.body;

    sql = "insert into cargo(id_c, nombre_c, id_ui, id_r) values (:id_c, :nombre_c, id_ui, id_r)";

    await BD.Open(sql, [id_ui, nombre_ui], true);

    res.status(200).json({
        "id_c": id_c,
        "nombre_c": nombre_c,
        "id_ui": id_ui,
        "id_r": id_r
    })
})

//Actualizar
router.put("/UpdateCargo", async (req, res) => {
    const {id_c, nombre_c, id_ui, id_r} = req.body;
    
    sql = "update cargo set nombre_c=:nombre_c, id_ui=:id_ui, id_r=:id_r where id_c=:id_c";

    await BD.Open(sql, [nombre_ui, id_ui], true);

    res.status(200).json({
        "id_c": id_c,
        "nombre_c": nombre_c,
        "id_ui": id_ui,
        "id_r": id_r
        })
})

//Borrar
router.delete("/deleteCargo/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete cargo where id_c=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Cargo eliminado" })
})

module.exports = router;