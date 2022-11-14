const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico por usuario
router.get("/getAsigTareaSub_us/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea_subordinada where id_u_ats =:id";
  
    let result = await BD.Open(sql, [id], false);
    res.json(result.rows);
  });

//Get especifico por tarea
router.get("/getAsigTareaSub_t/:id", async (req, res) => {
    const { id } = req.params;
    sql = "select * from asignacion_tarea_subordinada where id_ts_ats =:id";
  
    let result = await BD.Open(sql, [id], false);
    res.json(result.rows);
  });

//Get de todo
router.get('/getAsigTareasSub', async (req, res) => {
    sql = "select * from asignacion_tarea_subordinada";
  
    let result = await BD.Open(sql, [], false);
    res.json(result.rows);
  })

//Agregar
router.post('/addRol', async (req, res) => {
    const { id_r, nombre_r} = req.body;

    sql = "insert into rol(id_r, nombre_r) values (:id_r, :nombre_r)";

    await BD.Open(sql, [id_r, nombre_r], true);

    res.status(200).json({
        "id_r": id_r,
        "nombre_r": nombre_r
    })
})

//Actualizar
router.put("/UpdateRol", async (req, res) => {
    const { id_r, nombre_r} = req.body;
    
    sql = "update rol set nombre_r=:nombre_r where id_r=:id_r";

    await BD.Open(sql, [nombre_r, id_r], true);

    res.status(200).json({
            "id_r": id_r,
            "nombre_r": nombre_r
        })
})

//Borrar
router.delete("/deleteRol/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete rol where id_r=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Rol Eliminado" })
})

module.exports = router;
