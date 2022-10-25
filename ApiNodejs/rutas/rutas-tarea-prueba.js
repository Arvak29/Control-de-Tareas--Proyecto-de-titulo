const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

router.get('/', async (req, res) => {
    sql = "select * from tarea where id_tarea = 1";

    let result = await BD.Open(sql, [], false);
    
    console.log(result);

    res.status(200).json({msg:"todo ok"});
});

module.exports = router;