const express = require('express')

const { bankPost, bankget, bankput } = require('../Controller/banking')


const banking = express.Router()


banking.post('/api/bank/post', bankPost)

///// check with id ///// 

// banking.get('/api/banking/get/:registration_number', backget)

////////

banking.get('/api/banking/get/:registration_number', bankget)

banking.put('/api/banking/put/:registration_number', bankput)

module.exports = { banking }