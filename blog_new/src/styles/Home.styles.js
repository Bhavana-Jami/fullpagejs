import styled from "styled-components";
import Home from "../components/Home";
import { Carousel } from "react-bootstrap";
import CustomCarousel from "../components/CustomCarousel";
import TopNabBar from "../components/TopNabBar";

export const GridContainer = styled.div`
    color:var(--blue-shade1) ;
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 4fr 2fr;
    grid-template-areas:
    "topnav topnav"
    "nav nav"
    "main rightside"
    "footer footer";
    /* grid-gap:2rem ; */
    /* justify-content:center; */
    
    @media(max-width:768px){
        grid-template-columns:1fr;
        grid-template-rows:1fr 4fr 2fr 1fr;
        grid-template-areas:
        "topnav"
        "main"
        "rightside"
        "footer"
    }
    @media(min-width:768px) and (max-width: 992px){
        grid-template-columns:1fr;
        grid-template-rows:1fr 1fr 4fr 2fr 1fr;
        grid-template-areas:
        "topnav"
        "nav"
        "main"
        "rightside"
        "footer"
    }

   
`;

export const NavbarContainer1 = styled(TopNabBar)` 
    grid-area:topnav;
`;
export const NavbarContainer = styled.div`
    grid-area:nav;
    
`;
// export const LSideSection = styled.aside`
//     grid-area:leftside;
//     padding:1rem ;
// `;
export const RSideSection = styled.aside`
    grid-area:rightside;
    /* padding:1rem; */
    
    &:first-child{
        padding-top:none;
        border-bottom:1px solid blue ;
    }
`;

export const MainSection = styled.main`
    cursor: pointer;
   grid-area:main;
   /* padding:1rem ; */
    & .Carousel{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px; 
        border-radius:1rem;
    }

`;


export const Footer = styled.footer`
    grid-area:footer;
`;

export const Custom_Carousel = styled(CustomCarousel)`
    border-radius:1rem ;
    /* height: 100vh; */
`;
