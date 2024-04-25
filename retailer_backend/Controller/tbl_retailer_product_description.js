const con = require('../Model/model')

const retaiProdDescPost = (req, res)=> {
    const data = req.body
    const sql = `INSERT INTO tbl_retailer_product_description SET ?`
    con.query(sql,data, (err, result)=>{
        if(err){
            console.log("Description is not post");
            res.json(err)
        }else{
            console.log("Description is post");
            res.json(result)
        }
    })
}

const retaiProdDescGet = (req, res) =>{
    const productId = req.params.productId;
    const sql = `SELECT * from tbl_retailer_product_description where productId = ?`
    con.query(sql,productId,(err, result)=>{
        if(err){
            console.log("Description is not get")
            res.json(err)
        }else {
            console.log("Description is get")
            res.json(result)
        }
    })
}

const retaiProdDescUpdate = (req, res)=>{
    const data = req.body
    const productId = req.params.productId
    const sql = `UPDATE tbl_retailer_product_description SET ? where productId = ?`
    con.query(sql,[data,productId],(err, result)=>{
        if(err){
            console.log("Description not Updated...")
            res.json(err)
        }else {
            console.log("Desccrption is Updated...")
            res.json(result)
        }
    })
}

module.exports = {retaiProdDescPost, retaiProdDescGet, retaiProdDescUpdate}