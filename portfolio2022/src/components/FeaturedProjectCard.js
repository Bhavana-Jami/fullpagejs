import React from 'react'
import { CardContainer, CardWrapper, CardLeft, CardRight, Image,Icons,MainTitle } from '../styles/FeaturedProjectCard.styles'
import p1_image from '../assets/p1.png';

export default function FeaturedProjectCard({data}) {

  return (
    <CardContainer>
      
      <CardWrapper>
        <CardLeft>
          <Image src={p1_image}></Image>
        </CardLeft>
        <CardRight>
          <div>{data.tech_used}</div>
          <h1>{data.project_name}</h1>
          <p>{data.project_description}</p>
          <Icons>
            <span>View Project</span>
            <span>git</span>
          </Icons>
        </CardRight>
      </CardWrapper>
    </CardContainer>
  )
}
