import React, { useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.styles";
// import LogoImg from "../assets/logo.png";

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <NavbarLink to="/">JB</NavbarLink>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink  to="/Skills">Skills</NavbarLink>
            <NavbarLink to="/Projects">Projects</NavbarLink>
            <NavbarLink to="/Blog">Blog</NavbarLink>
            <NavbarLink to="/HireMe">Hire Me</NavbarLink>
            <NavbarLink to="/Resume">Resume</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default NavBar;