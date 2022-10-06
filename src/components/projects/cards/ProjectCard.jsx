import styled from "styled-components";
import placeholder from "../../../assets/img_placeholder.jpeg";

const StyledProjectLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 26px;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`;

export function ProjectCard({ title, desc, img, bullets }) {
  return (
    <div style={{ maxWidth: "500px", width: "100%", boxShadow: "2px 2px 10px rgba(0, 0,0, 0.5)", borderRadius: "5px" }}>
      <div style={{ height: "350px" }}>
        <img src={img ? img : placeholder} alt={title ? title : "Placeholder"} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "10px", height: "100%", minHeight: "700px" }}>
        <h2 style={{ margin: "20px 0" }}>{title}</h2>
        <p style={{ marginBottom: "20px" }}>{desc}</p>
        <ul>
          {bullets &&
            bullets.map((bullet) => {
              return <li style={{ margin: "10px 0" }}>{bullet}</li>;
            })}
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "20px" }}>
        <StyledProjectLink>
          <i class="fas fa-satellite-dish"></i>
          <div>LIVE</div>
        </StyledProjectLink>
        <StyledProjectLink>
          <i class="fab fa-github"></i>
          <div>GitHub</div>
        </StyledProjectLink>
      </div>
    </div>
  );
}

<div style={{ width: "400px", height: "400px", outline: "1px solid blue", backgroundColor: "#fff" }}>Project</div>;
