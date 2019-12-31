import React from 'react';
import { FooterStrings, InstagramPicsStrings } from './Strings';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { HASHTAG } = InstagramPicsStrings;
const { TITLE, AUTHOR, NOTE } = FooterStrings;

const hashtag = `#${HASHTAG}`;
const hashtagLink = `https://www.instagram.com/explore/tags/${HASHTAG}/`;
const websiteLink = 'https://robertandradejr.dev';

const Footer: React.SFC = () => (
  <Container as="footer" id="footer" className="text-center" fluid>
    <Row>
      <Col>
        <a target="_blank" rel="noopener noreferrer" href={hashtagLink}>
          {hashtag}
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="text-muted">
          {TITLE}
          <a target="_blank" rel="noopener noreferrer" href={websiteLink}>
            {AUTHOR}
          </a>
          {NOTE}
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
