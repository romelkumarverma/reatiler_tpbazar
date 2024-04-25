const express = require('express')
const con = require('../Model/model')

const app = express()

const bankPost = (req, res)=>{
    const data = req.body
    const sql = `INSERT INTO banking set ? `
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Bank is not posted...")
            res.json(err)
        } else {
            console.log("Bank is posting")
            res.json(result)
        }
    })
}

const bankget = (req, res)=>{
    const registration_number = req.params.registration_number
    const sql = `SELECT * from banking where registration_number = ?`
    con.query(sql,registration_number, (err, result)=>{
        if(err){
            console.log("Bank is not getting")
            res.json(err)
        } else {
            console.log("Bank is getting")
            res.json(result)
        }
    })
}

const bankput = (req, res)=>{
    const data = req.body
    const registration_number = req.params.registration_number
    const sql = `UPDATE banking set ? where registration_number = ?`
    con.query(sql,[data,registration_number],(err, result)=>{
        if(err){
            console.log("bank is not update")
            res.json(err)
        }else {
            console.log("Bank is updated...")
            res.json(result)
        }
    })
}

module.exports= {bankPost,bankget, bankput}