import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import React from "react";
import {
  Container,
  Row,
  Button,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactUs } from "./ContactUs";
import "../css/contact.css";

const Contact = () => {
  return (
    <Container className="contact pb-5">
      <div>
        <h1 className="about-heading-dark">Contact</h1>
        <h2 className="about-heading-light">CONTACT</h2>
      </div>
      <Row>
        <Col xs={12} md={6} className="mx-auto order-md-1 order-2 pe-4">
          <ContactUs />
        </Col>

        <Col className="order-md-2 order-1 text-xs-center text-start contact-text ps-sm-4">
          <Col className="contact-text">
            <p>Let's make something new, different or make things better</p>
            <h3>Just say "Hey"!</h3>
          </Col>
          <Col>
            <p className="contact-find_me text-center pt-sm-5">Find me on:</p>
          </Col>
          <Col className="text-center icon-container ">
            <a href="">
              <FaGithub className="contact-icon col-2" />
            </a>
            <a href="">
              <FaLinkedin className="contact-icon col-2" />
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
