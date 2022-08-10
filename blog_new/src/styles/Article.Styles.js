import styled from "styled-components";
import { NavbarContainer1 } from "../styles/Home.styles";
import frame1 from '../assets/Frame 1.png'
import TopNabBar from "../components/TopNabBar";
import 'animate.css';


export const Title = styled.div`

height:20rem;
    color:black;
    display:flex;
    justify-content:center ;
    align-items:center;

  
  background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;
export const Content = styled.div`
    padding:2rem 18rem ;
    display:flex;
    justify-content:center;
    align-items:center ;
`;
export const ArticleGridContainer = styled.div`
    color:var(--blue-shade1) ;
    display: grid;
    /* grid-template-columns:1fr; */
    grid-auto-rows: max-content;
    /* grid-template-rows: repeat(auto-fit, minmax(10vh, 5fr)); */
  

   
`;

export const ArticleNavbar = styled(TopNabBar)`
  
  

`;
export const MainArticle = styled.div`
  
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* align-items:center; */
   
`;

export const RelatedArticles = styled.div`
  
 
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
    grid-auto-rows: max-content;
    grid-gap: 0.9rem;
    justify-content:center ;
    align-items:center ;
    cursor: pointer;
    padding:4rem
   
    
    
`;

export const Footer = styled.div`
    
 
    background-color:pink;
    display:flex;
    justify-content:center;
    align-items:center ;
`;

export const RelatedArticleCard = styled.div`
background-image: linear-gradient(to top, #30cfd0 10%, #330867 130%);
    color:black;
    /* height:30rem; */
    text-align:left;
    border-radius:12px ;
    display:flex;
    flex-direction:column;
    box-shadow: #30cfd0 0px 8px 24px;
    /* justify-content:center; */
    /* align-items:center; */
    transition: transform 0.9s;
   padding:2rem;
    & h1{
        font-size: 5rem;
        font-weight:1000;
    }
    & p{
        font-size:1.8rem;
        font-weight:500 ;
    }

    &:hover{
        transform: translateY(-10px);
    }
    animation:slideInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* referring directly to the animation's @keyframe declaration */
    
`;
export const LikeShareContainer = styled.div`

    display:flex ;
    width:100% ;
    justify-content:space-around;
    float:left;
    /* margin:2.3rem 0 0 0; */
    & div{
        font-size:1.6rem;
        font-weight:500 ;
    }
    

`;
