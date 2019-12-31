import React, { useState, useEffect } from 'react';
import { InstagramPicsStrings } from './Strings';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Fallback from './Fallback';

const { HASHTAG } = InstagramPicsStrings;

const INSTAGRAM_LINK = `https://www.instagram.com/explore/tags/${HASHTAG}`;
const INSTAGRAM_QUERY = `${INSTAGRAM_LINK}/?__a=1`;

const PicturesGrid: React.FC = () => {
  const [pictures, setPictures] = useState([]);
  console.log(pictures);
  useEffect(() => {
    fetch(INSTAGRAM_QUERY)
      .then(response => response.json())
      .then(data =>
        setPictures(data.graphql.hashtag.edge_hashtag_to_media.edges)
      )
      .catch(error => error.json());
  }, []);
  if (!pictures.length) {
    return <Fallback />;
  } else {
    return (
      <Row>
        {pictures
          .filter(pic => pic !== undefined)
          .map((pic: any) => {
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
                    <Figure.Caption>{trimCaption()}</Figure.Caption>
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
          })}
      </Row>
    );
  }
};

export default PicturesGrid;
