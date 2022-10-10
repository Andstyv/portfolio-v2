import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const StyledThemeTogglerBtn = styled.button`
  border: none;
  background: none;
  background-color: none;
  color: #fff;
  padding-right: 0;
  padding-left: 25px;
`;

export function NavBar() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#282c34", color: "#fff" }} fixed="top" className={`Nav ${theme}`}>
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
            <StyledThemeTogglerBtn onClick={toggleTheme}>
              {theme === "light" ? <i class="far fa-moon"></i> : <i class="fas fa-sun"></i>}
            </StyledThemeTogglerBtn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
