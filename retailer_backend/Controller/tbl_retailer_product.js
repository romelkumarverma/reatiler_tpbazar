const con = require('../Model/model')

const retailerProductPost = (req, res)=>{
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/';
    const data = {
        productId:req.body.productId,
        product_name: req.body.product_name,
        subcategoryid: req.body.subcategoryid,
        price: req.body.price,
        discount: req.body.discount,
        brand_name: req.body.brand_name,
        quality: req.body.quality,
        registration_number: req.body.registration_number,
        photo:fullUrl+req.file.filename
    }
    const sql = `INSERT INTO tbl_retailer_product SET ?`
    con.query(sql,data,(err,result)=>{
        if(err){
            console.log("Product is not posted")
            res.json(err)
        } else {
            console.log("Product is posted..")
            res.json(result)
        }
    })
}

const retailerProductGet = (req, res)=>{
    const registration_number = req.params.registration_number 
    const sql = ` select * from tbl_retailer_product where registration_number = ?`
    con.query(sql,registration_number,(err, result)=>{
        if(err){
            console.log("Product is not getting...")
            res.json(err)
        } else {
            console.log("Product is getting")
            res.json(result)
        }
    })
}

const retailerProductUpdate = (req, res)=>{
    const data= req.body
    const productId = req.params.productId
    const sql = `UPDATE tbl_retailer_product set ? where productId = ?`
    con.query(sql, [data, productId], (err, result)=>{
        if(err){
            console.log("Product is not updated...")
            res.json(err)
        } else {
            console.log("Product is updated...")
            res.json(result)
        }
    })
}

// const updateRetailerProductName = (req, res) =>{
//     const data = req.body
//     const product_name = req.params.product_name
//     const sql = `UPDATE tbl_retailer_product set product_name = ? where productId = ?`
//     con.query(sql,[data,product_name],(err, result)=>{
//         if(err){
//             console.log("Product name is not updated....")
//             res.json(err)
//         }else {
//             console.log("Product name is updated...")
//             res.json(result)
//         }
//     })
// }



const updateRetailerProductPrice = (req, res) => {
    const data = req.body.price;
    const productId = req.params.productId;
    const sql = `UPDATE tbl_retailer_product SET price = ? WHERE productId = ?`;
    con.query(sql, [data, productId], (err, result) => {
        if (err) {
            console.log("Product price is not updated....", err);
            res.status(500).json({ error: "Product name is not updated." });
        } else {
            console.log("Product name is updated...");
            res.status(200).json({ message: "Product price is updated successfully." });
        }
    });
};

const updateRetailerProductDiscount = (req, res) => {
    const data = req.body.discount;
    const productId = req.params.productId;
    const sql = `UPDATE tbl_retailer_product SET discount = ? WHERE productId = ?`;
    con.query(sql, [data, productId], (err, result) => {
        if (err) {
            console.log("Product discount is not updated....");
            res.json(err)
        } else {
            console.log("Product discount is updated...");
            res.json(result)
        }
    });
};

const updateRetailerProductQuantity = (req, res) => {
    const data = req.body.quality;
    const productId = req.params.productId;
    const sql = `UPDATE tbl_retailer_product SET quality = ? WHERE productId = ?`;
    con.query(sql, [data, productId], (err, result) => {
        if (err) {
            console.log("Product quality is not updated....");
            res.json(err)
        } else {
            console.log("Product quality is updated...");
            res.json(result)
        }
    });
};


const updateRetailerProductPhoto = (req, res) => {
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/';
    const data =fullUrl+req.file.filename; // Assuming the photo is sent as a file
    const productId = req.params.productId;
    const sql = `UPDATE tbl_retailer_product SET photo = ? WHERE productId = ?`;
    con.query(sql, [data, productId], (err, result) => {
        if (err) {
            console.log("Product photo is not updated....");
            res.json(err);
        } else {
            console.log("Product photo is updated...");
            res.json(result);
        }
    });
};

module.exports = {retailerProductPost, retailerProductGet, retailerProductUpdate, updateRetailerProductPrice, updateRetailerProductDiscount, updateRetailerProductQuantity, updateRetailerProductPhoto}