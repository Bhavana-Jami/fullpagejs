import React, { Component } from 'react'
import t_image from './1.png';
import l_image from './2.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="logo">BBlog</h1>
                {/* <img src={t_image} alt="Logo" />
                <img src={l_image} alt="Logo" /> */}
            </div>
        )
    }
}
