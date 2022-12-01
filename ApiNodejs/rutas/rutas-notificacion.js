const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico
router.get('/api-notificacion/getNotificacion/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from notificacion where id_n=:id";

        let result = await BD.Open(sql, [id], false);
        Notificacion = [];

        result.rows.map(notificacion => {
            let notificacionSchema = {
                "id_n": notificacion[0],
                "asunto_n": notificacion[1],
                "descripcion_n": notificacion[2],
                "id_u": notificacion[3]            
            }

            Notificacion.push(notificacionSchema);
        })
        
        res.json(Notificacion);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo
router.get('/api-notificacion/getNotificaciones', async (req, res) => {

    try{
        sql = "select * from notificacion";

        let result = await BD.Open(sql, [], false);
        Notificaciones = [];

        result.rows.map(notificacion => {
            let notificacionesSchema = {
                "id_n": notificacion[0],
                "asunto_n": notificacion[1],
                "descripcion_n": notificacion[2],
                "id_u": notificacion[3]            
            }

            Notificaciones.push(notificacionesSchema);
        })
        
        res.json(Notificaciones);
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;