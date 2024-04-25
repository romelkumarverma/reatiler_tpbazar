const express = require('express')
const multer = require('multer')
const path = require('path')

const { retailerProductPost, retailerProductGet, retailerProductUpdate, updateRetailerProductPrice, updateRetailerProductDiscount, updateRetailerProductQuantity, updateRetailerProductPhoto } = require('../Controller/tbl_retailer_product')


const retailerProduct = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/images')
    },
    filename: (req, file, cb)=>{
        const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, filename)
    }
});

const upload = multer ({storage: storage});

retailerProduct.post('/api/retailerProduct/post', upload.single('photo'), retailerProductPost)
retailerProduct.get('/api/retailerProduct/get/:registration_number', retailerProductGet)
retailerProduct.put('/api/retailerProduct/update/:productId', retailerProductUpdate)
retailerProduct.put('/api/updateRetailerProductPrice/:productId', updateRetailerProductPrice)
retailerProduct.put('/api/updateRetailerProductDiscount/:productId', updateRetailerProductDiscount)
retailerProduct.put('/api/updateRetailerProductQuantity/:productId', updateRetailerProductQuantity)
retailerProduct.put('/api/updateRetailerProductPhoto/:productId', upload.single('photo'), updateRetailerProductPhoto)

module.exports = {retailerProduct}