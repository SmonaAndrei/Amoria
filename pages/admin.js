export default function Admin() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "50px"
    }}>
      <h1>🔑 Panou Admin - Amoria</h1>
      <p>Bun venit, Admin! Aici vei putea gestiona utilizatorii și abonamentele.</p>
      <ul style={{ marginTop: "30px", listStyle: "none", padding: 0 }}>
        <li>👥 Listă utilizatori</li>
        <li>💳 Abonamente active</li>
        <li>⚙️ Setări site</li>
      </ul>
    </div>
  );
}
