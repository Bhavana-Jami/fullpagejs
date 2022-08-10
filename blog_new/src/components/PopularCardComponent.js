import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BaseComponent from './BaseComponent'

function PopularCardComponent(props) {
    return (
        <Link to="./BaseComponent">
            <div className='popular-post-container'>
                <h3>{props.p_name}</h3>
                <div>
                    <span>like</span>
                    <span>like</span>
                </div>
            </div>
        </Link>

    )
}

export default PopularCardComponent