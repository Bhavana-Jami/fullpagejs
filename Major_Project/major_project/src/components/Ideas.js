import React , {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Task from '../modals/Task';
import Card from './Card';

//const Ideas = () => {
    export default function Ideas(){


    const [modal,setModal] = useState(false);


    const[projectList,setProjectList]=useState([])

    useEffect(()=>{
        let arr = localStorage.getItem("projectList")
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
        localStorage.setItem("projectList",JSON.stringify(tempList))
        setProjectList(tempList)
        window.location.reload()

    }

    const toggle = () =>{
        setModal(!modal);
    }

    const saveProject=(projectObj)=>{
        let tempList = projectList
        tempList.push(projectObj)

        localStorage.setItem("projectList",JSON.stringify(tempList))

        setProjectList(tempList)
        setModal(false)

    }
    

    return(
        <div className='ideas-wrapper'>
            <div className='header text-center'>
                <h1>Share your Ideas !!!</h1>
                <Button variant="primary" size="lg" onClick={()=> setModal(true)}>
                    Share here!!
                </Button>
            
            </div>
           

            <div className='ideas-container'>
                    {projectList && projectList.map((obj, index)=> <Card projectObj={obj} index={index} deleteProject={deleteProject}/>)}
            </div>
            <Task toggle ={toggle} modal ={modal} save={saveProject}/>
        </div>
    )
}

//export default Ideas;