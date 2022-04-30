import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import Posts from './Posts';




export default class KnowledgeSharing extends Component {
    render() {
        this.state = [
            {card_title:"To The Future",card_content:"It is a an application where we can store or record our memories to reminisce them in the future !"},
            {card_title:"Affirmation Generator",card_content:"The affirmation generator is a website that gives you random affirmations to brighten your day up"},
            {card_title:"A Duplicate GIPHY",card_content:"It will help you check how well you’ve become in the aforementioned is to develop a replica of GIPHY, the popular online source to conveniently find GIFs scattered across all over the web."},
            {card_title:"Cheer Up",card_content:"The affirmation generator is a website that gives you random affirmations to brighten your day up"},
            {card_title:"Mail Scheduling",card_content:"It is a an application where we can store or record our memories to reminisce them in the future !"}
        ]
        return (
            <div>
            <div className='card_container'>
                {this.state.map(post_details => {
                    return(
                        <div id='card'>
                        <h1>{post_details.card_title}</h1>
                        <p>{post_details.card_content}</p>
                        </div>
                    )
                })}

            </div>
           <Link to="/Posts" style={{ textDecoration: 'none', color: '#973131' }} ><li  id="share_your_idea_here" className='btn-one'>Share Your Idea Here !  </li> </Link>
           <Link to="/ProjectProfile" style={{ textDecoration: 'none', color: '#973131' }} ><li  id="share_your_idea_here" className='btn-one'>Profile  </li> </Link>
             </div>
        )
    }
}
