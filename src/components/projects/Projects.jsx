import styled from "styled-components";
import { ProjectCard } from "./cards/ProjectCard";

const StyledProjectsSection = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1320px;
`;

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  gap: 25px;
  padding: 0 20px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export function Projects() {
  return (
    <StyledProjectsSection id="projects">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <h2>Projects</h2>
      </div>
      <StyledProjectsContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </StyledProjectsContainer>
    </StyledProjectsSection>
  );
}
