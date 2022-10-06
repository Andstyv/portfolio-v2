import styled from "styled-components";

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
  bounce 2s ease infinite;
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

export function Hero() {
  return (
    <StyledHeroContainer className="body" style={{ width: "100%", minHeight: "100vh", maxWidth: "1320px" }} id="home">
      <div style={{ marginTop: "200px" }}>
        <div style={{ display: "flex" }}>
          <StyledHeroH1>Hello world</StyledHeroH1>
        </div>
        <p style={{ marginTop: "50px" }}>An aspiring Front End Developer</p>
        <p style={{ maxWidth: "600px", margin: "0 auto", marginTop: "100px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatum eum minima magnam quisquam ducimus, veniam suscipit culpa
          voluptas adipisci, qui fugiat! Doloribus, nam enim.
        </p>
      </div>
      <StyledPointDown>
        <a href="#projects" id="down" style={{ textDecoration: "none" }}>
          <i class="far fa-hand-point-down"></i>
        </a>
      </StyledPointDown>
    </StyledHeroContainer>
  );
}
