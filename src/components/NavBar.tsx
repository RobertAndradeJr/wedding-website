import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavStrings } from './Strings';
import UseScrollSpy from '../utils/UseScrollSpy';

const { buttonLabels } = NavStrings;

const HeartLogo: React.SFC = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
  </svg>
);

const addHash = (string: string): string => `#${string}`;

const addSlash = (string: string): string => `/${string}`;

const stringToLink = (string: string): string =>
  `${string.toLocaleLowerCase().replace(/\s/g, '')}`;

export const NavBar: React.SFC = () => {
  const scroll = UseScrollSpy(150);
  const [open, setOpen] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={scroll || open ? 'warning' : ''}
      variant={scroll || open ? 'light' : 'dark'}
      fixed="top"
      id="navbar"
    >
      <Navbar.Brand as={Link} to={addSlash(addHash(stringToLink('home')))}>
        R<HeartLogo />M
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={(): void => setOpen(!open)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {buttonLabels.left.map(link => (
            <Nav.Link
              as={Link}
              key={link}
              to={addSlash(addHash(stringToLink(link)))}
            >
              {link}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="ml-auto">
          {buttonLabels.right.map(link => (
            <Nav.Link as={Link} key={link} to={addSlash(stringToLink(link))}>
              {link}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
