export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "50px"
    }}>
      <h1>💖 Bun venit pe Amoria!</h1>
      <p>Platforma ta de dating unde dragostea începe cu un click.</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#e91e63",
          color: "white",
          cursor: "pointer"
        }}
      >
        Înregistrează-te
      </button>
    </div>
  );
}
