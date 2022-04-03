import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import React from "react";
import { Button, Col } from "react-bootstrap";
import "../css/github.css";

const Github = () => {
  return (
    <div className="yellow-background">
      <h2 className="git-heading fs-1">Check out my Github</h2>
      <Col className="d-grid mt-5 col-3 mx-auto">
        <Button
          href="https://github.com/j0ach1m?tab=repositories"
          className="git-cta"
          type="button"
          variant="secondary"
        >
          Open Github
        </Button>{" "}
      </Col>
    </div>
  );
};

export default Github;
