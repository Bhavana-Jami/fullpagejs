import React from 'react';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/Community';
import ChatFeed from './components/ChatFeed';

const Apppp = () =>{
   
        if(!localStorage.getItem('username')) return <LoginForm/>
    
    return(
        <ChatEngine
            height="100vh"
            projectID="770e9678-fdf3-436d-b5e2-60f50fd7d139"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
        // <>
        // <h1>Hai</h1>
        // <h2>HELLLLLOOO</h2>
        // <h3>heyyyy</h3>
        // <br></br></>
        
        
    );
}
export default Apppp;