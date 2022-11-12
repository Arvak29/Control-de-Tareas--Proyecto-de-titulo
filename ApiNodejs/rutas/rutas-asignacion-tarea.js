const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/getAsignacionTarea/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea where id_u_at =:id";

    let result = await BD.Open(sql, [id], false);
    Asignacion_Tarea = [];

    result.rows.map(asignacion_tarea => {
        let asignacion_tareaSchema = {
            "id_u_at": asignacion_tarea[0],
            "id_t_at": asignacion_tarea[1],
            "respuesta_at": asignacion_tarea[2],
            "justificacion_at": asignacion_tarea[3]
        }

        asignacion_tarea.push(asignacion_tareaSchema);
        Asignacion_Tarea = [asignacion_tareaSchema];
    })
    
    res.json(Asignacion_Tarea);
})


module.exports = router;