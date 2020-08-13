import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EventsListStrings } from './Strings';

const {
  TITLE,
  CEREMONY,
  COCKTAIL,
  DINNER,
  DESCRIPTION,
  DANCE
} = EventsListStrings;

const columns = [
  [CEREMONY, COCKTAIL],
  [DINNER, DANCE]
];

const EventsList: React.FC = () => (
  <Container
    id={TITLE.toLowerCase()}
    as="section"
    className="text-center rounded-sm"
  >
    <Row>
      <Col>
        <h3 className="display-4 my-5">{TITLE}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 className="display-5 my-5">{DESCRIPTION}</h3>
      </Col>
    </Row>
    <Row className="events-list my-5">
      {columns.map((column, i) => (
        <Col xs="12" md className={`column${i}`} key={i}>
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
  </Container>
);

export default EventsList;
