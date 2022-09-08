const router = require('express').Router()
const conexion = require('./config/conexion')

//get rol
router.get('/',(req, res)=>{
    let sql ='select * from tb_rol'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get de un rol
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from tb_rol where id_rol = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar rol
router.post('/',( req, res)=>{
    const{nombre} = req.body

    let sql = `insert into tb_rol(nombre) values('${nombre}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'rol agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from tb_rol where id_rol = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'rol eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre} = req.body

    let sql = `update tb_rol set 
                nombre ='${nombre}',
                where id_rol = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'rol modificado'})
        }
    })
})

module.exports = router