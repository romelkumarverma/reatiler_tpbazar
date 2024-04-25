import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Product_image(props) {
    const [img1,setImg1] = useState('')
    const [img2,setImg2] = useState('')
    const [img3,setImg3] = useState('')
    const [img4,setImg4] = useState('')
    const [showImg, setShowImg] = useState({
        id:'',
        images:'',
        color:'',
        pic1:'',
        pic2:'',
        pic3:'',
        pic4:''
    })

    const handleImgPost = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productId', props.id)
        formData.append('images', showImg.images)
        formData.append('color',showImg.color)
        formData.append('photo', img1)
        formData.append('photo', img2)
        formData.append('photo', img3)
        formData.append('photo', img4)
        // console.log(formData)
        axios.post("http://localhost:4500/api/product/imagepost",formData)
        
        .then((result)=>{
            console.log(result)
            alert('Retailer Photo Posted..')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'teal' }}>
                        Add Product Images :- {props.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleImgPost}>

                        <div className='d-flex' style={{ gap: '35px', marginLeft: '30px' }}>
                            <div>

                                <div className='col-12'>
                                    <label htmlFor="inputId" className='form-label'>
                                        Product Id
                                    </label>
                                    <input type="text"
                                        class='form-control rounded-0'
                                        id='inputId'
                                        placeholder='Product Id' value={props.id}/>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor="text" className='form-label'>
                                        Image Id
                                    </label>
                                    <input type="text"
                                        class='form-control rounded-0'
                                        id='id'
                                        placeholder='Ente Image Id' 
                                        onChange={(e) => setShowImg({ ...showImg, images: e.target.value })}/>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor="text" className='form-label'>
                                        Product Color
                                    </label>
                                    <input type="text"
                                        class='form-control rounded-0'
                                        id='text'
                                        placeholder='Product Color' 
                                        onChange={(e) => setShowImg({ ...showImg, color: e.target.value })}/>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor="file" className='form-label'>
                                        Pic1
                                    </label>
                                    <input type="file"
                                        class='form-control rounded-0'
                                        id='file'
                                        onChange={(e) => setImg1(e.target.files[0] )}/>
                                </div>
                            </div>

                            <div>
                                <div className='col-12'>
                                    <label htmlFor="file" className='form-label'>
                                        Pic2
                                    </label>
                                    <input type="file"
                                        class='form-control rounded-0'
                                        id='file'
                                        onChange={(e) => setImg2(e.target.files[0] )}/>

                                    <div className='col-12'>
                                        <label htmlFor="file" className='form-label'>
                                            Pic3
                                        </label>
                                        <input type="file"
                                            class='form-control rounded-0'
                                            id='file'
                                            onChange={(e) => setImg3(e.target.files[0])}/>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="file" className='form-label'>
                                            Pic4
                                        </label>
                                        <input type="file"
                                            class='form-control rounded-0'
                                            id='file'
                                            onChange={(e) => setImg4(e.target.files[0] )}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button type='submit' className='btn btn-primary w-100' style={{ marginTop: '10px' }}>
                                Add Product Images
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </div >
    )
}

export default Product_image