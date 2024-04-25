import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from 'axios'
import { useState } from 'react'
import NextLink from 'next/link'


function ShopLogin() {

  const [value, setValue] = useState({
    email:'',
    password:''
  })



  const handleSubmit = (event) =>{
    event.preventDefault();

    axios.post('http://localhost:4500/api/login/post', value)
    .then(result => {
      console.log("result here",result)
  }).catch(err =>{
    console.log("error here",err)
  })
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 rounded w-25 border'>
        <h2>Shop Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor="email"><strong><i class="bi bi-envelope-at"></i>Email:</strong></label><br />
            <input type="email" name='email' autoComplete='off' placeholder='Enter your Email'
            onChange={(e) => setValue({...value, email: e.target.value})}></input>
          </div>
          <br />

          <div className='mb-3'>
            <label htmlFor="password"><strong><i class="bi bi-unlock"></i>Password:</strong></label><br />
            <input type="password" name='password' autoComplete='off' placeholder='Enter your Password'
            onChange={(e) => setValue({...value, password: e.target.value})}></input>
          </div>

          <button className='btn btn-success w-100 rounded-0 mb-2'>Log In</button>
          <NextLink href="./shop/AddShop"><button className='btn btn-primary w-100 rounded-0 mb-2'>Retailer Register</button></NextLink>
            <div className='mb-1'>
              <input type="checkbox" name='tick' id='tick' className='me-2'/>
              <label>You are agree with terms & conditions:</label>
            </div>
        </form>
      </div>

    </div>
  )
}

export default ShopLogin