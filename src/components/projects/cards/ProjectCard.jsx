import placeholder from "../../../assets/img_placeholder.jpeg";
import { StyledProjectCardContainer, StyledProjectCardLinks, StyledProjectCardText, StyledProjectLinkDiv } from "./projectCard.styles";

export function ProjectCard({ title, desc, img, bullets, links }) {
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
        <div>
          {links.live ? (
            <StyledProjectLinkDiv>
              <i className="fas fa-satellite-dish"></i> <a href={links.live}>Live</a>
            </StyledProjectLinkDiv>
          ) : (
            <StyledProjectLinkDiv>
              <i className="fas fa-exclamation-triangle"></i>
              <div> Not live</div>
            </StyledProjectLinkDiv>
          )}
        </div>
        <div>
          <StyledProjectLinkDiv>
            <i className="fab fa-github"></i>
            <a href={links.github}>GitHub</a>
          </StyledProjectLinkDiv>
        </div>
      </StyledProjectCardLinks>
    </StyledProjectCardContainer>
  );
}
