import React from 'react';
import { isEmpty } from 'lodash';
import { InstagramPicsStrings } from './Strings';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Fallback from './Fallback';
import Error from './Error';
import UseFetch from '../utils/UseDataFetch';
import { InstaData } from '../types/types';

const { INSTAGRAM_QUERY, viewMore } = InstagramPicsStrings;

const PicturesGrid: React.FC = () => {
  const { data, error } = UseFetch(INSTAGRAM_QUERY);
  return !isEmpty(error) ? (
    <Error />
  ) : !data.length ? (
    <Fallback />
  ) : (
    <Row>
      {data.map((pic: InstaData) => {
        const { shortcode, id, thumb, caption } = pic;
        const link = `https://www.instagram.com/p/${shortcode}/`;
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
