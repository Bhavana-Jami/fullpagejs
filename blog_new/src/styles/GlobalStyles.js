import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --blue-shade1:#0054b4;

    --fw-thin:100;     
    --fw-extra-light:200;
    --fw-light:300;
    --fw-regular:400;
    --fw-medium:500;
    --fw-semi-bold:600;
    --fw-bold:700;
    --fw-extra-Bold:800;
    --fw-black:900;

    --fs-xl:5rem;
    --fs-600:2rem;
    --fs-400:1rem;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;

  }
  html{
    width:100%;
  }
  ::-webkit-scrollbar { display: none; }
`;

export default GlobalStyle;