export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#f0885d",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "20px",
          fontSize: "24px",
          color: "#282c34",
          fontFamily: "Kanit, sans-serif",
        }}
      >
        <div>Created by Anders Styve</div>
        <div>anders@bustbyte.no</div>
      </div>
    </footer>
  );
}
