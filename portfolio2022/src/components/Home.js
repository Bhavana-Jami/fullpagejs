import React from 'react'
import { Container, Hero } from '../styles/Home.styles'
import NavBar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'

export default function Home() {
  return (
    <Container>
        <NavBar/>
        <Hero>
            <span>Hola,</span>
            <span>Bhavana here !</span>
            <span>I like to <span>animated likings</span></span>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final coIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co</p>
        </Hero>
        
    </Container>
    
  )
}
