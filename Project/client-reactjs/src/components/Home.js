import React from 'react';
import Slider from 'react-slick';

import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import aboutUs from '../assets/th.jpeg';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaStar } from 'react-icons/fa';


const Home = () => {
  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));

    return <div>{stars}</div>;
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the duration between slides in milliseconds
  };

  return (
    <>
      <nav style={{ backgroundColor: 'white', paddingBottom: '20px', paddingTop: '20px' }}>
        <div className="container mt-5" >

          <Container style={{marginTop:'100px'}}>
            <Carousel style={{ height: '300px', marginBottom: '250px', paddingTop: '20px' }}>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x300"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Slide 1</h3>
                  <p>Some description for the first slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x300"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Slide 2</h3>
                  <p>Some description for the second slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x300"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Slide 3</h3>
                  <p>Some description for the third slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel.Items as needed */}
            </Carousel>
          </Container>
 <div style={{margin:'0 auto', marginBottom:'80px'}}>
  <h1>QUEST RISE - The Largest Amusement Park In Jalgaon</h1>
  <h3>Step into a world of magic, where joy springs to life!</h3>
  <hr></hr>
  <h6>We are so much more than an amusement park - a world where everyone comes together and enjoys the little moments.
A life of fun is what everyone deserves, so come on down to the Quest Rise closest to you!</h6>
 </div>
          <Container>
            <Row className="animate__animated animate__fadeIn">
              <Col>
                <Card style={{ backgroundImage: 'url(https://placehold.it/400x200)', backgroundSize: 'cover', height: '200px' }}>
                  <Card.Body>
                    <Card.Title>Children</Card.Title>
                    <Card.Text>
                      Information about the Children package.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col>
                <Card style={{ backgroundImage: 'url(https://placehold.it/400x200)', backgroundSize: 'cover', height: '200px' }}>
                  <Card.Body>
                    <Card.Title>Friends</Card.Title>
                    <Card.Text>
                      Information about the Friends package.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>




          <Container>
            <Slider {...carouselSettings} style={{ marginBottom: '50px', paddingTop: '5px' }}>
              <img
                src="https://placehold.it/800x300"
                alt="Slide 1"
              />
              <img
                src="https://placehold.it/800x300"
                alt="Slide 2"
              />
              <img
                src="https://placehold.it/800x300"
                alt="Slide 3"
              />
              {/* Add more images as needed */}
            </Slider>
          </Container>

          <Container>
            <h2>Reviews</h2>

            {/* First Review */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Unnati</Card.Title>
                <StarRating rating={1} /> {/* Example rating: 4 */}
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tristique justo.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Second Review */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Anutosh</Card.Title>
                <StarRating rating={3} /> {/* Example rating: 3 */}
                <Card.Text>
                  Nullam tincidunt justo vitae sapien varius, vel efficitur justo aliquam.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Third Review */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Khushi</Card.Title>
                <StarRating rating={5} /> {/* Example rating: 5 */}
                <Card.Text>
                  Sed consectetur sem vitae nisl convallis, nec malesuada ligula vestibulum.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Additional styling */}
            <br />
          </Container>

          <Container style={{ backgroundColor: '#d8cfe5', paddingBottom: '20px', paddingTop: '20px', marginBottom: '50px', marginTop: '50px' }}>
            <Row className="animate__animated animate__fadeIn">
              <Col >
                <div style={{ padding: '10px' }}>
                  <img
                    src={aboutUs}
                    alt="About Us"
                    style={{ width: 'auto' }}
                  />
                </div>
              </Col>
              <Col >
                <div style={{ padding: '10px' }}>
                  <h2>About Us</h2>
                  <p>The fantastic thing about Imagicaa theme park is "There's a Whole Lot for Every Lot!". A wide range of Imagicaa's themed rides and attractions include Kiddie rides, Family rides, rides for Grown up's. Right from Nitro's adrenaline-pumping experience to getting family and friends to help rescue Mr. India from Mogambo's terror, Imagicaa Amusement park engages you in interesting ways.

                    And for the kids, you can fly high with Tubbby Takes Off or indulge in some fun water splashing aboard Splash Ahoy.

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </nav>
    </>
  );
};

export default Home;