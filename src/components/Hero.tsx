import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EngagementPhoto from "../assets/engagement_photo.jpg";
import { HomeStrings, CountdownStrings } from "./Strings";
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
      fluid
      className="vh-100 text-white d-flex flex-column justify-content-end text-center"
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
          </Col>
        </Row>
    </Jumbotron>
  );
};

export default Hero;
