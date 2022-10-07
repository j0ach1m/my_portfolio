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
        <Row className="w-100 m-auto">
          <Col  className="mx-auto">
            <Card.Body className="mx-auto">
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
 
        </Row>
      </Card>
    </Container>
  );
};

export default Intro;
