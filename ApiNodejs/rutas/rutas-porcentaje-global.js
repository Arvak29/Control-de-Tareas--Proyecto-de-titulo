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

      sql = "insert into porcentaje_global(id_pg, avance_pg) values (:id_pg, :avance_pg)";

      await BD.Open(sql, [id_pg, , avance_pg], true);

      res.status(200).json({
        "id_pg": id_pg,
        "avance_pg": avance_pg
      })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get VISTA RESUMEN TAREAS POR UNIDAD INTERNA
router.get('/api-porc-global/getVista_Tareas_UI', async (req, res) => {
  try{
    
      sql = "select nombre_ui, count(id_t) AS Contador_de_tareas from vista_tareas_unidad_interna group by nombre_ui";

      let result = await BD.Open(sql, [], false);
      Vista_TareasUI = [];

      result.rows.map(vista_tareas_unidad_interna => {
          let vista_tareas_unidad_internaSchema = {
              "nombre_ui": vista_tareas_unidad_interna[0],
              "Contador_de_tareas": vista_tareas_unidad_interna[1]
          }

          Vista_TareasUI.push(vista_tareas_unidad_internaSchema );
      })
      
      res.json(Vista_TareasUI);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get VISTA RESUMEN CARGA TRABAJO
router.get('/api-porc-global/getVista_Carga_trabajo', async (req, res) => {
  try{
    
      sql = "select nombre_r, count(id_t) as Carga_trabajo_subordinados from vista_carga_trabajo group by nombre_r";

      let result = await BD.Open(sql, [], false);
      Vista_Carga = [];

      result.rows.map(vista_carga_trabajo => {
          let vista_carga_trabajoSchema = {
              "nombre_r": vista_carga_trabajo[0],
              "carga": vista_carga_trabajo[1]
          }

          Vista_Carga.push(vista_carga_trabajoSchema );
      })
      
      res.json(Vista_Carga);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})
module.exports = router;