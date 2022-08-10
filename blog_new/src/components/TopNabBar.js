import React from 'react'
import { IconSpinContainer, Subscribe, Icon,TopNavbarContainer, TopNavBarExtendedLinks, TopNavBarLinks, HamburgerMenu, TopNavBarInnerContainer, TopNavBarExtendedContainer, IconShape, IconContainer, IconBox, SmallScreenIcon, IconImage } from '../styles/TopNabBar.styles'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import iconImage from '../assets/w.png';
import timage from '../assets/s1.jpg'


function TopNabBar() {
  const [extendNavBar, setextendNavBar] = useState(false);
  return (
    <TopNavbarContainer extendNavBar={extendNavBar}>
      <TopNavBarInnerContainer>
        {/* <SmallScreenIcon><img src={iconImage} id='icon-image'/></SmallScreenIcon>
        */}
       
       <IconImage><img src={iconImage} id='icon-image'/></IconImage>
       
        <TopNavBarLinks to="/">Blue Wonk</TopNavBarLinks>
        <Subscribe to="/Travel">Subscribe</Subscribe>
        <HamburgerMenu onClick={
          () => {
            setextendNavBar((curr) => !curr);
          }}
        >
          {extendNavBar ? <>&#10005;</> : <> &#8801; </>}

        </HamburgerMenu>

      </TopNavBarInnerContainer>
      {extendNavBar &&
        (<TopNavBarExtendedContainer>
          <TopNavBarExtendedLinks to="/"><FontAwesomeIcon icon={faHome} /></TopNavBarExtendedLinks>
          <TopNavBarExtendedLinks to="/Spiritual">Spiritual</TopNavBarExtendedLinks>
          <TopNavBarExtendedLinks to="/Travel">Travel</TopNavBarExtendedLinks>
          <TopNavBarExtendedLinks to="/Love">Love</TopNavBarExtendedLinks>
          <TopNavBarExtendedLinks to="/Tech">Tech</TopNavBarExtendedLinks>
          <TopNavBarExtendedLinks to="/Tech">VibeCheck</TopNavBarExtendedLinks>
        </TopNavBarExtendedContainer>)}
    </TopNavbarContainer>
  )
}

export default TopNabBar