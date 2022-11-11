const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico por id de problema
router.get('/getReporteProblema/:id', async (req, res) => {
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
})

//Get de todo
router.get('/getReportesProblemas', async (req, res) => {
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
})

//Agregar
router.post('/addReporteProblema', async (req, res) => {
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
})

//Actualizar
router.put("/UpdateReporteProblema", async (req, res) => {
    const {id_rp, descripcion_rp, id_t, id_ts, id_ft} = req.body;
    
    sql = "update reporte_problema set descripcion_rp=:descripcion_rp, id_t=:id_t, id_ts=:id_ts, id_ft=:id_ft where id_rp=:id_rp";

    await BD.Open(sql, [id_rp, descripcion_rp, id_t, id_ts, id_ft], true);

    res.status(200).json({
        "id_rp": id_rp,
        "descrpcion_rp": descripcion_rp,
        "id_t": id_t,
        "id_ts": id_ts,
        "id_ft": id_ft
    })
})

//Borrar
router.delete("/deleteReporteProblema/:id", async (req, res) => {
    const {id_rp, descripcion_rp, id_t, id_ts, id_ft} = req.params;

    sql = "delete reporte_problema where id_rp=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Reporte de problema Eliminado" })
})

module.exports = router;