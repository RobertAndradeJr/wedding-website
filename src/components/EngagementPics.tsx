import React from "react";
import { EngagementPicsStrings } from "./Strings";
import UseImageLoader from "../utils/UseImageLoader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const { SUBTITLE, TITLE } = EngagementPicsStrings;

const EngagementPics = () => (
  <Container as="section" id="engagement" className="text-center">
    <Row>
      <Col>
        <h2 className="display-4">{TITLE}</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="display-5">{SUBTITLE}</p>
      </Col>
    </Row>
    <Row>
      <Carousel className="w-100">
        {UseImageLoader().map(item => (
          <Carousel.Item key={item}>
            <img src={item} alt={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
  </Container>
);

export default EngagementPics;
