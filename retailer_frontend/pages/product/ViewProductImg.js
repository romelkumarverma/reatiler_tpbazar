import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


function ViewProductImg(props) {
    const [imgProd, setImgProd] = useState([])

    const handleShowImgProd = () => {
        axios.get(`http://localhost:4500/api/image/get/${props.id}`)
            .then((res) => {
                console.log(res)
                setImgProd(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleShowImgProd()
    }, [])

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        View Product Images :- {props.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center align-item-center mt-3 shadow-lg p-3 mb-5 bg-white rounded'>
                        <div>
                            {/* <Table striped bordered hover size="sm">
                                <thead>
                                    <tr style={{ color: 'teal' }}>
                                    <th scope="col">ProductId</th>
                                    <th scope="col"> Product Images</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Product Pic1</th>
                                    <th scope="col"> Product Pic2</th>
                                    <th scope="col">Product Pic3</th>
                                    <th scope="col">Product Pic4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        imgProd.map((item)=>
                                        <tr>
                                            <td>{props.id}</td>
                                            <td>{item.images}</td>
                                            <td>{item.color}</td>
                                            <td>
                                            {
                                                <img src={item.pic1} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                            }
                                            </td>
                                            <td>
                                            {
                                                <img src={item.pic2} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                            }
                                            </td>
                                            <td>
                                            {
                                                <img src={item.pic3} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                            }
                                            </td>
                                            <td>
                                            {
                                                <img src={item.pic4} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                            }
                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </Table> */}

                            {
                                imgProd.map((item) =>
                                
                                    (
                                        
                                        <div>
                                        <h4>Product Id:- {props.id}</h4>
                                        <h4>Image Id:- {item.images}</h4>
                                        <h4>Product Color:- {item.color}</h4>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img src={item.pic1} text="First slide" style={{height:'300px', width:'600px'}}/>
                                                    <Carousel.Caption>
                                                        <h3>First slide label</h3>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img  src={item.pic2} text="Second slide" style={{height:'300px', width:'600px'}}/>
                                                    <Carousel.Caption>
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img  src={item.pic3} text="Third slide" style={{height:'300px', width:'600px'}}/>
                                                    <Carousel.Caption>
                                                        <h3>Third slide label</h3>
                                                        <p>
                                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                        </p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img  src={item.pic4} text="Fourth slide" style={{height:'300px', width:'600px'}}/>
                                                    <Carousel.Caption>
                                                        <h3>Third slide label</h3>
                                                        <p>
                                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                        </p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        )
                                    )
                                


                            }
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ViewProductImg