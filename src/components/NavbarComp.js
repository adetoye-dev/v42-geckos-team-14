import "./NavbarComp.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import Context from "./Context";

function BasicExample() {
  const { setShowTab } = useContext(Context);

  return (
    <Navbar expand="lg" className="navbar sticky-top">
      <Container>
        <Navbar.Brand href="/" className="navbar-links">
          Drag&Drop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto position-absolute end-0">
            <span
              className="navbar-links links-right-side"
              onClick={() => setShowTab("web")}
            >
              Web
            </span>
            <span
              className="navbar-links links-right-side"
              onClick={() => setShowTab("mob")}
            >
              Mobile
            </span>
            <span
              className="navbar-links links-right-side"
              onClick={() => setShowTab("code")}
            >
              Code
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
