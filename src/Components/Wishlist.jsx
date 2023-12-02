import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addcontext } from './ContextShare';
import Navforhome from './Navforhome';

function Wishlist() {
    const {addwish,setaddwish}=useContext(addcontext)
    const {addthings,setaddthings}=useContext(addcontext)

    const handleCart =(e,it)=>{
        
        e.preventDefault()
    // setaddthings(e)
    // setcartproducts(cartproducts.push(it))
    // arr.push(it)
    // console.log(arr)
    setaddthings(addthings.concat(it))
    // console.log(arr);
    
    
    
    }

  return (
    <>
     <Navforhome/>
    
    {addwish.length>0?<div className='mt-5 ms-5'>
        
    <Row>
        {
            addwish?addwish?.map((products)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        
        <Card style={{ width: '18rem' }} className='mb-4 shadow rounded'>
             <Card.Img variant="top" src={products.image} style={{height:'200px',width:'100%'}} />
             <Card.Body>
               <Card.Title>{products.title.slice(0,16)}</Card.Title>
               <Card.Text>
                 $ {products.price}
               </Card.Text>
              <div className='d-flex justify-content-center'>
                 {/* <Button variant="outline-primary me-3"><i className="fa-solid fa-cart-shopping"></i> </Button> */}
                 <Button variant="outline-primary me-3" onClick={e=>handleCart(e,products)}><i className="fa-solid fa-cart-shopping"></i> </Button>
              </div>

             </Card.Body>
           </Card>
                   </Col>
            )):"Your Cart Is Empty"
        }
        
        </Row>
    
</div>: <h2 className='text-danger text-center mt-5'>Wishlist Empty</h2>}
</>
  
  )
}

export default Wishlist