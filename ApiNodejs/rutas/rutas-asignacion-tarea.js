const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-asig-tarea/getVista_Asig_Tarea/:id', async (req, res) => {
  const { id } = req.params;
  sql = "select * from vista_asignacion_tarea where id_t =:id";

  let result = await BD.Open(sql, [id], false);
  Vista_Asignacion_Tarea = [];

  result.rows.map(vista_asignacion_tarea => {
      let vista_asignacion_tareaSchema = {
          "nombre_u": vista_asignacion_tarea[1],
          "nombre_t": vista_asignacion_tarea[2],
          "respuesta_at": vista_asignacion_tarea[3],
          "justificacion_at": vista_asignacion_tarea[4]
      }

      Vista_Asignacion_Tarea.push(vista_asignacion_tareaSchema);
  })
  
  res.json(Vista_Asignacion_Tarea);
})

//Get de toda la vista
router.get('/api-asig-tarea/getVista_Asig_Tareas', async (req, res) => {
  sql = "select * from vista_asignacion_tarea";

  let result = await BD.Open(sql, [], false);
  Vista_Asignaciones_Tareas = [];

  result.rows.map(vista_asignacion_tarea => {
      let vista_asignaciones_tareasSchema = {
          "nombre_u": vista_asignacion_tarea[1],
          "nombre_t": vista_asignacion_tarea[2],
          "respuesta_at": vista_asignacion_tarea[3],
          "justificacion_at": vista_asignacion_tarea[4]
      }

      Vista_Asignaciones_Tareas.push(vista_asignaciones_tareasSchema);
  })
  
  res.json(Vista_Asignaciones_Tareas);
})

//Get especifico por usuario
router.get("/api-asig-tarea/getAsig_Tarea_us/:id", async (req, res) => {
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

        Asignacion_Tarea.push(asignacion_tareaSchema);
    })
  
    res.json(Asignacion_Tarea);
  });

//Get especifico por tarea
router.get("/api-asig-tarea/getAsig_Tarea_t/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea where id_t_at =:id";
  
    let result = await BD.Open(sql, [id], false);
    Asignacion_Tarea = [];

    result.rows.map(asignacion_tarea => {
        let asignacion_tareaSchema = {
            "id_u_at": asignacion_tarea[0],
            "id_t_at": asignacion_tarea[1],
            "respuesta_at": asignacion_tarea[2],
            "justificacion_at": asignacion_tarea[3]
        }

        Asignacion_Tarea.push(asignacion_tareaSchema);
    })
  
    res.json(Asignacion_Tarea);
  });

//Get de todo
router.get('/api-asig-tarea/getAsigTareas', async (req, res) => {
  sql = "select * from asignacion_tarea";

  let result = await BD.Open(sql, [], false);
  Asignaciones_Tareas = [];

  result.rows.map(asignacion_tarea => {
      let asignaciones_tareasSchema = {
          "id_u_at": asignacion_tarea[0],
          "id_t_at": asignacion_tarea[1],
          "respuesta_at": asignacion_tarea[2],
          "justificacion_at": asignacion_tarea[3]
      }

      Asignaciones_Tareas.push(asignaciones_tareasSchema);
  })

  res.json(Asignaciones_Tareas);
})

//Agregar
router.post('/api-asig-tarea/addAsig_Tarea', async (req, res) => {
  const {id_u_at, id_t_at, respuesta_at, justificacion_at} = req.body;

  sql = "insert into asignacion_tarea(id_u_at, id_t_at, respuesta_at, justificacion_at) values (:id_u_at, :id_t_at, :respuesta_at, :justificacion_at)";

  await BD.Open(sql, [id_u_at, id_t_at, respuesta_at, justificacion_at], true);

  res.status(200).json({
    "id_u_at": id_u_at,
    "id_t_at": id_t_at,
    "respuesta_at": respuesta_at, 
    "justificacion_at": justificacion_at
  })
})

//Actualizar
router.patch("/api-asig-tarea/updateAsig_Tarea/:id", async (req, res) => {
  const { id } = req.params;
  const {id_u_at, id_t_at, respuesta_at, justificacion_at} = req.body;
  
  sql = "update asignacion_tarea set id_u_at=:id_u_at, respuesta_at=:respuesta_at, justificacion_at=:justificacion_at where id_t_at=:id";

  await BD.Open(sql, [id_u_at, respuesta_at, justificacion_at, id], true);

  res.status(200).json({
    "id_u_at": id_u_at,
    "id_t_at": id_t_at,
    "respuesta_at": respuesta_at, 
    "justificacion_at": justificacion_at
  })
})

//Borrar
router.delete("/api-asig-tarea/deleteAsig_Tarea/:id", async (req, res) => {
  const { id } = req.params;

  sql = "delete asignacion_tarea where id_t_at=:id";

  await BD.Open(sql, [id], true);

  res.json({ msg: "Asignación de tarea eliminada" })
})

module.exports = router;