import React from "react";

import { CityStrings } from "./Strings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import YouTubeBackground from "react-youtube-background";

const { CITY_NAME, CITY_MOTTO } = CityStrings;

const City = () => (
  <Container as="section" className="text-center" id="glimpseofthecity" fluid>
    <YouTubeBackground
      videoId="CWzZ-Y2D9tw"
      style={{ height: 420 }}
      overlay="rgba(0,0,0,0.33)"
      nocookie
    >
      <Jumbotron id="video-content">
        <Row>
          <Col>
            <h5 className="display-4">{CITY_NAME}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="display-5">{CITY_MOTTO}</p>
          </Col>
        </Row>
      </Jumbotron>
    </YouTubeBackground>
  </Container>
);

export default City;
