import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// faExternalLinkAlt
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'


export default class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="icon">
                        <p>01</p>
                        <a href="#" id="github_icon"><FontAwesomeIcon icon={faGithub}/></a> 
                        <a href="#"><FontAwesomeIcon icon={faExternalLinkAlt}/> </a>
                    </div>
                    <h3 className="inside_card">Project 1</h3>
                    <p className="inside_card">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    <p className="inside_card"><span>HTML CSS JS</span></p>
                </div>
                <div className="card">
                    <div className="icon">
                        <p>02</p>
                        <a href="#" id="github_icon"><FontAwesomeIcon icon={faGithub}/></a> 
                        <a href="#"><FontAwesomeIcon icon={faExternalLinkAlt}/> </a>
                    </div>
                    <h3 className="inside_card">Project 2</h3>
                    <p className="inside_card">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    <p className="inside_card"><span>HTML BoosStrap JS API</span></p>
                </div><div className="card">
                    <div className="icon">
                        <p>03</p>
                        <a href="#" id="github_icon"><FontAwesomeIcon icon={faGithub}/>ji</a> 
                        <a href="#"><FontAwesomeIcon icon={faExternalLinkAlt}/> </a>
                    </div>
                    <h3 className="inside_card">Project 3</h3>
                    <p className="inside_card">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    <p className="inside_card"><span>BootStrap ReactJS</span></p>
                </div>
            </div>
        )
    }
}
