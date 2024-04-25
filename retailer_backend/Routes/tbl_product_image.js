const express = require('express')
const multer = require('multer');
const path = require('path')
const { imagePost, imageGet, imageUpdate } = require('../Controller/tbl_product_image')
const img = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/images')
    },
    filename: (req, file, cb) =>{
        const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, filename)
    }
})

const upload = multer ({ storage: storage}) 

img.post('/api/product/imagepost', upload.array('photo',4) ,imagePost);
img.get('/api/image/get/:productId', imageGet)
img.put('/api/image/update/:productId', upload.array('photo', 4), imageUpdate)

module.exports = {img}