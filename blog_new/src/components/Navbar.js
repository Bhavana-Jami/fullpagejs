// import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
// import { Nav,Container,NavDropdown } from 'react-bootstrap'
import { HamburgerMenu, NavbarContainer, NavBarExtendedContainer, NavBarInnerContainer, NavBarLinks,NavBarExtendedLinks, UpNavBar, UpNavBarExtended } from '../styles/Navbar.styles'

function Navbar() {
        const [extendNavBar,setextendNavBar] = useState(false);
        // const [colorr, changeColorr] = useState("");
        return (
            <NavbarContainer extendNavBar = {extendNavBar}>
                <NavBarInnerContainer color='pink'>
                    <NavBarLinks to="/"><FontAwesomeIcon icon={faHome} /></NavBarLinks>
                    <NavBarLinks to="/Spiritual">Spiritual</NavBarLinks>
                    <NavBarLinks to="/Travel">Travel</NavBarLinks>
                    <NavBarLinks to="/Love">Love</NavBarLinks>
                    <NavBarLinks to="/Tech">Tech</NavBarLinks>
                    <NavBarLinks to="/Tech">VibeCheck</NavBarLinks>
                    <HamburgerMenu onClick={
                        () => {
                            setextendNavBar((curr) => !curr);
                        }}
                        > 
                        {extendNavBar ? <>&#10005;</> : <> &#8801; </>}
                       
                        </HamburgerMenu>

                </NavBarInnerContainer>
               
              
                {extendNavBar &&
               ( <NavBarExtendedContainer>
                <NavBarExtendedLinks to="/"><FontAwesomeIcon icon={faHome} /></NavBarExtendedLinks>
                    <NavBarExtendedLinks to="/Spiritual">Spiritual</NavBarExtendedLinks>
                    <NavBarExtendedLinks to="/Travel">Travel</NavBarExtendedLinks>
                    <NavBarExtendedLinks to="/Love">Love</NavBarExtendedLinks>
                    <NavBarExtendedLinks to="/Tech">Tech</NavBarExtendedLinks>
                    <NavBarExtendedLinks to="/Tech">VibeCheck</NavBarExtendedLinks>
                </NavBarExtendedContainer>)} 
            </NavbarContainer>

          
        )
}

export default Navbar