import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1320px;
`;

export const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  gap: 25px;
  padding: 0 20px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
