import { useState } from "react";
import styled from "styled-components";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { NavBar } from "./components/nav/NavBar";
import { Projects } from "./components/projects/Projects";
import { ThemeContext, themes } from "./context/themes";

const StyledGrid = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <NavBar />
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            <div className="d-lg-none d-md-block">Switch mode</div>
          </button>
        )}
      </ThemeContext.Consumer>
      <StyledGrid>
        <div className="wrapper" style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </StyledGrid>
    </div>
  );
}

export default App;
