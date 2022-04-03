import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../css/skill.css";

import { FaHtml5, FaLaptopCode } from "react-icons/fa";
import { SiAdobexd, SiJavascript } from "react-icons/si";


const Skills = () => {
  return (
    <div className="black-background">
      <h2 className="skill-heading">Skills</h2>
      <Container>
        <Row sm={2} className="g-3">
          <Col>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className="skill-text text-nowrap fs-2">
                  {" "}
                  <FaHtml5 className="skill-icon" />
                  HTML/CSS
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className="skill-text text-nowrap fs-2">
                  <FaLaptopCode className="skill-icon" />
                  {"   "}
                  Web design
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className="skill-text text-nowrap fs-2">
                  {" "}
                  <SiAdobexd className="skill-icon" />
                  Adobe Xd
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className="skill-text text-nowrap fs-2">
                  {" "}
                  <SiJavascript className="skill-icon" />
                  JavaScript
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
