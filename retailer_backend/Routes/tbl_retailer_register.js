const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken')

const retailer = express.Router();

const {retailerPost, retailerGet, retailerUpdate, retailerlogin, getRetailerData} = require('../Controller/tbl_retailer_register');

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

///////     for verify user     ///////

const verify = (req, res, next) =>{
    const token = req.cookies.token
    console.log(token)
    if(!token){
        return res.status(401).json({Error: "You are not authenticated"})
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded)=>{
            if(err) return res.status(401).json({Error: "Wrong Token"})
            req.email = decoded.email,
            req.registration_number= decoded.regId;
            next();
        })
    }
};

/////     retailer post verify      //////////

retailer.post('/api/retailer/login', retailerlogin)

retailer.post('/api/retailer/post', upload.array('photo', 3), retailerPost);
retailer.get('/api/retailer/get/:registration_number', retailerGet);
retailer.put('/api/retailer/update/:registration_number', retailerUpdate);

////    retailer verify     ////

retailer.get('/api/retailer/verify', verify,getRetailerData)

///     For Status
// retailer.put('/api/retailer/update/status', statusUpdate)

module.exports = {retailer}