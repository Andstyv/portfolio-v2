import styled from "styled-components";

export const StyledContactSection = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1320px;
  position: relative;
`;

export const StyledContactH2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const StyledContactContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  padding: 0 20px;
`;

export const StyledContactInner = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
`;

export const StyledContactInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  width: 250px;
  font-size: 24px;
  margin-top: 100px;

  div {
    display: flex;
    align-items: baseline;
    gap: 20px;

    a {
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      :hover {
        color: #f0885d;
      }
    }
  }
`;

export const StyledGoHomeBtn = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: end;

  a {
    text-decoration: none;
    font-size: 32px;
    padding-right: 20px;

    :hover i {
      font-size: 130%;
    }

    i {
      margin-right: 20px;
      transition: 0.2s;
    }
  }
`;
