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
              <i className="fab fa-linkedin"></i>Anders Styve
            </div>
            <div>
              <i className="fab fa-github"></i>Andstyv
            </div>
            <div>
              <i className="fas fa-envelope"></i>anders@bustbyte.no
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
