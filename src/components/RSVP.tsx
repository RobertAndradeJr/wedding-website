import React from "react";
import Container from "react-bootstrap/Container";
import { RSVPForm } from "./RSVPForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RSVP = () => (
  <Container as="section" id="rsvp">
    <Row className="text-center">
      <Col>
        <h3 className="display-4 my-5">RSVP</h3>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <RSVPForm />
      </Col>
    </Row>
  </Container>
);

export default RSVP;
