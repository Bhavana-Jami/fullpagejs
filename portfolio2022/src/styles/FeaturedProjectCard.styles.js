import { isContentEditable } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export const CardContainer = styled.div`
    overflow-y:hidden ;
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
   
`;

export const Image = styled.img`
    height:70%;
    width:70%;

    @media(max-width:1111px){
        height:100%;
        width:100%;
        position:relative;
        
    }
   
`
export const CardWrapper = styled.div`
    height:80vh ;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    
 

`
export const CardLeft  = styled.div`
    height:36rem ;
    width:80rem;
    /* height:100%;
    width:100%; */
    display:flex;
    align-items:center;
    justify-content:center ;
    background:var(--medium-blue-color);
   
`
export const CardRight = styled.div`
    display:flex;
    flex-direction:column ;
    align-items:left;
    justify-content:center ;
    text-align:left ;
    margin-left:-46px;
    
    @media(max-width:1111px){
        height:36rem ;
    width:53.75rem;
        /* height:100%;
        width:100%; */
        position:absolute;
        margin:0;
        opacity:0.87;
        background: rgb(41,10,193);
        background: linear-gradient(149deg, rgba(41,10,193,1) 41%, rgba(2,2,30,1) 79%);
        align-items:center;
    }
   


    & p{
        text-align:left ;
        overflow-wrap: break-word;
        font-size:1.7rem;
        
        word-wrap: break-word;

        @media(max-width:1111px){
            z-index:10;
            font-weight:600 ;
        }
    }

`
export const Icons = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-right: 20rem;
    cursor: pointer;
`
