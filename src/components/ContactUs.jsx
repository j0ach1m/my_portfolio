import React from "react";
import Feedback from "react-bootstrap/Feedback";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { init } from "@emailjs/browser";
// init("SB0aELKAQfBpzQGU0");
import {
  Container,
  Row,
  Button,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";

import "../css/contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_likx5hh",
        "template_vtdj8hp",
        form.current,
        "SB0aELKAQfBpzQGU0"
      )
      .then(
        (result) => {
          alert(`thank you for this message`);
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <form className="contact-form" id="contact_form" ref={form} onSubmit={sendEmail}>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          name="name"
          req="true"
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <input
          className="form-control"
          type="email"
          placeholder="name@example.com"
          name="user_email"
          req="true"
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <input
          className="form-control"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="message"
        />
      </FloatingLabel>
      {/* <div className="d-grid mt-4 mb-4 col-4 m-auto">
        <input className="intro-cta " type="submit" value="send"></input>
      </div> */}
      <Col className="d-grid mt-4 mb-4 col-4 m-auto">
        <Button className="intro-cta" type="submit" value="send" variant="primary">
          Contact
        </Button>{" "}
      </Col>
    </form>
  );
};
