import React  , {useState} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default function ProfileTask({user, modal, toggle , save }){

    const [projectTitle, setProjectTitle]=useState('');
    const [gitlink, setGitlink]=useState('');
    // const [uname, setUname] = useState('');
    // const [emailId, setEmailId] = useState(''); 

    const handleChange = (e)=>{
        // const name = e.target.name
        // const value = e.target.value

        const {name,value}=e.target

        if(name ==="projectTitle"){
            setProjectTitle(value)
        }
        // else if(name === "emailId")
        // {
        //     setEmailId(value)
        // }
        // else if(name === "uname")
        // {
        //     setUname(value);
        // }
        else{
            setGitlink(value)
        }
    }

    // user={user};
    

    const handleSave= async (e) =>{
        
        e.preventDefault();
        
        let projectObj = {}
        projectObj["Name"] = projectTitle
        projectObj["Gitlink"] = gitlink
        // projectObj["Uname"]=uname
        // projectObj["EmailId"]= emailId
        save(projectObj)

        
    }


    return(
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>My Projects</ModalHeader>
          <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Project Title:</label>
                    <input type="text" className='form-control' value={projectTitle} onChange={handleChange} name="projectTitle"/>

                </div>
                <br></br>
                <div className='form-group'>
                    <label>GitHub Link</label>
                    <textarea rows="2" className='form-control' value={gitlink} onChange={handleChange} name="gitlink"></textarea>
                </div>
                {/* <br></br>
                <div className='form-group'>
                    <label>Enter Name:</label>
                    <input type="text" className='form-control' value={uname} onChange={handleChange} name="uname"/>
                </div>
                <br></br>
                <div className='form-group'>
                    <label>Enter Chat Email Id:</label>
                    <input type="text" className='form-control' value={emailId} onChange={handleChange} name="emailId"/>
                </div> */}

            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>Enter</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
};