import {
  StyledContactContainer,
  StyledContactH2,
  StyledContactInner,
  StyledContactInnerDiv,
  StyledContactSection,
  StyledGoHomeBtn,
} from "./contact.styles";

export function Contact() {
  return (
    <StyledContactSection id="contact">
      <StyledContactH2>
        <h2>Contact</h2>
      </StyledContactH2>
      <StyledContactContainer>
        <StyledContactInner>
          <p>If you have any questions about me, my work, or just want to get in touch, don't hesitate to reach out!</p>
          <StyledContactInnerDiv>
            <div>
              <i className="fab fa-linkedin"></i>
              <a href="www.linkedin.com/in/anders-styve-b2378314b">Anders Styve</a>
            </div>
            <div>
              <i className="fab fa-github"></i>
              <a href="https://github.com/Andstyv">Andstyv</a>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <a href="mailto:anders@bustbyte.no">anders@bustbyte.no</a>
            </div>
          </StyledContactInnerDiv>
        </StyledContactInner>
      </StyledContactContainer>
      <StyledGoHomeBtn>
        <div style={{ color: "#fff" }}>
          <a href="#home" id="go-home">
            <i className="fas fa-angle-double-up"></i>Home
          </a>
        </div>
      </StyledGoHomeBtn>
    </StyledContactSection>
  );
}
