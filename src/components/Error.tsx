import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { errorStrings } from './Strings';

const { error, sub, description, buttonText } = errorStrings;

export const Error: React.SFC = () => (
  <Container className="error border-rounded">
    <Row>
      <Col>
        <h1 className="error-text">{error}</h1>
        <div className="sheep">
          <div className="top">
            <div className="body" />
            <div className="head">
              <div className="eye one" />
              <div className="eye two" />
              <div className="ear one" />
              <div className="ear two" />
            </div>
          </div>
          <div className="legs">
            <div className="leg" />
            <div className="leg" />
            <div className="leg" />
            <div className="leg" />
          </div>
        </div>
        <h4>{sub}</h4>
        <p>{description}</p>
        <a href="/social" className="btn btn-primary btn-round">
          {buttonText}
        </a>
      </Col>
    </Row>
  </Container>
);

export default Error;
