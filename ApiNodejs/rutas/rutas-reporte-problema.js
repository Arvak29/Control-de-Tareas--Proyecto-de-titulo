const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista por tarea
router.get('/api-reporte/getVista_Reporte_Tarea/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from vista_reporte_tarea where id_t =:id";

        let result = await BD.Open(sql, [id], false);
        Vista_Reporte_Tarea = [];

        result.rows.map(vista_reporte_tarea => {
            let vista_reporte_tareaSchema = {
                "nombre_t": vista_reporte_tarea[1],
                "descripcion_rp": vista_reporte_tarea[2]
            }

            Vista_Reporte_Tarea.push(vista_reporte_tareaSchema);
        })
        
        res.json(Vista_Reporte_Tarea);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get general de vista por tarea
router.get('/api-reporte/getVista_Reportes_Tareas', async (req, res) => {

    try{
        sql = "select * from vista_reporte_tarea";

        let result = await BD.Open(sql, [], false);
        Vista_Reportes_Tareas = [];

        result.rows.map(vista_reporte_tarea => {
            let vista_reportes_tareasSchema = {
                "nombre_t": vista_reporte_tarea[1],
                "descripcion_rp": vista_reporte_tarea[2]
            }

            Vista_Reportes_Tareas.push(vista_reportes_tareasSchema);
        })
        
        res.json(Vista_Reportes_Tareas);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico de vista por tarea subordinada
router.get('/api-reporte/getVista_Reporte_Tarea_Sub/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from vista_reporte_tarea_sub where id_ts =:id";

        let result = await BD.Open(sql, [id], false);
        Vista_Reporte_Tarea_Sub = [];

        result.rows.map(vista_reporte_tarea_sub => {
            let vista_reporte_tarea_subSchema = {
                "nombre_ts": vista_reporte_tarea_sub[1],
                "descripcion_rp": vista_reporte_tarea_sub[2]
            }

            Vista_Reporte_Tarea_Sub.push(vista_reporte_tarea_subSchema);
        })

        res.json(Vista_Reporte_Tarea_Sub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get general de vista por tarea sub
router.get('/api-reporte/getVista_Reportes_Tareas_Sub', async (req, res) => {

    try{
        sql = "select * from vista_reporte_tarea_sub";

        let result = await BD.Open(sql, [], false);
        Vista_Reportes_Tareas_Sub = [];

        result.rows.map(vista_reporte_tarea_sub => {
            let vista_reportes_tareas_subSchema = {
                "nombre_ts": vista_reporte_tarea_sub[1],
                "descripcion_rp": vista_reporte_tarea_sub[2]
            }

            Vista_Reportes_Tareas_Sub.push(vista_reportes_tareas_subSchema);
        })

        res.json(Vista_Reportes_Tareas_Sub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico de vista por flujo de tarea
router.get('/api-reporte/getVista_Reporte_Flujo_Tarea/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from vista_reporte_flujo_tarea where id_ft =:id";

        let result = await BD.Open(sql, [id], false);
        Vista_Reporte_Flujo_Tarea = [];

        result.rows.map(vista_reporte_flujo_tarea => {
            let vista_reporte_flujo_tareaSchema = {
                "nombre_ts": vista_reporte_flujo_tarea[1],
                "descripcion_rp": vista_reporte_flujo_tarea[2]
            }

            Vista_Reporte_Flujo_Tarea.push(vista_reporte_flujo_tareaSchema);
        })

        res.json(Vista_Reporte_Flujo_Tarea);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get general de vista por flujo de tarea
router.get('/api-reporte/getVista_Reportes_Flujos_Tareas', async (req, res) => {

    try{
        sql = "select * from vista_reporte_flujo_tarea";

        let result = await BD.Open(sql, [], false);
        Vista_Reportes_Flujos_Tareas = [];

        result.rows.map(vista_reporte_flujo_tarea => {
            let vista_reportes_flujos_tareasSchema = {
                "nombre_ts": vista_reporte_flujo_tarea[1],
                "descripcion_rp": vista_reporte_flujo_tarea[2]
            }

            Vista_Reportes_Flujos_Tareas.push(vista_reportes_flujos_tareasSchema);
        })

        res.json(Vista_Reportes_Flujos_Tareas);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico por id de problema
router.get('/getReporteProblema/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from reporte_problema where id_rp =:id";

        let result = await BD.Open(sql, [id], false);
        Reporte_Problema = [];

        result.rows.map(reporte_problema => {
            let reporte_problemaSchema = {
                "id_rp": reporte_problema[0],
                "descripcion_rp": reporte_problema[1],
                "id_t": reporte_problema[2],
                "id_ts": reporte_problema[3],
                "id_ft": reporte_problema[4]
            }

            reporte_problema.push(reporte_problemaSchema);
            Reporte_Problema = [reporte_problemaSchema];
        })
        
        res.json(Reporte_Problema);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo
router.get('/getReportesProblemas', async (req, res) => {

    try{
        sql = "select * from reporte_problema";

        let result = await BD.Open(sql, [], false);
        Reportes_Problemas = [];

        result.rows.map(reporte_problema => {
            let reportes_problemasSchema = {
                "id_rp": reporte_problema[0],
                "descripcion_rp": reporte_problema[1],
                "id_t": reporte_problema[2],
                "id_ts": reporte_problema[3],
                "id_ft": reporte_problema[4]
            }

            reportes_problemas.push(reportes_problemasSchema);
        })

        res.json(Reportes_Problemas);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/addReporteProblema', async (req, res) => {

    try{
        const { id_rp, descripcion_rp, id_t, id_ts, id_ft} = req.body;

        sql = "insert into reporte_problema(id_rp, descripcion_rp, id_t, id_ts, id_ft) values (:id_rp, :descripcion_rp, :id_t, :id_ts, :id_ft)";

        await BD.Open(sql, [id_rp, descripcion_rp, id_t, id_ts, id_ft], true);

        res.status(200).json({
            "id_rp": id_rp,
            "descrpcion_rp": descripcion_rp,
            "id_t": id_t,
            "id_ts": id_ts,
            "id_ft": id_ft
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/UpdateReporteProblema/:id", async (req, res) => {

    try{
        const { id } = req.params;
        const {id_rp, descripcion_rp, id_t, id_ts, id_ft} = req.body;
        
        sql = "update reporte_problema set descripcion_rp=:descripcion_rp, id_t=:id_t, id_ts=:id_ts, id_ft=:id_ft where id_rp=:id";

        await BD.Open(sql, [id, descripcion_rp, id_t, id_ts, id_ft], true);

        res.status(200).json({
            "id_rp": id_rp,
            "descrpcion_rp": descripcion_rp,
            "id_t": id_t,
            "id_ts": id_ts,
            "id_ft": id_ft
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/deleteReporteProblema/:id", async (req, res) => {

    try{
        const {id_rp, descripcion_rp, id_t, id_ts, id_ft} = req.params;

        sql = "delete reporte_problema where id_rp=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Reporte de problema Eliminado" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;