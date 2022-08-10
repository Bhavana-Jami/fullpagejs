import { faGithub, faGofore, faOpencart, faOpenid } from '@fortawesome/free-brands-svg-icons'
import { faCaretSquareUp, faDemocrat, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import svg2 from '../assets/svg2.svg'
import { Link } from 'react-router-dom'


function Backend() {
  
  return (
    <div className='frontend_wrapper'>
      <h1>You are interested in Back End Development</h1>
      <div className='sec1'>
        <div className='sec1-left'>
          <h3>What is Back End Development?</h3>
          <p>Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see.Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see.</p>
        </div>
        <div className='sec1-right'><img id="frontend-image" src={svg2} height="450" width="550" alt="not working" /></div>
      </div>
      <div className='sec2'>
        <h3>How to start with a Back End Project?</h3>
        <p>The field of web development has become a hotspot in recent years. With websites gaining more and more traction, organizations have realized that to capture more leads, they need to have a strong online presence. As a result, they seek out talented people who can use the latest technologies to design and develop the best-looking and best-performing web applications for them.

When it is such a lucrative field, there’s bound to be good money in it. And there indeed is! That’s why it’s only natural that the young generation is attracted to web development as a career. However, wanting to follow a career path and actually pursuing it are two different things. It requires preparation, a series of steps, relevant education, and practice.</p>
      </div>
      <div className='sec3'>
        <h2>Check out some sample projects to start with !</h2>
        <div className='sec3-cardss'>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body  >
              <Card.Title><h3>Class Manager</h3></Card.Title>
              
              <Card.Text className='card-text'>
              Class management is a hectic activity that requires great input from the professor.
              </Card.Text>

              <Card.Link href="https://github.com/Shubh0405/classmanager-student-teacher-portal" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title className='card-title'><h3>Grocer</h3></Card.Title>
              
              <Card.Text>
              Premium Grocery Shopping application for vendors to allow them to perform basic 
              </Card.Text>
              <Card.Link href="https://github.com/Lakshya-Saini/Laravel-Grocer"><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title><h3>Pinterest Clone</h3></Card.Title>
              
              <Card.Text>
              The basic structure of Pinterest makes the app extremely unique and unparalleled to its competition.
              </Card.Text>
              <Card.Link href="https://github.com/machadop1407/pinterest-clone-backend"><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title><h3>Dad jokes</h3></Card.Title>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
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

export default Backend