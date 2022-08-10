import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import Linking from 'react';
// import reactMailto from 'react-mailto';


const Card =({projectObj , index ,deleteProject})=>{

    // var Mailto = require('react-mailto');

    const colors = [
        {
            primaryColor : "#00d4ff",
            secondaryColor : "#16bced"
        },
        {
            primaryColor : "#5774b8",
            secondaryColor : "#6367ae"
        },
        {
            primaryColor : "#7554a0",
            secondaryColor : "7554a0"
        },
        {
            primaryColor : "#4687c6",
            secondaryColor : "#5774b8"
        },
        {
            primaryColor : "#00d4ff",
            secondaryColor : "#4687c6"
        }
    ]

    const handleDelete =()=>{
        deleteProject(index)

    }


    return(
        <div className = "card-wrapper mr-5">
            <div className ="card-top" style={{"background-color":colors[index%5].primaryColor}}> </div>
            <div className ="task-holder">
                <h3 class ="card-header">{projectObj.Name}</h3>
                <p className='mt-2'>{projectObj.Description} </p>
                <p className='mt-1'>{projectObj.Uname}</p>
                {/* <p className='mt-1' style={{color : "blue"}} onPress={() => <Link to ="/ideas" className="nav-link">
                        Submit
                    </Link>}>{projectObj.EmailId}</p> */}
                {/* <Link to ="/signin">{projectObj.EmailId}</Link> */}
                <a style={{"color":colors[index%5].primaryColor}} href={`mailto:${projectObj.EmailId}`}>{projectObj.EmailId}</a>

                {/* <Mailto email={projectObj.EmailId} obfuscate={true}>
                    Email me!
                </Mailto> */}


                {/* <Button onPress={() => Linking.openURL('mailto:support@example.com') }
                        title="support@example.com" />
                            
                            
                    With subject and body:

                    <Button onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') }
                        title="support@example.com" /> */}
                

                <div style ={{"position":"absolute","right":"40px","bottom":"20px"}}>
                    <i className ="far fa-edit d-flex ml-3" style={{"color":colors[index%5].primaryColor, "cursor":"pointer" }}></i>
                    <i className="fas fa-trash-alt" style ={{"color":colors[index%5].primaryColor, "cursor":"pointer"}} onClick={handleDelete}></i>

                </div>

            </div>
        </div>
    )
}
export default Card;