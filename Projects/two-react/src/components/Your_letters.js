import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ListGroup,Nav,Navbar,Container } from 'react-bootstrap'

export default class Your_letters extends Component {
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
                                <Link to="/Your_letters" style={{ textDecoration: 'none', color: 'white', paddingRight: '1rem' }}>Your Letters</Link>
                            </Nav>
                            <Nav>
                                <Link to="/Home" style={{ textDecoration: 'none', color: 'white',alignSelf:'right', paddingLeft: '39rem' }}>Sign Out</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="your_letters">
                <h2>Your letters travelled the future and are waiting for you !</h2>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
        </>
        )
    }
}
