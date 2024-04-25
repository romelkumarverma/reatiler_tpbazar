import '@/styles/globals.css'
import axios from 'axios'
import {createContext, useEffect, useState } from 'react'

export const userContext = createContext()
export default function App({ Component, pageProps }) {
  const [verifyGet, setVerifyGet] = useState([])
  axios.defaults.withCredentials = true
  
  const verifyUser = () => {
    axios.get('http://localhost:4500/api/retailer/verify')
    .then((result)=>{
      console.log(result)
      setVerifyGet(result.data)
    }).catch(err =>{
      console.log(err)
    })
  }

  useEffect (()=>{
    verifyUser()
  },[])
  return (
    <userContext.Provider value={verifyGet}>
    <Component {...pageProps} />
    </userContext.Provider>
    )
 
}
