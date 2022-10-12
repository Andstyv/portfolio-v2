import placeholder from "../../../assets/img_placeholder.jpeg";
import { StyledProjectCardContainer, StyledProjectCardLinks, StyledProjectCardText, StyledProjectLink } from "./projectCard.styles";

export function ProjectCard({ title, desc, img, bullets }) {
  return (
    <StyledProjectCardContainer>
      <div style={{ height: "350px" }}>
        <img src={img ? img : placeholder} alt={title ? title : "Placeholder"} />
      </div>
      <StyledProjectCardText>
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul>
          {bullets &&
            bullets.map((bullet, index) => {
              return <li key={index}>{bullet}</li>;
            })}
        </ul>
      </StyledProjectCardText>
      <StyledProjectCardLinks>
        <StyledProjectLink>
          <i className="fas fa-satellite-dish"></i>
          <div>LIVE</div>
        </StyledProjectLink>
        <StyledProjectLink>
          <i className="fab fa-github"></i>
          <div>GitHub</div>
        </StyledProjectLink>
      </StyledProjectCardLinks>
    </StyledProjectCardContainer>
  );
}
