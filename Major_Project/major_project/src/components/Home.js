import React from 'react'
import { Link } from 'react-router-dom'
import svg1 from '../assets/svg1.svg'

function Home() {
    return (
        <div className='main'>
            <div className='main-left'>
                <h1>Wanna know which domain <span>U</span> are interested in ?</h1>

                <Link to="/Quiz" style={{ textDecoration: 'none', color: 'black' }}><div className='bounce'>Take the Quiz</div>
                </Link>
            </div>
            <div className='main-right'><img id="choice-image" src={svg1} height="500" width="600" alt="not working" /></div> 
            {/* <h1>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.v</h1> */}
        </div>


    )
}

export default Home