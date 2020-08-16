import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FAQStrings, FAQS } from './Strings';

const FAQ: React.FC = () => (
  <Container as="section" id="faq">
    <Row className="text-center">
      <Col>
        <h3 className="display-4 my-5">{FAQStrings.TITLE}</h3>
      </Col>
    </Row>
    <Row>
      <Col className="rounded-sm faqs">
        <ol>
          {FAQS.map(({ question, answer }, index) => (
            <Fragment key={index}>
              <li className="question">{question}</li>
              <li
                dangerouslySetInnerHTML={{ __html: answer }}
                className="list-unstyled answer"
              />
            </Fragment>
          ))}
        </ol>
      </Col>
    </Row>
  </Container>
);

export default FAQ;
