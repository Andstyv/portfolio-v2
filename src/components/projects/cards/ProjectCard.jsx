import placeholder from "../../../assets/img_placeholder.jpeg";

export function ProjectCard() {
  return (
    <div style={{ outline: "1px solid red", maxWidth: "400px", width: "100%" }}>
      <div style={{ outline: "2px solid yellow" }}>
        <img src={placeholder} alt="placeholder" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      </div>
      <div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolores alias eligendi. Minus optio, deserunt omnis nisi odio rerum
          quos, fuga velit cum esse delectus!
        </p>
      </div>
      <div style={{ color: "#fff", display: "flex", justifyContent: "space-around" }}>
        <div>LIVE</div>
        <div>GitHub</div>
      </div>
    </div>
  );
}

<div style={{ width: "400px", height: "400px", outline: "1px solid blue", backgroundColor: "#fff" }}>Project</div>;
