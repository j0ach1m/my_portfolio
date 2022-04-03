import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "../css/about.css";

const About = () => {
  return (
    <Container>
      <h1 className="about-heading-dark">About Me</h1>
      <h2 className="about-heading-light">About Me</h2>
      <Row>
        <Col className="d-none d-sm-block backround-png"></Col>
        <Col sm={8} className="ps-5">
          <div className="about-text">
            <p>
              At the moment a student currently under education at NOROFF
              Vocational School, on my last semester in front-end development.
              <br />
              During my education in front-end we have been thru HTML, CSS,
              vanilla JavaScript, Wordpress, Bootstrap, SASS and making api
              calls.
              <br />
              We have also learned about and continually use, Figma, Adobe XD,
              Photoshop and WCAG to mention a few things.
              <br />
              It has been a fun, interesting, exhausting and infuriating journey
              so far, and I am looking forward to learning more as I work
              further in this exciting field.
            </p>
            <p>
              My aim is to create better interfaces and experiences, making the
              web and mobile applications easier and more pleasant to use.
            </p>
            <p>
              I have previously worked in the restaurant business and have
              worked over a decade as a Head chef. This means I am creative and
              like to make things that work well together and looks good. I am
              also used to stress, team-work, discipline, self-driven and
              result-oriented. I can take decisions and responsibilities.
            </p>
            <p>
              I needed a change to be able to spend more time with my family,
              and when the Covid-19 hit the world and the whole profession was
              temporarily laid off, I saw a chance to make this change.
            </p>
          </div>
          <Col className="d-grid gap-4 col-5 col-sm-6 mx-auto">
            <a href="../files/cv_2020 pdf.pdf" download>
              <Button className="about-cta" type="button" variant="primary">
                Download CV
              </Button>
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
