const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico 
router.get('/api-porc-global/getPorc_Globales/:id', async (req, res) => {
  const { id } = req.params;
  try{
      sql = "select * from porcentaje_global where id_pg=:id";

      let result = await BD.Open(sql, [id], false);
      Porcentaje_Global = [];

      result.rows.map(porcentaje_global => {
          let porcentaje_globalSchema = {
              "id_pg": porcentaje_global[0],
              "avance_pg": porcentaje_global[1]
          }

          Porcentaje_Global.push(porcentaje_globalSchema);
      })
      
      res.json(Porcentaje_Global);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/api-porc-global/addPorc_Global', async (req, res) => {

  try{
      const {id_pg, avance_pg} = req.body;

      sql = "insert into porcentaje_global(id_pg,, avance_pg) values (:id_pg, :avance_pg)";

      await BD.Open(sql, [id_pg, , avance_pg], true);

      res.status(200).json({
        "id_pg": id_pg,
        "avance_pg": avance_pg
      })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})


module.exports = router;