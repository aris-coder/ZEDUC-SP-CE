import React from 'react';
import Style from './styleAcceuil';
import ndole from '../images/ndole.png';
import { Card, Col, Row } from 'react-bootstrap'; 

const MainComponent = () => {
  return (
    <>
      <Style />
      <main className="main-content">
        <div className='row' style={{ fontFamily: 'Milonga, sans-serif', color: 'white' }}>
          <h2>Nos atouts</h2>
          <div className="atouts-list">
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}> 
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="atout-item">
                  <Card.Img variant="top" src={ndole} className='image1' alt="food" />
                  <Card.Body>
                    <Card.Title>NDole</Card.Title>
                    <Card.Text>
                      A: Riz, Miondo, Frites de plantain
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </div>
        </div>

        <div className='row mt-5'>
          <h2 style={{ fontFamily: 'Milonga, sans-serif', color: 'white' }}>Localisation</h2>
          <div style={{ width: '100%', height: '450px', marginTop: '20px' }}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.494812407785!2d9.7934567!3d3.9721809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10617344a65f5d03%3A0xb96d31dc034b812a!2sResidence%20priv%C3%A9e%20la%20terrasse!5e0!3m2!1sen!2snl!4v1697554818382!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainComponent;
