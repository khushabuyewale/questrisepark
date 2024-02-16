import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import coupleImage from '../assets/coupleImage.jpg'; 
import familyImage from '../assets/familyImage.jpg'; 
import friendImage from '../assets/friendImage.jpg'; 
import stuImage from '../assets/stuImage.jpg'; 
const SelectPack = () => {
    const [coupleCount, setCoupleCount] = useState(0);
    const [collegeStudentsCount, setCollegeStudentsCount] = useState(0);
    const [adultCount, setAdultCount] = useState(0);
    const [oldAgeCount, setOldAgeCount] = useState(0);
    const [kidsCount, setKidsCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
    const [bel10Count, setBel10Count] = useState(0);
    const [bel18Count, setBel18Count] = useState(0);
  
    const couplePrice = 1200;
    const studentPrice = 500;
    const adultPrice = 800;
    const oldAgePrice = 600;
    const kidsPrice = 300;
    const teacherPrice = 700; 
    const bel18Price = 500;
    const bel10Price = 300;
  
    const calculateTotalPrice = () => {
      return coupleCount * couplePrice +
             collegeStudentsCount * studentPrice +
             (adultCount * adultPrice + oldAgeCount * oldAgePrice + kidsCount * kidsPrice +
               teacherCount * teacherPrice + bel18Count * bel18Price + bel10Count * bel10Price);
    };
  const handleApply = () => {
    // Implement your logic to apply the selected package
    // You can use the state values to determine the selected options
  };

  return (
    <>
      <nav style={{ background: 'radial-gradient(circle,#f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)', paddingBottom: '20px', paddingTop: '20px' }}>
      
    <Container >
      <Row>
        
        <Col style={{ backgroundImage: `url(${coupleImage})`, backgroundSize: 'cover',margin:'10px' }}>
              <Card style={{ margin: '20px', color: 'black', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                 <Card.Body>
              <Card.Title>Couple Offer</Card.Title>
              <Form>
                <Col>
                  <Form.Group controlId="coupleCount">
                    <Form.Label>Couple </Form.Label>
                    <Form.Control
                      type="number"
                      value={coupleCount}
                      onChange={(e) => setCoupleCount(parseInt(e.target.value, 10))}
                    />
                  </Form.Group>
                  </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ backgroundImage: `url(${friendImage})`, backgroundSize: 'cover',margin:'10px'  }}>
              <Card style={{ margin: '20px', color: 'black', backgroundColor: 'rgba(255,255,255,0.7)' }}>  <Card.Body>
              <Card.Title>College Students Offer</Card.Title>
              <Form>
                <Col>
                  <Form.Group controlId="collegeStudentsCount">
                    <Form.Label>Count</Form.Label>
                    <Form.Control
                      type="number"
                      value={collegeStudentsCount}
                      onChange={(e) => setCollegeStudentsCount(parseInt(e.target.value, 10))}
                    />
                  </Form.Group>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
   </Row>
   <Row>
   <Col style={{ backgroundImage: `url(${familyImage})`, backgroundSize: 'cover',margin:'10px'  }}>
              <Card style={{ margin: '20px', color: 'black', backgroundColor: 'rgba(255,255,255,0.7)' }}>  <Card.Body>
              <Card.Title>Family Pack</Card.Title>
              <Form>
                <Form.Group controlId="adultCount">
                  <Form.Label>Adults Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={adultCount}
                    onChange={(e) => setAdultCount(parseInt(e.target.value, 10))}
                  />
                </Form.Group>

                <Form.Group controlId="oldAgeCount">
                  <Form.Label>Old Age Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={oldAgeCount}
                    onChange={(e) => setOldAgeCount(parseInt(e.target.value, 10))}
                  />
                </Form.Group>

                <Form.Group controlId="kidsCount">
                  <Form.Label>Kids Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={kidsCount}
                    onChange={(e) => setKidsCount(parseInt(e.target.value, 10))}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ backgroundImage: `url(${stuImage})`, backgroundSize: 'cover',margin:'10px'  }}>
              <Card style={{ margin: '20px', color: 'black', backgroundColor: 'rgba(255,255,255,0.7)' }}>   <Card.Body>
              <Card.Title>School trip Pack</Card.Title>
              <Form>
                <Form.Group controlId="teacherCount">
                  <Form.Label>Teachers Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={teacherCount}
                    onChange={(e) => setTeacherCount(parseInt(e.target.value, 10))}
                  />
                </Form.Group>

                <Form.Group controlId="bel18Count">
                  <Form.Label>Below 18 Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={bel18Count}
                    onChange={(e) => setBel18Count(parseInt(e.target.value, 10))}
                  />
                </Form.Group>

                <Form.Group controlId="bel10Count">
                  <Form.Label>Below 10 Count</Form.Label>
                  <Form.Control
                    type="number"
                    value={bel10Count}
                    onChange={(e) => setBel10Count(parseInt(e.target.value, 10))}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col>
          <Button variant="primary" onClick={handleApply}
            type="submit"
              style={{
                width: '30%',
                padding: '10px',
                background: 'linear-gradient(#957dad ,#d291bc)',
                marginLeft: '100px',
                marginTop: '10px',
                border: 'solid',
                borderRadius: '8px',
                cursor: 'pointer',
                
              }}
              >
            Apply
          </Button>
          
        </Col>
     
  
        <Col>
  <Card style={{
    marginBottom: '20px',
    border: '5px solid #000',
    borderRadius: '8px',
    background: 'linear-gradient(#f6dae4, #d0d5f7)',
    width: '800px',
    height: '150px',
    margin: '10px auto',
    padding: '5px',
  }}>
    <Card.Body>
      <Card.Title><b>Final Bill</b></Card.Title>
      <Card.Text>Total Price: <br/>{calculateTotalPrice()} Rs
      <Button
        type="submit"
        style={{
          width: '20%',
          padding: '5px',
          marginLeft: '400px',
          background: 'linear-gradient(#957dad, #d291bc)',
          border: 'solid',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      > Pay
      </Button>
      </Card.Text>
    </Card.Body>
  </Card>
</Col>

      </Row>
    </Container>
    </nav>
    </>
  );
};

export default SelectPack;
