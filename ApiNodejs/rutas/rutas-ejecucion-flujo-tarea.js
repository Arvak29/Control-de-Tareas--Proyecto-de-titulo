const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-ejec-flujo-tarea/getVista_Ejec_Flujo_Tarea/:id', async (req, res) => {
  const { id } = req.params;
  sql = "select * from vista_ejecucion_flujo_tarea where id_ft =:id";

  let result = await BD.Open(sql, [id], false);
  Vista_Ejecucion_Flujo_Tarea = [];

  result.rows.map(vista_ejecucion_flujo_tarea => {
      let vista_ejecucion_flujo_tareaSchema = {
          "nombre_u": vista_ejecucion_flujo_tarea[1],
          "nombre_ft": vista_ejecucion_flujo_tarea[2],
          "respuesta_eft": vista_ejecucion_flujo_tarea[3],
          "justificacion_eft": vista_ejecucion_flujo_tarea[4]
      }

      Vista_Ejecucion_Flujo_Tarea.push(vista_ejecucion_flujo_tareaSchema);
  })
  
  res.json(Vista_Ejecucion_Flujo_Tarea);
})

//Get de toda la vista
router.get('/api-ejec-flujo-tarea/getVista_Ejec_Flujos_Tareas', async (req, res) => {
  sql = "select * from vista_ejecucion_flujo_tarea";

  let result = await BD.Open(sql, [], false);
  Vista_Ejecuciones_Flujos_Tareas = [];

  result.rows.map(vista_ejecucion_flujo_tarea => {
      let vista_ejecuciones_flujos_tareasSchema = {
          "nombre_u": vista_ejecucion_flujo_tarea[1],
          "nombre_ft": vista_ejecucion_flujo_tarea[2],
          "respuesta_eft": vista_ejecucion_flujo_tarea[3],
          "justificacion_eft": vista_ejecucion_flujo_tarea[4]
      }

      Vista_Ejecuciones_Flujos_Tareas.push(vista_ejecuciones_flujos_tareasSchema);
  })
  
  res.json(Vista_Ejecuciones_Flujos_Tareas);
})

//Get especifico por usuario
router.get("/api-ejec-flujo-tarea/getEjec_Flujo_T_us/:id", async (req, res) => {
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
router.get("/api-ejec-flujo-tarea/getEjec_Flujo_T_t/:id", async (req, res) => {
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
router.get('/api-ejec-flujo-tarea/getEjec_Flujos_T', async (req, res) => {
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
router.post('/api-ejec-flujo-tarea/addEjec_Flujo_T', async (req, res) => {
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
router.patch("/api-ejec-flujo-tarea/updateEjec_Flujo_T/:id", async (req, res) => {
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
router.delete("/api-ejec-flujo-tarea/deleteEjec_Flujo_T/:id", async (req, res) => {
  const { id } = req.params;

  sql = "delete ejecucion_flujo_tarea where id_ft_eft=:id";

  await BD.Open(sql, [id], true);

  res.json({ msg: "Ejecución de flujo de tarea eliminada" })
})

module.exports = router;