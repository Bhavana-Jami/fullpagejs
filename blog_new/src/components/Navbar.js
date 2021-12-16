import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'


export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <Link to="/"><li className="list0"><FontAwesomeIcon icon={faHome} /></li></Link>
                    <Link to="/Spiritual" style={{textDecoration:"none"}}><li className="list1">Spiritual</li></Link>
                    <Link to="/Travel" style={{textDecoration:"none"}}><li className="list2">Travel</li></Link>
                    <Link to="/Love" style={{textDecoration:"none"}}><li className="list3">Love</li></Link>
                    <Link to="/Tech" style={{textDecoration:"none"}}><li className="list4">Tech</li></Link>
                </ul>
            </div>
        )
    }
}
