import { projects } from "../../constants/projects";
import { ProjectCard } from "./cards/ProjectCard";
import { StyledProjectsContainer, StyledProjectsSection } from "./projects.styles";

export function Projects() {
  return (
    <StyledProjectsSection id="projects">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <h2>Projects</h2>
      </div>
      <StyledProjectsContainer>
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard
                title={project.title}
                desc={project.description.head}
                img={project.img}
                bullets={project.description.bullets}
                key={project.id}
              />
            );
          })}
      </StyledProjectsContainer>
    </StyledProjectsSection>
  );
}
