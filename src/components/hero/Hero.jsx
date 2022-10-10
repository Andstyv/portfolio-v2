import styled from "styled-components";

import profile_img from "../../assets/Profilbilde_250.jpg";

const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  minheight: 100vh;
  max-width: 1320px;
  padding: 0 20px;
`;

const StyledHeroH1 = styled.h1`
width: auto;
overflow: hidden; 
border-right: 1px solid #fff; 
white-space: nowrap;
margin: 0 auto; 
letter-spacing: .15em; 
animation: 
  typing 3.5s steps(8, end),
  blink-caret 1.5s step-end infinite;
}


@keyframes typing {
from { width: 0 }
to { width: 45% }
}


@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: #fff; }
}

`;

const StyledPointDown = styled.div`
  margin-top: auto;
  margin-bottom: 100px;
  font-size: 64px;
  animation: 
  bounce 5s ease infinite;
  a {
    cursor: pointer;
  }
}

@keyframes bounce {
  70% { transform:translateY(0%); }
  80% { transform:translateY(-15%); }
  90% { transform:translateY(0%); }
  95% { transform:translateY(-7%); }
  97% { transform:translateY(0%); }
  99% { transform:translateY(-3%); }
  100% { transform:translateY(0); }
}
`;

const StyledHeroInfoContainer = styled.div`
  p {
    font-family: Kanit, sans-serif;
    font-size: 16px;
  }
  a,
  span {
    color: #f0885d;
    text-decoration: none;
    font-weight: bold;
  }

  @media screen and (min-width: 1280px) {
    p {
      font-size: 24px;
    }
  }
`;

const StyledHeroImg = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-top: 25px;

  @media screen and (min-width: 1280px) {
    margin-top: 50px;
    width: 250px;
    margin-bottom: 50px;
  }
`;

const StyledHeroDiv = styled.div`
  margin-top: 100px;

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

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
          <i class="fas fa-angle-double-down"></i>
        </a>
      </StyledPointDown>
    </StyledHeroContainer>
  );
}
