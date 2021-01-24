const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'cloud-linux11.thaidatahosting.com',
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
    // sql = "UPDATE tb_customer SET customer_id = '"+ req.body.editId +"', customer_name = '"+ req.body.editName +"', customer_email = '"+ req.body.editEmail +"', customer_address = '"+ req.body.editAddress +"', customer_data = '"+ req.body.editData +"' WHERE id = '"+ req.body.edit_id +"'"
    // con.query(sql, function (err, result) {
    //     if (err) return console.log(err);
    //     res.json(result);
    // })
})



module.exports = router;
