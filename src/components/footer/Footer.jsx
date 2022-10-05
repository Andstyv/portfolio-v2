export function Footer() {
  return (
    <footer
      style={{
        outline: "1px solid green",
        width: "100%",
        backgroundColor: "grey",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center", gap: "20px" }}>
        <div>Created by Anders Styve</div>
        <div>anders@bustbyte.no</div>
      </div>
    </footer>
  );
}
