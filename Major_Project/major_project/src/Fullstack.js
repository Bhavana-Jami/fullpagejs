import React from 'react'
import {Card,Button} from 'react-bootstrap'

function Fullstack() {
  
  return (
    <div>
      <h1>You are interested in Back End Development</h1>
      <div className='g-card-wrapper'>
      <Card className='g-card'>
        <Card.Body>
          <Card.Title>What is Back End Development?</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" >Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='g-card'>
        <Card.Body>
          <Card.Title>How to start with Back End Development Project?</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='g-card'>
        <Card.Body>                 
          <Card.Title>List of Back End Development Projects</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Fullstack