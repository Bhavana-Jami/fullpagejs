import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faMailBulk, faPaperPlane, faShare } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default class ProjectProfile extends Component {
    render() {
        return (
            <div className='profile_container'>
                <div className='left'>
                    <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="160" class="rounded-circle" /> </div>
                    <div>  <h4>Rachel Carson</h4></div>
                    <div><p>I am a Front End developer and I can design and develop user friendly,aesthetic<br></br> webpages.I am a Front End developer and I can design and develop user friendly,<br></br>aesthetic webpages.I am a Front End developer and I can design .</p>
                        <br></br> <span id='icon_share'><FontAwesomeIcon icon={faShare} /></span>

                    </div>
                </div>
                <div className='right'>
                    <div className='project_container'>
                        <h3>My Projects</h3>
                        <ul>
                            <li>To The Future</li>
                            <li>Affirmation Generator</li>
                            <li>Rate My Project</li>
                            <li>Ghiphy max</li>
                        </ul>


                    </div>
                    <div className='idea_container'>
                        <h3>My Ideas</h3>

                        <ul>
                            <li>A machine learning model asses essays</li>
                            <li>Personalized diet chart</li>
                            <li>Idea</li>
                        </ul>


                    </div>
                    <div className='media_container'>
                        <h3>My Media</h3>

                        <ul>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faGithub} /></li>
                            <li><FontAwesomeIcon icon={faPaperPlane} /></li>
                            <li><FontAwesomeIcon icon={faDribbble} /></li>

                        </ul>


                    </div>
                </div>
            </div>

            // <div class="col-md-7" className='profile_wrapper' >
            //     <div class="card p-3 py-4"className='profile_container' >
            //         <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"/> </div>
            //         <div class="text-center mt-3"> 
            //             <h5 class="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
            //             <div class="px-4 mt-1">
            //                 <div className='projects'>
            //                 <h5>Projects I've worked on</h5>
            //                 <ul className='project_list'>
            //                     <li>1</li>
            //                     <li>2</li>
            //                     <li>3</li>
            //                     <li>4</li>
            //                     <li>5</li>
            //                 </ul>
            //                 </div>
            //                 <div className='projects'>
            //                 <h5>Projects Ideas I've shared</h5>
            //                 <ul className='project_list'>
            //                     <li>1</li>
            //                     <li>2</li>
            //                     <li>3</li>
            //                     <li>4</li>
            //                     <li>5</li>
            //                 </ul>
            //                 </div>

            //             </div>

            //             <ul class="social-list">
            //                 <li><FontAwesomeIcon icon={faLinkedin} /></li>
            //                 <li><FontAwesomeIcon icon={faGithub} /></li>
            //                 <li><FontAwesomeIcon icon={faPaperPlane} /></li>
            //                 <li><FontAwesomeIcon icon={faShare} /></li>

            //             </ul>


            //         </div>
            //     </div>
            // </div>


        )
    }
}

