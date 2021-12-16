import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card,Navbar,Nav,Container} from 'react-bootstrap'

export default class Read extends Component {
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
            <div className="read">
                <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>p1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
        )
    }
}
