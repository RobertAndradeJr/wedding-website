import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavStrings } from './Strings';
import ScrollspyNav from 'react-scrollspy-nav';
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
const scrollTargets = [...buttonLabels, 'directions', 'rsvp'].map(target =>
  target.toLocaleLowerCase().replace(/\s/g, '')
);

export const NavBar: React.SFC = () => {
  const scroll = UseScrollSpy(150);
  return (
    <ScrollspyNav scrollTargetIds={scrollTargets} activeNavClass="active">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={scroll ? 'warning' : ''}
        variant={scroll ? 'light' : 'dark'}
        fixed="top"
        id="navbar"
      >
        <Navbar.Brand href="#home">
          R<HeartLogo />M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {buttonLabels.map(link => (
              <Nav.Link
                key={link}
                href={`#${link.toLocaleLowerCase().replace(/\s/g, '')}`}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="#directions">Directions</Nav.Link>
            <Nav.Link eventKey={2} href="#rsvp">
              RSVP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>
  );
};

export default NavBar;
