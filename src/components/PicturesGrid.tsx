import React from 'react';
import { isEmpty } from 'lodash';
import { InstagramPicsStrings } from './Strings';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Fallback from './Fallback';
import Error from './Error';
import UseFetch from '../utils/UseDataFetch';

const { INSTAGRAM_QUERY, viewMore } = InstagramPicsStrings;

const PicturesGrid: React.FC = () => {
  const { data, error } = UseFetch(INSTAGRAM_QUERY);
  return !isEmpty(error) ? (
    <Error />
  ) : !data.length ? (
    <Fallback />
  ) : (
    <Row>
      {data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((pic: any) => pic !== undefined)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((pic: any) => {
          const {
            // eslint-disable-next-line @typescript-eslint/camelcase
            node: { shortcode, id, thumbnail_resources, edge_media_to_caption }
          } = pic;
          const link = `https://www.instagram.com/p/${shortcode}/`;
          // eslint-disable-next-line @typescript-eslint/camelcase
          const thumb = thumbnail_resources[2].src;
          const caption = edge_media_to_caption?.edges[0]?.node?.text || '';
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
                  {viewMore}
                </a>
              ) : (
                ''
              )}
            </Col>
          );
        })}
    </Row>
  );
};

export default PicturesGrid;
