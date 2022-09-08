const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port:'3306',
    database: 'db_control_tareas',
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error :'+ err)
    }
    else{
        console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion;