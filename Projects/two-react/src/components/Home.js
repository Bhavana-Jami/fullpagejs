
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Navbar,Nav,Container } from 'react-bootstrap'



export default class Home extends Component {
    render() {
        return (
            <>
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
            <div className="home">
                <h1>Hey ...stranger !</h1>
                <p>Do not let your past self become a stranger to your future self ...keep him 
                    updated with the memories you carry,the pain you withhold and the important 
                    dates,milestones,achievements..!
                    So what are you waiting for...let's go write and send your first letter to the future !
                </p>
            </div>
        </>
        )
    }
}
