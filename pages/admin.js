import { useEffect, useState } from "react";

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // simplu: verifică dacă email-ul salvat în localStorage = admin
    const email = localStorage.getItem("user_email");
    if (email === "admin@example.com") {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) {
    return (
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Acces interzis 🚫</h1>
        <p>Doar administratorul poate intra aici.</p>
      </main>
    );
  }

  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>Panou Admin 🔑</h1>
      <p>Bine ai venit, admin@example.com!</p>

      <section style={{ marginTop: "30px" }}>
        <h2>Funcții viitoare:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✅ Gestionare utilizatori</li>
          <li>✅ Vizualizare abonamente</li>
          <li>✅ Controlul conținutului</li>
        </ul>
      </section>
    </main>
  );
}
