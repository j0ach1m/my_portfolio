import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../css/navbar.css"

const NavBar = ()=>{
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">-JR-</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto d-flex justify-content-end text-center">
              <Nav.Link
                className="px-4 p-2 bd-highlight"
                href="#portfolio"
              >
                Portfolio
              </Nav.Link>

              <Nav.Link className="px-4 bd-highlight" href="#contact_form">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;