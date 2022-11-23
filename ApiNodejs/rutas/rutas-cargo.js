const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-cargo/getVista_Cargo/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from vista_cargo where id_c =:id";

    let result = await BD.Open(sql, [id], false);
    Vista_Cargo = [];

    result.rows.map(vista_cargo => {
        let vista_cargoSchema = {
            "nombre_c": vista_cargo[1],
            "nombre_ui": vista_cargo[2],
            "nombre_r": vista_cargo[3]
        }

        Vista_Cargo.push(vista_cargoSchema);
    })
    
    res.json(Vista_Cargo);
})

//Get de toda la vista
router.get('/api-cargo/getVista_Cargos', async (req, res) => {
    sql = "select * from vista_cargo";

    let result = await BD.Open(sql, [], false);
    Vista_Cargos = [];

    result.rows.map(vista_cargo => {
        let vista_cargosSchema = {
            "nombre_c": vista_cargo[1],
            "nombre_ui": vista_cargo[2],
            "nombre_r": vista_cargo[3]
        }

        Vista_Cargos.push(vista_cargosSchema);
    })
    
    res.json(Vista_Cargos);
})

//Get especifico
router.get('/api-cargo/getCargo/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from cargo where id_c =:id";

    let result = await BD.Open(sql, [id], false);
    Cargo = [];

    result.rows.map(cargo => {
        let cargoSchema = {
            "id_c": cargo[0],
            "nombre_c": cargo[1],
            "id_ui": cargo[2],
            "id_r": cargo[3]
        }

        Cargo.push(cargoSchema);
    })
    
    res.json(Cargo);
})

//Get de todo
router.get('/api-cargo/getCargos', async (req, res) => {
    sql = "select * from cargo";

    let result = await BD.Open(sql, [], false);
    Cargos = [];

    result.rows.map(cargo => {
        let cargosSchema = {
            "id_c": cargo[0],
            "nombre_c": cargo[1],
            "id_ui": cargo[2],
            "id_r": cargo[3]
        }

        Cargos.push(cargosSchema);
    })

    res.json(Cargos);
})

//Agregar
router.post('/api-cargo/addCargo/', async (req, res) => {
    const {id_c, nombre_c, id_ui, id_r} = req.body;

    sql = "insert into cargo(id_c, nombre_c, id_ui, id_r) values (:id_c, :nombre_c, :id_ui, :id_r)";

    await BD.Open(sql, [id_c, nombre_c, id_ui, id_r], true);

    res.status(200).json({
        "id_c": id_c,
        "nombre_c": nombre_c,
        "id_ui": id_ui,
        "id_r": id_r
    })
})

//Actualizar
router.patch("/api-cargo/updateCargo/:id", async (req, res) => {
    const { id } = req.params;
    const {id_c, nombre_c, id_ui, id_r} = req.body;
    
    sql = "update cargo set nombre_c=:nombre_c, id_ui=:id_ui, id_r=:id_r where id_c=:id";

    await BD.Open(sql, [nombre_c, id_ui, id_r, id], true);

    res.status(200).json({
        "id_c": id_c,
        "nombre_c": nombre_c,
        "id_ui": id_ui,
        "id_r": id_r
        })
})

//Borrar
router.delete("/api-cargo/deleteCargo/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete cargo where id_c=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Cargo eliminado" })
})

module.exports = router;