import React from "react";
import Container from "react-bootstrap/Container";
import { RSVPForm } from "./RSVPForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RSVP = () => (
  <Container as="section" id="rsvp">
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <RSVPForm />
      </Col>
    </Row>
  </Container>
);

export default RSVP;
