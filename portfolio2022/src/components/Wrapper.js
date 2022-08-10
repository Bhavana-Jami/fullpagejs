import React from 'react'
import { Container, Hero } from '../styles/Wrapper.styles';
import HireMe from './HireMe';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';

export default function Wrapper() {
     return (
       <Container>
       
        <Home/>
        <Skills/>
        <Projects/>
        <HireMe/>
        <HireMe/>
       </Container>
      );
}
