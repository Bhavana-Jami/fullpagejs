// import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';


import { Nav, Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbari = () =>{
    return(
         <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" to="/Home"><h3>To The Future</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                            <Nav>
                                <Link to="/Write" style={{ textDecoration: 'none', color: 'white' , paddingRight: '1rem',paddingLeft:'2rem' }}>Write</Link>
                                <Link to="/Read" style={{ textDecoration: 'none', color: 'white' , paddingRight: '1rem'}}>Read</Link>
                                {/* <Link to="/Your_letters" style={{ textDecoration: 'none', color: 'white', paddingRight: '1rem' }}>Your Letters</Link> */}
                            </Nav>
                            <Nav>
                                <Link to="/Signin" style={{ textDecoration: 'none', color: 'white',alignSelf:'right', paddingLeft: '39rem' }}>Sign In</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Navbari;

