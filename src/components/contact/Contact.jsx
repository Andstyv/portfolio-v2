export function Contact() {
  return (
    <section style={{ minHeight: "100vh", width: "100%", maxWidth: "1320px", outline: "2px solid red", position: "relative" }} id="contact">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <h2>Contact</h2>
      </div>
      <div style={{ display: "flex", marginTop: "100px", outline: "1px solid green", justifyContent: "center" }}>
        <div style={{ width: "400px", height: "400px", outline: "1px solid blue", backgroundColor: "#fff" }}>Contact</div>
      </div>
      <div style={{ outline: "2px solid yellow", bottom: "20px", position: "absolute", display: "flex", width: "100%", justifyContent: "end" }}>
        <div style={{ color: "#fff" }}>
          <a href="#home" style={{ color: "#fff", textDecoration: "none", fontSize: "32px" }}>
            <i class="far fa-hand-point-up" style={{ marginRight: "20px" }}></i>Go home
          </a>
        </div>
      </div>
    </section>
  );
}
