import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function AddShop() {

  const [pic1,setPic1] = useState('')
  const [pic2, setPic2] = useState('')
  const [pic3, setPic3] = useState('')

  const [retailer, setRetailer] = useState({
    registration_number: '',
    GST_number: '',
    TIN_number: '',
    PAN: '',
    shop_name: '',
    owner_name: '',
    contact: '',
    mobile: '',
    web: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pin: '',
    document_reg_no: '',
    docpan: '',
    shop_doc: '',
    terms_and_conditions: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("registration_number", retailer.registration_number)
    formData.append("GST_number", retailer.GST_number)
    formData.append("TIN_number", retailer.TIN_number)
    formData.append("PAN", retailer.PAN)
    formData.append("shop_name", retailer.shop_name)
    formData.append("owner_name", retailer.owner_name)
    formData.append("contact", retailer.contact)
    formData.append("mobile", retailer.mobile)
    formData.append("web", retailer.web)
    formData.append("email", retailer.email)
    formData.append("address", retailer.address)
    formData.append("state", retailer.state)
    formData.append("city", retailer.city)
    formData.append("pin", retailer.pin)
    formData.append("photo", pic1)
    formData.append("photo", pic2)
    formData.append("photo", pic3)
    formData.append("terms_and_conditions", retailer.terms_and_conditions)
    formData.append("password", retailer.password)

    axios.post('http://localhost:4500/api/retailer/post',formData)
      .then((result) => {
        console.log("Result", result)
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

  return (

    <>
        <div className="d-flex justify-content-center align-items-center mt-3">

          <div className='p-3 rounded w-75 border text-center shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 className='' style={{ marginTop: '20px', color:'teal' }}>Retailer Register Form</h2>
            <hr />

            <form className='row g-1' onSubmit={handleSubmit}>
              <div className='d-flex' style={{ gap: '20px', marginLeft:'15px' }}>

                <div>

                  <div className='col-12'>
                    <label htmlFor='registrationNumber' className='form-label'>
                      Registration Number
                    </label>
                    <input type="text"
                      className='form-control rounded-0'
                      id='registrationNumber'
                      placeholder='Enter Registration Number'
                      onChange={(e) => setRetailer({ ...retailer, registration_number: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="gstNumber" className='form-label'>
                      GST Number
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='gstNumber'
                      placeholder='Enter GST Number'
                      onChange={(e) => setRetailer({ ...retailer, GST_number: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="tinNUmber" className='form-label'>
                      TIN Number
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='tinNumber'
                      placeholder='Enter TIN Number'
                      onChange={(e) => setRetailer({ ...retailer, TIN_number: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="panNUmber" className='form-label'>
                      PAN Number
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='panNumber'
                      placeholder='Enter PAN Number'
                      onChange={(e) => setRetailer({ ...retailer, PAN: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="shopname" className='form-label'>
                      Shop Name
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='shopname'
                      placeholder='Enter Shop Name'
                      onChange={(e) => setRetailer({ ...retailer, shop_name: e.target.value })} />
                  </div>
                </div>

                <div>
                  <div className='col-12'>
                    <label htmlFor="owner" className='form-label'>
                      Owner Name
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='owner'
                      placeholder='Enter Owner Name'
                      onChange={(e) => setRetailer({ ...retailer, owner_name: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="contact" className='form-label'>
                      Contact
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='contact'
                      placeholder='Enter Contact'
                      onChange={(e) => setRetailer({ ...retailer, contact: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="mobile" className='form-label'>
                      Mobile Number
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='mobile'
                      placeholder='Enter Mobile NUmber'
                      onChange={(e) => setRetailer({ ...retailer, mobile: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="web" className='form-label'>
                      Web
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='web'
                      placeholder='Enter Web'
                      onChange={(e) => setRetailer({ ...retailer, web: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="email" className='form-label'>
                      Email
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='email'
                      placeholder='Enter Email '
                      onChange={(e) => setRetailer({ ...retailer, email: e.target.value })} />
                  </div>
                </div>

                <div style={{width:'200px'}}>
                  <div className='col-12'>
                    <label htmlFor="address" className='form-label'>
                      Address
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='address'
                      placeholder='Enter Your Address'
                      onChange={(e) => setRetailer({ ...retailer, address: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="state" className='form-label'>
                      State
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='state'
                      placeholder='Enter Your State'
                      onChange={(e) => setRetailer({ ...retailer, state: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="city" className='form-label'>
                      City
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='City'
                      placeholder='Enter Your City'
                      onChange={(e) => setRetailer({ ...retailer, city: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="pin" className='form-label'>
                      Pin
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='pin'
                      placeholder='Enter Pin'
                      onChange={(e) => setRetailer({ ...retailer, pin: e.target.value })} />
                  </div>

                  <div className='col-12'>
                    <label className='form-label' for='inputGroup01'>
                      Doc Reg Number
                    </label>
                    <input type='file'
                      className='form-control rounded-0'
                      id='inputGroup01'
                      onChange={(e) => setPic1( e.target.files[0])} />
                  </div>
                </div>

                <div style={{ marginRight: '30px', width:'200px' }}>
                  <div className='col-12 mb-3'>
                    <label className='form-label' for='inputGroupfile01'>
                      Docpan
                    </label>
                    <input type="file"
                      className='form-control rounded-0'
                      id='inputGroupfile01'
                      onChange={(e) => setPic2(e.target.files[0])} />
                  </div>

                  <div className='col-12 mb-3'>
                    <label className='form-label' for='inputGroupfile01'>
                      Shop Document
                    </label>
                    <input type="file"
                      className='form-control rounded-0'
                      id='inputGroupfile01'
                      onChange={(e) => setPic3(e.target.files[0])} />
                  </div>

                  <div className='col-12'>
                    <label htmlFor="terms" className='form-label'>
                      Terms and Condition
                    </label>
                    <input type='text'
                      className='form-control rounded-0'
                      id='terms'
                      placeholder='Enter Terms and Conditions'
                      onChange={(e) => setRetailer({ ...retailer, terms_and_conditions: e.target.value })} />
                  </div>

                  <div className='col-12 mb-3'>
                    <label className='password' for='inputGroupfile01'>
                      Password
                    </label>
                    <input type="text"
                      className='form-control rounded-0'
                      id='password'
                      placeholder='Enter Password'
                      onChange={(e) => setRetailer({ ...retailer, password: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <button type='submit' className='btn btn-primary w-100'>
                  Submit Your Form
                </button>
              </div>

            </form>
          </div>
          {/* <div className='col-8'>
            {children}
          </div> */}
        </div>
    
    </>

  )
}

export default AddShop