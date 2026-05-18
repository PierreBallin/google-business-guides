import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070f", color: "#e2e8f0", fontFamily: "'Georgia', serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", padding: "6px 18px", borderRadius: "20px", fontSize: "11px", fontFamily: "monospace", letterSpacing: "2px", color: "#fff", marginBottom: "16px" }}>
            GUIDES MAI 2026
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "400", color: "#f0ece4", margin: "0 0 12px", letterSpacing: "-0.5px" }}>
            Google Business Profile
          </h1>
          <p style={{ color: "#8b7cf6", fontSize: "16px", margin: "0 0 24px", fontFamily: "monospace", letterSpacing: "1px" }}>
            Optimisation complète 2026 · France, Europe, États-Unis
          </p>
          <p style={{ color: "#9ca3af", fontSize: "14px", maxWidth: "600px", margin: "0 auto" }}>
            Deux guides interactifs avec procédures détaillées, facteurs de classement, templates prêts à l'emploi, et stratégies d'audit clients.
          </p>
        </div>

        {/* Main Guides Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          
          {/* Guide 1 */}
          <Link href="/guides/google-business-profile" style={{ textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "12px",
              padding: "32px 24px",
              cursor: "pointer",
              transition: "all 0.3s",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(99,102,241,0.1)";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>📊</div>
                <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#c4b5fd", margin: "0 0 8px", letterSpacing: "0.5px" }}>
                  Guide Complet GBP
                </h2>
                <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0", lineHeight: "1.6" }}>
                  Procédures détaillées, facteurs de classement Whitespark, audit client interactif, et 100+ textes prêts à l'emploi.
                </p>
              </div>
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontSize: "11px", color: "#6366f1", fontFamily: "monospace", display: "inline-block", background: "rgba(99,102,241,0.2)", padding: "4px 10px", borderRadius: "10px" }}>
                  6 onglets · 12 étapes · Checklist interactive
                </div>
              </div>
            </div>
          </Link>

          {/* Guide 2 */}
          <Link href="/guides/google-avis-reponses" style={{ textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(245,158,11,0.1))",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "12px",
              padding: "32px 24px",
              cursor: "pointer",
              transition: "all 0.3s",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.15))";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(239,68,68,0.1)";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(245,158,11,0.1))";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>⭐</div>
                <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#fca5a5", margin: "0 0 8px", letterSpacing: "0.5px" }}>
                  Avis & Réponses
                </h2>
                <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0", lineHeight: "1.6" }}>
                  Stratégie de collecte, méthode 5 temps, psychologie clients, et 8 scénarios avec templates à copier.
                </p>
              </div>
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontSize: "11px", color: "#ef4444", fontFamily: "monospace", display: "inline-block", background: "rgba(239,68,68,0.2)", padding: "4px 10px", borderRadius: "10px" }}>
                  8 onglets · 30+ templates · Exemples concrets
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Stats Section */}
        <div style={{ background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "28px 24px", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "13px", fontFamily: "monospace", color: "#818cf8", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px", fontWeight: "600" }}>
            Par les chiffres
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" }}>
            {[
              { n: "46%", l: "des recherches ont intention locale" },
              { n: "82%", l: "utilisateurs mobiles choisissent après fiche" },
              { n: "17%", l: "du classement local = signaux avis" },
              { n: "4.5★", l: "note idéale (5.0 = suspect)" },
              { n: "88%", l: "lisent les réponses aux avis" },
              { n: "100%", l: "taux de réponse recommandé" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#818cf8", fontFamily: "monospace", marginBottom: "4px" }}>{s.n}</div>
                <div style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "12px", padding: "24px 22px", textAlign: "center" }}>
          <div style={{ marginBottom: "12px", fontSize: "13px", color: "#9ca3af" }}>
            <strong style={{ color: "#c4b5fd" }}>📅 Mis à jour :</strong> Mai 2026 · 
            <strong style={{ color: "#c4b5fd", marginLeft: "12px" }}>🌍 Couvre :</strong> France, Europe, États-Unis · 
            <strong style={{ color: "#c4b5fd", marginLeft: "12px" }}>📚 Sources :</strong> Whitespark, BrightLocal, Sterling Sky, Google Official
          </div>
          <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#6b7280" }}>
            Tous les guides incluent procédures détaillées, données 2026, templates prêts à copier, et exemples concrets de tous les secteurs.
          </p>
        </div>

      </div>
    </div>
  );
}
