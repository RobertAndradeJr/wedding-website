import React from 'react';
import { FooterStrings, InstagramPicsStrings } from './Strings';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { HASHTAG } = InstagramPicsStrings;
const { TITLE, AUTHOR, NOTE } = FooterStrings;

const hashtag = `#${HASHTAG}`;

const Footer: React.SFC = () => (
  <Container as="footer" id="footer" className="text-center" fluid>
    <Row className="my-3">
      <Col>
        <hr />
      </Col>
      <Col>
        <Button style={{ borderRadius: '25px', padding: '10px' }} href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              style={{ fill: '#fff' }}
              className="heroicon-ui"
              d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"
            />
          </svg>
        </Button>
      </Col>
      <Col>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col>
        <p>{hashtag}</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="text-muted">
          {TITLE}
          <a className="underline" href="http://robertandradejr.dev">
            {AUTHOR}
          </a>
          {NOTE}
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
