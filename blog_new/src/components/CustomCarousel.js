import React from 'react'
import { Carousel } from 'react-bootstrap'
import timage from '../assets/s1.jpg'
function CustomCarousel() {
    const feature_post_details = [{ title: "post1", description: "this is the first post", image: timage },
    { title: "post1", description: "this is the first post", image: timage },
    { title: "post1", description: "this is the first post", image: timage }];
  return (
    <Carousel variant="dark" height="1rem" width="100rem" indicators={false}>
    <Carousel.Item>
        <img
            className="d-block w-100 h-20"
            src={feature_post_details[0].image}
            alt="First slide"
        />
        <div>
        <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={feature_post_details[0].image}
            alt="Second slide"
        />
        <Carousel.Caption className='Car'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={feature_post_details[0].image}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
  )
}

export default CustomCarousel