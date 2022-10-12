import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-scroll";

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
          <Nav className="ms-auto" style={{ fontSize: "24px", gap: "20px" }}>
            <li className="nav-item">
              <Link href="#home" to="home" activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={100}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" to="projects" activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={100}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" to="contact" activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={100}>
                Contact
              </Link>
            </li>
            <StyledThemeTogglerBtn onClick={toggleTheme}>
              {theme === "light" ? <i className="far fa-moon"></i> : <i className="fas fa-sun"></i>}
            </StyledThemeTogglerBtn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
