import { useState } from "react";

const sections = [
  { id: "contexte", label: "🎯 Contexte 2026" },
  { id: "procedure", label: "🛠️ Procédure complète" },
  { id: "facteurs", label: "📊 Facteurs de classement" },
  { id: "nouveautes", label: "🤖 Nouveautés IA" },
  { id: "audit", label: "✅ Audit client" },
  { id: "textes", label: "✍️ Textes prêts" },
];

const auditItems = [
  { cat: "FONDATIONS", items: [
    "Fiche vérifiée (vidéo / courrier / téléphone)",
    "Nom légal exact — SANS mots-clés ajoutés",
    "Adresse exacte + épingle Maps correctement positionnée",
    "Numéro de téléphone local (pas mobile seul)",
    "URL du site → page locale dédiée (pas la home générale)",
    "NAP 100% cohérent avec site, réseaux, annuaires",
    "Compte géré avec email professionnel (pas Gmail perso)",
  ]},
  { cat: "CATÉGORIES & ATTRIBUTS", items: [
    "Catégorie principale : la plus spécifique possible",
    "Catégories secondaires : 2 à 9 max (toutes justifiées)",
    "Audit catégories vs Top 3 concurrents locaux",
    "Attributs d'accessibilité renseignés",
    "Attributs d'identité renseignés (femme dirigeante, vétéran…)",
    "Attributs de service (terrasse, Wi-Fi, stationnement…)",
    "Méthode de paiement renseignée",
  ]},
  { cat: "DESCRIPTION", items: [
    "750 caractères utilisés à 100% (min. 600 utiles)",
    "Structure : activité + zone → bénéfices → services clés → preuve",
    "1 à 2 mots-clés locaux insérés naturellement",
    "Aucun superlatif interdit (« meilleur », « n°1 »)",
    "Aucun bourrage de mots-clés",
    "Call-to-action implicite en fin de description",
  ]},
  { cat: "HORAIRES", items: [
    "Horaires d'ouverture exacts pour chaque jour",
    "Horaires exceptionnels saisis avant chaque jour férié",
    "Vérification mensuelle des horaires",
    "Plage horaire différenciée de la concurrence si possible",
  ]},
  { cat: "SERVICES & PRODUITS", items: [
    "Tous les services renseignés manuellement avec description",
    "Prix indicatifs ajoutés quand possible",
    "Produits phares catalogués avec photo + description",
    "Descriptions de services orientées résultat client",
    "Mise à jour trimestrielle des services",
  ]},
  { cat: "PHOTOS & VIDÉOS", items: [
    "Photo de profil : logo haute résolution (fond clair)",
    "Photo de couverture : façade ou équipe (format 16:9)",
    "Minimum 20 photos haute résolution publiées",
    "Photos : façade (jour ET nuit), intérieur, équipe, réalisations",
    "Rythme : 2 à 4 nouvelles photos par mois",
    "Vidéo(s) courte(s) ≤ 60 sec, 1080p, sous-titrées",
    "Zéro photo floue, selfie de mauvaise qualité, ou stock",
    "Vision AI : photos montrant l'expertise métier précise",
  ]},
  { cat: "AVIS CLIENTS", items: [
    "Taux de réponse : 100% (positifs ET négatifs)",
    "Délai de réponse : < 48h pour tous les avis",
    "Flux continu d'avis (velocity > burst ponctuel)",
    "QR code ou lien direct mis à disposition des clients",
    "Réponses aux avis positifs : personnalisées + mots-clés naturels",
    "Réponses aux avis négatifs : professionnelles + solution",
    "Note moyenne ≥ 4.5 ⭐ avec avis récents",
    "Aucune sollicitation d'avis avec incentive (interdit)",
  ]},
  { cat: "GOOGLE POSTS", items: [
    "Minimum 1 publication par semaine",
    "Rythme idéal : Lu/Me/Ve (actualité, offre, témoignage)",
    "Chaque post : image + texte + CTA (bouton d'action)",
    "Types utilisés : Nouveauté, Offre, Événement",
    "Contenu scanné par l'IA Google → mots-clés naturels",
    "Posts d'offres avec date de fin définie",
    "Aucun post sans image de qualité",
  ]},
  { cat: "Q&A (QUESTIONS / RÉPONSES)", items: [
    "Section Q&A surveillée hebdomadairement",
    "Questions fréquentes pré-renseignées par le propriétaire",
    "Réponses détaillées avec language client naturel",
    "Votes positifs sur les Q&A les plus importantes",
    "Réponse à toute nouvelle question < 48h",
  ]},
  { cat: "SIGNAUX SOCIAUX (NOUVEAU 2026)", items: [
    "Facebook professionnel connecté à la fiche GBP",
    "Instagram connecté (au moins 1 post/semaine)",
    "LinkedIn connecté (B2B / services pro)",
    "YouTube connecté si vidéos disponibles",
    "Cohérence brand : même nom, logo, ton sur toutes plateformes",
  ]},
  { cat: "SITE WEB & SEO LOCAL", items: [
    "Balisage Schema.org LocalBusiness sur le site",
    "Page locale dédiée (pas home générale) liée au GBP",
    "NAP identique sur le site vs GBP",
    "Mots-clés locaux dans title tags, H1, meta description",
    "Google Map embarquée sur la page de contact",
    "Citations cohérentes sur Yelp, PagesJaunes, Tripadvisor…",
    "Backlinks locaux (presse, mairie, annuaires pro, chambres consulaires)",
  ]},
  { cat: "ANALYTICS & SUIVI", items: [
    "GBP Insights consulté mensuellement",
    "Ratio vues / actions suivi (cible ≥ 5%)",
    "Part des recherches « Découverte » vs « Directes » suivie",
    "Impressions ventilées : Local Pack / Maps AI / AI Overviews",
    "UTM sur le lien site web pour tracking Analytics",
    "Suivi position Local Pack via outil dédié (ex. BrightLocal)",
  ]},
];

