import React, { useState, useEffect } from 'react'
import { InstagramPicsStrings } from './Strings'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const { HASHTAG, HELP_US, PICTURE_WORTH_THOUSAND_WORDS } = InstagramPicsStrings;

const INSTAGRAM_LINK = `https://www.instagram.com/explore/tags/${HASHTAG}`;
const INSTAGRAM_QUERY = `${INSTAGRAM_LINK}/?__a=1`;
const HASHTAG_LINK = `#${HASHTAG}`;
const Social = () => {
  const [Pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(INSTAGRAM_QUERY)
      .then((response) => response.json())
      .then((data) => setPictures(data.graphql.hashtag.edge_hashtag_to_media.edges))
      .catch((error) => error.json())
  }, []);

  return (
    <Container as="section" id="social" className="text-center">

      <Row>
        <Col>
          <h3 className="display-4">{PICTURE_WORTH_THOUSAND_WORDS}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="display-5">
            {HELP_US}
            <a className="text-blue-500" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              {HASHTAG_LINK}
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        {Pictures.map((pic: any) => (
          <Col className="instagram--image" xs="1" md="3" key={pic.node.id}>
            <img
              src={pic.node.display_url}
              alt=""
              className="w-9/12 md:w-4/12 p-6"
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
};

export default Social
