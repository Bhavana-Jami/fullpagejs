import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root{
--golden-color: #ffda93;
--white-color: #fff;
--white-smoke-color: #f2f2f2;
--crimson-color: #e5003d;
--background-color: #000;
--alice-blue-color: #ddebfa;
--purple-navy-color: #554f71;
--medium-blue-color: #3719ca;
--space-cadet-color: #32344d;
--dark-salmon-color: #e7a28f;
--baby-powder-color: #fbfefc;
--roman-silver-color: #80808e;
--lavender-gray-color: #cdcbd3;
--lavender-blue-color: #a6a6c2;
--deep-shampagne-color: #f9d6ac;
--perano-color: #aab9ee;
--xiketic-color: #02021e;
--martinique-color: #32344c;
--dark-gray-color: #aeaeae;
--darker-gray-color: #6d6978;
--storm-grey-color: #797b93;
--gun-powder-color: #504f60;
--whisper-color: #e5e5e5;
--xiketic-rgb-color: 2 2 30;
--text-gradient: linear-gradient(97.54deg,var(--dark-salmon-color) 3.52%,var(--deep-shampagne-color) 41.89%,var(--baby-powder-color) 96.77%);
--text-gradient-light: linear-gradient(285.44deg,var(--white-smoke-color) 4%,var(--perano-color) 101.17%);
--slider-gradient: linear-gradient(126.47deg,rgba(132,164,255,.2) 6.69%,rgba(2,2,30,0) 85.43%);
--popup-gradient: linear-gradient(253.36deg,#0f0752 4.15%,#02021e 102.26%);
--section-gradient: linear-gradient(180deg,rgba(2,2,30,0) 57.29%,rgba(55,25,202,.4));
}
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box ;
    background-color: var(--xiketic-color);
   
    color:var(--white-color);
    font-family: 'Noto Sans', sans-serif;
  
    scroll-behavior:smooth ;
 
  }
  body::-webkit-scrollbar {
    width: 0.89px;
    height:1px;
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--roman-silver-color);
    outline: 1px solid slategrey;
  }
`;
 
export default GlobalStyle;