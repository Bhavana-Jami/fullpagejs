import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    height: ${(props) => (props.extendNavBar ? "100vh" : "10vh")};
   
    /* background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);; */
   
    /* @media(min-width:700px){
        height:10vh ;
    }  */
    @media only screen and (max-width: 768px) {
        display:none ;
        height:0 ;
    }
    @media only screen and (min-width: 768px) {
        display:block ;
        height:10vh ;
    }
  



`;

export const NavBarLinks = styled(Link)`
    text-decoration: none;
  list-style: none;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  color:var(--blue-shade1) ;
  border: 1.5px solid ;
  border-radius: 24px;

  &:hover{
    background-color:var(--blue-shade1) ;
    transition:ease-out 0.5s;
    color:white ;
  }
 
  @media (max-width:700px){
        display:none ;
    }
`;

export const NavBarExtendedLinks = styled(Link)`
    text-decoration: none;
  list-style: none;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
 
  color:var(--blue-shade1) ;
 

`;
export const HamburgerMenu = styled.button` 
 
    width: 30rem;
    height:1rem;
    color:var(--deep-purple);
    background:none ;
    border:none ;
    cursor: pointer;
    font-size:2rem ;
    display: flex;
    justify-content:flex-end ;
    align-items:center ;
    
    @media (min-width:700px){
        display:none ;
    }
   
`;

export const NavBarInnerContainer = styled.div`
    height:10vh;    
    width:100vw;
    display: flex;
  justify-content: center;
  align-items:center ;
 
 
 
`;

export const NavBarExtendedContainer = styled.div`
    display:flex ;
   
    flex-direction:column ;
   
    align-items:center;

    @media(min-width:700px){
        display:none ;
    }
`;