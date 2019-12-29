import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import { EventsListStrings } from "./Strings";

const {
  TITLE,
  DRESS_CODE,
  CEREMONY,
  COCKTAIL,
  DINNER,
  DANCE
} = EventsListStrings;

const columns = [
  [CEREMONY, COCKTAIL],
  [DINNER, DANCE]
];

const EventsList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Container id="events" as="section" className="text-white text-center">
      <Row>
        <Col>
          <h3 className="my-5">{TITLE}</h3>
        </Col>
      </Row>
      <Row>
        {columns.map((column, i) => (
          <Col className={i === 0 ? "border-right border-white" : ""} key={i}>
            {column.map(({ TITLE, TIME, DESCRIPTION }) => (
              <Container key={TITLE}>
                <Row>
                  <Col>
                    <h5>{TITLE}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>{TIME}</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>{DESCRIPTION}</p>
                  </Col>
                </Row>
              </Container>
            ))}
          </Col>
        ))}
      </Row>
      <Row className="my-5">
        <Col>
          <Button onClick={handleShow}>{DRESS_CODE.TITLE}</Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <Modal.Title>
            {DRESS_CODE.TITLE}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {DRESS_CODE.DESCRIPTION}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EventsList;
