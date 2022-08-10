import React, { Component } from 'react'
import Navbar from './Navbar'
import CardComponent from './CardComponent'

export default class Spiritual extends Component {
    render() {
        return (
            <div id='container'>
            <div className='section1'>
            {/* <div id='section1-1'><Navbar style="background:black;color:#FFFFFF;"/></div> */}
            <div id='section1-2'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </div>
           </div>
            <div className='section2'>
           
            <CardComponent/>
            <CardComponent/><CardComponent/>
            </div>
            <div id='section3'>section3</div>
            <footer>the footer</footer>
        </div>
        )
    }
}
