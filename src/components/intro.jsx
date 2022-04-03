import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../css/intro.css";
import Button from "react-bootstrap/Button";

const Intro = () => {
  return (
    <Container>
      <Card className="pt-5">
        <Row>
          <Col xs={8}>
            <Card.Body className="ps-5 ">
              <Card.Text as="h4">Hi, I'm</Card.Text>
              <Card.Title className="intro-title" as="h1">
                Joachim Ring
              </Card.Title>
              <Card.Subtitle className="mb-2">
                Front-End Developer
              </Card.Subtitle>
              <Card.Text className="d-none d-sm-block">
                Based in Arendal, Norway
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Img
              src={require("../images/package-lock-kopi.jpg")}
              className="rounded-circle"
            />
          </Col>
          <Col className="d-grid gap-4 col-4 ms-5">
            <a href="#contact_form">
              <Button className="intro-cta" type="button" variant="primary">
                Contact
              </Button>{" "}
            </a>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Intro;
