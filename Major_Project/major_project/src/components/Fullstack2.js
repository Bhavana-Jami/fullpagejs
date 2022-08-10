import { faGithub, faGofore, faOpencart, faOpenid } from '@fortawesome/free-brands-svg-icons'
import { faCaretSquareUp, faDemocrat, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import svg2 from '../assets/svg2.svg'
import { Link } from 'react-router-dom'


function Fullstack2() {
  
  return (
    <div className='frontend_wrapper'>
      <h1>You are interested Fullstack Development</h1>
      <div className='sec1'>
        <div className='sec1-left'>
          <h3>What is Fullstack Development?</h3>
          <p>Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end. The front end includes everything that a client, or site viewer, can see and interact with.</p>
        </div>
        <div className='sec1-right'><img id="frontend-image" src={svg2} height="450" width="550" alt="not working" /></div>
      </div>
      <div className='sec2'>
        <h3>How to start with a Fullstack Project?</h3>
        <p>
        A full stack developer is an engineer who can independently design and create an end-to-end computer programming, including codes, databases, servers, and platforms. Depending on the solution stack utilised, full stack development projects may be divided into three categories: web stack, mobile stack, and native application stack.

As more organisations want to recruit full stack developers in India, "full stack developer" is a title that every other coding/development engineer wishes to add to their LinkedIn and Facebook profiles</p>
      </div>
      <div className='sec3'>
        <h2>Check out some sample projects to start with !</h2>
        <div className='sec3-cardss'>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body  >
              <Card.Title><h3>TapNews</h3></Card.Title>
              
              <Card.Text className='card-text'>
              It is a React-based web app that automatically recommends news based on user logs.
              </Card.Text>

              <Card.Link href="https://github.com/Shubh0405/classmanager-student-teacher-portal" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title className='card-title'><h3>Fullstackinator</h3></Card.Title>
              
              <Card.Text>
              This project uses a Node.js server with Express and Next.js for the React application.
              </Card.Text>
              <Card.Link href="https://github.com/Lakshya-Saini/Laravel-Grocer"><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title><h3>PostVapoRS</h3></Card.Title>
              
              <Card.Text>
              PostVapoRS refers to full-stack with PostgreSQL, Vapor, React, and Swift. 
              </Card.Text>
              <Card.Link href="https://github.com/machadop1407/pinterest-clone-backend"><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title><h3>MongoVapoRS</h3></Card.Title>
              
              <Card.Text>
              This project is quite similar to the above idea, but it uses MongoDB instead of PostgreSQL
              </Card.Text>
              <Card.Link href="https://github.com/bradtraversy/50projects50days/tree/master/dad-jokes" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Link to="/Quiz" style={{ textDecoration: 'none', color: 'black' }}> <Button id='frontend-button' className='bounce'>Retake the quiz</Button>
                </Link>
       
      </div>
    </div>
  )
}

export default Fullstack2