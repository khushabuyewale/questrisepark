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
      <nav style={{ background: 'radial-gradient(circle,#f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)', paddingBottom: '20px', paddingTop: '20px' }}>
        <div className="container mt-5" >

          <Container>
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
                    <Card.Title>Adult</Card.Title>
                    <Card.Text>
                      Information about the Adult package.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundImage: 'url(https://placehold.it/400x200)', backgroundSize: 'cover', height: '200px' }}>
                  <Card.Body>
                    <Card.Title>Family</Card.Title>
                    <Card.Text>
                      Information about the Family package.
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
                  <p>Some information about your company.</p>
                </div>
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
        </div>
      </nav>
    </>
  );
};

export default Home;
