import React from 'react'
import { Container, MainTitle } from '../Projects.styles'
import FeaturedProjectCard from './FeaturedProjectCard'
import p1_image from '../assets/p1.png';

export default function Projects() {
  const projects = [
    {
      project_image:{p1_image}, project_name: "Project 1", project_description: "lore lore loerm lorem lorem lorea asjkdfhsda asdkjfhdsf alksjdfhjhasdfjh",
      tech_used: "HTML|   CSS | REACTJS|  BOOTSTRAP", links: "git  demo"
    },
    {
      project_image:{p1_image}, project_name: "Project 1", project_description: "lore lore loerm lorem lorem lorea asjkdfhsda asdkjfhdsf alksjdfhjhasdfjh",
      tech_used: "HTML|   CSS | REACTJS|  BOOTSTRAP", links: ["git", "demo"]
    },
    {
      project_image:{p1_image}, project_name: "Project 1", project_description: "lore lore loerm lorem lorem lorea asjkdfhsda asdkjfhdsf alksjdfhjhasdfjh",
      tech_used: "HTML|   CSS | REACTJS|  BOOTSTRAP", links: ["git", "demo"]
    }
  ];
  return (
    <Container>
      <MainTitle>Featured Projects</MainTitle>
      {projects.map((data,key) => {
        return <FeaturedProjectCard key = {key} data = {data}/>
      })}
      
    </Container>
  )
}
