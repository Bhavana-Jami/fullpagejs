import React , {useState} from 'react';
import {auth } from '../firebase';

import {useNavigate} from 'react-router-dom';





export default function SignIn(){
    const [email,setEmail]= useState('')
    const [password,setPassword]=useState('')

    const navigate  = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log( email, password);

        try{
            const result = await auth.signInWithEmailAndPassword(email,password);
            alert(`Successfully signed in : ${result.user.email}`);
            navigate('/Ideas');

        }catch(err){
            //alert(err.message);
            alert(err.message);

        }
    }

    return (
        <>
            <form  onSubmit={(e)=>handleSubmit(e)} className="container" autoComplete="off"  style= {{marginTop:"30px",textAlign:"left"}}>
            <legend><h4 >Sign In</h4></legend>
            
           
            <div className="form-group" style={{width:"500px"}}>
                <label htmlFor="Email1">Enter Email </label>
                <input type="email" className="form-control" id="email"value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group" style={{width:"500px"}}>
                <label htmlFor="password" className="form-label">Enter Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <br/>
            <button type="submit" className="btn btn-primary" >SignIn </button>
            </form>
            
            
        </>
    
    );
}