import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import "../css/cards.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Cards() {
  return (
    <Container>
      <Row xs={1} lg={2} xxl={3} className="g-4">
        <Col>
          <Card className="h-100 m-auto border-0 shadow">
            <Card.Img
              variant="top"
              className="cardImg "
              src={require("../images/semesterProject2.png")}
            />
            <Card.Body className="h-100">
              <Card.Title>Semester Project 2</Card.Title>
              <Card.Text>
                We had to create an e-commerce website that has both customer-facing
                and admin sections. Both sections should be responsive and the
                website will be populated by a Strapi API supplied by Noroff.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0">
              <div className="d-grid">
                <Button
                  variant="outline-warning"
                  size="lg"
                  href="https://github.com/j0ach1m/strapi-sp2.git"
                >
                  GitHub Repo
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 m-auto border-0 shadow ">
            <Card.Img
              variant="top"
              className="cardImg "
              src={require("../images/jsfCA.png")}
            />
            <Card.Body className="h-100">
              <Card.Title>JavaScript Frameworks CA</Card.Title>
              <Card.Text>
               On this project we learnt about Next.js and strapi, Making get request and display the results. There should also be an admin side.
               Styling was not important.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0">
              <div className="d-grid">
                <Button
                  variant="outline-warning"
                  size="lg"
                  href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-j0ach1m.git"
                >
                  GitHub Repo
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="h-100 m-auto border-0 shadow">
            <Card.Img
              variant="top"
              className="cardImg "
              src={require("../images/projectExam2.png")}
            />
            <Card.Body className="h-100">
              <Card.Title>Project Exam 2</Card.Title>
              <Card.Text>
                Project Exam 2/Holidaze is a booking site where visitors can
                search for different accommodation in Bergen. And for the
                accommodation owners to receive enquiries and create new
                establishments.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0">
              <div className="d-grid">
                <Button
                  className="shadow"
                  variant="outline-warning"
                  size="lg"
                  href="https://github.com/Noroff-FEU-Assignments/project-exam-2-j0ach1m.git"
                >
                  GitHub Repo
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