const textTemplates = [
  {
    title: "Description – Plombier (exemple)",
    text: `Plomberie [NOM ENTREPRISE] – Interventions rapides à [VILLE] et dans un rayon de 30 km. Dépannage urgence 7j/7, installation sanitaire, remplacement chauffe-eau, débouchage. Plus de 15 ans d'expérience, artisan RGE certifié. Devis gratuit sous 2h, garantie pièces et main-d'œuvre. Plus de 400 clients satisfaits dans le [DÉPARTEMENT]. Appelez-nous ou demandez un devis en ligne dès maintenant.`,
    vars: ["NOM ENTREPRISE", "VILLE", "DÉPARTEMENT"],
  },
  {
    title: "Description – Restaurant (exemple)",
    text: `Restaurant [NOM] à [VILLE] – Cuisine [TYPE] maison, produits locaux du marché. Ouvert 7j/7, service déjeuner et dîner, terrasse chauffée 40 couverts. Idéal pour repas d'affaires, anniversaires et groupes. Menu du marché à [PRIX]€, carte renouvelée chaque saison. Réservation en ligne ou par téléphone. À deux pas de [LIEU REPÈRE].`,
    vars: ["NOM", "VILLE", "TYPE", "PRIX", "LIEU REPÈRE"],
  },
  {
    title: "Réponse avis positif (5 ⭐)",
    text: `Merci beaucoup [PRÉNOM], votre confiance nous touche vraiment ! Nous sommes ravis que [ASPECT MENTIONNÉ] ait été à la hauteur de vos attentes. Toute l'équipe de [NOM ENTREPRISE] vous souhaite une excellente journée et espère vous revoir très prochainement à [VILLE]. N'hésitez pas à nous recommander autour de vous !`,
    vars: ["PRÉNOM", "ASPECT MENTIONNÉ", "NOM ENTREPRISE", "VILLE"],
  },
  {
    title: "Réponse avis négatif",
    text: `Bonjour [PRÉNOM], merci d'avoir pris le temps de nous faire part de votre expérience. Nous sommes sincèrement désolés que votre visite chez [NOM ENTREPRISE] n'ait pas répondu à vos attentes concernant [PROBLÈME MENTIONNÉ]. Ce type de situation ne correspond pas à nos standards habituels. Nous vous invitons à nous contacter directement au [TÉLÉPHONE] ou par email à [EMAIL] afin que nous puissions trouver une solution ensemble. Votre satisfaction est notre priorité.`,
    vars: ["PRÉNOM", "NOM ENTREPRISE", "PROBLÈME MENTIONNÉ", "TÉLÉPHONE", "EMAIL"],
  },
  {
    title: "Google Post – Offre promotionnelle",
    text: `🎯 OFFRE [MOIS] – [NOM OFFRE]\n\nProfitez de [AVANTAGE CONCRET] jusqu'au [DATE FIN].\n\n✅ [Bénéfice 1]\n✅ [Bénéfice 2]\n✅ [Bénéfice 3]\n\n📍 [NOM ENTREPRISE] – [VILLE]\n📞 [TÉLÉPHONE]\n\n👉 Prenez rendez-vous / Réservez / Commandez via le bouton ci-dessous !`,
    vars: ["MOIS", "NOM OFFRE", "AVANTAGE CONCRET", "DATE FIN", "NOM ENTREPRISE", "VILLE", "TÉLÉPHONE"],
  },
  {
    title: "Google Post – Nouveauté service",
    text: `🆕 NOUVEAU : [NOM DU NOUVEAU SERVICE]\n\nNous élargissons notre offre ! Désormais disponible chez [NOM ENTREPRISE] : [DESCRIPTION COURTE DU SERVICE].\n\nPourquoi choisir cette option ?\n→ [Argument 1]\n→ [Argument 2]\n\nIdéal pour [TYPE DE CLIENT CIBLE] à [VILLE] et alentours.\n\n📞 Contactez-nous pour plus d'informations.`,
    vars: ["NOM DU NOUVEAU SERVICE", "NOM ENTREPRISE", "DESCRIPTION COURTE DU SERVICE", "TYPE DE CLIENT CIBLE", "VILLE"],
  },
  {
    title: "Demande d'avis – SMS / Email client",
    text: `Bonjour [PRÉNOM], merci de votre confiance ! 😊 Si vous êtes satisfait(e) de notre prestation, un avis Google nous aide énormément. Cela prend moins de 2 minutes : [LIEN DIRECT AVIS GOOGLE]. Merci d'avance, à bientôt ! – [NOM ENTREPRISE]`,
    vars: ["PRÉNOM", "LIEN DIRECT AVIS GOOGLE", "NOM ENTREPRISE"],
  },
  {
    title: "Q&A – Réponse propriétaire (exemple)",
    text: `Bonjour, merci pour votre question ! [RÉPONSE PRÉCISE EN 2-3 PHRASES avec mots-clés naturels liés au service]. Pour tout renseignement complémentaire, n'hésitez pas à nous appeler au [TÉLÉPHONE] ou à passer directement en [VILLE]. L'équipe [NOM ENTREPRISE] est à votre disposition du [HORAIRES].`,
    vars: ["RÉPONSE PRÉCISE", "TÉLÉPHONE", "VILLE", "HORAIRES", "NOM ENTREPRISE"],
  },
];

const rankingFactors = [
  { factor: "Proximité du chercheur", weight: 55, pilier: "Proximité", note: "Non contrôlable directement — mais l'ancrage géographique de la fiche est décisif" },
  { factor: "Catégorie principale GBP", weight: 32, pilier: "Pertinence", note: "Facteur le + puissant que vous contrôlez. Soyez ultra-spécifique" },
  { factor: "Signaux de la fiche GBP (complétude)", weight: 32, pilier: "Pertinence", note: "Toutes les sections remplies = +70% de visibilité selon Google" },
  { factor: "Vélocité et fraîcheur des avis", weight: 20, pilier: "Notoriété", note: "Flux continu > burst ponctuel. 1 avis/semaine minimum" },
  { factor: "Réponses aux avis (taux 100%)", weight: 18, pilier: "Notoriété", note: "Taux ≥ 80% = boost mesurable. Nouvelle règle 2026" },
  { factor: "Signaux comportementaux (clics, appels)", weight: 17, pilier: "Notoriété", note: "Google mesure : taux de clic, demandes d'itinéraire, dwell time" },
  { factor: "Horaires corrects (ouvert au moment de la recherche)", weight: 16, pilier: "Pertinence", note: "5e facteur local pack 2026 — mise à jour avant chaque férié" },
  { factor: "SEO on-page local du site web lié", weight: 15, pilier: "Pertinence", note: "Lier vers page locale dédiée (pas la home) — Schema LocalBusiness" },
  { factor: "Photos fraîches & fréquence de mise à jour", weight: 14, pilier: "Notoriété", note: "Vision AI analyse le contenu des photos. Délai inactivité = 30 jours max" },
  { factor: "Citations NAP cohérentes (annuaires)", weight: 13, pilier: "Notoriété", note: "Nom / Adresse / Téléphone identiques partout — audit trimestriel" },
  { factor: "Backlinks locaux vers le site", weight: 12, pilier: "Notoriété", note: "Liens presse locale, mairie, chambres consulaires, sponsors" },
  { factor: "Signaux sociaux connectés", weight: 9, pilier: "Notoriété", note: "NOUVEAU 2026 — Facebook, Instagram, LinkedIn, YouTube connectés" },
  { factor: "Google Posts (freshness signal)", weight: 7, pilier: "Pertinence", note: "Signal indirect : engagement + fraîcheur. Pas un facteur de rang direct" },
  { factor: "Services & Produits détaillés", weight: 10, pilier: "Pertinence", note: "Requêtes conversationnelles longue traîne — champ massif sous-exploité" },
];

