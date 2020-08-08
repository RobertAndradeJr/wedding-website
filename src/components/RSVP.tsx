import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RsvpString, FAQS, captions } from './Strings';

const RSVP: React.FC = () => (
  <Container as="section" id="rsvp">
    <Row className="text-center">
      <Col>
        <h3 className="display-4 my-5">{RsvpString}</h3>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 8, offset: 2 }} className="bg-info p-5 rounded-sm">
        <ul>
          {FAQS.map((question, index) => (
            <Fragment key={question}>
              <li>{question}</li>
              <li className="ml-2 list-unstyled">{captions[index]}</li>
            </Fragment>
          ))}
        </ul>
      </Col>
    </Row>
  </Container>
);

export default RSVP;
