import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCommentAlt, faCommentDollar, faHeart } from '@fortawesome/free-solid-svg-icons';



function CardComponent(props) {

    return (
        <div className='card-container'>
            <Card style={{ width: '22rem' }} border='light'>
                <Card.Img variant="top" src={props.p_image} />
                <Card.Body>
                    <Card.Title>{props.p_name}</Card.Title>
                    <Card.Text>
                        {props.p_desc}
                    </Card.Text>
                    <Card.Link id='card-link'>April 9</Card.Link>
                    <Card.Link href="#" id='card-link'><FontAwesomeIcon icon={faHeart} /></Card.Link>
                    <Card.Link href="#" id='card-link'><FontAwesomeIcon icon={faComment} /></Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent