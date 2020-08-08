import React from 'react';
import Container from 'react-bootstrap/Container';
import { registryStrings } from './Strings';

const { TITLE } = registryStrings;

export const Registry: React.FC = () => {
  return (
    <Container as="section" id="registry" className="text-center vh-100">
      <h1>{TITLE}</h1>
    </Container>
  );
};

export default Registry;
