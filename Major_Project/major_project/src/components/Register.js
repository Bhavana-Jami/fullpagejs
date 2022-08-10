import React , {useState} from 'react';
import {auth } from '../firebase';




import {  useNavigate} from 'react-router-dom';

// import "materialize-css/dist/css/materialize.min.css";

// import M from 'materialize-css';
// import Materialize from 'materialize-css';
// import { ToastContainer, toast } from 'react-toastify';




export default function Register(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    
    

    const handleSubmit = async(e) =>{
         e.preventDefault()
         console.log(username,email,password);
        try{
            const result = await auth.createUserWithEmailAndPassword(username,email,password);
            //Materialize.toast('i am toast',3000);
            alert(`${result.user.email}`);
           
            navigate('/SignIn');

        }catch(err){
            //alert('i am toast',3000);
            alert(err.message);

        }
        
    }


    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}   className="container" autoComplete="off" 
             style= {{marginTop:"30px",textAlign:"left"}}>
            <legend><h4 >Sign Up</h4></legend>
            <div className="form-group" style={{width:"500px"}}>
                <label htmlFor="name">Enter Name </label>
                <input type="text" class="form-control" id="name" 
                value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
           
            <div className="form-group" style={{width:"500px"}}>
                <label htmlFor="Email1">Enter Email </label>
                <input type="email" class="form-control" id="email" 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group" style={{width:"500px"}}>
                <label htmlFor="password" class="form-label">Enter Password</label>
                <input type="password" class="form-control" id="password" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary" >SignUp </button>
            </form>
            
        </>
    
    );
}