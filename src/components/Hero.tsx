import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HomeStrings, CountdownStrings } from './Strings';
import UseCountdown from '../utils/UseCountdown';
import Container from 'react-bootstrap/Container';

const { detail, title } = HomeStrings;
const { WEDDING_DATE, WEDDING_LOCATION } = detail;

const DownArrows: React.SFC = () => (
  <Row>
    <Col className="arrow-container">
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
    </Col>
  </Row>
);

const Hero: React.FC = () => {
  const SUBTITLE = `${WEDDING_DATE} · ${WEDDING_LOCATION}`;
  const { Days, Hours, Minutes, Seconds } = UseCountdown(
    CountdownStrings.WEDDING_DATE,
    {}
  );
  const countdownOutput = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`;
  return (
    <Jumbotron fluid id="home" className="text-center">
      <Container className="parallax hero" fluid>
        <Row>
          <Col>
            <h1 className="display-4">{title}</h1>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">{SUBTITLE}</p>
          </Col>
        </Row>
        <Row>
          <Col>{countdownOutput}</Col>
        </Row>
        <DownArrows />
      </Container>
    </Jumbotron>
  );
};

export default Hero;
