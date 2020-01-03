import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scrollspy from 'react-scrollspy';
import { NavStrings } from './Strings';
import UseScrollSpy from '../utils/UseScrollSpy';
import HeartLogo from './HeartLogo';
import {
  stringToLink,
  addSlash,
  addHash,
  linkifyAll
} from '../utils/StringHelpers';

const { buttonLabels } = NavStrings;

const scrollSpyItems = (): string[] => linkifyAll(buttonLabels.left);

const complexSelect = (): void =>
  document
    .querySelectorAll('.nav-link.active')
    .forEach(el => el.classList.remove('active'));

export const NavBar: React.SFC = () => {
  const scroll = UseScrollSpy(50);
  const [open, setOpen] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={scroll || open ? 'warning' : ''}
      variant={scroll || open ? 'light' : 'dark'}
      fixed="top"
      id="navbar"
      onSelect={complexSelect}
    >
      <Nav.Link
        as={Link}
        className="navbar-brand"
        eventKey={'home'}
        to={addSlash(addHash(stringToLink('home')))}
      >
        R<HeartLogo />M
      </Nav.Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={(): void => setOpen(!open)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Scrollspy
          items={scrollSpyItems()}
          className="mr-auto"
          currentClassName="active"
          componentTag={Nav}
        >
          {buttonLabels.left.map(link => (
            <Nav.Link
              as={Link}
              key={link}
              eventKey={link}
              to={addSlash(addHash(stringToLink(link)))}
            >
              {link}
            </Nav.Link>
          ))}
        </Scrollspy>
        <Nav className="ml-auto">
          {buttonLabels.right.map(link => (
            <Nav.Link
              as={Link}
              eventKey={link}
              key={link}
              to={addSlash(stringToLink(link))}
            >
              {link}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
