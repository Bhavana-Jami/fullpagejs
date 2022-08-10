import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";

import FeaturedCard from "./components/FeaturedProjectCard";
import GlobalStyle from "./styles/GlobalStyles";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import HireMe from "./components/HireMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Wrapper from "./components/Wrapper";
import background_video from './assets/videoplayback.mp4'


const App = () => {
 
  return (
    <div>
      
      <GlobalStyle />
     {/* <Container>
      <Home/>
      <Skills/>
      <Projects/>
      <Blog/>
     </Container> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/HireMe" element={<HireMe/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route  path="/Wrapper" element={<Wrapper/>}></Route>
        </Routes>
      </Router>


    </div>
  );
};
export default App;

// const Container = styled.div`
//   scroll-snap-type:y mandatory;
//   height:100vh;
//   overflow-y:scroll;
// `;