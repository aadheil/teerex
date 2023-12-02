import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from '../Services/allApi';
import { addcontext } from './ContextShare'
import { Link } from 'react-router-dom';


function Products() {
    const {addthings,setaddthings}=useContext(addcontext)
    const {addwish,setaddwish}=useContext(addcontext)

    const [allproducts,setAllproducts]=useState([])
    const [cartproducts,setcartproducts]=useState([
       
    ])
    var arr=[]

    const getallproducts = async()=>{
        const result=await getProducts()
        // console.log(result);
        setAllproducts(result.data)
        console.log(allproducts);
        console.log(result.data);
    }
    useEffect(()=>{
      getallproducts()
    },[])
    const handleCart =(e,it)=>{
        
        e.preventDefault()
    // setaddthings(e)
    // setcartproducts(cartproducts.push(it))
    // arr.push(it)
    // console.log(arr)
    setaddthings(addthings.concat(it))
    // console.log(arr);
    
    
    
    }
    const handlewish =(e,it)=>{
        
        e.preventDefault()
    // setaddthings(e)
    // setcartproducts(cartproducts.push(it))
    // arr.push(it)
    // console.log(arr)
    setaddwish(addwish.concat(it))
    // console.log(arr);
    
    
    
    }
   
  return (
    <div className='mt-5 ms-5'>
        <Row>
            {
                allproducts?.map((products)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            
            <Card style={{ width: '18rem' }} className='mb-4 shadow rounded'>
                 <Card.Img variant="top" src={products.image} style={{height:'200px',width:'100%'}} />
                 <Card.Body>
                   <Card.Title>{products.title.slice(0,16)}</Card.Title>
                   <Card.Text>
                     $ {products.price}
                   </Card.Text>
                  <div className='d-flex justify-content-center'>
                     <Button variant="outline-primary me-3" onClick={e=>handleCart(e,products)}><i className="fa-solid fa-cart-shopping"></i> </Button>
                     <Button variant="outline-primary" onClick={e=>handlewish(e,products)}><i className="fa-solid fa-heart"></i></Button>
                  </div>

                 </Card.Body>
               </Card>
                       </Col>
                ))
            }
            
            </Row>
           
{/* <Link to={'/cart'}>
            <button className='btn btn-success'>Go to cart</button>
    
</Link>     */}
        
    </div>
  )
}

export default Products