import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
    render() {
        return (
            <div className='share_idea_container'>
                <h1 id='shareyourideahere'>Share Your Idea Here </h1>
                <Form className='form_container'>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className='form_lable'>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" className='input_controls'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className='form_lable'>Idea</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter your content here" rows="5" className='input_controls'/>
                    </Form.Group>
                </Form>
                <Link to="/KnowledgeSharing" style={{ textDecoration: 'none', color: '#973131' }}><li className='btn-one' id='share_your_idea_here'>Post</li></Link>

            </div>
        )
    }
}