import React from 'react'

import CardComponent from './CardComponent'
import Navbar from './Navbar'

function BaseComponent() {
  const post_details = [{title:"post1",description:"this is the first post"},{title:"post1",description:"this is the first post"}
,{title:"post1",description:"this is the first post"},
{title:"post1",description:"this is the first post"},
{title:"post1",description:"this is the first post"},
{title:"post1",description:"this is the first post"}];
  return (
    <div id='container'>
        <div className='section1'>
        <div id='section1-1'><Navbar/></div>
        <div id='section1-2'>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </div>
       </div>
        <div className='section2'>
        {post_details.map((data) => (
             <CardComponent p_name={data.title} p_desc={data.description}/>
        ))};
       
        {/* <CardComponent/><CardComponent/> */}
        </div>
        <div id='section3'>section3</div>
        <footer>the footer</footer>
    </div>
  )
}

export default BaseComponent