import styled from "styled-components";
import { Link } from 'react-router-dom'
import iconImage from '../assets/w.png';


export const TopNavbarContainer = styled.div`
    height: ${(props) => (props.extendNavBar ? "100vh" : "10vh")};
    width:100%;
    /* margin:0rem 1rem; */
   

    @media only screen and (max-width: 768px) {
      margin:0;
     
    }
    
    
    

`;


export const TopNavBarLinks = styled(Link)`
  font-size:3rem ;
  text-decoration: none;
  list-style: none;
  text-align: center;
  cursor: pointer;
 
  display:flex;
 
  color: var(--blue-shade1);
  &:firstchild{
        color:black;
    }
  
  @media (max-width:768px){
        display:none ;
        
    }
  
   
`;

export const SmallScreenIcon = styled.h3`
 
  @media only screen and (max-width: 600px) {
        display:block;

    }
    @media only screen and (min-width: 768px) {
      display:none;
    }
    
`;

export const Subscribe = styled(TopNavBarLinks)`
    background-color: var(--blue-shade1);
    color:white;
    border-radius:24px ;
    font-size:24px;
    padding: 0.5rem 1.5rem;
    margin-right:1rem;
    @media only screen and (min-width: 768px) {
      display:none;
    }
    @media only screen and (min-width:992px){
      display:block ;
    }

`;

export const TopNavBarInnerContainer = styled.div`
    height:10vh;
    width:100%;
    display:flex ;
    justify-content:space-between;
    align-items:center ;
    margin-top:0.5rem;
    
    @media only screen and (max-width:992px) {
      padding:3rem ;
      display:flex;
      justify-content:center ;
        align-items:center;
    }
 
   
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
    @media (min-width:768px){
        display:none ;
    }
    
   
`;

export const TopNavBarExtendedContainer = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content:space-evenly;
    align-items:center;

    @media(min-width:768px){
        display:none ;
    }
`;
export const TopNavBarExtendedLinks = styled(Link)`
    text-decoration: none;
  list-style: none;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  color: var(--deep-purple);
 

`;

export const IconImage = styled.div`
    /* width:0.001rem ;
    height:1rem; */
  & #icon-image{
  height: 10rem;
  width: 10rem;
}
`;