const con = require('../Model/model')
const jwt = require('jsonwebtoken');

const loginpost=(req, res)=>{
    const sql = `SELECT * from shoplogin where email= ? and password = ?`;
    con.query(sql, [req.body.email, req.body.password],(err, result)=>{
        if(err) return res.json({ loginStatus: false, Error: "Query Error"})
        if (result.length > 0){
            const email = result[0].email;
            const token = jwt.sign(
                { role: 'shoplogin', email:email },
                "jwt_secret_key",
                { expiresIn: '1d'}
            );
            res.cookie('token', token)
            return res.json( {loginStatus: true});
        } else {
            return res.json({loginStatus: false, Error: "Wrong email or Password"});
        }
    })
}

// const loginget = (req, res)=>{
//     const id = req.params.id
//     const sql = `SELECT * from shoplogin where id = ?`
//     con.query(sql,id, (err, result)=>{
//         if(err){
//             console.log("Loggin is not getting");
//             res.json(err)
//         } else {
//             console.log("Logging is getting");
//             res.json(result)
//         }
//     })
// }

module.exports = {loginpost}