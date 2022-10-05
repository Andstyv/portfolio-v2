import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#282c34", color: "#fff" }} fixed="top">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#fff", fontSize: "32px" }}>
          AS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize: "24px" }}>
            <Nav.Link href="#home" style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: "#fff" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "#fff" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
