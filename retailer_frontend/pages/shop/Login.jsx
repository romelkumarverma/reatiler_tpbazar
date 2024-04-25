import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

function Login() {

  const [login,setLogin] = useState({
    email:'',
    password:''
  })

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4500/api/retailer/login',login)
    .then((result)=>{
      console.log(result)
      router.push('/Dashboard')
    }).catch(err =>{
      console.log(err)
    })
  }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'100px'}}>

            <div className='p-3 rounded border text-center shadow-lg p-3 mb-5 bg-white rounded' style={{width:'300px'}}>
                <h2 style={{color:'teal'}}>Login Here</h2>
                <hr />
              <form onSubmit={handleSubmit}>
                <div className='col-12 mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email 
                    </label>
                    <input type="text"
                      className='form-control rounded-0'
                      id='email'
                      placeholder='Enter Email' 
                      onChange={(e) => setLogin({ ...login, email: e.target.value })}/>
                  </div>
                  <div className='col-12 mb-3'>
                    <label htmlFor='password' className='form-label'>
                      Password 
                    </label>
                    <input type="text"
                      className='form-control rounded-0'
                      id='password'
                      placeholder='Enter Email password' 
                      onChange={(e) => setLogin({ ...login, password: e.target.value })}/>
                  </div>
                  <div className='col-12'>
                <button type='submit' className='btn w-100' style={{backgroundColor:'seagreen', color:'white'}}>
                  Login
                </button>

               <Link href='/shop/AddShop'><button type='submit' className='btn btn-primary w-100' style={{marginTop:'5px',color:'white'}}>Register Here</button></Link> 
              </div>
              </form>
            </div>
        </div>
    )
}

export default Login