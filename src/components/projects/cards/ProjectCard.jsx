import placeholder from "../../../assets/img_placeholder.jpeg";

export function ProjectCard({ title, desc, img, bullets }) {
  return (
    <div style={{ maxWidth: "500px", width: "100%", boxShadow: "2px 2px 10px rgba(0, 0,0, 0.5)", borderRadius: "5px" }}>
      <div style={{ height: "350px" }}>
        <img src={img ? img : placeholder} alt={title ? title : "Placeholder"} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "10px", height: "100%", minHeight: "500px" }}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul>
          {bullets &&
            bullets.map((bullet) => {
              return <li>{bullet}</li>;
            })}
        </ul>
      </div>
      <div style={{ color: "#fff", display: "flex", justifyContent: "space-around", paddingBottom: "20px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
          <i class="fas fa-satellite-dish"></i>
          <div>LIVE</div>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
          <i class="fab fa-github"></i>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
}

<div style={{ width: "400px", height: "400px", outline: "1px solid blue", backgroundColor: "#fff" }}>Project</div>;
