import styled from "styled-components";

const StyledHeroContainer = styled.section`
  outline: 1px solid red;
  width: 100%;
  minheight: 100vh;
  max-width: 1320px;
`;

export function Hero() {
  return (
    <StyledHeroContainer className="body" style={{ outline: "1px solid red", width: "100%", minHeight: "100vh", maxWidth: "1320px" }} id="home">
      <div style={{ color: "#fff", marginTop: "200px" }}>
        <h1>Hello world</h1>
        <p style={{ marginTop: "50px" }}>An aspiring Front End Developer</p>
        <p style={{ maxWidth: "600px", textAlign: "center", margin: "0 auto", marginTop: "100px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatum eum minima magnam quisquam ducimus, veniam suscipit culpa
          voluptas adipisci, qui fugiat! Doloribus, nam enim.
        </p>
      </div>
    </StyledHeroContainer>
  );
}
