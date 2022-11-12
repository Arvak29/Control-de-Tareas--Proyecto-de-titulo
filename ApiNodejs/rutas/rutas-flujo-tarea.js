const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getFlujoTarea/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from flujo_tarea where id_ft =:id";

    let result = await BD.Open(sql, [id], false);
    Flujo_Tarea = [];

    result.rows.map(flujo_tarea => {
        let flujo_tareaSchema = {
            "id_ft": flujo_tarea[0],
            "nombre_ft": flujo_tarea[1],
            "descripcion_ft": flujo_tarea[2],
            "fecha_inicio_ft": flujo_tarea[3],
            "fecha_entrega_ft": flujo_tarea[4],
            "porcentaje_avance_ft": flujo_tarea[5],
            "estado_ft": flujo_tarea[6]
        }

        flujo_tarea.push(flujo_tareaSchema);
        Flujo_Tarea = [flujo_tareaSchema];
    })
    
    res.json(Flujo_Tarea);
})

//Get de todo
router.get('/getFlujosTareas', async (req, res) => {
    sql = "select * from flujo_tarea";

    let result = await BD.Open(sql, [], false);
    Flujos_Tareas = [];

    result.rows.map(flujo_tarea => {
        let flujos_tareasSchema = {
            "id_ft": flujo_tarea[0],
            "nombre_ft": flujo_tarea[1],
            "descripcion_ft": flujo_tarea[2],
            "fecha_inicio_ft": flujo_tarea[3],
            "fecha_entrega_ft": flujo_tarea[4],
            "porcentaje_avance_ft": flujo_tarea[5],
            "estado_ft": flujo_tarea[6]
        }

        Flujos_tareas.push(flujos_tareasSchema);
    })

    res.json(Flujos_Tareas);
})

//Agregar
router.post('/addFlujoTarea', async (req, res) => {
    const { id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft} = req.body;

    sql = "insert into flujo_tarea(id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft) values (:id_ft, :nombre_ft, :descripcion_ft, :fecha_inicio_ft, :fecha_entrega_ft, :porcentaje_avance_ft, :estado_ft)";

    await BD.Open(sql, [id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft], true);

    res.status(200).json({
        "id_ft": id_ft,
        "nombre_ft": nombre_ft,
        "descripcion_ft": descripcion_ft,
        "fecha_inicio_ft": fecha_inicio_ft,
        "fecha_entrega_ft": fecha_entrega_ft,
        "porcentaje_avance_ft": porcentaje_avance_ft,
        "estado_ft": estado_ft
    })
})

//Actualizar
router.put("/UpdateFlujoTarea", async (req, res) => {
    const { id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft} = req.body;
    
    sql = "update flujo_tarea set nombre_ft=:nombre_ft, descripcion_ft=:descripcion_ft, fecha_inicio_ft=:fecha_inicio_ft, fecha_entrega_ft=:fecha_entrega_ft, porcentaje_avance_ft=:porcentaje_avance_ft, estado_ft=:estado_ft where id_ft=:id_ft";

    await BD.Open(sql, [nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft, id_ft], true);

    res.status(200).json({
        "id_ft": id_ft,
        "nombre_ft": nombre_ft,
        "descripcion_ft": descripcion_ft,
        "fecha_inicio_ft": fecha_inicio_ft,
        "fecha_entrega_ft": fecha_entrega_ft,
        "porcentaje_avance_ft": porcentaje_avance_ft,
        "estado_ft": estado_ft
        })
})

//Borrar
router.delete("/deleteFlujoTarea/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete flujo_tarea where id_ft=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Flujo de tarea eliminado" })
})

module.exports = router;