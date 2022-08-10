import styled from "styled-components";
// import { Link as LinkS } from "react-scroll";
// import { HashLink as Link } from "react-router-hashlink";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;

  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
  @media(max-width: 700px) {
    height: 80px;
    
  }
`;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content:center ;
  /* padding-left: 5%; */

`;

export const RightContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items:center ;
  justify-content: center;


`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  padding-top:1.8rem ;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  /* margin-right: 10rem; */
  
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;

  text-decoration: none;
 
  margin-right: 2.7rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  /* padding: 50px; */
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;