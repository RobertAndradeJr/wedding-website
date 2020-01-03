import React from 'react';

import { MapStrings, TEL_LINK } from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const {
  BOOK_UBER,
  CONTACT,
  CONTACT_NAME,
  CONTACT_NUMBER,
  GOOGLE_MAPS_LINK,
  HOW_DO_I_GET_THERE,
  SHOW_MAP,
  UBER_LINK,
  VENUE_ADDRESS,
  VENUE_ADDRESS_2,
  VENUE_NAME
} = MapStrings;

const Contact: React.SFC = () => (
  <section>
    <Container id="directions" className="text-center">
      <Row>
        <Col>
          <p className="display-4 my-5">{HOW_DO_I_GET_THERE}</p>
        </Col>
      </Row>
    </Container>
    <Container className="text-center parallax bell-museum" fluid>
      <Container>
        <Jumbotron className="bg-transparent">
          <Row>
            <Col className="my-5" xs="12" md="6">
              <Row>
                <Col>
                  <h3>{VENUE_NAME}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{VENUE_ADDRESS}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{VENUE_ADDRESS_2}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={UBER_LINK}
                  >
                    {BOOK_UBER}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="my-5" xs="12" md="6">
              <Row>
                <Col>
                  <h3 className="text-xl">{CONTACT}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{CONTACT_NAME}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a target="_blank" rel="noopener noreferrer" href={TEL_LINK}>
                    <p>{CONTACT_NUMBER}</p>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={GOOGLE_MAPS_LINK}
                  >
                    <svg
                      className="inline my-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path
                        style={{ fill: '#fff' }}
                        className="heroicon-ui"
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                    {SHOW_MAP}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Container>
  </section>
);

export default Contact;
