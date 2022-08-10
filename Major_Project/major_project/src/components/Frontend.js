import { faGithub, faGofore, faOpencart, faOpenid } from '@fortawesome/free-brands-svg-icons'
import { faCaretSquareUp, faDemocrat, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import svg2 from '../assets/svg2.svg'
import { Link } from 'react-router-dom'

function Frontend() {
  // const [show,setShow] = useState(false);
  return (
    <div className='frontend_wrapper'>
      <h1>You are interested in Front End Development</h1>
      <div className='sec1'>
        <div className='sec1-left'>
          <h3>What is Front End Development?</h3>
          <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
        </div>
        <div className='sec1-right'><img id="frontend-image" src={svg2} height="450" width="550" alt="not working" /></div>
      </div>
      <div className='sec2'>
        <h3>How to start with a Front End Project?</h3>
        <p>Are you aspiring to become a front-end developer? Then you should start building a portfolio right away! And the best to do so is by completing front end projects. 

That’s why in this article, we’re discussing many front end project ideas so you can get started and build a robust portfolio. Our list has projects of different skill levels so you can choose one according to your level of interest and expertise.</p>
      </div>
      <div className='sec3'>
        <h2>Check out some sample projects to start with !</h2>
        <div className='sec3-cardss'>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body  >
              <Card.Title><h3>3d-boxes-background</h3></Card.Title>
              
              <Card.Text className='card-text'>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>

              <Card.Link href="https://github.com/bradtraversy/50projects50days/tree/master/3d-boxes-background" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title className='card-title'><h3>Animated countdown</h3></Card.Title>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/bradtraversy/50projects50days/tree/master/animated-countdown" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='sec3-cards' id='card'>
            <Card.Body>
              <Card.Title><h3>Blurry loading</h3></Card.Title>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/bradtraversy/50projects50days/tree/master/blurry-loading" className='card-link'><FontAwesomeIcon icon={faGithub} /></Card.Link>
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

export default Frontend