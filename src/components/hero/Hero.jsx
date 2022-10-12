import profile_img from "../../assets/Profilbilde_250.jpg";
import { StyledHeroContainer, StyledHeroDiv, StyledHeroH1, StyledHeroImg, StyledHeroInfoContainer, StyledPointDown } from "./hero.styles";

export function Hero() {
  return (
    <StyledHeroContainer className="body" style={{ width: "100%", minHeight: "100vh", maxWidth: "1320px" }} id="home">
      <StyledHeroDiv>
        <div style={{ display: "flex" }}>
          <StyledHeroH1>Hello world</StyledHeroH1>
        </div>
        <StyledHeroImg src={profile_img} alt="Profile"></StyledHeroImg>
        <StyledHeroInfoContainer style={{ fontFamily: "Kanit, sans-serif" }}>
          <p style={{ marginTop: "25px" }}>
            My name is <span>Anders Styve</span> - an aspiring <span>Frontend-developer.</span>
          </p>
          <p style={{ maxWidth: "600px", margin: "0 auto", marginTop: "50px" }}>
            I'm currently employed by the superheroes at{" "}
            <a href="https://www.bustbyute.no" aria-hidden="true">
              BustByte
            </a>
            , and wrapping up my final year at at Noroff's Frontend-development studies.
          </p>
          <div style={{ marginTop: "50px" }}>
            <p>Current tech stack:</p>
            <p>HTML · CSS · JS · NODE JS · SCSS · BOOSTRAP · REST API · TS · REACT</p>
          </div>
        </StyledHeroInfoContainer>
      </StyledHeroDiv>
      <StyledPointDown>
        <a href="#projects" id="down" style={{ textDecoration: "none" }}>
          <i className="fas fa-angle-double-down"></i>
        </a>
      </StyledPointDown>
    </StyledHeroContainer>
  );
}
