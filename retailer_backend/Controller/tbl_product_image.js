const con = require('../Model/model')

const imagePost = (req, res)=>{
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/';
    const data = {
        productId:req.body.productId,
        images:req.body.images,
        color:req.body.color,
        pic1:fullUrl+req.files[0].filename,
        pic2:fullUrl+req.files[1].filename,
        pic3:fullUrl+req.files[2].filename,
        pic4:fullUrl+req.files[3].filename,
    }
    // console.log(data)
    const sql = `INSERT INTO tbl_product_image SET ?`
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Image not post")
            res.json(err)
        }else {
            console.log("Image posted")
            res.json(result)
        }
    })
}

const imageGet = (req, res)=>{
    const productId = req.params.productId
    const sql = `SELECT * from tbl_product_image where productId = ?`
    con.query(sql,productId,(err, result)=>{
        if(err){
            console.log("Image not getting")
            res.json(err)
        }else {
            console.log("Image getting")
            res.json(result)
        }
    })
}

const imageUpdate = (req, res)=>{
    
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/';
    const data = {
        productId:req.body.productId,
        images:req.body.images,
        color:req.body.color,
        pic1:fullUrl+req.files[0].filename,
        pic2:fullUrl+req.files[1].filename,
        pic3:fullUrl+req.files[2].filename,
        pic4:fullUrl+req.files[3].filename,
    }
    
    const productId= req.params.productId
    const sql = `UPDATE tbl_product_image SET ? where productId = ?`
    con.query(sql,[data,productId],(err, result)=>{
        if(err){
            console.log("image not update")
            res.json(err)
        }else {
            console.log("Image update")
            res.json(result)
        }
    })
}

module.exports = {imagePost, imageGet, imageUpdate}