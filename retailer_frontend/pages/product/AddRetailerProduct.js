import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
//import Dashboard from '../Dashboard';
import { userContext } from '../_app';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { distDir } from '@/next.config';
import Product_image from './Product_image';
import ViewProductImg from './ViewProductImg';
import Dashboard from '../Dashboard';





function AddRetailerProduct() {
    const user = useContext(userContext)
    const regId = user.regId

    // Add Product Image
    const [modalShow, setModalShow] = React.useState(false);

    const [addProIma, setAddProImg] = useState();

    const handleAddProductImage = (productId) => {
        setModalShow(true)
        setAddProImg(productId)
    }

    /////   View Product Image
    const [modalShow1, setModalShow1] = React.useState(false);
    const [imgProView, setImgProView] = useState();

    const handleViewProductImg = (productId) => {
        setModalShow1(true)
        setImgProView(productId)
    }

    //////////////////// Add/Get or Show/ Update     Description step1 start    ///////////////////////
    ///////    Add     /////////
    const [lgShow, setLgShow] = useState(false);

    const [addDesc, setAddDesc] = useState()
    const [desc, setDesc] = useState({

        description: '',
        size: '',
        weight: '',
        RAM: '',
        screen: '',
        ROM: '',
        processor: '',
        mfg_date: '',
        exp_date: '',
        material: '',
        country_of_origin: ''
    })

    const addDescProductId = (addDescProductId) => {
        setLgShow(true)
        setAddDesc(addDescProductId)
    }

    const handleSubmitDesc = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4500/api/tbl_retailer_product_description/post', desc)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })
    }

    //////////  Get/Show    ///////
    const [lgShow1, setLgShow1] = useState(false);
    const [getDesc, setGetDesc] = useState([])

    const handleShowDesc = (productId) => {
        axios.get(`http://localhost:4500/api/tbl_retailer_product_description/get/${productId}`)
            .then((result) => {
                console.log(result, '72')
                setGetDesc(result.data)
            }).catch((err) => {
                console.log(err)
            })
        setLgShow1(true)
    }

    //////////////      Update Description      ///////////////
    const [lgShow2, setLgShow2] = useState(false);
    const [decsUpdate, setDescUpdate] = useState()
    const [updateDescData, setSetUpdateData] = useState({
        description: '',
        size: '',
        weight: '',
        RAM: '',
        screen: '',
        ROM: '',
        processor: '',
        mfg_date: '',
        exp_date: '',
        material: '',
        country_of_origin: ''
    })

    const UpdateDesc = (productId) => {
        console.log(productId)
        setLgShow2(true)
        setDescUpdate(productId)
    }

    const handleSubmitDescUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4500/api/tbl_retailer_product_description/update/${decsUpdate}`, updateDescData)
            .then((result) => {
                console.log(result)
                setLgShow2()
            }).catch((err) => {
                console.log(err)
            })
    }




    /////////////////////   Update Price step1 Start   ///////////////
    const [smShow, setSmShow] = useState(false);
    const [priceUpdate, setPriceUpdate] = useState()
    const [pricedata, setPriceData] = useState({
        price: ''
    })
    console.log(priceUpdate)
    const priceId = (priceId) => {
        console.log(priceId)
        setSmShow(true)
        setPriceUpdate(priceId)
    }

    const handleSubmitPrice = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4500/api/updateRetailerProductPrice/${priceUpdate}`, pricedata)
            .then((result) => {
                console.log(result)
                setSmShow()
            }).catch((err) => {
                console.log(err)
            })
    }
    ////////////////////    Update Price step1  End   //////////////

    ////////////////////    Update Discount step1     ////////////////
    const [smShow1, setSmShow1] = useState(false);
    const [updateDiscount, setUpdateDiscount] = useState()
    const [discountData, setDiscountData] = useState({
        discount: ''
    })
    const discount1 = (discount1) => {
        setSmShow1(true)
        setUpdateDiscount(discount1)
    }

    const handleSubmitDiscount = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4500/api/updateRetailerProductDiscount/${updateDiscount}`, discountData)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })
    }

    ////////////////////    Update Discount step1  End   //////////////

    ///////////////////     Update Quantity/Quality step1 Start     ////////////////////////
    const [smShow2, setSmShow2] = useState(false);
    const [updateQuantity, setUpdateQuantity] = useState()
    const [quantityData, setQualityData] = useState({
        quality: ''
    })

    const quantity = (quantity) => {
        setSmShow2(true)
        setUpdateQuantity(quantity)
    }

    const handleSubmitQuantity = (e) => {
        axios.put(`http://localhost:4500/api/updateRetailerProductQuantity/${updateQuantity}`, quantityData)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })
    }
    ///////////////////     Update Quantity/Quality step1 End     ////////////////////////

    ///////////////////////     Update Photo step1 start    //////////////////////////
    const [smShow3, setSmShow3] = useState(false);
    const [updatePhoto, setUpdatePhoto] = useState()
    const [photoData, setPhotoData] = useState({
        photo: ''
    })
    const photo = (photo) => {
        setSmShow3(true)
        setUpdatePhoto(photo)
    }

    const handleSubmitPhoto = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("photo", photoData.photo)
        axios.put(`http://localhost:4500/api/updateRetailerProductPhoto/${updatePhoto}`, formData)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })
    }
    ///////////////////////     Update Photo step1 end    //////////////////////////



    const [retailerProduct, setRetalierProduct] = useState({
        productId: '',
        product_name: '',
        subcategoryid: '',
        price: '',
        discount: '',
        brand_name: '',
        quality: '',
        registration_number: '',
        photo: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("productId", retailerProduct.productId)
        formData.append("product_name", retailerProduct.product_name)
        formData.append("subcategoryid", retailerProduct.subcategoryid)
        formData.append("price", retailerProduct.price)
        formData.append("discount", retailerProduct.discount)
        formData.append("brand_name", retailerProduct.brand_name)
        formData.append("quality", retailerProduct.quality)
        formData.append("registration_number", retailerProduct.registration_number)
        formData.append("photo", retailerProduct.photo)

        axios.post("http://localhost:4500/api/retailerProduct/post", formData)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err);
            })
    }

    const [showProduct, setShopProduct] = useState([])

    const handleShow = () => {
        axios.get(`http://localhost:4500/api/retailerProduct/get/${regId}`)
            .then((res) => {
                console.log(res)
                setShopProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleShow()
    }, [])

    /////////       FOR STATUS ACTIVE AND DEACTIVE      ////////////




    //////////////////////////////////////////////////////

    return (
        <>
            <Dashboard>

                <div style={{ marginLeft: '100px', marginTop: '30px', cursor: 'pointer', width: '100%' }}>
                    {/* <Dashboard /> */}
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="addproduct" title="Add Product" >
                            <div className='d-flex justify-content-center align-item-center mt-3 shadow-lg p-3 mb-5 bg-white rounded'>

                                <div className='p-3 rounded w-50 border'>
                                    <h3 style={{ textAlign: 'center', color: 'teal' }}>Add Retailer Product</h3>
                                    <form className='row g-1' onSubmit={handleSubmit}>

                                        <div className='d-flex' style={{ gap: '40px' }}>

                                            <div style={{ marginLeft: '', width: '300px' }}>
                                                <div className='col-12'>
                                                    <label htmlFor="inputId" className='form-label'>
                                                        Product Id
                                                    </label>
                                                    <input type="text"
                                                        class='form-control rounded-0'
                                                        id='inputId'
                                                        placeholder='Enter Product Id'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, productId: e.target.value })} />
                                                </div>
                                                <div className='col-12'>
                                                    <label htmlFor="name" className='form-label'>
                                                        Product Name
                                                    </label>
                                                    <input type="text"
                                                        class='form-control rounded-0'
                                                        id='name'
                                                        placeholder='Enter Product Name'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, product_name: e.target.value })} />
                                                </div>
                                                <div className='col-12'>
                                                    <label htmlFor="id" className='form-label'>
                                                        SubCategory Id
                                                    </label>
                                                    <input type="text"
                                                        class='form-control rounded-0'
                                                        id='id'
                                                        placeholder='Enter Subcategory Id'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, subcategoryid: e.target.value })} />
                                                </div>

                                                <div className='col-12'>
                                                    <label htmlFor="price" className='form-label'>
                                                        Price
                                                    </label>
                                                    <input type="text"
                                                        class='form-control rounded-0'
                                                        id='price'
                                                        placeholder='Enter Price'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, price: e.target.value })} />
                                                </div>

                                                <div className='col-12'>
                                                    <label htmlFor="discount" className='form-label'>
                                                        Discount
                                                    </label>
                                                    <input type='text'
                                                        class='form-control rounded-0'
                                                        id='discount'
                                                        placeholder='Enter Discount'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, discount: e.target.value })} />
                                                </div>
                                            </div>

                                            <div>
                                                <div className='col-12'>
                                                    <label htmlFor="brandname" className='form-label'>Brand Name</label>
                                                    <input type="text"
                                                        class='form-control rounded-0'
                                                        id='brandname'
                                                        placeholder='Enter Brand Name'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, brand_name: e.target.value })} />
                                                </div>
                                                <div className='col-12'>
                                                    <label htmlFor="quality" className='form-label'>Quality</label>
                                                    <input type="text"
                                                        class='form-control'
                                                        id='quality'
                                                        placeholder='Enter quality'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, quality: e.target.value })} />
                                                </div>
                                                <div className='col-12'>
                                                    <label htmlFor='registrationNumber' className='form-label'>Registration Number</label>
                                                    <input type="text"
                                                        class='form-control'
                                                        id='registrationNumber'
                                                        placeholder='Enter Registration Number'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, registration_number: e.target.value })} />
                                                </div>

                                                <div className='col-12 mb-3'>
                                                    <label htmlFor="inputGroupfile01" for='form-label'>Select Image</label>
                                                    <input type="file"
                                                        class='form-control rounded-0'
                                                        id='inputGroupfile01'
                                                        onChange={(e) => setRetalierProduct({ ...retailerProduct, photo: e.target.files[0] })} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <button type='submit' className='btn btn-primary w-100'>
                                                Add Product
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="view" title="View Product">
                            <div className='d-flex justify-content-center align-item-center mt-3 shadow-lg p-3 mb-5 bg-white rounded'>
                                <div>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr style={{ color: 'teal' }}>
                                                <th scope="col">Prod_Id</th>
                                                <th scope='col'>Prod_Name</th>
                                                <th scope='col'>SubCate_Id</th>
                                                <th scope='col'>Price</th>
                                                <th scope='col'>Discount</th>
                                                <th scope='col'>Brand</th>
                                                <th scope='col'>Quantity</th>
                                                <th scope='col'>Reg_Num</th>
                                                <th scope='col'>Photo</th>
                                                <th scope='col'>Action</th>
                                                <th scope='col'>Images</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                showProduct.map((item) =>
                                                    <tr>
                                                        <td>{item.productId}</td>
                                                        <td>{item.product_name}</td>
                                                        <td>{item.subcategoryid}</td>
                                                        <td>{item.price} <Button style={{ color: 'black', backgroundColor: 'white' }} onClick={() => priceId(item.productId)} ><i class="bi bi-pencil"></i></Button></td>
                                                        <td>{item.discount} <Button style={{ color: 'black', backgroundColor: 'white' }} onClick={() => discount1(item.productId)}><i class="bi bi-pencil"></i></Button></td>
                                                        <td>{item.brand_name} </td>
                                                        <td>{item.quality} <Button style={{ color: 'black', backgroundColor: 'white' }} onClick={() => quantity(item.productId)}><i class="bi bi-pencil"></i></Button></td>
                                                        <td>{item.registration_number}</td>
                                                        <td>{
                                                            <img src={item.photo} alt='' style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                                        }
                                                            <Button style={{ color: 'black', backgroundColor: 'white' }} onClick={() => photo(item.productId)}><i class="bi bi-pencil"></i></Button>
                                                        </td>
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">

                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1"><Button onClick={() => addDescProductId(item.productId)} style={{ backgroundColor: 'white' }}><i class="bi bi-patch-plus-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>Add</span></Button></Dropdown.Item>
                                                                    <Dropdown.Item><Button onClick={() => handleShowDesc(item.productId)} style={{ backgroundColor: 'white' }}><i class="bi bi-eye-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>View</span></Button></Dropdown.Item>
                                                                    <Dropdown.Item><Button onClick={() => UpdateDesc(item.productId)} style={{ backgroundColor: 'white' }}><i class="bi bi-eye-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>Update</span></Button></Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                        {/* For Product Image start */}
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">

                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href=""><Button onClick={() => handleAddProductImage(item.productId)} style={{ backgroundColor: 'white' }}><i class="bi bi-patch-plus-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>Add Image</span></Button></Dropdown.Item>
                                                                    <Dropdown.Item href=''><Button onClick={() => handleViewProductImg(item.productId)} style={{ backgroundColor: 'white' }}><i class="bi bi-eye-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>View Image</span></Button></Dropdown.Item>
                                                                    <Dropdown.Item><Button style={{ backgroundColor: 'white' }}><i class="bi bi-eye-fill" style={{ marginRight: '10px', color: 'black' }}></i><span style={{ color: 'black' }}>Update Image</span></Button></Dropdown.Item>
                                                                    <Product_image
                                                                        show={modalShow}
                                                                        id={addProIma}
                                                                        onHide={() => setModalShow(false)}
                                                                    />

                                                                    <ViewProductImg
                                                                        show={modalShow1}
                                                                        id={imgProView}
                                                                        onHide={() => setModalShow1(false)}
                                                                    />
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            {/* For Product Image end*/}
                                                        </td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* update price modal start */}
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'teal' }}>
                                Price Update
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmitPrice}>
                                <Form.Group className="mb-3" controlId="formBasicproductid">
                                    <Form.Label>Product Id</Form.Label>
                                    <Form.Control type="id" placeholder="Product Id" value={priceUpdate} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNewPrice">
                                    <Form.Label>New Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter New Price"
                                        onChange={(e) => setPriceData({ ...pricedata, price: e.target.value })} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    {/* Update price modal end */}

                    {/* Update Discount modal Start */}
                    <Modal
                        size="sm"
                        show={smShow1}
                        onHide={() => setSmShow1(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'teal' }}>
                                Discount Update
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmitDiscount}>
                                <Form.Group className="mb-3" controlId="formBasicproductid">
                                    <Form.Label>Product Id</Form.Label>
                                    <Form.Control type="id" placeholder="Product Id" value={updateDiscount} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNewPrice">
                                    <Form.Label>New Discount</Form.Label>
                                    <Form.Control type="text" placeholder="Enter New Price"
                                        onChange={(e) => setDiscountData({ ...discountData, discount: e.target.value })} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                    {/* Update Discount modal end */}

                    {/* Update Quantity/Quality modal Step2 start */}
                    <Modal
                        size="sm"
                        show={smShow2}
                        onHide={() => setSmShow2(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'teal' }}>
                                Update Discount
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form onSubmit={handleSubmitQuantity}>
                                <Form.Group className="mb-3" controlId="formBasicproductid">
                                    <Form.Label>Product Id</Form.Label>
                                    <Form.Control type="id" placeholder="Product Id" value={updateQuantity} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNewPrice">
                                    <Form.Label>New Discount</Form.Label>
                                    <Form.Control type="text" placeholder="Enter New Price"
                                        onChange={(e) => setQualityData({ ...quantityData, quality: e.target.value })} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Modal.Body>
                    </Modal>

                    {/* Update Quantity/Quality modal Step2 end */}

                    {/* Update photo modal step2 start */}
                    <Modal
                        size="sm"
                        show={smShow3}
                        onHide={() => setSmShow3(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'teal' }}>
                                Update Photo
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmitPhoto}>
                                <Form.Group className="mb-3" controlId="formBasicproductid">
                                    <Form.Label>Product Id</Form.Label>
                                    <Form.Control type="id" placeholder="Product Id" value={updatePhoto} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNewPrice">
                                    <Form.Label>Upload New Photo</Form.Label>
                                    <Form.Control type="file"
                                        onChange={(e) => setPhotoData({ ...photoData, photo: e.target.files[0] })} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    {/* Update photo modal step2 end */}

                    {/* Add description step2 modal start */}
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg" style={{ color: 'teal' }}>
                                Product Description of :- {addDesc}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmitDesc}>

                                <div className='d-flex' style={{ gap: '35px', marginLeft: '30px' }}>
                                    <div>

                                        <div className='col-12'>
                                            <label htmlFor="inputId" className='form-label'>
                                                Product Id
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='inputId'
                                                placeholder='Product Id' value={addDesc} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="desc" className='form-label'>
                                                Description
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='desc'
                                                placeholder='Product Description'
                                                onChange={(e) => setDesc({ ...desc, description: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="size" className='form-label'>
                                                Product Size
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='size'
                                                placeholder='Enter Product Size'
                                                onChange={(e) => setDesc({ ...desc, size: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="weight" className='form-label'>
                                                Product Weight
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='weight'
                                                placeholder='Enter Product Weight'
                                                onChange={(e) => setDesc({ ...desc, weight: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='col-12'>
                                            <label htmlFor="ram" className='form-label'>
                                                Product RAM
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='ram'
                                                placeholder='Enter Product RAM'
                                                onChange={(e) => setDesc({ ...desc, RAM: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="screen" className='form-label'>
                                                Product Screen
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='screen'
                                                placeholder='Enter Product Screen'
                                                onChange={(e) => setDesc({ ...desc, screen: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="rom" className='form-label'>
                                                Product ROM
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='rom'
                                                placeholder='Enter Product ROM'
                                                onChange={(e) => setDesc({ ...desc, ROM: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="processor" className='form-label'>
                                                Product Processor
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='processor'
                                                placeholder='Enter Product Processor'
                                                onChange={(e) => setDesc({ ...desc, processor: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='col-12'>
                                            <label htmlFor="mfg_date" className='form-label'>
                                                Manufacturing Date
                                            </label>
                                            <input type="date"
                                                class='form-control rounded-0'
                                                id='mfg_date'
                                                placeholder='Enter Date'
                                                onChange={(e) => setDesc({ ...desc, mfg_date: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="exp_date" className='form-label'>
                                                Expire Date
                                            </label>
                                            <input type="date"
                                                class='form-control rounded-0'
                                                id='exp_date'
                                                placeholder='Enter Exp Date'
                                                onChange={(e) => setDesc({ ...desc, exp_date: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="matrial" className='form-label'>
                                                Material
                                            </label>
                                            <input type="material"
                                                class='form-control rounded-0'
                                                id='material'
                                                placeholder='Enter Material'
                                                onChange={(e) => setDesc({ ...desc, material: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="country" className='form-label'>
                                                Country Of Origin
                                            </label>
                                            <input type="country"
                                                class='form-control rounded-0'
                                                id='country'
                                                placeholder='Enter Country of origin'
                                                onChange={(e) => setDesc({ ...desc, country_of_origin: e.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary w-100' style={{ marginTop: '10px' }}>
                                        Add Product Description
                                    </button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                    {/* Add description end step2 */}

                    {/* Get/Show description step 2 Start */}
                    <Modal
                        size="lg"
                        show={lgShow1}
                        onHide={() => setLgShow1(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg" style={{ color: 'teal' }}>
                                View Product Description
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div className='d-flex justify-content-center align-item-center mt-3 shadow-lg p-3 mb-5 bg-white rounded'>
                                <div>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr style={{ color: 'teal' }}>
                                                <th scope="col">Prod_Id</th>
                                                <th scope="col">Desc</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Weight</th>
                                                <th scope="col">RAM</th>
                                                <th scope="col">Screen</th>
                                                <th scope="col">ROM</th>
                                                <th scope="col">Processor</th>
                                                <th scope="col">Mf_Date</th>
                                                <th scope="col">EXP_Date</th>
                                                <th scope="col">Material</th>
                                                <th scope="col">Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getDesc.map((item) =>
                                                    <tr>

                                                        <td>{item.productId}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.size}</td>
                                                        <td>{item.weight}</td>
                                                        <td>{item.RAM}</td>
                                                        <td>{item.screen}</td>
                                                        <td>{item.ROM}</td>
                                                        <td>{item.processor}</td>
                                                        <td>{item.mfg_date}</td>
                                                        <td>{item.exp_date}</td>
                                                        <td>{item.material}</td>
                                                        <td>{item.country_of_origin}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Get/Show description step 2 End */}

                    {/* Update Product Description step 2 Start */}
                    <Modal
                        size="lg"
                        show={lgShow2}
                        onHide={() => setLgShow2(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Update Product Description
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmitDescUpdate}>

                                <div className='d-flex' style={{ gap: '35px', marginLeft: '30px' }}>
                                    <div>

                                        <div className='col-12'>
                                            <label htmlFor="inputId" className='form-label'>
                                                Product Id
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='inputId'
                                                placeholder='Product Id' value={decsUpdate} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="desc" className='form-label'>
                                                Description
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='desc'
                                                placeholder='Product Description'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, description: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="size" className='form-label'>
                                                Product Size
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='size'
                                                placeholder='Enter Product Size'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, size: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="weight" className='form-label'>
                                                Product Weight
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='weight'
                                                placeholder='Enter Product Weight'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, weight: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='col-12'>
                                            <label htmlFor="ram" className='form-label'>
                                                Product RAM
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='ram'
                                                placeholder='Enter Product RAM'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, RAM: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="screen" className='form-label'>
                                                Product Screen
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='screen'
                                                placeholder='Enter Product Screen'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, screen: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="rom" className='form-label'>
                                                Product ROM
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='rom'
                                                placeholder='Enter Product ROM'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, ROM: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="processor" className='form-label'>
                                                Product Processor
                                            </label>
                                            <input type="text"
                                                class='form-control rounded-0'
                                                id='processor'
                                                placeholder='Enter Product Processor'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, processor: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='col-12'>
                                            <label htmlFor="mfg_date" className='form-label'>
                                                Manufacturing Date
                                            </label>
                                            <input type="date"
                                                class='form-control rounded-0'
                                                id='mfg_date'
                                                placeholder='Enter Date'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, mfg_date: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="exp_date" className='form-label'>
                                                Expire Date
                                            </label>
                                            <input type="date"
                                                class='form-control rounded-0'
                                                id='exp_date'
                                                placeholder='Enter Exp Date'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, exp_date: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="matrial" className='form-label'>
                                                Material
                                            </label>
                                            <input type="material"
                                                class='form-control rounded-0'
                                                id='material'
                                                placeholder='Enter Material'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, material: e.target.value })} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="country" className='form-label'>
                                                Country Of Origin
                                            </label>
                                            <input type="country"
                                                class='form-control rounded-0'
                                                id='country'
                                                placeholder='Enter Country of origin'
                                                onChange={(e) => setSetUpdateData({ ...updateDescData, country_of_origin: e.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary w-100' style={{ marginTop: '10px' }}>
                                        Update Product Description
                                    </button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                    {/* Update Product Description step 2 End */}
                </div>
            </Dashboard>
        </>

    )
}

export default AddRetailerProduct
