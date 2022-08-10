import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import Linking from 'react';
// import reactMailto from 'react-mailto';


const ProfileCard=({projectObj , index ,deleteProject})=>{

    // var Mailto = require('react-mailto');

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete =()=>{
        deleteProject(index)

    }


    return(
        <div className = "card-wrapper mr-10">
            <div className ="card-top" style={{"background-color":colors[index%5].primaryColor}}> </div>
            <div className ="task-holder">
                <span class ="card-header" style={{"background-color":colors[index%5].secondaryColor ,  "borderradius":"10px"}}>{projectObj.Name}</span>
                <p className='mt-5'>{projectObj.Gitlink} </p>
                {/* <p className='mt-1'>{projectObj.Uname}</p> */}
                {/* <p className='mt-1' style={{color : "blue"}} onPress={() => <Link to ="/ideas" className="nav-link">
                        Submit
                    </Link>}>{projectObj.EmailId}</p> */}
                {/* <Link to ="/signin">{projectObj.EmailId}</Link> */}
                {/* <a href={`mailto:${projectObj.EmailId}`}>{projectObj.EmailId}</a> */}

                {/* <Mailto email={projectObj.EmailId} obfuscate={true}>
                    Email me!
                </Mailto> */}


                {/* <Button onPress={() => Linking.openURL('mailto:support@example.com') }
                        title="support@example.com" />
                            
                            
                    With subject and body:

                    <Button onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') }
                        title="support@example.com" /> */}
                

                {/* <div style ={{"position":"absolute","right":"40px","bottom":"20px"}}>
                    <i className ="far fa-edit d-flex ml-3" style={{"color":colors[index%5].primaryColor, "cursor":"pointer" }}></i>
                    <i className="fas fa-trash-alt" style ={{"color":colors[index%5].primaryColor, "cursor":"pointer"}} onClick={handleDelete}></i>

                </div> */}

            </div>
        </div>
    )
}
export default ProfileCard;