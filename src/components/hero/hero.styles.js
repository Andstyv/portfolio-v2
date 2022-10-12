import styled from "styled-components";

export const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  minheight: 100vh;
  max-width: 1320px;
  padding: 0 20px;
`;

export const StyledHeroH1 = styled.h1`
width: auto;
overflow: hidden; 
border-right: 1px solid #fff; 
white-space: nowrap;
margin: 0 auto; 
letter-spacing: .15em; 
animation: 
  blink-caret 1.5s step-end infinite;
}




@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: #fff; }
}

`;

export const StyledPointDown = styled.div`
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

export const StyledHeroInfoContainer = styled.div`
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

export const StyledHeroImg = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-top: 25px;

  @media screen and (min-width: 1280px) {
    margin-top: 50px;
    width: 250px;
    margin-bottom: 50px;
  }
`;

export const StyledHeroDiv = styled.div`
  margin-top: 100px;

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;
