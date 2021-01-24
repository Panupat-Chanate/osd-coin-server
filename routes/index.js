const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'sununtde_Projectwut',
    password: 'Project01!',
    database: 'sununtde_ProjectPanupat'
});
con.connect(function(err) {
    if (err) return console.log(err);
    console.log("MySQL Connected");
});

router.get('/', async (req, res) => {
    console.log('get')
    res.send('data')
})

router.post('/', async (req, res) => {
    console.log(req.body)
    sql = "SELECT * FROM tb_user"
    con.query(sql, function (err, result) {
        if (err) return console.log(err);
        res.json(result);
    })
})



module.exports = router;
