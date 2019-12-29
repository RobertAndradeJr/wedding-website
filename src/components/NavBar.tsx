import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavStrings } from "./Strings";
import ScrollspyNav from "react-scrollspy-nav";
import UseScrollSpy from "../utils/UseScrollSpy";

const { buttonLabels } = NavStrings;

const HeartLogo = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
  </svg>
);
const scrollTargets = [...buttonLabels, 'directions', 'rsvp'].map(target => target.toLocaleLowerCase().replace(/\s/g, ""),)

export const NavBar = () => {
  const scroll = UseScrollSpy(150)
  console.log(scroll)

  return (
    <ScrollspyNav
      scrollTargetIds={scrollTargets}
      activeNavClass='active'
    >
    <Navbar
        collapseOnSelect
        expand="lg"
        bg={scroll === true ? 'warning' : ''}
        variant={scroll === true ? 'light' : 'dark'}
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
              <Nav.Link key={link} href={`#${link.toLocaleLowerCase().replace(/\s/g, "")}`}>
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
      {/* <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home-section">HOME</Nav.Link>
          <Nav.Link href="#about-section">ABOUT</Nav.Link>
          <Nav.Link href="#services-section">SERVICES</Nav.Link>
          <Nav.Link href="#portfolio-section">PORTFOLIO</Nav.Link>
          <Nav.Link href="#pricing-section">PRICING</Nav.Link>
          <Nav.Link href="#contact-section">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
    </ScrollspyNav>
  );
};

export default NavBar;
