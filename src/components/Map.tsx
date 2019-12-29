import React from "react";
import { MapStrings } from "./Strings";
import Container from "react-bootstrap/Container";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { HOW_DO_I_GET_THERE, EASIER_THAN_YOU_THINK } = MapStrings;

const MAP_QUERY = "pb=!1m18!1m12!1m3!1d2821.6629251229833!2d-93.19008618446358!3d44.99115817909827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d172d3e3a05%3A0x63d7830833a56d3b!2sBell%20Museum!5e0!3m2!1sen!2sus!4v1577630237248!5m2!1sen!2sus";

const MAP_URL = `https://www.google.com/maps/embed?${MAP_QUERY}`;

const Directions = () => (
  <Container as="section" id="venue" className="text-center">
    <Row>
      <Col>
    <h3>{HOW_DO_I_GET_THERE}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
    <p>{EASIER_THAN_YOU_THINK}</p>
      </Col>
    </Row>
    <Row>
      <Col>
      <ResponsiveEmbed aspectRatio="21by9">
        <iframe
          title="bell-museum-map"
          src={MAP_URL}
          width="1050"
          height="450"
          style={{border: '0'}}
        />
      </ResponsiveEmbed>
      </Col>
    </Row>
  </Container>
);

export default Directions;
