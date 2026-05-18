import { useState } from "react";

const tabs = [
  { id: "pourquoi", label: "📊 Pourquoi les avis" },
  { id: "collecte", label: "🎯 Collecter des avis" },
  { id: "methode", label: "🧠 La méthode 5 temps" },
  { id: "positifs", label: "⭐ Avis positifs" },
  { id: "negatifs", label: "🔴 Avis négatifs" },
  { id: "scenarios", label: "📋 Scénarios & templates" },
  { id: "seo", label: "🔍 SEO des réponses" },
  { id: "erreurs", label: "⚠️ Erreurs fatales" },
];

export default function AvisGuide() {
  const [activeTab, setActiveTab] = useState("pourquoi");
  const [copied, setCopied] = useState(null);
  const [openScenario, setOpenScenario] = useState(null);

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CopyBtn = ({ text, id }) => (
    <button onClick={() => copy(text, id)} style={{
      background: copied === id ? "rgba(34,197,94,0.2)" : "rgba(99,102,241,0.15)",
      border: "none", color: copied === id ? "#22c55e" : "#818cf8",
      padding: "4px 12px", borderRadius: "6px", cursor: "pointer",
      fontSize: "11px", fontFamily: "monospace", flexShrink: 0,
      transition: "all 0.2s",
    }}>{copied === id ? "✓ Copié" : "Copier"}</button>
  );

  const Template = ({ title, text, id, badge, badgeColor = "#6366f1", note }) => (
    <div style={{ background: "#080810", border: "1px solid #1e1e2e", borderRadius: "10px", marginBottom: "14px", overflow: "hidden" }}>
      <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", borderBottom: "1px solid #111120" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {badge && (
            <span style={{ background: badgeColor + "22", color: badgeColor, fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", padding: "2px 8px", borderRadius: "8px" }}>
              {badge}
            </span>
          )}
          <span style={{ color: "#c4b5fd", fontSize: "13px", fontWeight: "500" }}>{title}</span>
        </div>
        <CopyBtn text={text} id={id} />
      </div>
      <div style={{ padding: "14px 16px", fontFamily: "monospace", fontSize: "13px", color: "#a0aec0", lineHeight: 1.8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {text}
      </div>
      {note && (
        <div style={{ padding: "8px 16px 12px", fontSize: "12px", color: "#6b7280", borderTop: "1px solid #111120", display: "flex", alignItems: "flex-start", gap: "6px" }}>
          <span style={{ color: "#f59e0b", flexShrink: 0 }}>💡</span>
          {note}
        </div>
      )}
    </div>
  );

  const Pill = ({ text, color = "#6366f1" }) => (
    <span style={{ background: color + "18", color, fontSize: "11px", fontFamily: "monospace", padding: "3px 10px", borderRadius: "12px", display: "inline-block", marginRight: "6px", marginBottom: "6px" }}>{text}</span>
  );

  const Rule = ({ icon, title, body, highlight }) => (
    <div style={{ display: "flex", gap: "14px", padding: "16px", background: "#0d0d18", border: "1px solid #1e1e2e", borderRadius: "10px", marginBottom: "12px" }}>
      <span style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1.2 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: "600", color: highlight || "#c4b5fd", fontSize: "14px", marginBottom: "6px" }}>{title}</div>
        <p style={{ margin: 0, color: "#9ca3af", fontSize: "13.5px", lineHeight: 1.7 }}>{body}</p>
      </div>
    </div>
  );

  const scenarios = [
    {
      id: "s1",
      badge: "AVIS VAGUE / SANS DÉTAILS",
      star: "★★☆☆☆",
      color: "#ef4444",
      exemple: `"Déçu de la prestation."`,
      psycho: "Le client veut être entendu mais n'a pas pris le temps de développer. Il faut ouvrir le dialogue et montrer que vous prenez tous les retours au sérieux.",
      template: `Bonjour [Prénom],

Merci d'avoir pris le temps de nous laisser votre retour. Nous sommes sincèrement désolés que votre expérience n'ait pas répondu à vos attentes.

Les retours de nos clients sont notre première source d'amélioration, et nous aimerions mieux comprendre ce qui n'a pas fonctionné pour vous. Pourriez-vous nous contacter directement au [TÉLÉPHONE] ou par email à [EMAIL] afin que nous puissions échanger et trouver une solution ensemble ?

Nous restons à votre disposition.
[Prénom du gérant] – [NOM ENTREPRISE]`,
    },
    {
      id: "s2",
      badge: "PROBLÈME DE SERVICE / QUALITÉ",
      star: "★★☆☆☆",
      color: "#ef4444",
      exemple: `"Le technicien est arrivé en retard et le travail n'était pas terminé comme prévu."`,
      psycho: "La confiance est brisée. Il faut reconnaître les faits précis, ne pas se justifier longuement, montrer que vous agissez et proposer une solution concrète.",
      template: `Bonjour [Prénom],

Merci pour ce retour détaillé. Nous sommes vraiment désolés pour le retard de notre technicien et pour la prestation incomplète — ce n'est pas le niveau de service que nous voulons offrir à nos clients.

Nous avons immédiatement partagé votre retour avec notre équipe pour comprendre ce qui s'est passé et éviter que cela ne se reproduise. Nous aimerions beaucoup avoir l'occasion de corriger la situation : contactez-nous au [TÉLÉPHONE], nous trouverons une solution ensemble.

[Prénom du gérant] – [NOM ENTREPRISE]`,
    },
    {
      id: "s3",
      badge: "CRITIQUE SUR LE PRIX",
      star: "★★★☆☆",
      color: "#f59e0b",
      exemple: `"Prestation correcte mais vraiment trop chère pour ce que c'est."`,
      psycho: "Le client remet en question votre valeur. Rester factuel, réaffirmer votre positionnement sans être défensif, et valoriser ce qui justifie le prix.",
      template: `Bonjour [Prénom],

Merci pour votre retour et pour votre honnêteté. Nous comprenons que le rapport qualité-prix est un critère important.

Nos tarifs reflètent la qualité des matériaux utilisés, l'expertise de notre équipe et le soin apporté à chaque [prestation / produit]. Nous nous engageons à offrir un travail durable et sans mauvaise surprise.

Vos remarques nous aident cependant à mieux expliquer notre valeur ajoutée. N'hésitez pas à nous contacter au [TÉLÉPHONE] si vous souhaitez en discuter.

[Prénom du gérant] – [NOM ENTREPRISE]`,
    },
    {
      id: "s4",
      badge: "AVIS NÉGATIF + AGRESSIF",
      star: "★☆☆☆☆",
      color: "#ef4444",
      exemple: `"Escroquerie ! À fuir absolument ! Le pire service que j'ai jamais eu !!!"`,
      psycho: "Le client teste votre sang-froid. Votre réponse est lue par des centaines de prospects. Rester neutre, factuel, désarmer l'agressivité sans y répondre, rediriger vers un canal privé.",
      template: `Bonjour,

Merci d'avoir pris le temps de nous laisser votre avis. Nous prenons chaque retour client très au sérieux, quelle qu'en soit la teneur.

Nous regrettons sincèrement que votre expérience vous ait laissé une impression aussi négative. Les éléments évoqués ne correspondent pas à nos pratiques habituelles, et nous aimerions comprendre précisément ce qui s'est passé.

Pourriez-vous nous contacter directement au [TÉLÉPHONE] ou à [EMAIL] afin que nous puissions échanger en toute sérénité ? Nous restons à votre écoute.

[Prénom du gérant] – [NOM ENTREPRISE]`,
      note: "Ne jamais répondre sur le fond de l'agressivité. Votre réponse parle aux FUTURS clients, pas au client mécontent.",
    },
    {
      id: "s5",
      badge: "FAUX AVIS / ERREUR D'ÉTABLISSEMENT",
      star: "★☆☆☆☆",
      color: "#7c3aed",
      exemple: `"Avis très décevant" (mais aucun client de ce nom dans vos fichiers)`,
      psycho: "Rester professionnel, signaler factuellement l'incohérence, proposer un contact privé pour clarifier. Signaler l'avis à Google en parallèle.",
      template: `Bonjour [Prénom],

Merci pour votre message. Nous sommes surpris par ce retour, car après vérification dans nos registres, nous ne retrouvons pas trace de votre passage chez [NOM ENTREPRISE].

Si votre avis nous est bien destiné et qu'il y a eu une erreur de notre part, nous serions vraiment ravis d'échanger avec vous directement au [TÉLÉPHONE] pour clarifier la situation et trouver une solution.

Dans le cas contraire, il est possible que cet avis concerne un autre établissement. Nous avons donc signalé ce commentaire à Google.

[Prénom du gérant] – [NOM ENTREPRISE]`,
      note: "Signaler l'avis via le tableau de bord GBP → '...' → 'Signaler un avis'. Délai de traitement : 1 à 4 semaines.",
    },
    {
      id: "s6",
      badge: "AVIS MITIGÉ (3 ÉTOILES)",
      star: "★★★☆☆",
      color: "#f59e0b",
      exemple: `"Travail bien fait dans l'ensemble mais le chantier a pris une semaine de retard."`,
      psycho: "Ce type d'avis est une opportunité : le client reconnaît de la valeur mais signale un point d'amélioration. C'est le plus facile à transformer en ambassadeur.",
      template: `Bonjour [Prénom],

Merci pour ce retour équilibré et constructif. Nous sommes ravis que [l'aspect positif mentionné] ait répondu à vos attentes.

Nous avons bien noté votre remarque concernant [le délai / le problème]. Cela ne correspond pas à notre objectif de service, et nous travaillons activement à améliorer [ce point précis] pour nos prochains chantiers.

Votre avis nous est précieux pour progresser. Nous espérons avoir l'occasion de vous montrer un service encore plus fluide lors d'une prochaine collaboration.

[Prénom du gérant] – [NOM ENTREPRISE]`,
    },
    {
      id: "s7",
      badge: "AVIS SANS TEXTE (ÉTOILES SEULES)",
      star: "★★★★★",
      color: "#22c55e",
      exemple: `[5 étoiles, pas de commentaire]`,
      psycho: "Remercier chaleureusement et glisser une invitation à revenir ou à recommander. Court mais personnalisé.",
      template: `Bonjour [Prénom],

Merci pour ces 5 étoiles ! C'est très encourageant pour toute l'équipe de [NOM ENTREPRISE]. Nous espérons vous revoir très bientôt à [VILLE] !

[Prénom du gérant]`,
    },
    {
      id: "s8",
      badge: "CONCURRENT MALVEILLANT SUSPECTÉ",
      star: "★☆☆☆☆",
      color: "#7c3aed",
      exemple: `Avis d'un profil sans historique, sans photo, créé récemment, très virulent`,
      psycho: "Ne pas accuser publiquement. Rester factuel et professionnel. Signaler à Google. Collecter des preuves (IP, date, etc.) si litige.",
      template: `Bonjour,

Merci pour votre message. Après vérification, nous ne retrouvons pas votre profil parmi nos clients sur la période mentionnée.

Nous vous invitons à nous contacter directement au [TÉLÉPHONE] pour que nous puissions vérifier ensemble si une situation vous concernant a bien eu lieu chez [NOM ENTREPRISE].

[Prénom du gérant] – [NOM ENTREPRISE]`,
      note: "En parallèle : signaler l'avis à Google. Si persistance, contacter le support Google Business Profile avec preuves à l'appui.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#07070f", color: "#e2e8f0", fontFamily: "'Georgia', serif" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0c0c1a 0%, #160a28 60%, #0a161a 100%)", borderBottom: "1px solid #1a1a2e", padding: "36px 20px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 0%, rgba(239,68,68,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <span style={{ display: "inline-block", background: "linear-gradient(135deg, #ef4444, #f59e0b)", padding: "5px 16px", borderRadius: "20px", fontSize: "10px", fontFamily: "monospace", letterSpacing: "2px", color: "#fff", marginBottom: "14px" }}>
            GUIDE SPÉCIAL · MAI 2026
          </span>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: "400", color: "#f0ece4", margin: "0 0 10px", letterSpacing: "-0.3px" }}>
            Avis Google & Gestion des Réponses
          </h1>
          <p style={{ color: "#8b7cf6", fontSize: "14px", margin: "0 0 16px", fontFamily: "monospace" }}>
            Méthode complète · Psychologie · 30+ templates prêts à copier
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {[["17%", "du classement local"], ["88%", "lisent les réponses"], ["89%", "2e chance si excuse sincère"], ["4.2-4.5★", "converti mieux que 5.0★"]].map(([n, l], i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#f87171", fontFamily: "monospace" }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#6b7280" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: "#0a0a14", borderBottom: "1px solid #1a1a2e", overflowX: "auto", display: "flex", whiteSpace: "nowrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            background: "none", border: "none",
            borderBottom: activeTab === t.id ? "2px solid #ef4444" : "2px solid transparent",
            color: activeTab === t.id ? "#fca5a5" : "#555",
            padding: "13px 15px", fontSize: "12px", cursor: "pointer",
            fontFamily: "monospace", flexShrink: 0, transition: "all 0.2s",
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* POURQUOI */}
        {activeTab === "pourquoi" && (
          <div>
            <h2 style={h2}>Pourquoi les avis sont le levier n°1 en 2026</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "28px" }}>
              {[
                { n: "17%", l: "du classement local attribué aux signaux d'avis (Whitespark 2026)", c: "#ef4444" },
                { n: "88%", l: "des consommateurs lisent les réponses avant de choisir", c: "#f59e0b" },
                { n: "89%", l: "des clients déçus accordent une 2e chance si excuse personnalisée", c: "#22c55e" },
                { n: "4.5★", l: "note cible — un 5.0 parfait est suspect pour l'IA Google", c: "#818cf8" },
                { n: "90j", l: "fenêtre critique : les avis < 90 jours pèsent 3× plus", c: "#f87171" },
                { n: "100%", l: "taux de réponse requis (positifs + négatifs)", c: "#6366f1" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#0d0d1a", border: `1px solid ${s.c}30`, borderTop: `3px solid ${s.c}`, borderRadius: "10px", padding: "16px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: "700", color: s.c, fontFamily: "monospace", marginBottom: "8px" }}>{s.n}</div>
                  <div style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.5 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <h3 style={h3}>Ce que Google analyse dans vos avis</h3>
            {[
              { icon: "📈", title: "La vélocité (flux régulier)", body: "Un flux constant de 4 à 8 avis par mois prime sur 50 avis en une semaine puis plus rien. Google interprète la régularité comme un signe de santé commerciale continue. La vélocité est plus importante que le volume total.", highlight: "#22c55e" },
              { icon: "🕐", title: "La fraîcheur (avis < 90 jours)", body: "Les avis de moins de 90 jours ont un poids algorithmique bien supérieur aux anciens. Une fiche sans avis récents depuis 3+ mois perd progressivement ses positions dans le Local Pack, même si elle a 200 avis au total.", highlight: "#f59e0b" },
              { icon: "🔤", title: "La richesse sémantique des textes d'avis", body: "Google indexe les mots utilisés dans les avis clients. Un avis mentionnant naturellement « plombier rapide Nantes », « remplacement chauffe-eau » ou « intervention urgence week-end » enrichit la couverture sémantique de votre fiche — gratuitement.", highlight: "#818cf8" },
              { icon: "⭐", title: "La note moyenne", body: "Le seuil recommandé est 4.5★. En dessous de 4.0, vous perdez des positions. En dessous de 3.0, 71% des consommateurs ne vous considèrent même pas. Paradoxalement, une note 5.0 parfaite est désormais signalée par l'IA Google comme potentiellement manipulée (filtre Review-EAT 2026).", highlight: "#f87171" },
              { icon: "💬", title: "La réactivité du propriétaire", body: "Google analyse votre taux de réponse et votre délai. Un taux < 80% fait baisser le score E-E-A-T. Répondre à 100% des avis, positifs ET négatifs, est devenu un facteur de classement en 2026, et non plus seulement un signal de confiance.", highlight: "#6366f1" },
              { icon: "🤖", title: "Le sentiment (pour l'IA)", body: "L'IA de Google et Gemini analysent le sentiment global des avis pour alimenter les AI Overviews et les réponses conversationnelles. Un profil avec des avis mentionnant « rapide », « professionnel », « à l'heure » sera cité comme argument dans les résumés IA locaux.", highlight: "#a855f7" },
            ].map((r, i) => <Rule key={i} {...r} />)}

            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "10px", padding: "18px 20px", marginTop: "20px" }}>
              <h3 style={{ ...h3, marginTop: 0, color: "#f87171" }}>⚡ La règle d'or 2026</h3>
              <p style={{ margin: 0, color: "#9ca3af", lineHeight: 1.8, fontSize: "14px" }}>
                <strong style={{ color: "#fca5a5" }}>Volume + Vélocité + Fraîcheur + Réponses 100% = domination du Local Pack.</strong>
                <br />
                Une entreprise avec 80 avis bien répartis sur 12 mois et 100% de réponses bat systématiquement une concurrente avec 200 avis cumulés sur 3 ans et aucune réponse. La qualité de la gestion prime sur le volume brut.
              </p>
            </div>
          </div>
        )}

        {/* COLLECTE */}
        {activeTab === "collecte" && (
          <div>
            <h2 style={h2}>Stratégie de collecte d'avis — éthique & efficace</h2>

            <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "10px", padding: "16px 18px", marginBottom: "24px" }}>
              <strong style={{ color: "#f87171", fontSize: "13px" }}>🚨 INTERDIT par Google :</strong>
              <p style={{ margin: "6px 0 0", color: "#9ca3af", fontSize: "13px" }}>Offrir une remise, un cadeau, ou n'importe quel incentive en échange d'un avis positif. Risque de suppression des avis + suspension de la fiche. Jamais d'achat d'avis.</p>
            </div>

            <h3 style={h3}>Le moment idéal pour demander un avis</h3>
            {[
              { icon: "🎉", title: "Juste après la prestation", body: "C'est le moment où l'enthousiasme est à son maximum. Demandez en face à face, avec chaleur : « Si vous êtes satisfait, un avis Google nous aide vraiment. C'est moins de 2 minutes. » La probabilité est 3× plus élevée qu'une relance par email." },
              { icon: "📦", title: "À la livraison ou remise du produit", body: "Pour les artisans et commerçants : au moment de remettre la clé, la facture, ou le produit fini. Le client voit le résultat devant lui — la satisfaction est instantanée." },
              { icon: "📧", title: "Email de suivi J+2 à J+5", body: "Envoyer un email de suivi 2 à 5 jours après la prestation. Pas trop tôt (l'enthousiasme est frais), pas trop tard (risque d'oubli). Inclure le lien direct vers la fiche de dépôt d'avis." },
              { icon: "📱", title: "SMS avec lien direct", body: "Le SMS a un taux d'ouverture de 95% vs 20% pour l'email. Court, personnel, avec le prénom du client et le lien direct. C'est le canal le plus efficace en 2026." },
            ].map((r, i) => <Rule key={i} {...r} />)}

            <h3 style={h3}>Les 4 outils de collecte à mettre en place</h3>
            {[
              {
                title: "Lien direct vers le formulaire d'avis",
                body: "Dans le tableau de bord Google Business Profile → Obtenir plus d'avis → Copier le lien court. Ce lien amène directement à la popup de dépôt d'avis. À intégrer dans : signatures email, SMS, factures, cartes de visite.",
                how: "GBP Dashboard → 'Obtenir plus d'avis' → Copier le lien",
              },
              {
                title: "QR Code en point de vente",
                body: "Générer un QR code pointant vers votre lien d'avis. L'imprimer sur : le comptoir de caisse, la porte d'entrée, la carte de menu (restaurants), les bons de livraison, les véhicules de l'entreprise.",
                how: "Utiliser QR Code Generator (gratuit) avec votre lien GBP",
              },
              {
                title: "Carte physique NFC / remerciement",
                body: "Une petite carte 'Merci de votre confiance' avec QR code et message personnalisé, glissée dans le sac, la boîte, ou remise en main propre. Taux de conversion meilleur qu'un email car effet 'cadeau'.",
                how: "Services comme Tap.bio, Popl ou cartes imprimées personnalisées",
              },
              {
                title: "Message WhatsApp post-prestation",
                body: "Pour les artisans et services à domicile : WhatsApp Business avec message pré-rédigé + lien direct. Taux de réponse très élevé, ton plus chaleureux qu'un email.",
                how: "WhatsApp Business → Réponses rapides → Message de demande d'avis",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: "10px", padding: "16px 18px", marginBottom: "12px" }}>
                <div style={{ fontWeight: "600", color: "#c4b5fd", fontSize: "14px", marginBottom: "8px" }}>{item.title}</div>
                <p style={{ margin: "0 0 8px", color: "#9ca3af", fontSize: "13.5px", lineHeight: 1.65 }}>{item.body}</p>
                <div style={{ fontSize: "12px", color: "#6366f1", fontFamily: "monospace", background: "rgba(99,102,241,0.08)", padding: "5px 10px", borderRadius: "6px", display: "inline-block" }}>
                  → {item.how}
                </div>
              </div>
            ))}

            <h3 style={h3}>Templates de demande d'avis prêts à l'emploi</h3>

            <Template
              id="sms1"
              badge="SMS — APRÈS PRESTATION"
              badgeColor="#22c55e"
              title="SMS court et direct"
              text={`Bonjour [PRÉNOM] 😊 Merci pour votre confiance ! Si vous êtes satisfait(e), un petit avis Google nous aide beaucoup et prend moins de 2 min 🙏
[LIEN DIRECT GBP]
À bientôt ! – [PRÉNOM GÉRANT], [NOM ENTREPRISE]`}
              note="Personnaliser avec le prénom — taux de clic doublé vs message générique."
            />

            <Template
              id="email1"
              badge="EMAIL — J+3"
              badgeColor="#818cf8"
              title="Email de suivi post-prestation"
              text={`Objet : [PRÉNOM], avez-vous été satisfait(e) ?

Bonjour [PRÉNOM],

Merci encore pour votre confiance. Nous espérons que [la prestation / votre commande / votre visite] a répondu à vos attentes.

Si c'est le cas, un avis Google nous aiderait vraiment à développer notre activité et à aider d'autres clients à nous trouver. Ça prend moins de 2 minutes :

👉 [LIEN DIRECT GBP]

Un grand merci d'avance, et à très bientôt !

[PRÉNOM GÉRANT]
[NOM ENTREPRISE] – [TÉLÉPHONE]`}
              note="L'objet question crée une curiosité naturelle. Taux d'ouverture +15% vs 'Laissez-nous un avis'."
            />

            <Template
              id="oral1"
              badge="SCRIPT ORAL — EN FACE À FACE"
              badgeColor="#f59e0b"
              title="Script pour demander un avis de vive voix"
              text={`"[PRÉNOM], je suis ravi que la prestation vous convienne. On est une petite équipe et les avis Google font vraiment la différence pour nous. Est-ce que ça vous embêterait de nous laisser un petit avis ? Je vous envoie le lien directement sur votre téléphone — ça prend 1 minute."`}
              note="Utiliser le prénom, parler à la 1ère personne, mentionner l'effort minimum requis. Ne pas dire 'un avis positif' — le client décide."
            />
          </div>
        )}

        {/* MÉTHODE 5 TEMPS */}
        {activeTab === "methode" && (
          <div>
            <h2 style={h2}>La méthode universelle en 5 temps</h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>
              Cette structure fonctionne pour <strong style={{ color: "#c4b5fd" }}>tout type d'avis</strong>, quel que soit le secteur ou la gravité. Adaptez le ton, pas la structure.
            </p>

            {[
              { step: "01", label: "REMERCIEMENT PERSONNALISÉ", color: "#6366f1", icon: "🙏",
                desc: "Commencer par remercier le client d'avoir pris le temps de partager son expérience. Utiliser son prénom si visible dans l'avis.",
                do: ["Merci [Prénom] pour ce retour.", "Merci d'avoir pris le temps de nous partager votre expérience."],
                dont: ["Merci pour votre avis.", "Cher client,"],
                why: "Ça désarme immédiatement l'agressivité et humanise l'échange. Le prénom = preuve que l'avis a été lu, pas copié-collé." },
              { step: "02", label: "RECONNAISSANCE DU RESSENTI", color: "#8b5cf6", icon: "❤️",
                desc: "Valider l'expérience du client sans forcément admettre la faute. L'objectif : montrer de l'empathie.",
                do: ["Nous comprenons parfaitement votre frustration.", "Ce n'est pas l'expérience que nous souhaitons vous offrir."],
                dont: ["Vous avez tort.", "C'est de votre faute si…", "Nous avons suivi nos procédures."],
                why: "Le client veut être entendu avant d'être corrigé. Valider le ressenti ne signifie pas admettre une erreur." },
              { step: "03", label: "EXPLICATION FACTUELLE (COURTE)", color: "#a855f7", icon: "📋",
                desc: "Si pertinent, apporter une explication brève et factuelle — jamais défensive, jamais longue.",
                do: ["La période de fin d'année génère un volume de demandes plus élevé que d'habitude."],
                dont: ["Nous ne sommes pas responsables car...", "C'est impossible, nous avons toujours...", "(Un long paragraphe de justification)"],
                why: "L'explication rassure les futurs clients. Trop longue = impression de vous défendre. Une phrase suffit." },
              { step: "04", label: "SOLUTION CONCRÈTE", color: "#d946ef", icon: "🛠️",
                desc: "Proposer une action ou un contact direct. Ne jamais laisser la situation ouverte sans sortie.",
                do: ["Contactez-nous au [TÈLÉPHONE] pour trouver une solution ensemble.", "Nous allons vous recontacter dans les 24h."],
                dont: ["Nous allons étudier votre dossier.", "(Aucune proposition concrète)"],
                why: "La solution = preuve que vous agissez. 70% des clients mécontents reviennent si une solution est proposée." },
              { step: "05", label: "FERMETURE POSITIVE", color: "#ec4899", icon: "🌟",
                desc: "Terminer sur une note constructive, ouverte, sans résignation.",
                do: ["Nous espérons avoir l'occasion de vous démontrer notre engagement.", "Nous restons à votre écoute."],
                dont: ["Bonne journée quand même.", "(Finir sur la défensive)"],
                why: "La fermeture est ce que le prospect retient. Elle doit signaler : 'cette entreprise sait gérer ses erreurs avec classe.'" },
            ].map((step, i) => (
              <div key={i} style={{ border: `1px solid ${step.color}30`, borderLeft: `4px solid ${step.color}`, borderRadius: "10px", padding: "18px 20px", marginBottom: "16px", background: "#0a0a14" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: step.color, color: "#fff", borderRadius: "8px", padding: "4px 10px", fontFamily: "monospace", fontWeight: "700", fontSize: "12px", flexShrink: 0 }}>
                    {step.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "monospace", color: step.color, fontSize: "11px", letterSpacing: "2px", marginBottom: "6px" }}>{step.label}</div>
                    <p style={{ margin: "0 0 12px", color: "#c4b5fd", fontSize: "14px" }}>{step.desc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "8px", padding: "10px" }}>
                        <div style={{ fontSize: "11px", color: "#22c55e", fontFamily: "monospace", marginBottom: "6px" }}>✓ À DIRE</div>
                        {step.do.map((d, j) => <p key={j} style={{ margin: "0 0 4px", color: "#9ca3af", fontSize: "12px", fontStyle: "italic" }}>« {d} »</p>)}
                      </div>
                      <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px" }}>
                        <div style={{ fontSize: "11px", color: "#ef4444", fontFamily: "monospace", marginBottom: "6px" }}>✕ À ÉVITER</div>
                        {step.dont.map((d, j) => <p key={j} style={{ margin: "0 0 4px", color: "#9ca3af", fontSize: "12px", fontStyle: "italic" }}>« {d} »</p>)}
                      </div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280", fontStyle: "italic" }}>💡 {step.why}</div>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "10px", padding: "18px 20px", marginTop: "8px" }}>
              <h3 style={{ ...h3, marginTop: 0, color: "#818cf8" }}>⏱️ Timing de la réponse</h3>
              <p style={{ margin: 0, color: "#9ca3af", fontSize: "14px", lineHeight: 1.75 }}>
                <strong style={{ color: "#c4b5fd" }}>Délai cible : sous 48h</strong> pour tout type d'avis.<br />
                Pour les avis négatifs : attendre <strong style={{ color: "#c4b5fd" }}>2 à 4 heures</strong> minimum avant de répondre (éviter les réponses à chaud). Rédiger la réponse dans un document à part, la relire à tête reposée, puis publier.<br />
                <strong style={{ color: "#f87171" }}>Ne jamais répondre dans la minute</strong> à un avis agressif — ça donne l'impression d'une surveillance permanente et d'une réponse émotionnelle.
              </p>
            </div>
          </div>
        )}

        {/* POSITIFS */}
        {activeTab === "positifs" && (
          <div>
            <h2 style={h2}>Réponses aux avis positifs — l'art du SEO caché</h2>

            <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "10px", padding: "16px 18px", marginBottom: "24px" }}>
              <p style={{ margin: 0, color: "#9ca3af", fontSize: "14px", lineHeight: 1.75 }}>
                <strong style={{ color: "#86efac" }}>Secret peu connu :</strong> les réponses aux avis positifs sont indexées par Google et enrichissent la couverture sémantique de votre fiche.
                Chaque réponse est une opportunité d'insérer naturellement des mots-clés locaux et métier — gratuitement et légitimement.
              </p>
            </div>

            <h3 style={h3}>Les 3 règles d'or des réponses aux avis positifs</h3>
            {[
              { icon: "🎯", title: "Personnaliser avec le détail mentionné", body: "Reprendre un élément précis cité dans l'avis dans votre réponse. Prouve que vous avez lu l'avis et n'avez pas copié-collé. Ex : si le client mentionne 'le technicien Paul', répondre 'Nous transmettrons votre satisfaction à Paul et à toute l'équipe.'" },
              { icon: "🔍", title: "Glisser 1 mot-clé naturellement", body: "Intégrer le nom du service mentionné par le client + la ville si pertinente. Ex : 'Merci pour cette note sur notre service de [plomberie] à [Bordeaux]'. Google indexe les réponses — c'est du SEO gratuit." },
              { icon: "✂️", title: "Rester court et sincère", body: "3 à 5 phrases maximum. Une réponse trop longue à un avis positif paraît commerciale ou désespérée. L'objectif : chaleur + fidélisation + 1 mot-clé. Pas un discours de vente." },
            ].map((r, i) => <Rule key={i} {...r} highlight="#22c55e" />)}

            <h3 style={h3}>Templates — Avis positifs par contexte</h3>

            <Template id="p1" badge="5 ★ — LONG & DÉTAILLÉ" badgeColor="#22c55e" title="Réponse à un avis développé"
              text={`Merci infiniment [PRÉNOM] pour ce retour si complet et si généreux !

Votre satisfaction concernant [ÉLÉMENT PRÉCIS MENTIONNÉ] est vraiment notre meilleure récompense. C'est exactement pour ça que toute l'équipe de [NOM ENTREPRISE] s'investit chaque jour dans son travail.

Nous serons ravis de vous accueillir de nouveau à [VILLE] pour votre prochain [projet / commande / rendez-vous]. N'hésitez pas à nous recommander autour de vous 🙏

[PRÉNOM GÉRANT] – [NOM ENTREPRISE]`}
              note="Reprendre l'élément précis cité = preuve de lecture. La recommandation en fin = CTA déguisé en gratitude." />

            <Template id="p2" badge="5 ★ — SANS TEXTE" badgeColor="#22c55e" title="Réponse à une note seule (sans commentaire)"
              text={`Bonjour [PRÉNOM], merci pour ces 5 étoiles ! 😊

Nous sommes ravis que votre expérience chez [NOM ENTREPRISE] à [VILLE] vous ait satisfait(e). C'est un vrai encouragement pour toute l'équipe.

À très bientôt !
[PRÉNOM GÉRANT]`}
              note="Court, personnel, avec localité. Même court, c'est du signal SEO local." />

            <Template id="p3" badge="4 ★ — MENTION D'UN POINT MITIGÉ" badgeColor="#f59e0b" title="Réponse à un 4 étoiles avec remarque"
              text={`Bonjour [PRÉNOM],

Merci beaucoup pour cette note et pour votre honnêteté ! Nous sommes ravis que [POINT POSITIF MENTIONNÉ] ait été au rendez-vous.

Nous avons noté votre remarque sur [POINT MITIGÉ] — c'est un retour précieux qui nous aide à améliorer notre [service / accueil / délai]. Nous travaillons justement à y apporter des améliorations.

Merci encore et à très bientôt à [VILLE] !

[PRÉNOM GÉRANT] – [NOM ENTREPRISE]`}
              note="Un 4 étoiles bien géré peut se transformer en 5 lors d'une prochaine visite. Montrez que vous évoluez." />

            <Template id="p4" badge="5 ★ — CLIENT RÉGULIER" badgeColor="#22c55e" title="Réponse à un client fidèle"
              text={`[PRÉNOM], merci pour cette fidélité qui nous touche vraiment !

C'est toujours un plaisir de vous accueillir et de vous accompagner dans vos [projets / achats / soins]. Votre confiance nous motive à nous améliorer en permanence.

À très bientôt !
[PRÉNOM GÉRANT] – [NOM ENTREPRISE]`} />

            <Template id="p5" badge="PROFESSIONNEL B2B" badgeColor="#6366f1" title="Réponse à un avis d'entreprise (B2B)"
              text={`Bonjour [PRÉNOM / NOM ENTREPRISE],

Merci pour cette collaboration et pour le temps que vous avez pris pour partager votre expérience. C'est exactement le type de partenariat que nous cherchons à construire avec nos clients professionnels.

Nous sommes heureux que [ÉLÉMENT MENTIONNÉ] ait répondu à vos attentes. Nous restons à votre disposition pour tous vos prochains besoins en [DOMAINE].

[PRÉNOM GÉRANT] – [NOM ENTREPRISE]`} />

            <div style={{ background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: "10px", padding: "16px 18px", marginTop: "20px" }}>
              <h3 style={{ ...h3, marginTop: 0 }}>🔍 Formules avec mots-clés SEO intégrés</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "12px" }}>À glisser naturellement dans vos réponses pour enrichir la sémantique de votre fiche :</p>
              {[
                "…notre service de [NOM DU SERVICE] à [VILLE]…",
                "…votre projet de [NOM DU PROJET] dans [QUARTIER / COMMUNE]…",
                "…toute l'équipe de [NOM ENTREPRISE] spécialisée en [DOMAINE]…",
                "…pour votre prochain [SERVICE] à [VILLE] ou dans les environs…",
                "…notre [ATELIER / BOUTIQUE / CABINET] situé à [ADRESSE COURTE]…",
              ].map((f, i) => (
                <div key={i} style={{ fontFamily: "monospace", fontSize: "12.5px", color: "#818cf8", padding: "5px 0", borderBottom: i < 4 ? "1px solid #111120" : "none" }}>
                  {f}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NÉGATIFS */}
        {activeTab === "negatifs" && (
          <div>
            <h2 style={h2}>Répondre aux avis négatifs — stratégie & psychologie</h2>

            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "10px", padding: "16px 18px", marginBottom: "24px" }}>
              <p style={{ margin: 0, color: "#9ca3af", fontSize: "14px", lineHeight: 1.75 }}>
                <strong style={{ color: "#fca5a5" }}>Changement de perspective :</strong> votre réponse à un avis négatif ne s'adresse pas au client mécontent — elle s'adresse à <strong style={{ color: "#fca5a5" }}>tous les prospects qui liront cet échange</strong> dans les semaines et mois suivants. Une réponse professionnelle à une critique peut convertir un prospect hésitant mieux qu'une dizaine d'avis 5 étoiles.
              </p>
            </div>

            <h3 style={h3}>Les 3 profils psychologiques de clients négatifs</h3>
            {[
              { icon: "😔", title: "Le client déçu (avis légitime)", body: "Son attente n'a pas été comblée, parfois pour des raisons objectives. Il cherche à être ENTENDU avant tout. Réponse : empathie maximale, reconnaissance du problème, solution concrète.", color: "#f59e0b" },
              { icon: "🔎", title: "Le client pointilleux (critique détaillée)", body: "Il a listé précisément chaque problème. Il veut de la rigueur et de la précision dans la réponse. Ne pas être vague — répondre point par point si les éléments sont factuels et justifiés.", color: "#818cf8" },
              { icon: "💢", title: "Le client agressif (avis virulent)", body: "Sa frustration déborde dans le ton. Il teste votre sang-froid. Ne jamais répondre au ton, uniquement aux faits. Votre neutralité professionnelle est votre arme. Rediriger vers un canal privé.", color: "#ef4444" },
            ].map((r, i) => <Rule key={i} {...r} highlight={r.color} />)}

            <h3 style={h3}>Ce que votre réponse doit accomplir (dans l'ordre)</h3>
            <ol style={{ paddingLeft: "20px", color: "#9ca3af", lineHeight: 2, fontSize: "14px" }}>
              <li><strong style={{ color: "#c4b5fd" }}>Rassurer les prospects</strong> que vous gérez professionnellement les problèmes</li>
              <li><strong style={{ color: "#c4b5fd" }}>Montrer votre culture client</strong> — vous êtes à l'écoute et vous agissez</li>
              <li><strong style={{ color: "#c4b5fd" }}>Désamorcer le client mécontent</strong> pour éviter une escalade publique</li>
              <li><strong style={{ color: "#c4b5fd" }}>Protéger votre E-E-A-T</strong> — Google valorise les profils qui gèrent leurs avis négatifs</li>
            </ol>

            <h3 style={h3}>Règles absolues pour les avis négatifs</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
              {[
                { ok: true, t: "Attendre 2-4h avant de répondre" },
                { ok: true, t: "Rédiger dans un doc séparé avant de publier" },
                { ok: true, t: "Utiliser le prénom si disponible" },
                { ok: true, t: "Proposer un contact privé (tel/email)" },
                { ok: true, t: "Reconnaître le ressenti (pas forcément la faute)" },
                { ok: true, t: "Rester sous 120 mots" },
                { ok: false, t: "Répondre sous le coup de l'émotion" },
                { ok: false, t: "Nier les faits ou accuser le client" },
                { ok: false, t: "Mentionner des infos confidentielles" },
                { ok: false, t: "Copier-coller la même réponse" },
                { ok: false, t: "Être sarcastique ou condescendant" },
                { ok: false, t: "Demander publiquement de modifier l'avis" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", padding: "8px 12px", background: item.ok ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.05)", border: `1px solid ${item.ok ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`, borderRadius: "8px" }}>
                  <span style={{ color: item.ok ? "#22c55e" : "#ef4444", fontWeight: "700", flexShrink: 0 }}>{item.ok ? "✓" : "✕"}</span>
                  <span style={{ fontSize: "12.5px", color: "#9ca3af" }}>{item.t}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "10px", padding: "16px 18px" }}>
              <h3 style={{ ...h3, marginTop: 0 }}>💡 Le signal positif des avis 4.2-4.5★</h3>
              <p style={{ margin: 0, color: "#9ca3af", fontSize: "14px", lineHeight: 1.75 }}>
                Une note <strong style={{ color: "#c4b5fd" }}>4.2 à 4.5 étoiles avec des avis négatifs bien gérés</strong> convertit statistiquement mieux qu'un profil 5.0 parfait. Les consommateurs savent qu'un 5.0 sans avis négatif est soit artificiel, soit un profil peu actif. L'imperfection authentiquement gérée inspire davantage confiance que la perfection suspecte.
              </p>
            </div>
          </div>
        )}

        {/* SCÉNARIOS */}
        {activeTab === "scenarios" && (
          <div>
            <h2 style={h2}>8 scénarios d'avis — Templates complets</h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>
              Cliquer sur un scénario pour développer. Chaque template est personnalisable et copier-collable.
            </p>

            {scenarios.map((s, i) => (
              <div key={s.id} style={{ marginBottom: "12px" }}>
                <div
                  onClick={() => setOpenScenario(openScenario === s.id ? null : s.id)}
                  style={{ cursor: "pointer", background: "#0d0d1a", border: `1px solid ${s.color}30`, borderLeft: `4px solid ${s.color}`, borderRadius: "10px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ background: s.color + "20", color: s.color, fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", padding: "2px 8px", borderRadius: "8px" }}>{s.badge}</span>
                    <span style={{ color: "#f59e0b", fontSize: "13px" }}>{s.star}</span>
                  </div>
                  <span style={{ color: "#555", fontSize: "12px" }}>{openScenario === s.id ? "▲" : "▼"}</span>
                </div>

                {openScenario === s.id && (
                  <div style={{ background: "#080810", border: `1px solid ${s.color}20`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: "18px 18px" }}>
                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ fontSize: "11px", color: "#555", fontFamily: "monospace", marginBottom: "6px" }}>EXEMPLE D'AVIS REÇU</div>
                      <div style={{ fontStyle: "italic", color: "#9ca3af", fontSize: "13px", background: "#0a0a18", padding: "10px 14px", borderRadius: "8px", borderLeft: `3px solid ${s.color}` }}>
                        {s.exemple}
                      </div>
                    </div>
                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ fontSize: "11px", color: "#555", fontFamily: "monospace", marginBottom: "6px" }}>PSYCHOLOGIE DU CLIENT</div>
                      <p style={{ margin: 0, color: "#818cf8", fontSize: "13px", lineHeight: 1.65 }}>{s.psycho}</p>
                    </div>
                    <div style={{ fontSize: "11px", color: "#555", fontFamily: "monospace", marginBottom: "8px" }}>TEMPLATE DE RÉPONSE</div>
                    <div style={{ background: "#050508", border: "1px solid #1e1e2e", borderRadius: "8px", padding: "14px 16px" }}>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "8px" }}>
                        <CopyBtn text={s.template} id={s.id + "_t"} />
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#a5b4fc", lineHeight: 1.8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {s.template}
                      </div>
                    </div>
                    {s.note && (
                      <div style={{ marginTop: "10px", fontSize: "12px", color: "#6b7280", display: "flex", gap: "6px" }}>
                        <span style={{ color: "#f59e0b" }}>💡</span>
                        {s.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SEO */}
        {activeTab === "seo" && (
          <div>
            <h2 style={h2}>Le SEO caché dans les réponses aux avis</h2>

            <div style={{ background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "10px", padding: "18px 20px", marginBottom: "24px" }}>
              <p style={{ margin: 0, color: "#c4b5fd", fontSize: "15px", lineHeight: 1.75, fontStyle: "italic" }}>
                "Google indexe les réponses aux avis et les intègre dans l'évaluation sémantique de votre fiche. C'est un levier de référencement naturel accessible et souvent ignoré par les entreprises."
              </p>
              <p style={{ margin: "10px 0 0", color: "#6b7280", fontSize: "12px" }}>— Source : Référencement-du-pro.com, étude 2026</p>
            </div>

            <h3 style={h3}>Principe fondamental</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>
              Chaque réponse que vous publiez est du contenu indexable par Google. Les mots-clés que vous utilisez dans vos réponses enrichissent le profil sémantique de votre fiche — exactement comme le ferait une description ou un Google Post, mais avec un signal d'authenticité supplémentaire (c'est une conversation réelle).
            </p>

            <h3 style={h3}>Comment intégrer les mots-clés sans paraître artificiel</h3>
            {[
              {
                icon: "📍",
                title: "Localisation géographique",
                bad: "Merci pour votre avis, à bientôt !",
                good: "Merci [PRÉNOM] ! Toute l'équipe de [NOM ENTREPRISE] à [VILLE] est ravie de vous avoir satisfait.",
                why: "La combinaison Nom entreprise + Ville est le signal local le plus direct que vous pouvez injecter.",
              },
              {
                icon: "🔧",
                title: "Nom du service exact",
                bad: "Nous sommes contents que la prestation vous ait plu.",
                good: "Nous sommes ravis que votre [installation de chauffe-eau thermodynamique] se soit passée comme prévu.",
                why: "Reprendre le service mentionné dans l'avis renforce la correspondance pour les requêtes longue traîne.",
              },
              {
                icon: "🏷️",
                title: "Qualificatif métier",
                bad: "Merci pour votre confiance.",
                good: "Merci de faire confiance à nos [artisans certifiés RGE] pour votre projet.",
                why: "Les certifications, labels et spécialités dans les réponses renforcent le signal E-E-A-T.",
              },
              {
                icon: "📅",
                title: "Temporalité (sans forcer)",
                bad: "N'hésitez pas à revenir.",
                good: "Nous espérons vous revoir pour votre prochain projet [de rénovation / d'été / saisonnier].",
                why: "Introduit une temporalité naturelle et des requêtes saisonnières.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: "10px", padding: "16px 18px", marginBottom: "12px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                  <span style={{ fontWeight: "600", color: "#c4b5fd", fontSize: "14px" }}>{item.title}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "10px", color: "#ef4444", fontFamily: "monospace", marginBottom: "5px" }}>✕ SANS MOT-CLÉ</div>
                    <div style={{ color: "#9ca3af", fontSize: "12.5px", fontStyle: "italic" }}>{item.bad}</div>
                  </div>
                  <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "10px", color: "#22c55e", fontFamily: "monospace", marginBottom: "5px" }}>✓ AVEC MOT-CLÉ</div>
                    <div style={{ color: "#9ca3af", fontSize: "12.5px", fontStyle: "italic" }}>{item.good}</div>
                  </div>
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280", fontStyle: "italic" }}>→ {item.why}</div>
              </div>
            ))}

            <h3 style={h3}>Encourager des avis riches sémantiquement</h3>
            <div style={{ background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: "10px", padding: "16px 18px" }}>
              <p style={{ margin: "0 0 12px", color: "#9ca3af", fontSize: "13.5px", lineHeight: 1.7 }}>
                Vous pouvez légalement <strong style={{ color: "#c4b5fd" }}>orienter vos clients vers un avis plus riche</strong> sans leur dicter quoi écrire. En demandant des précisions dans votre message de sollicitation, vous augmentez la probabilité qu'ils mentionnent des détails SEO-utiles.
              </p>
              <div style={{ background: "#050508", borderRadius: "8px", padding: "14px 16px", fontFamily: "monospace", fontSize: "13px", color: "#a5b4fc", lineHeight: 1.8 }}>
                {`Version basique : "Laissez-nous un avis Google 😊"

Version enrichie : "Si vous souhaitez nous aider, n'hésitez pas à mentionner le service que vous avez utilisé et ce qui vous a le plus satisfait. C'est très utile pour d'autres clients qui cherchent le même type de prestation."`}
              </div>
              <p style={{ margin: "10px 0 0", color: "#6b7280", fontSize: "12px" }}>
                💡 Un avis mentionnant naturellement « plombier réactif Nantes week-end » enrichit votre fiche pour cette requête précise — gratuitement.
              </p>
            </div>
          </div>
        )}

        {/* ERREURS */}
        {activeTab === "erreurs" && (
          <div>
            <h2 style={h2}>Les erreurs fatales — à ne jamais commettre</h2>

            {[
              {
                n: "01",
                title: "Répondre à chaud (sous la colère)",
                danger: "CRITIQUE",
                color: "#ef4444",
                body: "Une réponse émotionnelle à un avis négatif peut déclencher une crise de réputation beaucoup plus visible que l'avis original. Les mots choisis sous l'effet de la frustration paraissent agressifs ou défensifs aux yeux des centaines de prospects qui liront cet échange pendant des mois.",
                fix: "Règle absolue : attendre minimum 2 heures. Rédiger dans un doc séparé. Faire relire par un tiers si possible. Publier à tête reposée."
              },
              {
                n: "02",
                title: "Copier-coller la même réponse",
                danger: "ÉLEVÉ",
                color: "#f59e0b",
                body: "Google valorise les réponses uniques. Des réponses identiques ou quasi-identiques envoient un signal d'automatisation qui nuit à l'E-E-A-T. Les clients qui voient la même formule répétée sur tous les avis perdent confiance.",
                fix: "Varier les formules de remerciement, de fermeture, et toujours personnaliser avec l'élément mentionné dans l'avis. Un détail suffit."
              },
              {
                n: "03",
                title: "Ignorer les avis négatifs",
                danger: "CRITIQUE",
                color: "#ef4444",
                body: "L'absence de réponse est lue comme un aveu ou un manque d'intérêt. 88% des consommateurs lisent les réponses avant de se décider — ne pas répondre vous fait perdre ces prospects directement. Google pénalise également les faibles taux de réponse.",
                fix: "Répondre à 100% des avis dans les 48h. Mettre en place une alerte email ou notification dans GBP pour être averti en temps réel."
              },
              {
                n: "04",
                title: "Mentionner des informations confidentielles",
                danger: "CRITIQUE",
                color: "#ef4444",
                body: "Publier des détails sur le dossier du client (facture, contrat, informations personnelles) dans une réponse publique viole la confidentialité et peut avoir des conséquences légales (RGPD).",
                fix: "Toujours rediriger vers un échange privé pour les sujets sensibles : 'Contactez-nous au [TEL] pour que nous puissions vérifier votre dossier ensemble.'"
              },
              {
                n: "05",
                title: "Demander publiquement de modifier l'avis",
                danger: "ÉLEVÉ",
                color: "#f59e0b",
                body: "Écrire dans une réponse publique 'Nous vous demandons de bien vouloir modifier votre note' est perçu comme du chantage par les lecteurs et viole les directives Google. Google peut supprimer votre profil.",
                fix: "Si une solution a été trouvée en privé, le client peut décider librement de modifier son avis. Ne jamais le mentionner publiquement."
              },
              {
                n: "06",
                title: "Surcharger les réponses positives",
                danger: "MOYEN",
                color: "#818cf8",
                body: "Répondre à un avis 5 étoiles avec 5 paragraphes de marketing, de description de services et d'offres promotionnelles. Ça paraît désespéré et commercial.",
                fix: "3 à 5 phrases maximum pour un avis positif. Chaleur, personnalisation, et 1 mot-clé naturel. Pas un argumentaire de vente."
              },
              {
                n: "07",
                title: "Acheter des faux avis",
                danger: "FATAL",
                color: "#dc2626",
                body: "En 2026, l'IA de Google croise les données GPS Android avec les chronologies d'avis pour détecter l'astroturfing. Les faux avis sont supprimés et les fiches sont suspendues. La suspension peut être permanente.",
                fix: "Aucun. La seule stratégie durable est la collecte éthique d'avis réels. Un seul vrai avis vaut 100 faux."
              },
              {
                n: "08",
                title: "Accuser ou humilier le client",
                danger: "CRITIQUE",
                color: "#ef4444",
                body: "Même si l'avis est injuste, clairement faux ou malveillant — accuser publiquement le client vous transforme en antagoniste aux yeux de tous les autres lecteurs.",
                fix: "Rester factuel et neutre. Signaler l'avis à Google en parallèle si faux ou malveillant. 'Nous ne retrouvons pas trace de votre passage — contactez-nous pour clarifier.'"
              },
            ].map((item, i) => (
              <div key={i} style={{ border: `1px solid ${item.color}25`, borderLeft: `4px solid ${item.color}`, borderRadius: "10px", padding: "16px 18px", marginBottom: "14px", background: "#090912" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div style={{ background: item.color, color: "#fff", borderRadius: "6px", padding: "3px 8px", fontFamily: "monospace", fontWeight: "700", fontSize: "11px", flexShrink: 0 }}>
                    {item.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ fontWeight: "600", color: "#e2e8f0", fontSize: "14px" }}>{item.title}</span>
                      <span style={{ background: item.color + "20", color: item.color, fontSize: "10px", fontFamily: "monospace", padding: "2px 8px", borderRadius: "8px" }}>{item.danger}</span>
                    </div>
                  </div>
                </div>
                <p style={{ margin: "0 0 10px", color: "#9ca3af", fontSize: "13.5px", lineHeight: 1.65 }}>{item.body}</p>
                <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", color: "#86efac" }}>
                  <strong>✓ Solution :</strong> {item.fix}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <div style={{ background: "#040408", borderTop: "1px solid #111120", padding: "16px 20px", textAlign: "center", color: "#374151", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>
        GUIDE AVIS GOOGLE 2026 · SOURCES : WHITESPARK · BRIGHTLOCAL · STERLING SKY · CIMER AGENCY · GUILLAUME SAGLIET
      </div>
    </div>
  );
}

const h2 = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#f0ece4",
  borderBottom: "1px solid #1a1a2e",
  paddingBottom: "12px",
  marginBottom: "24px",
};

const h3 = {
  fontSize: "11px",
  fontWeight: "600",
  color: "#818cf8",
  letterSpacing: "2px",
  fontFamily: "monospace",
  textTransform: "uppercase",
  marginBottom: "16px",
  marginTop: "28px",
};
