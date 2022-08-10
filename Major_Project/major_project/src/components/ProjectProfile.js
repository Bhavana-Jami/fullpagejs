import React, { Component } from 'react'
import { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCoffee, faEdit, faHome, faMailBulk, faPaperPlane, faPlusSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProfileTask from '../ProfileTask'
import ProfileCard from './ProfileCard'

function ProjectProfile() {
    

    const [modal,setModal] = useState(false);


    const[projectList,setProjectList]=useState([])

    useEffect(()=>{
        let arr = localStorage.getItem("projectList1")
        let obj = JSON.parse(arr)


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

        if(arr){
            setProjectList(obj);

        } 
    }, [])


    const deleteProject =(index)=>{
        let tempList = projectList
        tempList.splice(index,1)
        localStorage.setItem("projectList1",JSON.stringify(tempList))
        setProjectList(tempList)
        window.location.reload()

    }

    const toggle = () =>{
        setModal(!modal);
    }

    const saveProject=(projectObj)=>{
        let tempList = projectList
        tempList.push(projectObj)

        localStorage.setItem("projectList1",JSON.stringify(tempList))

        setProjectList(tempList)
        setModal(false)

    }
  return (
    <div className='profile_container'>
    <div className='left'>
        <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="230" class="rounded-circle" /> </div>
        <div>  <h1>Bhavana Jami</h1></div>
        <div><p>I am a Front End developer and I can design and develop user friendly,aesthetic<br></br> webpages.I am a Front End developer and I can design and develop user friendly,<br></br>aesthetic webpages.I am a Front End developer and I can design .</p>
       

        </div>
     
        <ul className='media-icons'>
               <a href='https://github.com/Bhavana-Jami'><li ><FontAwesomeIcon icon={faLinkedin} /></li></a> 
               <a href='https://github.com/Bhavana-Jami'><li><FontAwesomeIcon icon={faGithub} /></li></a>
               <a href='https://github.com/Bhavana-Jami'> <li><FontAwesomeIcon icon={faPaperPlane} /></li></a>
               <a href='https://github.com/Bhavana-Jami'> <li><FontAwesomeIcon icon={faDribbble} /></li></a>

            </ul>
      
        {/* <div id='icon_share'><FontAwesomeIcon icon={faShare} /></div> */}
    </div>
    <div className='right'>
        <div className='project_container'>
           
            <Link to="Myproject" style={{ textDecoration: 'none', color: 'black' }}> <h2>My Projects</h2></Link>
            {/* <div><FontAwesomeIcon icon={faLinkedin} /></div> */}
            {/* <button>Add Project</button> */}
            <Button id='add-project-button' onClick={()=> setModal(true)}>Add Project</Button>
            <div>
            <div className='ideas-container'>
                    {projectList && projectList.map((obj, index)=> <ProfileCard projectObj={obj} index={index} deleteProject={deleteProject}/>)}
            </div>
            <ProfileTask toggle ={toggle} modal ={modal} save={saveProject}/>


        </div>
            </div>
      
      
    </div>
</div>
  )
}

export default ProjectProfile
// ProjectProfile () => {
//   return (
//     <div className='profile_container'>
//                 <div className='left'>
//                     <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="230" class="rounded-circle" /> </div>
//                     <div>  <h1>Rachel Carson</h1></div>
//                     <div><p>I am a Front End developer and I can design and develop user friendly,aesthetic<br></br> webpages.I am a Front End developer and I can design and develop user friendly,<br></br>aesthetic webpages.I am a Front End developer and I can design .</p>
                   

//                     </div>
//                     <div id='icon_share'><FontAwesomeIcon icon={faShare} /></div>
//                 </div>
//                 <div className='right'>
//                     <div className='project_container'>
//                         <h3>My Projects</h3>
//                         <ul>
//                             <li>{projectObj.Description}</li>
//                             <li>Affirmation Generator</li>
//                             <li>Rate My Project</li>
//                             <li>Ghiphy max</li>
//                         </ul>


//                     </div>
//                     <div className='idea_container'>
//                         <h3>My Ideas</h3>

//                         <ul>
//                             <li>A machine learning model asses essays</li>
//                             <li>Personalized diet chart</li>
//                             <li>Idea</li>
//                         </ul>


//                     </div>
//                     <div className='media_container'>
//                         <h3>My Media</h3>

//                         <ul>
//                             <li><FontAwesomeIcon icon={faLinkedin} /></li>
//                             <li><FontAwesomeIcon icon={faGithub} /></li>
//                             <li><FontAwesomeIcon icon={faPaperPlane} /></li>
//                             <li><FontAwesomeIcon icon={faDribbble} /></li>

//                         </ul>


//                     </div>
//                 </div>
//             </div>

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


//         )
  
// }

// export default ProjectProfile
// export default class ProjectProfile extends Component {
//     render() {
//         return (
//             <div className='profile_container'>
//                 <div className='left'>
//                     <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="230" class="rounded-circle" /> </div>
//                     <div>  <h1>Rachel Carson</h1></div>
//                     <div><p>I am a Front End developer and I can design and develop user friendly,aesthetic<br></br> webpages.I am a Front End developer and I can design and develop user friendly,<br></br>aesthetic webpages.I am a Front End developer and I can design .</p>
                   

//                     </div>
//                     <div id='icon_share'><FontAwesomeIcon icon={faShare} /></div>
//                 </div>
//                 <div className='right'>
//                     <div className='project_container'>
//                         <h3>My Projects</h3>
//                         <ul>
//                             <li>{projectObj.Description}</li>
//                             <li>Affirmation Generator</li>
//                             <li>Rate My Project</li>
//                             <li>Ghiphy max</li>
//                         </ul>


//                     </div>
//                     <div className='idea_container'>
//                         <h3>My Ideas</h3>

//                         <ul>
//                             <li>A machine learning model asses essays</li>
//                             <li>Personalized diet chart</li>
//                             <li>Idea</li>
//                         </ul>


//                     </div>
//                     <div className='media_container'>
//                         <h3>My Media</h3>

//                         <ul>
//                             <li><FontAwesomeIcon icon={faLinkedin} /></li>
//                             <li><FontAwesomeIcon icon={faGithub} /></li>
//                             <li><FontAwesomeIcon icon={faPaperPlane} /></li>
//                             <li><FontAwesomeIcon icon={faDribbble} /></li>

//                         </ul>


//                     </div>
//                 </div>
//             </div>

//             // <div class="col-md-7" className='profile_wrapper' >
//             //     <div class="card p-3 py-4"className='profile_container' >
//             //         <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"/> </div>
//             //         <div class="text-center mt-3"> 
//             //             <h5 class="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
//             //             <div class="px-4 mt-1">
//             //                 <div className='projects'>
//             //                 <h5>Projects I've worked on</h5>
//             //                 <ul className='project_list'>
//             //                     <li>1</li>
//             //                     <li>2</li>
//             //                     <li>3</li>
//             //                     <li>4</li>
//             //                     <li>5</li>
//             //                 </ul>
//             //                 </div>
//             //                 <div className='projects'>
//             //                 <h5>Projects Ideas I've shared</h5>
//             //                 <ul className='project_list'>
//             //                     <li>1</li>
//             //                     <li>2</li>
//             //                     <li>3</li>
//             //                     <li>4</li>
//             //                     <li>5</li>
//             //                 </ul>
//             //                 </div>

//             //             </div>

//             //             <ul class="social-list">
//             //                 <li><FontAwesomeIcon icon={faLinkedin} /></li>
//             //                 <li><FontAwesomeIcon icon={faGithub} /></li>
//             //                 <li><FontAwesomeIcon icon={faPaperPlane} /></li>
//             //                 <li><FontAwesomeIcon icon={faShare} /></li>

//             //             </ul>


//             //         </div>
//             //     </div>
//             // </div>


//         )
//     }
// }

