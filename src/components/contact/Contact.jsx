export function Contact() {
  return (
    <section style={{ minHeight: "100vh", width: "100%", maxWidth: "1320px", position: "relative" }} id="contact">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <h2>Contact</h2>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "100px",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "400px",
            boxShadow: "2px 2px 10px rgba(0, 0,0, 0.5)",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <p>If you have any questions about me, my work, or just want to get in touch, don't hesitate to reach out!</p>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "0 auto", gap: "10px", width: "250px", fontSize: "24px", marginTop: "100px" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
              <i className="fab fa-linkedin"></i>Anders Styve
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
              <i className="fab fa-github"></i>Andstyv
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
              <i className="fas fa-envelope"></i>anders@bustbyte.no
            </div>
          </div>
        </div>
      </div>
      <div style={{ bottom: "20px", position: "absolute", display: "flex", width: "100%", justifyContent: "end" }}>
        <div style={{ color: "#fff" }}>
          <a href="#home" id="go-home" style={{ textDecoration: "none", fontSize: "32px", paddingRight: "20px" }}>
            <i className="fas fa-angle-double-up" style={{ marginRight: "20px" }}></i>Home
          </a>
        </div>
      </div>
    </section>
  );
}
