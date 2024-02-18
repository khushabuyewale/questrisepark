import React from 'react';
import Slider from 'react-slick';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import aboutUs from '../assets/th.jpeg';
import studentBanner from '../assets/StudentBanner.png';
import SlideImg2 from '../assets/SlideImg2.png';
import cardImg01 from '../assets/WaterSlideBanner.png';
import cardImg02 from '../assets/WSBann02.png';
import SnowWorldBanner from '../assets/Snow World.png';
import food1 from '../assets/Capture.jpg';
import food2 from '../assets/Capture2.jpg';
import food3 from '../assets/Capture3.jpg';
import food4 from '../assets/Capture4.jpg';
import food5 from '../assets/Capture5.jpg';

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
        <div className="container mt-5 " >

          <Container style={{ marginTop: '100px' }}>
            <Carousel style={{ height: '300px', marginBottom: '150px', paddingTop: '20px' }}>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={studentBanner}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={SlideImg2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={SnowWorldBanner}
                  alt="Third slide"
                />
              </Carousel.Item>
              {/* Add more Carousel.Items as needed */}
            </Carousel>
          </Container>
          <div style={{
            margin: '0 auto',
            marginBottom: '80px',
            maxWidth: '1000px',
            textAlign: 'center',
          }}>
            <h1 style={{color:'#0e2f44'}}>QUEST RISE - The Largest Amusement Park In Jalgaon</h1>
            <h3>Step into a world of magic, where joy springs to life!</h3>
            <hr />
            <p>We are so much more than an amusement park - a world where everyone comes together and enjoys the little moments. A life of fun is what everyone deserves, so come on down to the Quest Rise closest to you!</p>
          </div>
          <Container>
            <Row className="animate__animated animate__fadeIn">
              <Col>
                <Card style={{ height: '200px' }}>
                  <Card.Img src={cardImg01} alt="image" style={{height:'200px'}}>
                  </Card.Img>
                </Card>
              </Col>

              <Col>
                <Card style={{height: '200px' }}>
                <Card.Img src={cardImg02} alt="image" style={{height:'200px'}}>
                  </Card.Img>
                </Card>
              </Col>
            </Row>
          </Container>
          <div style={{
            margin: '0 auto',
            marginBottom: '80px',
            marginTop: '50px',
            maxWidth: '1000px',
            textAlign: 'center',
          }}>
            <h3>   Simple do’s for a smooth ride!</h3>
            <p>Plan and book tickets online to save time.<br />
              Dress comfortably and wear suitable footwear.<br />
              Arrive early to make the most of your time.<br />
              Prioritize safety by following park guidelines.<br />
              Pack essentials like sunscreen for sun protection.<br />
              Use locker and changing room facilities for convenience.</p>
          <hr></hr>
          <h2 style={{marginTop:'50px', marginBottom:'-50px'}}>Multi-cuisine restaurants</h2>
          </div>
          <Container>
            <Slider {...carouselSettings} style={{ marginBottom: '50px', paddingTop: '5px'}}>
              <img
                src={food1}
                alt="Image"
              />
              <img
                src={food2}
                alt="Image"
              />
              <img
                src={food3}
                alt="Image"
              />
              <img
                src={food4}
                alt="Image"
              />
              <img
                src={food5}
                alt="Image"
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
                <StarRating rating={4} /> {/* Example rating: 4 */}
                <Card.Text>
                  Fun environment, food is excellent!
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Second Review */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Anutosh</Card.Title>
                <StarRating rating={5} /> {/* Example rating: 3 */}
                <Card.Text>
                  One of the best amusement parks i have visited!
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Third Review */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Khushi</Card.Title>
                <StarRating rating={5} /> {/* Example rating: 5 */}
                <Card.Text>
                  Loved it! 
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Additional styling */}
            <br />
          </Container>

          <Container style={{ backgroundColor: '#f5f5f5', paddingBottom: '20px', paddingTop: '20px', marginBottom: '50px', marginTop: '50px' }}>
            <Row className="animate__animated animate__fadeIn">
              <Col >
                <div style={{ padding: '10px' }}>
                  <img
                    src={aboutUs}
                    alt="About Us"
                    style={{ width: '400px' }}
                  />
                </div>
              </Col>
              <Col >
                <div style={{ padding: '10px', marginLeft:'-100px' }}>
                  <h2>About Us</h2>
                  <p>The fantastic thing about Quest Rise Amusement Park is "There's a Whole Lot for Every Lot!". A wide range of themed rides and attractions include Kiddie rides, Family rides, rides for Grown up's. Right from Nitro's adrenaline-pumping experience to getting family and friends to help rescue Mr. India from Mogambo's terror, Quest Rise Amusement park engages you in interesting ways.

                    And for the kids, you can fly high with Tubbby Takes Off or indulge in some fun water splashing aboard Splash Ahoy.

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </nav >
    </>
  );
};

export default Home;