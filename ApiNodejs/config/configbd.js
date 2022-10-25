const oracledb = require('oracledb');

cns = {
    user: "Alonso",
    password: "12345",
    connectString: 'localhost:1521/Oracle'
}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;