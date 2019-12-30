import React, { useState, useEffect } from 'react';
import { InstagramPicsStrings } from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

const { HASHTAG, HELP_US, PICTURE_WORTH_THOUSAND_WORDS } = InstagramPicsStrings;

const INSTAGRAM_LINK = `https://www.instagram.com/explore/tags/${HASHTAG}`;
const INSTAGRAM_QUERY = `${INSTAGRAM_LINK}/?__a=1`;
const HASHTAG_LINK = `#${HASHTAG}`;

const Social: React.FC = () => {
  const [Pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(INSTAGRAM_QUERY)
      .then(response => response.json())
      .then(data =>
        setPictures(data.graphql.hashtag.edge_hashtag_to_media.edges)
      )
      .catch(error => error.json());
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
            <a
              className="text-blue-500"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {HASHTAG_LINK}
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        {Pictures.filter(pic => pic !== undefined).map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (pic: Record<string, any>) => {
            const link = `https://www.instagram.com/p/${pic.node.shortcode}/`;
            const id = pic.node.id;
            const thumb = pic.node.thumbnail_resources[2].src;
            const caption =
              pic?.node?.edge_media_to_caption?.edges[0]?.node?.text || '';
            const captionLength = 140;
            const trimCaption = (): string => {
              if (!caption) {
                return '';
              } else if (caption.length >= captionLength) {
                return `${caption.substring(0, captionLength)}...`;
              } else {
                return caption;
              }
            };
            return (
              <>
                <Col className="instagram--image mw-100" xs="6" md="3" key={id}>
                  <Figure>
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                      <Figure.Image src={thumb} alt={caption || ''} />
                    </a>
                    <Figure.Caption>
                      {trimCaption()} <br />{' '}
                    </Figure.Caption>
                  </Figure>
                  {caption.length >= captionLength ? (
                    <a
                      className="mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link}
                    >
                      View more on Instagram
                    </a>
                  ) : (
                    ''
                  )}
                </Col>
              </>
            );
          }
        )}
      </Row>
    </Container>
  );
};

export default Social;
