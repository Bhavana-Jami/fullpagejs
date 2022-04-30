import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

export default class Rating extends Component {

    render() {
        this.state = [
            { checkbox_title: "HTML" },
            { checkbox_title: "CSS" },
            { checkbox_title: "Java Script" },
            { checkbox_title: "BootStrap" },
            { checkbox_title: "ReactJS" },
            { checkbox_title: "SASS" }
        ]
        return (
            <div className='rating'>
              
              

                {/* <label class="container">BCA
                    <input type="checkbox"></input>
                    <span class="mark"></span>
                </label>
                <label class="container">12th
                    <input type="checkbox"></input>
                    <span class="mark"></span>
                </label>
                <label class="container">10th
                    <input type="checkbox" checked="check"></input>
                    <span class="mark"></span>
                </label> */}
                <h1>Let's rate your project !</h1>
                <h4>Enter the technologies that you have used in your project</h4>
                <div className='checkbox_container'>
                <div className='checkbox_wrapper' >
                {this.state.map(check_details => {
                   return(
                
                    <label><input type="checkbox"></input>{check_details.checkbox_title}</label>
             

                )
    
                
               })}
               </div>
               <h3>Let's check</h3>
               <br></br><br></br>
               <h2>This is Beginner level project</h2>
               </div>
               <br></br><br></br>
                <Link to="/KnowledgeSharing"><FontAwesomeIcon icon={faArrowAltCircleRight} id='arrow_icon'></FontAwesomeIcon></Link>

            </div>
        )
    }
}
