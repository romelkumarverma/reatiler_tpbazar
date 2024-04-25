import React, { useContext, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { userContext } from '../_app'
import Dashboard from '../Dashboard'

function ShowShop() {
    const user = useContext(userContext)
    console.log(user)
    const regId = user.regId;
    console.log(regId)
    const [ShowShop, setShowShop] = useState([])

    const handleShow = () => {
        axios.get(`http://localhost:4500/api/retailer/get/${regId}`)
            .then((res) => {
                console.log(res)
                setShowShop(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleShow()
    }, [])


    return (
        <>
            <Dashboard>
                <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{ marginLeft: '40%',width:'400px', marginTop:'5px' }}>
                    <h4 style={{color: 'teal', textAlign:'center' }}>Retailer Details</h4>
                        
                    {
                        ShowShop.map((item, index) => {
                            return (
                                <div>
                                    
                                    <h6>Registration Number :- {item.registration_number}</h6>
                                    <h6>GST Number:- {item.GST_number}</h6>
                                    <h6>TIN Number:- {item.TIN_number}</h6>
                                    <h6>Shop Name:- {item.shop_name}</h6>
                                    <h6>Owner Name:- {item.owner_name}</h6>
                                    <h6>Contact:- {item.contact}</h6>
                                    <h6>Mobile:- {item.mobile}</h6>
                                    <h6>Web:- {item.web}</h6>
                                    <h6>Email:- {item.email}</h6>
                                    <h6>Address:- {item.address}</h6>
                                    <h6>State:- {item.state}</h6>
                                    <h6>City:- {item.city}</h6>
                                    <h6>Pin:- {item.pin}</h6>
                                    <h6>Documnet Registration Number:- {<img src={item.document_reg_no} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />}</h6>
                                    <h6>Docpan:- {<img src={item.docpan} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />}</h6>
                                    <h6>Shop Document:- {<img src={item.shop_doc} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />}</h6>
                                    <h6>T&C:- {item.terms_and_conditions}</h6>

                                </div>
                            )
                        }
                        )
                    }


                </div>
            </Dashboard>
        </>

    )
}

export default ShowShop