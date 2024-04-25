const express = require('express')

const { retaiProdDescPost, retaiProdDescGet, retaiProdDescUpdate } = require('../Controller/tbl_retailer_product_description')

const retailerProductDesc = express.Router()

retailerProductDesc.post('/api/tbl_retailer_product_description/post', retaiProdDescPost)
retailerProductDesc.get('/api/tbl_retailer_product_description/get/:productId', retaiProdDescGet)
retailerProductDesc.put('/api/tbl_retailer_product_description/update/:productId', retaiProdDescUpdate)

module.exports = {retailerProductDesc}