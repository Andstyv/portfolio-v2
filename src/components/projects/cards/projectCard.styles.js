import styled from "styled-components";

export const StyledProjectCardContainer = styled.div`
  max-width: 500px;
  width: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const StyledProjectCardText = styled.div`
  padding: 10px;
  height: 100%;
  min-height: 700px;

  h2 {
    margin: 20px 0;
    font-size: 36px;
  }

  p {
    margin-bottom: 20px;
    font-size: 20px;
  }

  li {
    margin: 10px 0;
    font-size: 20px;
  }
`;

export const StyledProjectCardLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export const StyledProjectLinkDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 26px;
  font-family: Kanit, sans-serif;

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    :hover {
      color: #f0885d;
    }
  }
`;
