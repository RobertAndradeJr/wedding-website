import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Error: React.SFC = () => {
  return (
    <Container className="error border-rounded">
      <Row>
        <Col>
          <h1 className="error-text">404 error</h1>
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
          <h4>Oops! There was an error loading the data!</h4>
          <p>
            Sorry bit the page you are looking for has failed to load due to
            network connectivity issues.
          </p>
          <a href="/social" className="btn btn-primary btn-round">
            Reload Page
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
