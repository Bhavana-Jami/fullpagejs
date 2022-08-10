import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import Linking from 'react';
import { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCoffee, faEdit, faHome, faMailBulk, faPaperPlane, faPlusSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 import ProfileCard from './ProfileCard';
 import ProfileTask from '../ProfileTask';
 import logo from '../assets/N160729.jpg';
function Myprojects() {
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
        <div className="text-center"> <img src={logo} width="230" class="rounded-circle" /> </div>
        <div>  <h1>Rachel Carson</h1></div>
        <div><p>I am a Front End developer and I can design and develop user friendly,aesthetic<br></br> webpages.I am a Front End developer and I can design and develop user friendly,<br></br>aesthetic webpages.I am a Front End developer and I can design .</p>
       

        </div>
     
        <ul className='media-icons'>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faPaperPlane} /></li>
                <li><FontAwesomeIcon icon={faDribbble} /></li>

            </ul>
      
        {/* <div id='icon_share'><FontAwesomeIcon icon={faShare} /></div> */}
    </div>
    <div className='right'>
        <div className='project_container'>
           
            <Link to="Myproject" style={{ textDecoration: 'none', color: 'black' }}> <h2>My Projects</h2></Link>
            {/* <div><FontAwesomeIcon icon={faLinkedin} /></div> */}
            {/* <button>Add Project</button> */}
            <Button id='add-project-button' onClick={()=> setModal(true)}>Add Project</Button>
            <div className='ideas-container'>
                    {projectList && projectList.map((obj, index)=> <ProfileCard projectObj={obj} index={index} deleteProject={deleteProject}/>)}
            </div>
            <ProfileTask toggle ={toggle} modal ={modal} save={saveProject}/>


        </div>
        <div className='idea_container'>
            <h2>My Ideas</h2>
            
        </div>
      </div>
    </div>
  )
}

export default Myprojects