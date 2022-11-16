const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getTareaSub/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from tarea_subordinada where id_ts =:id";

    let result = await BD.Open(sql, [id], false);
    Tarea_Subordinada = [];

    result.rows.map(tarea_subordinada => {
        let tarea_subordinadaSchema = {
            "id_ts": tarea_subordinada[0],
            "nombre_ts": tarea_subordinada[1],
            "descripcion_ts": tarea_subordinada[2],
            "fecha_inicio_ts": tarea_subordinada[3],
            "fecha_entrega_ts": tarea_subordinada[4],
            "porcentaje_avance_ts": tarea_subordinada[5],
            "estado_ts": tarea_subordinada[6]
        }

        Tarea_Subordinada.push(tarea_subordinadaSchema);
    })
    
    res.json(Tarea_Subordinada);
})

//Get de todo
router.get('/getTareasSub', async (req, res) => {
    sql = "select * from tarea_subordinada";

    let result = await BD.Open(sql, [], false);
    Tareas_Subordinadas = [];

    result.rows.map(tarea_subordinada => {
        let tareas_subordinadasSchema = {
            "id_ts": tarea_subordinada[0],
            "nombre_ts": tarea_subordinada[1],
            "descripcion_ts": tarea_subordinada[2],
            "fecha_inicio_ts": tarea_subordinada[3],
            "fecha_entrega_ts": tarea_subordinada[4],
            "porcentaje_avance_ts": tarea_subordinada[5],
            "estado_ts": tarea_subordinada[6]
        }

        Tareas_Subordinadas.push(tareas_subordinadasSchema);
    })

    res.json(Tareas_Subordinadas);
})

//Agregar
router.post('/addTareaSub', async (req, res) => {
    const { id_ts, nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts} = req.body;

    sql = "insert into tarea_subordinada(id_ts, nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts) values (:id_ts, :nombre_ts, :descripcion_ts, :fecha_inicio_ts, :fecha_entrega_ts, :porcentaje_avance_ts, :estado_ts)";

    await BD.Open(sql, [id_ts, nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts], true);

    res.status(200).json({
        "id_ts": id_ts,
        "nombre_ts": nombre_ts,
        "descripcion_ts": descripcion_ts,
        "fecha_inicio_ts": fecha_inicio_ts,
        "fecha_entrega_ts": fecha_entrega_ts,
        "porcentaje_avance_ts": porcentaje_avance_ts,
        "estado_ts": estado_ts
    })
})

//Actualizar
router.put("/UpdateTareaSub/:id", async (req, res) => {
    const { id } = req.params;
    const { id_ts, nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts} = req.body;
    
    sql = "update tarea_subordinada set nombre_ts=:nombre_ts, descripcion_ts=:descripcion_ts, fecha_inicio_ts=:fecha_inicio_ts, fecha_entrega_ts=:fecha_entrega_ts, porcentaje_avance_ts=:porcentaje_avance_ts, estado_ts=:estado_ts where id_ts=:id";

    await BD.Open(sql, [nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts, id], true);

    res.status(200).json({
            "id_ts": id_ts,
            "nombre_ts": nombre_ts,
            "descripcion_ts": descripcion_ts,
            "fecha_inicio_ts": fecha_inicio_ts,
            "fecha_entrega_ts": fecha_entrega_ts,
            "porcentaje_avance_ts": porcentaje_avance_ts,
            "estado_ts": estado_ts
        })
})

//Borrar
router.delete("/deleteTareaSub/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete tarea_subordinada where id_ts=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Tarea subordinada eliminada" })
})

module.exports = router;