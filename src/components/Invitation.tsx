import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { InvitationStrings } from './Strings';
import { createId } from '../utils/StringHelpers';
import changeDateFront from '../assets/changdatefront.jpg';
import changeDateBack from '../assets/changedateback.jpg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
const { TITLE } = InvitationStrings;

const Invitation: React.FC = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('');

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  return (
    <Container
      as="section"
      className="text-center rounded"
      id={createId(TITLE)}
    >
      <Row>
        <Col>
          <h2 className="display-4 my-4">{TITLE}</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Image
            className="mw-100 my-3"
            src={changeDateFront}
            alt="Robert and Mandi"
            onClick={(): void => {
              handleShow();
              setActive(changeDateFront);
            }}
          />
        </Col>
        <Col lg="6">
          <Image
            className="mw-100 my-3"
            src={changeDateBack}
            alt="invitation illustration"
            onClick={(): void => {
              handleShow();
              setActive(changeDateBack);
            }}
          />
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className="text-dark">
          <img src={active} className="mw-100" alt="zoom" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Invitation;
