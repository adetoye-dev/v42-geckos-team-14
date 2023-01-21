import "./NavbarComp.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-links">
          Drag&Drop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto position-absolute end-0">
            <Nav.Link href="#home" className="navbar-links web">
              Web
            </Nav.Link>
            <Nav.Link href="#link" className="navbar-links">
              Mobile
            </Nav.Link>
            <Nav.Link href="#link" className="navbar-links">
              Code
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
