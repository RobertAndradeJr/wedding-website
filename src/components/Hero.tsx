import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EngagementPhoto from "../assets/engagement_photo.jpg";
import { HomeStrings, CountdownStrings } from "./Strings/Strings";
import UseCountdown from "../utils/UseCountdown";

const { detail, title } = HomeStrings;
const { WEDDING_DATE, WEDDING_LOCATION } = detail;

const Hero: React.FC = () => {
  const SUBTITLE = `${WEDDING_DATE} · ${WEDDING_LOCATION}`;
  const { Days, Hours, Minutes, Seconds } = UseCountdown(
    CountdownStrings.WEDDING_DATE,
    {}
  );
  const countdownOutput = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`;
  return (
    <Jumbotron
      className="vh-100"
      style={{
        backgroundColor: "black",
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
      ),url(${EngagementPhoto})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }}
    >
      <Container className="text-white">
        <Row>
          <Col>
            <h1 className="display-4">{title}</h1>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">{SUBTITLE}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {countdownOutput}
            {/* <Button onClick={handleClick} {color} {buttonText} /> */}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
