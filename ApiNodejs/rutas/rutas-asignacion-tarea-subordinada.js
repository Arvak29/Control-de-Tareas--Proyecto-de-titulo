const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-asig-tarea-sub/getVista_Asig_Tarea_Sub/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from vista_asignacion_tarea_sub where id_ts =:id";
    
        let result = await BD.Open(sql, [id], false);
        Vista_Asignacion_Tarea_Sub = [];
    
        result.rows.map(vista_asignacion_tarea_sub => {
            let vista_asignacion_tarea_subSchema = {
                "id_ts": vista_asignacion_tarea_sub[0],
                "nombre_u": vista_asignacion_tarea_sub[1],
                "nombre_ts": vista_asignacion_tarea_sub[2],
                "respuesta_ats": vista_asignacion_tarea_sub[3],
                "justificacion_ats": vista_asignacion_tarea_sub[4]
            }
    
            Vista_Asignacion_Tarea_Sub.push(vista_asignacion_tarea_subSchema);
        })

        res.json(Vista_Asignacion_Tarea_Sub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
  })
  
  //Get de toda la vista
  router.get('/api-asig-sub/getVista_Asig_Tareas_Sub', async (req, res) => {

    try{
        sql = "select * from vista_asignacion_tarea_sub";
    
        let result = await BD.Open(sql, [], false);
        Vista_Asignaciones_Tareas_Sub = [];
    
        result.rows.map(vista_asignacion_tarea_sub => {
            let vista_asignaciones_tareas_subSchema = {
                "nombre_u": vista_asignacion_tarea_sub[1],
                "nombre_ts": vista_asignacion_tarea_sub[2],
                "respuesta_ats": vista_asignacion_tarea_sub[3],
                "justificacion_ats": vista_asignacion_tarea_sub[4]
            }
    
            Vista_Asignaciones_Tareas_Sub.push(vista_asignaciones_tareas_subSchema);
        })
        
        res.json(Vista_Asignaciones_Tareas_Sub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
  })

//Get especifico por usuario
router.get("/api-asig-sub/getAsig_Tarea_Sub_us/:id", async (req, res) => {

    try{
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
        
        return res.json(Asignacion_Tarea_Subordinada);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
  });

//Get especifico por tarea
router.get("/api-asig-sub/getAsig_Tarea_Sub_t/:id", async (req, res) => {

    try{
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
        
        res.json(Asignacion_Tarea_Subordinada.id_ts_ats);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
  });

//Get de todo
router.get('/api-asig-sub/getAsig_Tareas_Sub', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
  })

//Agregar
router.post('/api-asig-tarea-sub/addAsig_Tarea_Sub/', async (req, res) => {
    try{
        const {id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats} = req.body;

        sql = "insert into asignacion_tarea_subordinada(id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats) values (:id_u_ats, :id_ts_ats, :respuesta_ats, :justificacion_ats)";

        await BD.Open(sql, [id_u_ats, id_ts_ats, respuesta_ats, justificacion_ats], true);

        res.status(200).json({
        "id_u_ats": id_u_ats,
        "id_ts_ats": id_ts_ats,
        "respuesta_ats": respuesta_ats, 
        "justificacion_ats": justificacion_ats
        })
        
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/updateAsig_Tarea_Sub/:id", async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/api-asig-tarea-sub/deleteAsig_Tarea_Sub/:id", async (req, res) => {

    try{
        const { id } = req.params;
        
        sql = "delete asignacion_tarea_subordinada where id_ts_ats=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Asignación de tarea subordinada eliminada" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

router.delete("/api-asig-tarea-sub/deleteAsigTareaSub/:id", async (req, res) => {

    try{
        const { id } = req.params;
        
        sql = "delete asignacion_tarea_subordinada where id_u_ats=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Asignación de tarea subordinada eliminada" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;