export default function GBPGuide() {
  const [activeSection, setActiveSection] = useState("contexte");
  const [auditChecked, setAuditChecked] = useState({});
  const [copiedText, setCopiedText] = useState(null);

  const toggleCheck = (key) => {
    setAuditChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalAudit = auditItems.reduce((a, c) => a + c.items.length, 0);
  const checkedCount = Object.values(auditChecked).filter(Boolean).length;
  const score = Math.round((checkedCount / totalAudit) * 100);

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  const getScoreColor = () => {
    if (score >= 80) return "#22c55e";
    if (score >= 50) return "#f59e0b";
    return "#ef4444";
  };

  const getScoreLabel = () => {
    if (score >= 80) return "Profil optimisé 🚀";
    if (score >= 50) return "Profil moyen ⚠️";
    return "Profil faible 🔴";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e4dc",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a0f2e 50%, #0f1a1f 100%)",
        borderBottom: "1px solid #2a2a3e",
        padding: "40px 24px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            padding: "6px 18px",
            borderRadius: "20px",
            fontSize: "11px",
            fontFamily: "monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: "16px",
          }}>
            MAJ MAI 2026 · FR + EU + US
          </div>
          <h1 style={{
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: "400",
            letterSpacing: "-0.5px",
            color: "#f0ece4",
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}>
            Google Business Profile
          </h1>
          <h2 style={{
            fontSize: "clamp(16px, 3vw, 22px)",
            fontWeight: "300",
            color: "#8b7cf6",
            margin: "0 0 20px",
            fontFamily: "monospace",
            letterSpacing: "1px",
          }}>
            Guide Complet Optimisation & Audit 2026
          </h2>
          <p style={{ color: "#9d9d9d", fontSize: "14px", margin: 0 }}>
            Procédures complètes · Facteurs de classement Whitespark · Grille d'audit · Textes prêts à l'emploi
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        background: "#0f0f1a",
        borderBottom: "1px solid #1e1e2e",
        padding: "0 16px",
        overflowX: "auto",
        display: "flex",
        whiteSpace: "nowrap",
      }}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              background: "none",
              border: "none",
              borderBottom: activeSection === s.id ? "2px solid #6366f1" : "2px solid transparent",
              color: activeSection === s.id ? "#a5b4fc" : "#666",
              padding: "14px 16px",
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* SECTION CONTEXTE */}
        {activeSection === "contexte" && (
          <div>
            <h2 style={h2Style}>Le contexte 2026 — pourquoi c'est urgent</h2>

            <div style={gridStyle}>
              {[
                { n: "46%", l: "des recherches Google ont une intention locale" },
                { n: "76%", l: "des recherches locales aboutissent à une visite en 24h" },
                { n: "82%", l: "des utilisateurs mobiles choisissent une entreprise après avoir consulté sa fiche (BrightLocal)" },
                { n: "×7", l: "plus de clics pour une fiche complète vs fiche basique" },
                { n: "70%", l: "de visites en boutique supplémentaires avec une fiche optimisée" },
                { n: "520%", l: "d'appels supplémentaires pour les fiches avec 100+ photos" },
              ].map((s, i) => (
                <div key={i} style={statCard}>
                  <div style={{ fontSize: "32px", fontWeight: "700", color: "#818cf8", marginBottom: "8px", fontFamily: "monospace" }}>{s.n}</div>
                  <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <h3 style={h3Style}>Les 3 grandes ruptures de 2026</h3>

            {[
              {
                icon: "🤖",
                title: "L'IA est désormais juge de votre visibilité",
                body: "Le Core Update de mars 2026 a renforcé le rôle de l'IA dans l'évaluation des fiches. Google AI Overviews, Gemini et l'AI Mode citent directement les entreprises dans leurs réponses — exclusivement les fiches complètes, vérifiées et actives. Les fiches inactives ne disparaissent plus « progressivement » : leur « taux de décroissance » s'est accéléré. Une fiche sans mise à jour depuis 30 jours perd déjà en visibilité.",
              },
              {
                icon: "📱",
                title: "Les signaux sociaux sont officiellement un facteur de classement",
                body: "Grande nouveauté 2026 : Google permet désormais de connecter Facebook, Instagram, LinkedIn, YouTube, X et TikTok directement à la fiche GBP. Ces connexions constituent des preuves de présence active aux yeux de l'algorithme. Cohérence du nom, du logo et du ton entre toutes les plateformes = signal de confiance fort.",
              },
              {
                icon: "🔍",
                title: "La recherche conversationnelle remplace la recherche par mots-clés",
                body: "Les utilisateurs ne tapent plus « plombier Paris ». Ils demandent « plombier disponible ce soir dans le 15e avec de bons avis ». L'algorithme évalue désormais la capacité de votre fiche à répondre à des requêtes longue traîne et conversationnelles via les sections Services, Q&A et Google Posts. Les catégories secondaires, les attributs et les descriptions de services jouent un rôle démultiplié.",
              },
              {
                icon: "⏱️",
                title: "Les horaires sont un facteur de classement réel",
                body: "Confirmé par Whitespark 2026 : être « ouvert au moment de la recherche » est le 5e facteur de classement dans le Local Pack. Des horaires faux ou manquants = perte de visibilité exactement au moment où le client est prêt à acheter. Les horaires exceptionnels (jours fériés) doivent être renseignés AVANT chaque fête.",
              },
            ].map((item, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: "600", color: "#c4b5fd", marginBottom: "8px", fontSize: "15px" }}>{item.title}</div>
                    <p style={{ margin: 0, color: "#9ca3af", lineHeight: 1.7, fontSize: "14px" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <h3 style={h3Style}>Les 3 piliers de l'algorithme Google (inchangés, enrichis)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              {[
                { t: "PERTINENCE", c: "#6366f1", desc: "À quel point votre fiche correspond à l'intention de la recherche. Catégories, description, services, photos." },
                { t: "PROXIMITÉ", c: "#8b5cf6", desc: "Distance entre le chercheur et votre établissement. Non contrôlable, mais peut être compensée par la notoriété." },
                { t: "NOTORIÉTÉ", c: "#a78bfa", desc: "Réputation en ligne : avis, citations NAP, backlinks, ancienneté, signaux comportementaux." },
              ].map((p, i) => (
                <div key={i} style={{ ...cardStyle, borderTop: `3px solid ${p.c}`, textAlign: "center" }}>
                  <div style={{ fontFamily: "monospace", color: p.c, fontWeight: "700", letterSpacing: "2px", marginBottom: "10px", fontSize: "12px" }}>{p.t}</div>
                  <p style={{ margin: 0, color: "#9ca3af", lineHeight: 1.6, fontSize: "13px" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION PROCÉDURE */}
        {activeSection === "procedure" && (
          <div>
            <h2 style={h2Style}>Procédure complète — étape par étape</h2>

            {[
              {
                step: "01",
                title: "VÉRIFICATION & ACCÈS",
                items: [
                  "Accéder à business.google.com avec un email professionnel dédié (ex : marketing@votre-entreprise.fr). Ne jamais utiliser un compte Gmail personnel temporaire.",
                  "Rechercher si une fiche existe déjà (ancienne fiche, fiche créée automatiquement par Google). Si oui : cliquer sur « Revendiquer cet établissement ».",
                  "Vérification en 2026 : 4 méthodes disponibles — courrier postal (code PIN), téléphone, email, ou VIDÉO (méthode par défaut pour les nouvelles inscriptions). La vidéo doit être une prise de vue continue montrant : enseigne extérieure → intérieur → action de gestion en direct.",
                  "Fournir des justificatifs en cas de blocage : extrait Kbis, facture EDF/eau au nom de l'entreprise à l'adresse déclarée.",
                  "SÉCURITÉ : Vérifier la position de l'épingle Maps dès la validation. Des concurrents malveillants peuvent déplacer votre épingle via « Suggérer une modification ». Corriger immédiatement si nécessaire.",
                ],
              },
              {
                step: "02",
                title: "INFORMATIONS DE BASE (NAP)",
                items: [
                  "Nom d'entreprise : strictement identique à l'enseigne légale et à la devanture physique. INTERDIT : ajouter des mots-clés (ex : « Plombier Paris — Martin Plomberie » = suspension immédiate en 2026).",
                  "Adresse : complète, précise, sans boîte postale. Vérifier le formatage Google vs l'adresse légale officielle.",
                  "Téléphone : numéro local de préférence (pas uniquement mobile). Format international pour les entreprises recevant des touristes.",
                  "Site web : lier vers une PAGE LOCALE DÉDIÉE et non la page d'accueil générique. Cela améliore directement la pertinence perçue par Google.",
                  "NAP cohérence : copier-coller exactement le même nom, adresse et téléphone sur TOUS les supports : site, réseaux sociaux, PagesJaunes, Yelp, Tripadvisor, Mappy, etc. La moindre variation crée un signal de méfiance pour l'algorithme.",
                ],
              },
              {
                step: "03",
                title: "CATÉGORIE PRINCIPALE & SECONDAIRES",
                items: [
                  "Catégorie principale : choisir la plus SPÉCIFIQUE possible parmi les 4 000+ disponibles. Ex : « Support informatique » plutôt que « Service informatique ». Ce seul choix est le levier le plus puissant que vous contrôlez.",
                  "Méthode de choix : rechercher votre activité principale en mode incognito sur Google Maps, noter les catégories utilisées par les 3 fiches du Local Pack, puis choisir la même ou plus précise.",
                  "Catégories secondaires : entre 2 et 9 maximum. Chaque catégorie secondaire doit correspondre à un service que le client peut réellement réserver ou acheter. Pas de bourrage.",
                  "Depuis début 2026 : poids des catégories secondaires augmenté. Audit trimestriel recommandé — Google enrichit sa taxonomie chaque mois.",
                  "Outil pratique : GMB Everywhere (extension Chrome) permet de voir les catégories exactes de vos concurrents.",
                ],
              },
              {
                step: "04",
                title: "DESCRIPTION (750 CARACTÈRES)",
                items: [
                  "Structure recommandée : [Activité] + [Zone géographique] → [Bénéfices clients] → [Services clés] → [Preuve/Garantie].",
                  "Intégrer naturellement 1 à 2 mots-clés locaux (ex : « plombier Nantes », « restaurant végétalien Lyon »). L'IA de Google comprend le contexte — inutile et contre-productif de forcer.",
                  "INTERDIT : « meilleur », « n°1 », « pas cher » — violates les directives Google et nuit à la crédibilité.",
                  "INTERDIT : Bourrage de mots-clés. Depuis la Vicinity Update, c'est activement pénalisé.",
                  "Utiliser les 750 caractères à ≥ 600 utiles. La description n'est PAS un facteur de classement direct (confirmé Google), mais elle influence le taux de clic et l'engagement.",
                  "Terminer par un appel à l'action implicite : « Appelez-nous », « Réservez en ligne », « Demandez votre devis gratuit ».",
                ],
              },
              {
                step: "05",
                title: "HORAIRES",
                items: [
                  "Renseigner les horaires exacts pour CHAQUE jour de la semaine. Indiquer « Fermé » explicitement les jours de fermeture.",
                  "Horaires exceptionnels : les saisir AVANT chaque jour férié (Google envoie des rappels). Ne jamais laisser passer un jour férié sans mise à jour.",
                  "Conseil avancé (Whitespark 2026) : analyser les horaires de vos concurrents locaux. Être ouvert le lundi ou le dimanche quand ils sont fermés peut générer un boost de visibilité mesurable.",
                  "Si l'entreprise répond 24h/24 (SAV, urgences), l'indiquer — mais uniquement si c'est authentiquement vrai (risque de suspension sinon).",
                ],
              },
              {
                step: "06",
                title: "SERVICES & PRODUITS",
                items: [
                  "Renseigner MANUELLEMENT tous les services dans l'onglet dédié. Ne pas laisser Google les déduire seul.",
                  "Pour chaque service : nom précis + description orientée bénéfice client + prix indicatif si possible.",
                  "Exemple de description de service efficace : « Installation chauffe-eau thermodynamique — Remplacement de votre ancien chauffe-eau par un modèle A++ économisant jusqu'à 70% d'énergie. Pose en une journée, démarche CEE prise en charge. »",
                  "Catalogue produits : photos + descriptions + prix. Google Maps intègre maintenant les produits dans ses réponses IA — champ massivement sous-exploité.",
                  "Ces sections améliorent directement la visibilité sur les requêtes conversationnelles longue traîne.",
                ],
              },
              {
                step: "07",
                title: "PHOTOS & VIDÉOS",
                items: [
                  "Photo de profil : logo haute résolution sur fond clair (format carré 720×720 px minimum).",
                  "Photo de couverture : façade ou équipe en action, format 16:9 (1800×1000 px recommandé).",
                  "Stock recommandé de départ : minimum 20 photos. Objectif long terme : 100+ photos (au-delà de 100 photos = +520% d'appels selon les données Google).",
                  "Types de photos à publier selon secteur — Commerçants : façade jour/nuit, intérieur, produits phares, équipe. Artisans : chantiers avant/après, équipe terrain, véhicules. Restaurants : salle, plats, terrasse, chef, équipe.",
                  "Rythme : 2 à 4 nouvelles photos par mois minimum. Google Vision AI analyse le CONTENU des photos (pas seulement les métadonnées). Une photo d'installation précise peut faire ranker pour cette requête.",
                  "Vidéos : format jusqu'à 60 secondes, résolution 1080p, fichier < 100 MB. Ajouter des sous-titres pour l'accessibilité et l'IA.",
                  "ZÉRO photo stock, floue, ou selfie de mauvaise qualité. L'authenticité est valorisée par clients et algorithme.",
                  "Visite virtuelle 360° : option disponible, très appréciée pour restaurants, hôtels, salles de sport.",
                ],
              },
              {
                step: "08",
                title: "AVIS CLIENTS — STRATÉGIE",
                items: [
                  "Facteur n°1 contrôlable en 2026 selon Whitespark : la vélocité des avis (flux régulier prime sur le volume total).",
                  "Un flux stable de 4 à 8 avis par mois prime sur 50 avis obtenus en une semaine puis plus rien.",
                  "Méthode éthique de collecte : demander en face à face juste après une prestation réussie, envoyer un SMS/email avec lien direct (générer le lien dans le tableau de bord GBP), afficher un QR code en caisse ou sur les factures.",
                  "INTERDIT : incentiver des avis positifs (offrir une remise, un cadeau). Risque de suspension et avis supprimés par Google.",
                  "Répondre à 100% des avis, positifs ET négatifs, sous 48h maximum.",
                  "Réponses aux avis positifs : personnalisées, contenant naturellement des mots-clés liés au service mentionné.",
                  "Réponses aux avis négatifs : ton professionnel, reconnaître le problème si justifié, proposer une solution off-line (téléphone ou email).",
                  "Note cible : ≥ 4.5 ⭐. Une note 5.0 parfaite sans aucun avis négatif est désormais identifiée comme suspecte par l'IA de Google (filtre Review-EAT 2026).",
                  "Présence multi-plateformes : Yelp, Tripadvisor, PagesJaunes selon secteur — renforce la notoriété globale.",
                ],
              },
              {
                step: "09",
                title: "GOOGLE POSTS — CALENDRIER ÉDITORIAL",
                items: [
                  "Rythme minimal : 1 publication par semaine. Idéal : 2-3 par semaine.",
                  "Chaque post expire après 7 jours (sauf Événements et Offres avec date de fin). Un post hebdomadaire garantit une présence continue.",
                  "Structure de chaque post : image de qualité + texte court (150-300 mots) avec mots-clés naturels + bouton CTA (Réserver, En savoir plus, Appeler, Acheter).",
                  "Calendrier éditorial type : Lundi → actualité de la semaine / nouveau produit. Mercredi → offre promotionnelle ou événement à venir. Vendredi → témoignage client ou astuce métier.",
                  "Types de posts : Nouveauté (durée 7 jours), Offre (avec date de début/fin), Événement (durée de l'événement).",
                  "NOUVEAU 2026 : les posts sont scannés par l'IA de Google et peuvent apparaître directement dans les AI Overviews comme justification (« Ce profil mentionne X »). Utiliser un langage riche et précis.",
                  "Les posts ne sont PAS un facteur de classement direct (étude Sterling Sky, 441 mots-clés, 9 semaines = zéro impact position). Leur valeur est dans l'engagement et la conversion.",
                ],
              },
              {
                step: "10",
                title: "Q&A, MESSAGERIE & SIGNAUX SOCIAUX",
                items: [
                  "Q&A : surveiller hebdomadairement. Pré-renseigner les 5 à 10 questions les plus fréquentes soi-même (le propriétaire peut poser et répondre).",
                  "Réponses Q&A : utiliser le langage naturel des clients, inclure des mots-clés contextuels. Ces réponses sont indexées par Google.",
                  "Messagerie (GBP Chat) : activer la fonction, configurer des réponses rapides, assigner quelqu'un pour répondre. Google surveille les temps de réponse — cible < 24h.",
                  "WhatsApp : nouvelle fonctionnalité 2026 — possibilité d'ajouter un bouton WhatsApp directement sur la fiche.",
                  "Signaux sociaux (NOUVEAU 2026) : connecter Facebook, Instagram, LinkedIn, YouTube via le tableau de bord GBP. Maintenir la cohérence de marque (même nom, logo, tone of voice sur toutes plateformes).",
                  "Publication croisée : recycler les Google Posts en contenu social — économie de temps et cohérence des signaux.",
                ],
              },
              {
                step: "11",
                title: "SITE WEB & SEO LOCAL (SYNERGIE)",
                items: [
                  "Lier le GBP vers une page locale dédiée (pas la homepage). Exemple : « votre-site.fr/plombier-nantes » plutôt que « votre-site.fr ».",
                  "Ajouter le balisage Schema.org LocalBusiness sur le site pour renforcer la correspondance entre vos données GBP et votre site.",
                  "NAP identique sur toutes les pages de contact du site vs fiche GBP.",
                  "NOUVEAU 2026 : Google croise la section Services de votre GBP avec la page Services de votre site pour vérifier la cohérence. Les deux doivent s'aligner.",
                  "Mots-clés locaux dans : title tags, H1, meta descriptions, URL slugs (ex : « electricien-bordeaux »).",
                  "Intégrer une carte Google Maps sur la page de contact.",
                  "Citations : créer/vérifier les fiches sur PagesJaunes, Mappy, Yelp France, Tripadvisor (selon secteur), annuaires sectoriels.",
                  "Backlinks locaux : presse régionale, site de la mairie, chambre de commerce, sponsoring d'associations locales.",
                ],
              },
              {
                step: "12",
                title: "SUIVI & ANALYTICS",
                items: [
                  "GBP Insights : consulter mensuellement. Métriques à suivre : Vues, Recherches directes vs Découverte, Actions (appels, itinéraires, clics site).",
                  "NOUVEAU 2026 : le tableau de bord ventile les impressions en 3 surfaces : Local Panel classique / Maps AI Summary Card / Google AI Overviews. Suivre la progression dans les AI Overviews.",
                  "KPI cible : taux d'action ≥ 5% (actions / vues totales).",
                  "Exporter le CSV mensuel et suivre la part « Découverte » sur 90 jours glissants — si elle monte, votre stratégie catégories/contenu fonctionne.",
                  "UTM tracking sur le lien site web de la fiche pour mesurer les conversions dans Google Analytics.",
                  "Suivi de position : outil dédié (BrightLocal, Whitespark Local Platform, GMB Everywhere) pour surveiller les 3-10 mots-clés stratégiques.",
                  "Audit complet de la fiche : mensuel minimum, trimestriel pour les catégories et citations.",
                ],
              },
            ].map((s, i) => (
              <div key={i} style={{ ...cardStyle, marginBottom: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontFamily: "monospace",
                    fontWeight: "700",
                    fontSize: "13px",
                    flexShrink: 0,
                  }}>
                    {s.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "600", color: "#c4b5fd", marginBottom: "12px", fontSize: "14px", letterSpacing: "1px", fontFamily: "monospace" }}>
                      {s.title}
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {s.items.map((item, j) => (
                        <li key={j} style={{
                          padding: "6px 0 6px 20px",
                          position: "relative",
                          color: "#b0b0b0",
                          lineHeight: 1.6,
                          fontSize: "13.5px",
                          borderBottom: j < s.items.length - 1 ? "1px solid #1a1a2e" : "none",
                        }}>
                          <span style={{ position: "absolute", left: 0, color: "#6366f1" }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION FACTEURS */}
        {activeSection === "facteurs" && (
          <div>
            <h2 style={h2Style}>Facteurs de classement pondérés — Whitespark 2026</h2>
            <p style={{ color: "#9ca3af", marginBottom: "24px", fontSize: "14px" }}>
              Source : Whitespark Local Search Ranking Factors 2026 — enquête auprès de 47 experts SEO locaux mondiaux. Poids sur 100.
            </p>

            {rankingFactors.map((f, i) => (
              <div key={i} style={{ ...cardStyle, marginBottom: "10px", padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                    <span style={{
                      fontSize: "11px",
                      fontFamily: "monospace",
                      background: f.pilier === "Pertinence" ? "rgba(99,102,241,0.2)" : f.pilier === "Proximité" ? "rgba(139,92,246,0.2)" : "rgba(167,139,250,0.2)",
                      color: f.pilier === "Pertinence" ? "#818cf8" : f.pilier === "Proximité" ? "#a78bfa" : "#c4b5fd",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      flexShrink: 0,
                    }}>
                      {f.pilier.toUpperCase()}
                    </span>
                    <span style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: "500" }}>{f.factor}</span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontWeight: "700", color: "#a5b4fc", fontSize: "14px" }}>{f.weight}/100</span>
                </div>
                <div style={{ background: "#111127", borderRadius: "4px", height: "5px", overflow: "hidden", marginBottom: "8px" }}>
                  <div style={{
                    height: "100%",
                    width: `${f.weight}%`,
                    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    borderRadius: "4px",
                  }} />
                </div>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "12px" }}>{f.note}</p>
              </div>
            ))}

            <div style={{ ...cardStyle, marginTop: "24px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.3)" }}>
              <h3 style={{ ...h3Style, marginTop: 0 }}>💡 Ce que disent les données</h3>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, fontSize: "14px" }}>
                La <strong style={{ color: "#c4b5fd" }}>proximité</strong> représente ~55% des décisions de classement — non contrôlable. 
                Les <strong style={{ color: "#c4b5fd" }}>signaux GBP</strong> (32%) + les <strong style={{ color: "#c4b5fd" }}>avis</strong> (16-20%) + le <strong style={{ color: "#c4b5fd" }}>SEO on-page</strong> (19%) sont les leviers que vous maîtrisez. 
                Le jeu se gagne sur ces 3 axes. Les entreprises qui dominent leur Local Pack ne font pas de magie — elles ont un GBP parfaitement complété, un flux d'avis continu, et un site local bien structuré.
              </p>
            </div>
          </div>
        )}

        {/* SECTION NOUVEAUTÉS IA */}
        {activeSection === "nouveautes" && (
          <div>
            <h2 style={h2Style}>Nouveautés 2026 — L'ère de l'IA dans le local search</h2>

            {[
              {
                badge: "AI OVERVIEWS",
                color: "#6366f1",
                title: "Google AI Overviews — votre fiche citée dans les réponses IA",
                content: [
                  "Aux États-Unis, 60% des recherches Google affichent désormais un encart AI Overviews. La France est en déploiement accéléré en 2026.",
                  "L'IA de Google cite directement des entreprises locales par nom dans ses réponses générées — exclusivement les fiches complètes, vérifiées, actives et bien notées.",
                  "Pour apparaître dans les AI Overviews : fiche 100% complète + avis récents abondants (≥ 4.5 ⭐) + posts réguliers + cohérence site/GBP.",
                  "Stratégie GEO (Generative Engine Optimization) : les Google Posts récents avec mots-clés pertinents sont un signal direct d'éligibilité aux AI Overviews.",
                  "Un profil avec note ≥ 4.7, 180+ avis récents sera cité. Un profil 3.0 avec rien de récent ne sera jamais mentionné par l'IA.",
                ],
              },
              {
                badge: "GEMINI MAPS",
                color: "#8b5cf6",
                title: "Gemini dans Maps — l'assistant qui recommande des entreprises",
                content: [
                  "Google Maps intègre Gemini pour répondre aux questions conversationnelles : « Quel est le meilleur électricien du quartier disponible ce week-end ? »",
                  "Gemini utilise les signaux GBP : photos récentes, horaires exacts, avis, posts, attributs de service.",
                  "ChatGPT Search et Perplexity intègrent également des données de fiches d'entreprises. Votre GBP nourrit plusieurs IA simultanément.",
                  "44% des consommateurs utilisent déjà l'IA pour leurs décisions d'achat local, mais seulement 22% des entreprises suivent leur visibilité dans ces nouveaux canaux.",
                ],
              },
              {
                badge: "CORE UPDATE MARS 2026",
                color: "#7c3aed",
                title: "Core Update Mars 2026 — ce qui a changé concrètement",
                content: [
                  "Renforcement du poids des catégories secondaires — les nicher sont désormais plus influentes qu'avant.",
                  "Accélération du « taux de décroissance » des fiches inactives. 30 jours sans activité = perte de visibilité mesurable.",
                  "Filtre Review-EAT : privilégie les avis laissés par des profils Local Guides de haut niveau avec historique de photos géolocalisées.",
                  "Keyword Stuffing dans le nom = suspension quasi-immédiate. L'algorithme surveille en temps réel.",
                  "Faux avis : l'IA croise les données GPS Android avec la chronologie des avis pour détecter l'astroturfing.",
                ],
              },
              {
                badge: "VISUAL SEARCH & AR",
                color: "#a855f7",
                title: "Recherche visuelle & réalité augmentée",
                content: [
                  "Google Vision AI scanne le contenu de vos photos pour comprendre votre expertise métier — sans que vous n'ayez besoin d'écrire quoi que ce soit.",
                  "Un plombier qui publie une photo nette d'une installation de chauffe-eau thermodynamique peut ranker pour « installation chauffe-eau » sans ce mot-clé dans le texte.",
                  "AR Store Tours : Google Maps propose des visites virtuelles immersives directement dans l'interface Maps.",
                  "Recherche visuelle dans Maps : les utilisateurs peuvent chercher en prenant une photo. Des photos distinctives et de haute qualité améliorent la découverte via ce canal.",
                  "Les avis et photos utilisateurs sont désormais affichés en format vertical « Story » (style TikTok/Instagram) dans les résultats Maps.",
                ],
              },
              {
                badge: "LOCAL LISTS & AI MODE",
                color: "#9333ea",
                title: "Local Lists et AI Mode — nouvelles surfaces de visibilité",
                content: [
                  "Google Maps intègre les « Local Lists » : listes thématiques auto-générées comme « Local Gems », « Trending Now » ou « Top List » dans une zone géographique.",
                  "Ces listes sont générées par Google selon les avis, l'engagement et la popularité. Apparaître dedans = visibilité considérable, notamment auprès des touristes.",
                  "AI Mode (testé dans la barre de recherche) : utilise les mêmes signaux GBP (avis, photos, horaires, posts) pour recommander des entreprises dans un flux conversationnel.",
                  "Whitespark 2026 introduit pour la première fois une catégorie « AI Search Visibility » dans ses ranking factors. Les signaux de citation et d'entité figurent dans le Top 5.",
                ],
              },
              {
                badge: "NOUVEAUTÉS PRODUIT",
                color: "#7c3aed",
                title: "Nouvelles fonctionnalités GBP 2026",
                content: [
                  "IA générative pour les Q&A : Google propose des réponses IA automatiques pour aider les entreprises à répondre plus vite. À valider avant envoi.",
                  "Messagerie IA : réponses automatiques aux messages clients pendant les heures creuses, à réviser avant envoi.",
                  "Reconnaissance de menu IA : pour les restaurants, import automatique du menu depuis une photo. Expérimental — à corriger manuellement.",
                  "Bouton WhatsApp : nouvelle option de contact directement sur la fiche (remplace partiellement le Chat supprimé).",
                  "Place Page Attributes : y compris un « Primary Chat Method » pour indiquer le canal de contact préféré.",
                  "Post scheduling : planification des Google Posts directement dans le tableau de bord.",
                  "Attributs durabilité : pratiques écologiques, accessibilité, garanties de service — visibles directement sur la fiche.",
                  "Vérification renforcée : procédures anti-fraude plus strictes. Comptes non vérifiés ou incomplets risquent une perte de visibilité progressive.",
                ],
              },
            ].map((s, i) => (
              <div key={i} style={{ ...cardStyle, marginBottom: "20px", borderLeft: `3px solid ${s.color}` }}>
                <div style={{
                  display: "inline-block",
                  background: s.color + "22",
                  color: s.color,
                  fontSize: "10px",
                  fontFamily: "monospace",
                  letterSpacing: "2px",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}>
                  {s.badge}
                </div>
                <h3 style={{ ...h3Style, marginTop: 0, color: "#e2e8f0", fontSize: "15px" }}>{s.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {s.content.map((item, j) => (
                    <li key={j} style={{
                      padding: "5px 0 5px 18px",
                      position: "relative",
                      color: "#9ca3af",
                      fontSize: "13.5px",
                      lineHeight: 1.65,
                    }}>
                      <span style={{ position: "absolute", left: 0, color: s.color }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* SECTION AUDIT */}
        {activeSection === "audit" && (
          <div>
            <h2 style={h2Style}>Grille d'audit — Pages clients</h2>

            {/* Score card */}
            <div style={{
              ...cardStyle,
              background: "rgba(99,102,241,0.07)",
              border: `1px solid ${getScoreColor()}40`,
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "28px",
              flexWrap: "wrap",
            }}>
              <div style={{ textAlign: "center", minWidth: "80px" }}>
                <div style={{ fontSize: "42px", fontWeight: "700", color: getScoreColor(), fontFamily: "monospace" }}>{score}%</div>
                <div style={{ fontSize: "11px", color: getScoreColor(), fontFamily: "monospace" }}>{getScoreLabel()}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ background: "#111127", borderRadius: "8px", height: "12px", overflow: "hidden", marginBottom: "8px" }}>
                  <div style={{
                    height: "100%",
                    width: `${score}%`,
                    background: `linear-gradient(90deg, ${getScoreColor()}, ${getScoreColor()}99)`,
                    transition: "width 0.3s ease",
                  }} />
                </div>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "12px" }}>
                  {checkedCount} / {totalAudit} points validés · Cliquez sur chaque item pour cocher
                </p>
              </div>
              <button
                onClick={() => setAuditChecked({})}
                style={{ background: "none", border: "1px solid #374151", color: "#9ca3af", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}
              >
                Réinitialiser
              </button>
            </div>

            {auditItems.map((cat, ci) => {
              const catCount = cat.items.filter((_, ii) => auditChecked[`${ci}-${ii}`]).length;
              return (
                <div key={ci} style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ ...h3Style, margin: 0, fontSize: "12px", letterSpacing: "2px" }}>{cat.cat}</h3>
                    <span style={{ fontFamily: "monospace", fontSize: "12px", color: catCount === cat.items.length ? "#22c55e" : "#6b7280" }}>
                      {catCount}/{cat.items.length}
                    </span>
                  </div>
                  <div style={{ background: "#0f0f1a", border: "1px solid #1e1e2e", borderRadius: "10px", overflow: "hidden" }}>
                    {cat.items.map((item, ii) => {
                      const key = `${ci}-${ii}`;
                      const checked = !!auditChecked[key];
                      return (
                        <div
                          key={ii}
                          onClick={() => toggleCheck(key)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "11px 16px",
                            cursor: "pointer",
                            borderBottom: ii < cat.items.length - 1 ? "1px solid #1a1a2e" : "none",
                            background: checked ? "rgba(99,102,241,0.06)" : "transparent",
                            transition: "background 0.15s",
                          }}
                        >
                          <div style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: checked ? "none" : "1.5px solid #374151",
                            background: checked ? "#6366f1" : "transparent",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            color: "#fff",
                          }}>
                            {checked && "✓"}
                          </div>
                          <span style={{
                            fontSize: "13.5px",
                            color: checked ? "#818cf8" : "#9ca3af",
                            textDecoration: checked ? "line-through" : "none",
                            lineHeight: 1.5,
                          }}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SECTION TEXTES */}
        {activeSection === "textes" && (
          <div>
            <h2 style={h2Style}>Textes prêts à l'emploi</h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>
              Remplacer les variables entre [CROCHETS] avant utilisation. Cliquer sur « Copier » pour copier dans le presse-papier.
            </p>

            {textTemplates.map((t, i) => (
              <div key={i} style={{ ...cardStyle, marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                  <h3 style={{ ...h3Style, margin: 0, fontSize: "14px" }}>{t.title}</h3>
                  <button
                    onClick={() => copyText(t.text, i)}
                    style={{
                      background: copiedText === i ? "rgba(34,197,94,0.2)" : "rgba(99,102,241,0.2)",
                      border: "none",
                      color: copiedText === i ? "#22c55e" : "#818cf8",
                      padding: "5px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      transition: "all 0.2s",
                    }}
                  >
                    {copiedText === i ? "✓ Copié !" : "Copier"}
                  </button>
                </div>

                <div style={{
                  background: "#050508",
                  border: "1px solid #1e1e2e",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  color: "#c4b5fd",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {t.text}
                </div>

                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {t.vars.map((v, j) => (
                    <span key={j} style={{
                      background: "rgba(245,158,11,0.1)",
                      color: "#f59e0b",
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontFamily: "monospace",
                    }}>
                      [{v}]
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ ...cardStyle, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.25)", marginTop: "12px" }}>
              <h3 style={{ ...h3Style, marginTop: 0, fontSize: "14px" }}>💡 Bonnes pratiques pour les textes</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  "Toujours personnaliser avec le prénom du client dans les réponses aux avis — jamais de réponse générique.",
                  "Pour les réponses aux avis positifs : inclure naturellement le nom du service mentionné (signal de mots-clés indexé par Google).",
                  "Pour les réponses négatives : ne jamais mentionner de détails confidentiels dans la réponse publique — rediriger vers un contact privé.",
                  "Les Q&A pré-renseignées doivent répondre aux vraies questions des clients, avec un langage authentique — pas du jargon.",
                  "Les Google Posts : 150 à 300 mots maximum, 1 idée forte, 1 CTA clair. Éviter les listes à puces dans les posts.",
                ].map((item, i) => (
                  <li key={i} style={{ padding: "6px 0 6px 18px", position: "relative", color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>
                    <span style={{ position: "absolute", left: 0, color: "#818cf8" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{
        background: "#050508",
        borderTop: "1px solid #1e1e2e",
        padding: "20px 24px",
        textAlign: "center",
        color: "#374151",
        fontSize: "11px",
        fontFamily: "monospace",
        letterSpacing: "1px",
      }}>
        GOOGLE BUSINESS PROFILE · GUIDE OPTIMISATION · MAI 2026 · SOURCES : WHITESPARK · BRIGHTLOCAL · SEARCH ENGINE LAND · STERLING SKY
      </div>
    </div>
  );
}

// Style helpers
const h2Style = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#e2e8f0",
  borderBottom: "1px solid #1e1e2e",
  paddingBottom: "12px",
  marginBottom: "24px",
  letterSpacing: "0.5px",
};

const h3Style = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#818cf8",
  letterSpacing: "1.5px",
  fontFamily: "monospace",
  textTransform: "uppercase",
  marginBottom: "16px",
  marginTop: "28px",
};

const cardStyle = {
  background: "#0f0f1a",
  border: "1px solid #1e1e2e",
  borderRadius: "10px",
  padding: "18px 20px",
  marginBottom: "16px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "12px",
  marginBottom: "32px",
};

const statCard = {
  background: "#0f0f1a",
  border: "1px solid #1e1e2e",
  borderRadius: "10px",
  padding: "20px 16px",
  textAlign: "center",
};
