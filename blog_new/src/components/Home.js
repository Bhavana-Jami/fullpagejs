import React, { Component } from 'react'
import { NavbarContainer1, GridContainer, MainSection, RightSideSection, LSideSection, RSideSection, NavbarContainer, Footer, Rposts, Custom_Carousel } from '../styles/Home.styles'
import { Carousel } from 'react-bootstrap'
import timage from '../assets/s1.jpg'
import CardImg from 'react-bootstrap/esm/CardImg'
import CardComponent from './CardComponent'
import TopNabBar from './TopNabBar'
import Navbar from './Navbar'
import PopularCardComponent from './PopularCardComponent'
function Home() {
    const feature_post_details = [{ title: "post1", description: "this is the first post", image: timage },
    { title: "post1", description: "this is the first post", image: timage },
    { title: "post1", description: "this is the first post", image: timage }];

    return (
        <GridContainer>
            <NavbarContainer1>
            <TopNabBar />
            </NavbarContainer1>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            {/* <LSideSection>
                {feature_post_details.map((data) => (
                    <CardComponent p_name={data.title} p_desc={data.description} p_image={data.image} />
                ))};
            </LSideSection> */}
            <MainSection>
                <Custom_Carousel></Custom_Carousel>
            </MainSection>
            <RSideSection>
                <h2>Popular Posts</h2>
                {feature_post_details.map((data) => (
                    <PopularCardComponent p_name={data.title} p_desc={data.description} p_image={data.image} />
                ))};
            </RSideSection>
            <Footer>This is footer</Footer>
        </GridContainer >



    )
}

export default Home
