import React from "react";
import { EngagementPicsStrings } from "./Strings";
import UseImageLoader from "../utils/UseImageLoader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const { SUBTITLE, TITLE } = EngagementPicsStrings;

const EngagementPics = () => {
  const items = UseImageLoader();
  console.log(items);
  return (
    <Container as="section" id="engagement" className="text-center">
      <Row>
        <Col>
          <h2>{TITLE}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{SUBTITLE}</p>
        </Col>
      </Row>
      <Row>
        <Carousel className="w-100">
          {items.map(item => (
            <Carousel.Item key={item}>
              <img src={item} alt={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default EngagementPics;
