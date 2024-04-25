import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Link from 'next/link'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { userContext } from './_app';


function Dashboard({ children }) {
  const user = useContext(userContext)
  const email = user.email;
  return (
    <div className='fixed-top '>

      <Navbar expand="lg" style={{backgroundColor:'#00203FFF'}}>
        <Container>
          <Navbar.Brand href="#home"><i class="bi bi-minecart" style={{ color: 'white', fontSize: '25px' }}>tpbazar</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: '630px' }}>
              <h5 style={{ color: 'white' }}>Welcome:- {email}</h5>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Setting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>

        <div className='row flex-nowrop' >
          <div className='col-4 col-md-3 col-xl-2 px-sm-2 px-0 ' style={{backgroundColor:'#00203FFF'}}>
            <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white min-vh-100'>

              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>

                <li className='w-100'>
                  <Link href="/Hom" className='nav-link px-0 text-white align-middle' >
                    <i class="bi bi-houses-fill ms-2"></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                  </Link>
                </li>

                <li className='w-100'>
                  <Link href="/shop/ShowShop" className='nav-link  px-0 text-white align-middle' style={{ marginTop: '40px', marginLeft: '10px' }}>
                    <i class="bi bi-shop"></i>
                    <span className='ms-2 d-none d-sm-inline' >Profile</span>
                  </Link>
                </li>

                <li className='w-100'>
                  <Link href="/product/AddRetailerProduct" className='nav-link text-white px-0 align-middle' style={{ marginTop: '40px', marginLeft: '10px' }}>
                    <i class="bi bi-archive-fill"></i>
                    <span className='ms-2 d-none d-sm-inline'>Product</span>
                  </Link>
                </li>

                <li className='w-100'>
                  <Link href="/banking/BankDetails" className='nav-link text-white px-0 align-middle' style={{ marginTop: '40px', marginLeft: '10px' }}>
                    <i class="bi bi-bank"></i>
                    <span className='ms-2 d-none d-sm-inline'>Banking</span>
                  </Link>
                </li>

              </ul>

            </div>
          </div>

          <div className='col-8'>
            {children}              </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard