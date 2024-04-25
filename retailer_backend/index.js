const express = require('express')
const cors = require('cors');
const cookies = require('cookie-parser')

const app = express();
app.use(cookies())

app.use(express.json());
const PORT = 4500

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))


const {retailer} = require('./Routes/tbl_retailer_register');
app.use('/',retailer);

const {retailerlogin} = require('./Routes/shoplogin');
app.use('/',retailerlogin);

const {retailerProduct} = require('./Routes/tbl_retailer_product');
const path = require('path');
app.use('/',retailerProduct)

const {banking} = require('./Routes/banking');
app.use('/',banking);

const {retailerProductDesc} = require('./Routes/tbl_retailer_product_description');
app.use('/',retailerProductDesc);

const {img} = require('./Routes/tbl_product_image');
app.use('/', img);

app.use('/public', express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}...`);
})