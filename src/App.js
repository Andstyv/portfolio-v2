import styled from "styled-components";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { NavBar } from "./components/nav/NavBar";
import { Projects } from "./components/projects/Projects";

const StyledGrid = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <StyledGrid>
        <div
          className="wrapper"
          style={{ height: "100%", backgroundColor: "#282c34", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
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
