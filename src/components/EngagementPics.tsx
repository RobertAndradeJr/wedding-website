import React from 'react';
import { EngagementPicsStrings } from './Strings';
import UseImageLoader from '../utils/UseImageLoader';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { createId } from '../utils/StringHelpers';

const { TITLE } = EngagementPicsStrings;
const engagementPicsURL =
  'https://chantellestoutcreations.shootproof.com/gallery/12328000/';

const EngagementPics: React.FC = () => {
  const items = UseImageLoader();

  return (
    <Container
      as="section"
      id={createId(TITLE)}
      className="text-center engagement-pics"
    >
      <Row>
        <Col>
          <h2 className="my-4">{TITLE}</h2>
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
      <Row>
        <Col>
          <p className="mt-5">
            To see more, please visit our{' '}
            <a href={engagementPicsURL}>Engagement Pictures Gallery</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default EngagementPics;
