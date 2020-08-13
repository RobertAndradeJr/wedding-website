import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RsvpStrings } from './Strings';
import RSVPForm from './RSVPForm';

const RSVP: React.FC = () => (
  <Container as="section" id="rsvp">
    <Row className="text-center">
      <Col>
        <h3 className="display-4 my-5">{RsvpStrings.TITLE}</h3>
      </Col>
    </Row>
    <Row className="text-center">
      <Col>
        <p className="my-5">{RsvpStrings.DESCRIPTION}</p>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 8, offset: 2 }} className="bg-info p-5 rounded-sm">
        <RSVPForm />
      </Col>
    </Row>
  </Container>
);

export default RSVP;
