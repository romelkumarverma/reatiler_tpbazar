const express = require('express')

const retailerlogin = express.Router()

const { loginpost } = require('../Controller/shoplogin');

retailerlogin.post('/api/login/post', loginpost);
//retailerlogin.get('/api/login/get/:id', loginget);

module.exports = {retailerlogin}