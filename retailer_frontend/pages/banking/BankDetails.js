import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import Dashboard from '../Dashboard';
import { userContext } from '../_app';
import styles from '../../styles/Banking.module.css'
import Table from 'react-bootstrap/Table';


function BankDetails() {

  //////////// Get data of one person by registration number using UseContext start ///////////////////
  const user = useContext(userContext)
  console.log(user)
  const regId = user.regId
  console.log(regId)
  //////////// Get data of one person by registration number using UseContext end step1 //////////

  const [bank, setBank] = useState({
    registration_number: '',
    account_number: '',
    account_holder_name: '',
    ifsc_code: '',
    bankname: '',
    branchname: '',
    upi: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4500/api/bank/post', bank)
      .then((result) => {
        console.log(result)
        console.log('Data  getting')
      }).catch((err) => {
        console.log(err)
        console.log('Data  not is getting')
      })
  }

  const [bank1, setBank1] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4500/api/banking/get/${regId}`)
      .then((res) => {
        console.log(res)
        setBank1(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [regId])

  return (
    <>
      <Dashboard>

        <div style={{ marginTop: '10px', justifyContent: 'center', marginLeft: '200px', marginRight: '200px', cursor: 'pointer' }}>

          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >

            <Tab eventKey="addbankdetails" title="Add Bank Details" >
              <div className='d-flex justify-content-center align-item-center shadow-lg p-3 mb-5 bg-white rounded'>
                <div className='p-3 rounded w-50 border'>
                  <h4 style={{ textAlign: 'center'}}>Bank Details</h4>
                  <hr />
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className='d-flex' style={{ gap: '20px', }}>
                      <div>

                        <div className='col-12'>
                          <label htmlFor="registrationnumber" className='form-label'>
                            Registration Number
                          </label>
                          {/* <select name='registrationnumber' id='registrationnumber' className='form-select'
                            //  onChange={(e) => setEmployee({ ...employee, category_id: e.target.value})}>
                            // {
                            //     category.map((c) => {
                            //         return <option  value={c.id}>{c.name}</option>
                            //     })}
                        </select> */}
                          {/* <select name='registrationnumber' id='registrationnumber' className='form-select'
                        onChange={(e) => setBank({...bank, registration_number: e.target.value})}>
                          {

                          }
                        </select> */}
                          <input type='registrationnumber'
                            class='form-control rounded-0'
                            id='registrationnumber'
                            placeholder='Enter Registration Number'
                            onChange={(e) => setBank({ ...bank, registration_number: e.target.value })} />
                        </div>

                        <div className='col-12'>
                          <label htmlFor='account_number' className='form-label'>
                            account_number
                          </label>
                          <input  
                            type='account_number'
                            class='form-control rounded-0'
                            id='account_number'
                            placeholder='Enter Account Number'
                            onChange={(e) => setBank({ ...bank, account_number: e.target.value })} />
                        </div>

                        <div className='col-12'>
                          <label htmlFor='account_holder_name' className='form-label'>
                            Account Holder Name
                          </label>
                          <input type='account_holder_name'
                            class='form-control rounded-0'
                            id='account_holder_name'
                            placeholder='Enter Account Holder Name'
                            onChange={(e) => setBank({ ...bank, account_holder_name: e.target.value })} />
                        </div>

                        <div className='col-12'>
                          <label htmlFor='ifsc_code' className='form-label'>
                            Ifsc Code
                          </label>
                          <input type='ifsc_code'
                            class='form-control rounded-0'
                            id='ifsc_code'
                            placeholder='Enter Ifsc Code'
                            onChange={(e) => setBank({ ...bank, ifsc_code: e.target.value })} />
                        </div>
                      </div>

                      <div>
                        <div className='col-12'>
                          <label htmlFor='bankname' className='form-label'>
                            Bank name
                          </label>
                          <input type='bankname'
                            class='form-control rounded-0'
                            id='bankname'
                            placeholder='Enter Bank Name'
                            onChange={(e) => setBank({ ...bank, bankname: e.target.value })} />
                        </div>

                        <div className='col-12'>
                          <label htmlFor='branchname' className='form-label'>
                            Branch name
                          </label>
                          <input type='branchname'
                            class='form-control rounded-0'
                            id='branchname'
                            placeholder='Enter Branch Name'
                            onChange={(e) => setBank({ ...bank, branchname: e.target.value })} />
                        </div>

                        <div className='col-12'>
                          <label htmlFor='upi' className='form-label'>
                            UPI
                          </label>
                          <input type='upi'
                            class='form-control rounded-0'
                            id='upi'
                            placeholder='Enter UPI id'
                            onChange={(e) => setBank({ ...bank, upi: e.target.value })} />
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                      <button type='submit' className='btn btn-primary w-100 mt-3'>
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Tab>

            <Tab eventKey="view" title="View Product">
              <div className='d-flex justify-content-center align-item-center mt-3'>
                <div>
                <Table striped bordered hover size="Lg">
                    <thead>

                    
                      <tr>
                        
                        <th>Reg Number</th>
                        <th>Account Number</th>
                        <th>Account Holder Name</th>
                        <th>Ifsc Code</th>
                        <th>Bank Name</th>
                        <th>Branch Name</th>
                        <th>Upi</th>
                        
                      </tr>
                      

                    </thead>
                    <tbody>
                      {
                        bank1.map((item) =>
                          <tr>
                            <td>{item.registration_number}</td>
                            <td>{item.account_number}</td>
                            <td>{item.account_holder_name}</td>
                            <td>{item.ifsc_code}</td>
                            <td>{item.bankname}</td>
                            <td>{item.branchname}</td>
                            <td>{item.upi}</td>
                          </tr>
                        )}


                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Dashboard>

    </>
  )
}

export default BankDetails
