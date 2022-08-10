import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown, Nav, Container, Navbar } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { HashLink as HLink } from "react-router-hash-link";

export default class Navbarr extends Component {
  render() {
    return (
      <div className='wrapper'>
        {/* <div className='titles'>
                    <div id="quote">LET US HELP YOU</div>
                    <div id='sub_quote'>in choosing what you love !</div>
                </div>
                <ul className='links_container'>
                    <div>
                        <Link to="Quiz" style={{ textDecoration: 'none', color: '#973131' }}><li className='btn-one'>Quiz</li></Link>
                        <Link to="Guidance" style={{ textDecoration: 'none', color: '#973131' }}> <li className='btn-one'>Guidance</li></Link>
                        <Link to="Rating" style={{ textDecoration: 'none', color: '#973131' }}>  <li className='btn-one'>Rating</li></Link></div>
                    <div><Link to="KnowledgeSharing" style={{ textDecoration: 'none', color: '#973131' }}> <li className='btn-one'>Knowledge Sharing</li></Link>
                        <Link to="ProjectProfile" style={{ textDecoration: 'none', color: '#973131' }}><li className='btn-one'>Project Profile</li></Link></div>




                </ul>  */}
        <div className='navbar-container' id='hide-navbar'>
          <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container id='navbar'>
              <Navbar.Brand id='guide-u'>Guide <span>U.</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id="nav-right">
                  <Nav.Link > <Link to="Home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></Nav.Link>
                  <NavDropdown title="Community" id="basic-nav-dropdown" style={{ textDecoration: 'none', color: 'black' }}>
                    <NavDropdown.Item><Link to="Ideas" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }}>Idea Sharing</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="Apppp" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }}>Meet People</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link > <Link to="ProjectProfile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></Nav.Link>
                 
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* <div className='main'>
                <div className='main-left'>
                  <h1>Wanna know which domain <span>U</span> are interested in ?</h1>

                 <Link to="Quiz" style={{ textDecoration: 'none', color: 'black' }}><div className='bounce'>Take the Quiz</div>
                </Link> 
                </div>
                <div className='main-right'><img id="choice-image" src={svg1} height="500" width="600" alt="not working"/></div>
        </div>
               */}



      </div>
    )
  }
}

