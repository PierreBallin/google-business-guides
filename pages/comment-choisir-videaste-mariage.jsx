import Link from 'next/link';
import Layout from '../components/Layout';

const GOLD = '#c9a96e';
const CREAM = '#f5f0e8';
const GRAY = '#9ca3af';
const CARD_BG = '#0f0f0f';
const BORDER = 'rgba(201,169,110,0.2)';

const faqItems = [
  {
    q: 'Quel style de film recherchez-vous ?',
    a: 'Avant de chercher un vidéaste, définissez votre style. Film documentaire (authentique, moments saisis sur le vif) ou film cinématographique (travail de lumière poussé, plans dirigés) ? Film court et punchy (3–5 min) ou film long et immersif (30–90 min) ? Les vidéastes ont des styles très différents — regardez au moins 3 à 5 films en entier sur leur portfolio avant de contacter quiconque.',
  },
  {
    q: 'Quelles questions poser lors du premier contact ?',
    a: 'Voici les questions essentielles : (1) Êtes-vous disponible à notre date ? (2) Combien de mariages filmez-vous par weekend ? (par an ?) (3) Quel matériel utilisez-vous (corps de caméra, objectifs, son, drone) ? (4) Avez-vous du matériel de backup ? (5) Êtes-vous assuré professionnellement ? (6) Qui effectue le montage — vous-même ou un tiers ? (7) Quel est le délai de livraison ? (8) Quelles sont les conditions d\'annulation ?',
  },
  {
    q: 'Comment évaluer la qualité d\'un portfolio ?',
    a: 'Ne regardez pas seulement les highlights (extraits). Demandez un film complet pour voir comment le vidéaste gère la longueur, la diversité des séquences et le niveau d\'émotion sur la durée. Vérifiez que le son est propre (on entend les vœux clairement), que la lumière est maîtrisée dans différentes situations (extérieur plein soleil, salle sombre, contre-jour) et que le montage raconte une histoire cohérente.',
  },
  {
    q: 'Doit-on rencontrer le vidéaste avant de signer ?',
    a: 'Idéalement oui. Une visioconférence ou un appel de 30 minutes permet d\'évaluer le courant humain — crucial pour quelqu\'un qui sera à vos côtés toute la journée. Vous avez besoin de vous sentir à l\'aise, pas d\'être "client". Un bon vidéaste vous posera aussi des questions sur votre mariage, vos valeurs, le type d\'ambiance souhaité.',
  },
  {
    q: 'Quels sont les red flags à éviter absolument ?',
    a: 'Méfiez-vous si : (1) pas de contrat proposé — c\'est rédhibitoire, (2) pas d\'assurance professionnelle, (3) portfolio absent ou trop vague, (4) le vidéaste ne peut pas vous montrer un film complet, (5) il filme plusieurs mariages le même jour, (6) les délais de livraison sont vagues ou excessifs (> 6 mois), (7) la communication est lente ou peu claire avant même la réservation.',
  },
  {
    q: 'Le vidéaste doit-il connaître mon lieu de réception ?',
    a: 'C\'est un avantage indéniable. Un vidéaste qui connaît votre salle ou château sait d\'emblée où poster les caméras pour la cérémonie, quels angles éviter, comment gérer la lumière de ce lieu spécifique. Si votre vidéaste ne connaît pas le lieu, demandez-lui s\'il peut faire une visite préalable — c\'est une pratique professionnelle normale.',
  },
  {
    q: 'Vidéaste et photographe : comment les faire travailler ensemble ?',
    a: 'Si vous faites appel à deux prestataires différents (photo et vidéo), présentez-les l\'un à l\'autre dès la réservation et organisez un échange entre eux. Partagez le planning de journée avec les deux. Le jour J, assurez-vous que le photographe et le vidéaste se sont parlé le matin des angles de cérémonie : ils ne doivent pas se gêner mutuellement ni créer des angles bizarres sur les photos ou la vidéo.',
  },
  {
    q: 'Quel délai de livraison est raisonnable ?',
    a: 'Un délai de 6 à 12 semaines est standard pour un film de mariage professionnel. En dessous de 4 semaines, la qualité du montage peut en souffrir. Au-delà de 6 mois, c\'est trop long — et les souvenirs commencent à s\'estomper. Méfiez-vous des promesses de livraison en 2 semaines : soit le montage est bâclé, soit il est externalisé à bas coût.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const CRITERES = [
  { n: '01', title: 'Portfolio complet', text: 'Regardez des films entiers, pas seulement des extraits. Vérifiez la cohérence sur la durée et la qualité du son.' },
  { n: '02', title: 'Feeling humain', text: 'Ce prestataire sera avec vous toute la journée. Le courant humain est aussi important que la technique.' },
  { n: '03', title: 'Matériel & backup', text: 'Deux corps de caméra minimum, son de secours, batteries de remplacement. Zéro risque de panne.' },
  { n: '04', title: 'Contrat & assurance', text: 'Contrat signé, acompte sécurisé, assurance responsabilité civile pro. Les trois sont non-négociables.' },
  { n: '05', title: 'Références vérifiables', text: 'Avis Google, témoignages vidéo de clients, recommandations de photographes ou traiteurs locaux.' },
  { n: '06', title: 'Communication', text: 'Un bon vidéaste répond rapidement, pose des questions, et vous écoute. La communication préfigure la relation le jour J.' },
];

export default function CommentChoisir() {
  return (
    <Layout
      title="Comment Choisir son Vidéaste Mariage ? | Guide Complet 2025–2026"
      description="Comment choisir un bon vidéaste mariage ? Critères essentiels, questions à poser, red flags, portfolio, contrat, assurance. Guide complet pour les mariés de Bretagne (35, 44, 56)."
      canonical="/comment-choisir-videaste-mariage"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Comment choisir son vidéaste</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Guide pratique 2025–2026
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Comment choisir son{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>vidéaste mariage ?</span>
          </h1>
          <p style={{ fontSize: '17px', color: GRAY, maxWidth: '700px', lineHeight: '1.7' }}>
            Critères de sélection, questions à poser, red flags à éviter, portfolio, contrat, assurance… Tout ce qu'il faut savoir pour choisir le bon vidéaste pour votre mariage en Bretagne.
          </p>
        </div>
      </section>

      {/* 6 CRITÈRES */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Les essentiels</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>6 critères pour choisir sans se tromper</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {CRITERES.map((c, i) => (
            <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '28px 24px' }}>
              <div style={{ fontSize: '32px', fontFamily: 'monospace', color: 'rgba(201,169,110,0.25)', fontWeight: '700', lineHeight: 1, marginBottom: '12px' }}>{c.n}</div>
              <h3 style={{ fontSize: '15px', color: GOLD, fontWeight: '400', marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.7' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUESTIONS À POSER */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>Les 10 questions à poser à votre vidéaste</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              'Êtes-vous disponible à notre date ?',
              'Combien de mariages filmez-vous par an ?',
              'Qui effectue le montage (vous ou un tiers) ?',
              'Quel matériel utilisez-vous ?',
              'Avez-vous du matériel de backup ?',
              'Êtes-vous assuré professionnellement ?',
              'Quel est le délai de livraison ?',
              'Peut-on voir un film complet de votre travail ?',
              'Comment gérez-vous les imprévus météo ?',
              'Quelles sont vos conditions d\'annulation ?',
            ].map((q, i) => (
              <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: GOLD, fontFamily: 'monospace', fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>Q{i + 1}</span>
                <span style={{ fontSize: '14px', color: GRAY, lineHeight: '1.5' }}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 20px', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>Toutes les réponses pour bien choisir</h2>
        </div>
        {faqItems.map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '28px 0' }}>
            <h2 style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: CREAM, fontWeight: '400', marginBottom: '14px', lineHeight: '1.4' }}>{item.q}</h2>
            <p style={{ fontSize: '15px', color: GRAY, lineHeight: '1.85' }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* CHECKLIST */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Checklist avant de signer</h2>
            <p style={{ fontSize: '14px', color: GRAY, marginTop: '10px' }}>Cochez toutes ces cases avant de signer votre contrat.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'J\'ai regardé au moins un film complet (pas seulement un trailer)',
              'J\'ai vérifié les avis Google et les recommandations',
              'J\'ai eu un appel ou une rencontre avec le vidéaste',
              'J\'ai confirmé la disponibilité pour ma date précise',
              'J\'ai demandé la preuve de l\'assurance responsabilité civile pro',
              'J\'ai lu le contrat entièrement, y compris les conditions d\'annulation',
              'J\'ai demandé ce qui est inclus (déplacement, son, backup, drone…)',
              'J\'ai une date de livraison contractuelle',
              'L\'acompte est versé par virement (traçable)',
              'J\'ai présenté mon vidéaste à mon photographe',
            ].map((item, i) => (
              <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ width: '20px', height: '20px', border: `1px solid ${GOLD}`, borderRadius: '3px', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: '14px', color: GRAY }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(160deg, #141008, #0f0f0f)', border: `1px solid ${GOLD}`, borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: GOLD, fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '16px' }}>Studio Lumière Mariage</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Nous cochons toutes les cases</h2>
          <p style={{ fontSize: '15px', color: GRAY, maxWidth: '560px', margin: '0 auto 32px', lineHeight: '1.7' }}>
            Contrat signé dès la réservation, assurance pro, matériel de backup systématique, 50+ mariages filmés en Bretagne. Réponse sous 24h.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '14px 32px', borderRadius: '4px', fontSize: '15px', fontWeight: '700' }}>
              Demander un devis gratuit
            </a>
            <Link href="/tarifs-videaste-mariage" style={{ border: `1px solid ${BORDER}`, color: GOLD, padding: '14px 28px', borderRadius: '4px', fontSize: '14px' }}>
              Voir nos formules
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES LIÉS */}
      <section style={{ background: '#0a0a0a', padding: '56px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            <Link href="/combien-coute-videaste-mariage">
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '24px', cursor: 'pointer' }}>
                <div style={{ fontSize: '11px', color: GOLD, fontFamily: 'monospace', letterSpacing: '1px', marginBottom: '10px' }}>GUIDE PRIX</div>
                <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>Combien coûte un vidéaste mariage ?</h3>
                <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>Fourchettes de prix, ce qui est inclus, différences de tarifs, drone, frais cachés.</p>
                <div style={{ marginTop: '14px', fontSize: '13px', color: GOLD }}>Lire le guide →</div>
              </div>
            </Link>
            <Link href="/tarifs-videaste-mariage">
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '24px', cursor: 'pointer' }}>
                <div style={{ fontSize: '11px', color: GOLD, fontFamily: 'monospace', letterSpacing: '1px', marginBottom: '10px' }}>NOS FORMULES</div>
                <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>Formules & tarifs Studio Lumière</h3>
                <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>Comparatif détaillé de nos 4 formules, de 890 € à sur mesure. Devis gratuit.</p>
                <div style={{ marginTop: '14px', fontSize: '13px', color: GOLD }}>Voir les tarifs →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Parlez-nous de votre mariage</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Devis gratuit, réponse sous 24h. Pas d'engagement jusqu'à la signature du contrat.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px', margin: '0 auto 24px' }}>
            <input placeholder="Votre email" type="email" style={{ background: '#111', border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '14px 16px', color: CREAM, fontSize: '14px', fontFamily: 'Georgia, serif', outline: 'none' }} />
            <input placeholder="Date de mariage & lieu de réception" style={{ background: '#111', border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '14px 16px', color: CREAM, fontSize: '14px', fontFamily: 'Georgia, serif', outline: 'none' }} />
            <button style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '15px', borderRadius: '6px', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
              Demander mon devis gratuit
            </button>
          </div>
          <p style={{ fontSize: '13px', color: '#4b5563' }}>contact@studio-lumiere-mariage.fr · 06 XX XX XX XX</p>
        </div>
      </section>
    </Layout>
  );
}
