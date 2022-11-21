const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico por usuario
router.get("/getEjecFlujoT_us/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from ejecucion_flujo_tarea where id_u_eft =:id";
  
    let result = await BD.Open(sql, [id], false);
    Ejecucion_Flujo_Tarea = [];

    result.rows.map(ejecucion_flujo_tarea => {
        let ejecucion_flujo_tareaSchema = {
            "id_u_eft": ejecucion_flujo_tarea[0],
            "id_ft_eft": ejecucion_flujo_tarea[1],
            "respuesta_eft": ejecucion_flujo_tarea[2],
            "justificacion_eft": ejecucion_flujo_tarea[3]
        }

        Ejecucion_Flujo_Tarea.push(ejecucion_flujo_tareaSchema);
    })
    
    res.json(Ejecucion_Flujo_Tarea);
  });

//Get especifico por tarea
router.get("/getEjecFlujoT_t/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from ejecucion_flujo_tarea where id_ft_eft =:id";
  
    let result = await BD.Open(sql, [id], false);
    Ejecucion_Flujo_Tarea = [];

    result.rows.map(ejecucion_flujo_tarea => {
        let ejecucion_flujo_tareaSchema = {
            "id_u_eft": ejecucion_flujo_tarea[0],
            "id_ft_eft": ejecucion_flujo_tarea[1],
            "respuesta_eft": ejecucion_flujo_tarea[2],
            "justificacion_eft": ejecucion_flujo_tarea[3]
        }

        Ejecucion_Flujo_Tarea.push(ejecucion_flujo_tareaSchema);
    })
    
    res.json(Ejecucion_Flujo_Tarea);
  });

//Get de todo
router.get('/getEjecFlujosT', async (req, res) => {
  sql = "select * from ejecucion_flujo_tarea";

  let result = await BD.Open(sql, [], false);
  Ejecuciones_Flujos_Tareas = [];

  result.rows.map(ejecucion_flujo_tarea => {
      let ejecuciones_flujos_tareasSchema = {
          "id_u_eft": ejecucion_flujo_tarea[0],
          "id_ft_eft": ejecucion_flujo_tarea[1],
          "respuesta_eft": ejecucion_flujo_tarea[2],
          "justificacion_eft": ejecucion_flujo_tarea[3]
      }

      Ejecuciones_Flujos_Tareas.push(ejecuciones_flujos_tareasSchema);
  })

  res.json(Ejecuciones_Flujos_Tareas);
})

//Agregar
router.post('/addEjecFlujoT', async (req, res) => {
  const {id_u_eft, id_ft_eft, respuesta_eft, justificacion_eft} = req.body;

  sql = "insert into ejecucion_flujo_tarea(id_u_eft, id_ft_eft, respuesta_eft, justificacion_eft) values (:id_u_eft, :id_ft_eft, :respuesta_eft, :justificacion_eft)";

  await BD.Open(sql, [id_u_eft, id_ft_eft, respuesta_eft, justificacion_eft], true);

  res.status(200).json({
    "id_u_eft": id_u_eft,
    "id_ft_eft": id_ft_eft,
    "respuesta_eft": respuesta_eft, 
    "justificacion_eft": justificacion_eft
  })
})

//Actualizar
router.patch("/updateEjecFlujoT/:id", async (req, res) => {
  const { id } = req.params;
  const {id_u_eft, id_ft_eft, respuesta_eft, justificacion_eft} = req.body;
  
  sql = "update ejecucion_flujo_tarea set id_u_eft=:id_u_eft, respuesta_eft=:respuesta_eft, justificacion_eft=:justificacion_eft where id_ft_eft=:id";

  await BD.Open(sql, [id_u_eft, respuesta_eft, justificacion_eft, id], true);

  res.status(200).json({
    "id_u_eft": id_u_eft,
    "id_ft_eft": id_ft_eft,
    "respuesta_eft": respuesta_eft, 
    "justificacion_eft": justificacion_eft
  })
})

//Borrar
router.delete("/deleteEjecFlujoT/:id", async (req, res) => {
  const { id } = req.params;

  sql = "delete ejecucion_flujo_tarea where id_ft_eft=:id";

  await BD.Open(sql, [id], true);

  res.json({ msg: "Ejecución de flujo de tarea eliminada" })
})

module.exports = router;