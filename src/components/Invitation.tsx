import React from 'react';
import InvitationIllustration from '../assets/undraw_invite.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PLACEHOLDER = 'Please join us for a night of fun festivities';
const Invitation: React.SFC = () => (
  <Container as="section" className="text-center" id="invitation">
    <Row>
      <Col>
        <h2 className="display-4">{PLACEHOLDER}</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <img
          className="mw-100"
          src={InvitationIllustration}
          alt="invitation illustration"
        />
      </Col>
    </Row>
  </Container>
);

export default Invitation;
