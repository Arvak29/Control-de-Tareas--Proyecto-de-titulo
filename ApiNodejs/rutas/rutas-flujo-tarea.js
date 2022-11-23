const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-flujo/getVista_Flujo_Tarea/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from vista_flujo_tarea where id_ft =:id";

    let result = await BD.Open(sql, [id], false);
    Vista_Flujo_Tarea = [];

    result.rows.map(vista_flujo_tarea => {
        let vista_flujo_tareaSchema = {
            "nombre_ft": vista_flujo_tarea[1],
            "descripcion_ft": vista_flujo_tarea[2],
            "fecha_inicio_ft": vista_flujo_tarea[3],
            "fecha_entrega_ft": vista_flujo_tarea[4],
            "porcentaje_avance_ft": vista_flujo_tarea[5],
            "estado_ft": vista_flujo_tarea[6],
            "nombre_u": vista_flujo_tarea[7],
            "nombre_ts": vista_flujo_tarea[8]
        }

        Vista_Flujo_Tarea.push(vista_flujo_tareaSchema);
    })
    
    res.json(Vista_Flujo_Tarea);
})

//Get de todo la vista
router.get('/api-flujo/getVista_Flujos_Tareas', async (req, res) => {
    sql = "select * from vista_flujo_tarea";

    let result = await BD.Open(sql, [], false);
    Vista_Flujos_Tarea = [];

    result.rows.map(vista_flujo_tarea => {
        let vista_flujos_tareaSchema = {
            "nombre_ft": vista_flujo_tarea[1],
            "descripcion_ft": vista_flujo_tarea[2],
            "fecha_inicio_ft": vista_flujo_tarea[3],
            "fecha_entrega_ft": vista_flujo_tarea[4],
            "porcentaje_avance_ft": vista_flujo_tarea[5],
            "estado_ft": vista_flujo_tarea[6],
            "nombre_u": vista_flujo_tarea[7],
            "nombre_ts": vista_flujo_tarea[8]
        }

        Vista_Flujos_Tarea.push(vista_flujos_tareaSchema);
    })
    
    res.json(Vista_Flujos_Tarea);
})

//Get especifico sin responsable
router.get('/api-flujo/getFlujoTarea/:id', async (req, res) => {
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

        Flujo_Tarea.push(flujo_tareaSchema);
    })
    
    res.json(Flujo_Tarea);
})

//Get de todo sin responsable
router.get('/api-flujo/getFlujosTareas', async (req, res) => {
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

        Flujos_Tareas.push(flujos_tareasSchema);
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
router.patch("/api-flujo/UpdateFlujoTarea/:id", async (req, res) => {
    const { id } = req.params;
    const { id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft} = req.body;
    
    sql = "update flujo_tarea set nombre_ft=:nombre_ft, descripcion_ft=:descripcion_ft, fecha_inicio_ft=:fecha_inicio_ft, fecha_entrega_ft=:fecha_entrega_ft, porcentaje_avance_ft=:porcentaje_avance_ft, estado_ft=:estado_ft where id_ft=:id";

    await BD.Open(sql, [nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, porcentaje_avance_ft, estado_ft, id], true);

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