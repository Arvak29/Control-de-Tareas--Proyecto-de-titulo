const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico por usuario
router.get("/getAsigTareaSub_us/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea_subordinada where id_u_ats =:id";
  
    let result = await BD.Open(sql, [id], false);
    Asignacion_Tarea_Subordinada = [];

    result.rows.map(asignacion_tarea_subordinada => {
        let asignacion_tarea_subordinadaSchema = {
            "id_u_ats": asignacion_tarea_subordinada[0],
            "id_ts_ats": asignacion_tarea_subordinada[1],
            "respuesta_at": asignacion_tarea_subordinada[2],
            "justificacion_ats": asignacion_tarea_subordinada[3]
        }

        Asignacion_Tarea_Subordinada.push(asignacion_tarea_subordinadaSchema);
    })
    
    res.json(Asignacion_Tarea_Subordinada);
  });

//Get especifico por tarea
router.get("/getAsigTareaSub_t/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea_subordinada where id_ts_ats =:id";
  
    let result = await BD.Open(sql, [id], false);
    Asignacion_Tarea_Subordinada = [];

    result.rows.map(asignacion_tarea_subordinada => {
        let asignacion_tarea_subordinadaSchema = {
            "id_u_ats": asignacion_tarea_subordinada[0],
            "id_ts_ats": asignacion_tarea_subordinada[1],
            "respuesta_ats": asignacion_tarea_subordinada[2],
            "justificacion_ats": asignacion_tarea_subordinada[3]
        }

        Asignacion_Tarea_Subordinada.push(asignacion_tarea_subordinadaSchema);
    })
    
    res.json(Asignacion_Tarea_Subordinada);
  });

//Get de todo
router.get('/getAsigTareasSub', async (req, res) => {
    sql = "select * from asignacion_tarea_subordinada";
  
    let result = await BD.Open(sql, [], false);
    Asignaciones_Tareas_Subordinadas = [];

    result.rows.map(asignacion_tarea_subordinada => {
        let asignaciones_tareas_subordinadasSchema = {
            "id_u_ats": asignacion_tarea_subordinada[0],
            "id_ts_ats": asignacion_tarea_subordinada[1],
            "respuesta_ats": asignacion_tarea_subordinada[2],
            "justificacion_ats": asignacion_tarea_subordinada[3]
        }

        Asignaciones_Tareas_Subordinadas.push(asignaciones_tareas_subordinadasSchema);
    })
    
    res.json(Asignaciones_Tareas_Subordinadas);
  })

//Agregar
router.post('/addAsigTareaSub', async (req, res) => {
    const {id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats} = req.body;

    sql = "insert into asignacion_tarea_subordinada(id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats) values (:id_u_ats, :id_ts_ats, :respuesta_ats, :justificacion_ats)";

    await BD.Open(sql, [id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats], true);

    res.status(200).json({
      "id_u_ats": id_u_ats,
      "id_ts_ats": id_ts_ats,
      "respuesta_ats": respuesta_ats, 
      "justificacion_ats": justificacion_ats
    })
})

//Actualizar
router.put("/updateAsigTareaSub/:id", async (req, res) => {
    const { id } = req.params;
    const {id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats} = req.body;
    
    sql = "update asignacion_tarea_subordinada set id_u_ats=:id_u_ats, respuesta_ats=:respuesta_ats, justificacion_ats=:justificacion_ats where id_ts_ats=:id";

    await BD.Open(sql, [id_u_ats, respuesta_ats, justificacion_ats, id], true);

    res.status(200).json({
      "id_u_ats": id_u_ats,
      "id_ts_ats": id_ts_ats,
      "respuesta_ats": respuesta_ats, 
      "justificacion_ats": justificacion_ats
    })
})

//Borrar
router.delete("/deleteAsigTareaSub/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete asignacion_tarea_subordinada where id_ts_ats=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Asignación de tarea subordinada eliminada" })
})

module.exports = router;
