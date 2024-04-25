const express = require('express')
const con = require('../Model/model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookies = require('cookie-parser')
const app=express()
app.use(cookies())


const retailerPost = (req, res) => {

    /// Code for hashing Password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/';
        const data = {
            registration_number: req.body.registration_number,
            GST_number: req.body.GST_number,
            TIN_number: req.body.TIN_number,
            PAN: req.body.PAN,
            shop_name: req.body.shop_name,
            owner_name: req.body.owner_name,
            contact: req.body.contact,
            mobile: req.body.mobile,
            web: req.body.web,
            email: req.body.email,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            document_reg_no:fullUrl+req.files[0].filename,
            docpan:fullUrl+req.files[1].filename,
            shop_doc:fullUrl+req.files[2].filename,
            terms_and_conditions: req.body.terms_and_conditions,
            password: hash
        }

        const sql = `INSERT INTO tbl_retailer_register SET ?`
        con.query(sql, data, (err, result) => {
            if (err) {
                console.log("Retailer is not posted...");
                res.json(err)
            } else {
                console.log("Retailer is posted...");
                res.json(result);
            }
        })
    })

}


/////   retailer Login  //////////

const retailerlogin = (req, res) =>{
    const password = req.body.password
    const email = req.body.email

    const sql = `SELECT * FROM tbl_retailer_register WHERE email = ?`
    con.query(sql ,[email, password], (err, result)=>{
        if(result && result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, isMatch)=>{
                if(isMatch) {
                    const token = jwt.sign({ email: result[0].email, regId: result[0].registration_number}, "jwt-secret-key", {expiresIn: "1d"});
                    res.cookie('token', token);
                    return res.status(200).json({ result: result, token: token});
                } else {
                    return res.status(401).json("Password is not match");
                }
            });
        } else {
            return res.status(404).json("User not found");
        }
    })
}


const getRetailerData = (req, res)=>{
    return res.json({email:req.email, regId:req.registration_number})
}



const retailerGet = (req, res) => {
    const registration_number = req.params.registration_number;
    const sql = `SELECT * FROM tbl_retailer_register WHERE registration_number = ?`
    con.query(sql,registration_number,  (err, result) => {
        if (err) {
            console.log("Retailer is not getting...")
            res.json(err)
        } else {
            console.log("Register is getting...")
            res.json(result);
        }
    })
}

const retailerUpdate = (req, res) => {
    const data = req.body
    const registration_number = req.params.registration_number
    const sql = `UPDATE tbl_retailer_register set ? where registration_number = ?`
    con.query(sql, [data, registration_number], (err, result) => {
        if (err) {
            console.log("Retailer is not update..")
            res.json(err)
        } else {
            console.log("Retailer is updated...")
            res.json(result)
        }
    })
}

///     Status Active/Deactive      ////////

// const statusUpdate = (req, res) => {
//     const registration_number=req.query.registration_number
//     const status=req.query.status
//     const sql=`update tbl_retailer_register set status = ? where registration_number = ?`
//     con.query(sql, [status,registration_number], (err, result) => {
//         if(err) {
//             console.log("Retailer status is not update...");
//             res.json(err)
//         } else {
//             console.log("Retailer status is updated successfully");
//             res.json(result);
//         }
//     })
// }

module.exports = { retailerPost, retailerGet, retailerUpdate, retailerlogin, getRetailerData }