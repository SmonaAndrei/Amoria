export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>Bine ai venit pe Amoria 💖</h1>
      <p>Site-ul tău de dating este online și funcționează!</p>

      <a
        href="/admin"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#e91e63",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Intră ca Admin
      </a>
    </main>
  );
}
