import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import { Link } from 'react-router-dom';

function Navforhome() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-3">
    <Container fluid>
      {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="text-center my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <Link to={'/'}>
            <button className='btn btn-outline-success ms-5 '>Home</button>
    
       </Link>  
          <Link to={'/cart'}>
            <button className='btn btn-outline-success ms-5'>Cart</button>
    
       </Link>    
          
       <Link to={'/wishlist'}>
            <button className='btn btn-outline-success ms-5'>Wishlist</button>
    
       </Link>  
        </Nav>
        <Form className="d-flex justify-content-center text-center ms-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navforhome