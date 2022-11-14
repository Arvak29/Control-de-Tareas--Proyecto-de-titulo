const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico por usuario
router.get("/getEjecFlujoT_us/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from ejecucion_flujo_tarea where id_u_eft =:id";
  
    let result = await BD.Open(sql, [id], false);
    res.json(result.rows);
  });

//Get especifico por tarea
router.get("/getEjecFlujoT_t/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from ejecucion_flujo_tarea where id_ft_eft =:id";
  
    let result = await BD.Open(sql, [id], false);
    res.json(result.rows);
  });

//Get de todo
router.get('/getEjecFlujosT', async (req, res) => {
  sql = "select * from ejecucion_flujo_tarea";

  let result = await BD.Open(sql, [], false);
  res.json(result.rows);
})

module.exports = router;