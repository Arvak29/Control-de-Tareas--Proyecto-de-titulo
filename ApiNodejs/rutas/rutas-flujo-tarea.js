const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista
router.get('/api-flujo-tarea/getVista_Flujo_Tarea/:id', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo la vista
router.get('/api-flujo-tarea/getVista_Flujos_Tareas', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico sin responsable
router.get('/api-flujo-tarea/getFlujoTarea/:id', async (req, res) => {

    try{
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
                "FECHA_ENTREGA_EFECTIVA_FT": flujo_tarea[5],
                "porcentaje_avance_ft": flujo_tarea[6],
                "estado_ft": flujo_tarea[6],
                "INDICADOR_FT": flujo_tarea[7]
            }

            Flujo_Tarea.push(flujo_tareaSchema);
        })
        
        res.json(Flujo_Tarea);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo sin responsable
router.get('/api-flujo-tarea/getFlujosTareas', async (req, res) => {

    try{
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
                "FECHA_ENTREGA_EFECTIVA_FT": flujo_tarea[5],
                "porcentaje_avance_ft": flujo_tarea[6],
                "estado_ft": flujo_tarea[6],
                "INDICADOR_FT": flujo_tarea[7]
            }

            Flujos_Tareas.push(flujos_tareasSchema);
        })

        res.json(Flujos_Tareas);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/api-flujo-tarea/addFlujo_Tarea', async (req, res) => {

    try{
        const { id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft, estado_ft, INDICADOR_FT} = req.body;

        sql = "insert into flujo_tarea(id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft, estado_ft, INDICADOR_FT) values (:id_ft, :nombre_ft, :descripcion_ft, :fecha_inicio_ft, :fecha_entrega_ft, :FECHA_ENTREGA_EFECTIVA_FT, :porcentaje_avance_ft, :estado_ft, :INDICADOR_FT)";

        await BD.Open(sql, [id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft, estado_ft, INDICADOR_FT], true);

        res.status(200).json({
            "id_ft": id_ft,
            "nombre_ft": nombre_ft,
            "descripcion_ft": descripcion_ft,
            "fecha_inicio_ft": fecha_inicio_ft,
            "fecha_entrega_ft": fecha_entrega_ft,
            "FECHA_ENTREGA_EFECTIVA_FT": FECHA_ENTREGA_EFECTIVA_FT,
            "porcentaje_avance_ft": porcentaje_avance_ft,
            "estado_ft": estado_ft,
            "INDICADOR_FT": INDICADOR_FT
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/api-flujo-tarea/UpdateFlujo_Tarea/:id", async (req, res) => {

    try{
        const { id } = req.params;
        const { id_ft, nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft, estado_ft, INDICADOR_FT} = req.body;
        
        sql = "update flujo_tarea set nombre_ft=:nombre_ft, descripcion_ft=:descripcion_ft, fecha_inicio_ft=:fecha_inicio_ft, fecha_entrega_ft=:fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT=:FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft=:porcentaje_avance_ft, estado_ft=:estado_ft, INDICADOR_FT=:INDICADOR_FT where id_ft=:id";

        await BD.Open(sql, [nombre_ft, descripcion_ft, fecha_inicio_ft, fecha_entrega_ft, FECHA_ENTREGA_EFECTIVA_FT, porcentaje_avance_ft, estado_ft, INDICADOR_FT, id], true);

        res.status(200).json({
            "id_ft": id_ft,
            "nombre_ft": nombre_ft,
            "descripcion_ft": descripcion_ft,
            "fecha_inicio_ft": fecha_inicio_ft,
            "fecha_entrega_ft": fecha_entrega_ft,
            "FECHA_ENTREGA_EFECTIVA_FT": FECHA_ENTREGA_EFECTIVA_FT,
            "porcentaje_avance_ft": porcentaje_avance_ft,
            "estado_ft": estado_ft,
            "INDICADOR_FT": INDICADOR_FT
            })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/api-flujo-tarea/deleteFlujo_Tarea/:id", async (req, res) => {

    try{
        const { id } = req.params;

        sql = "delete flujo_tarea where id_ft=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Flujo de tarea eliminado" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;