import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Navbar,Nav,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Write = () => {
    const [selectedDate,setSelectedDate]=useState(null)
    return (
        <div>
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
            <Form >
                <Form.Group className="mb-3 main_page" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h2>Start writing your letter now !</h2></Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder="Start now !" />
                    <Form.Label column sm="2"><h5>Enter the Mail</h5></Form.Label>
                    <Form.Control type="email" placeholder="name@gmail.com" />
                    <Form.Label column sm="2"><h5>Pick the date</h5></Form.Label>
                </Form.Group>
            </Form>
            <div className="out_of_zone">
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} placeholderText="Choose date" />
                <Button className="Primary btn">Send to the future</Button>
            </div>
            
        </div>
    )
}

export default Write;

