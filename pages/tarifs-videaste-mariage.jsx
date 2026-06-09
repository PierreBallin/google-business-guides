import Link from 'next/link';
import Layout from '../components/Layout';
import QuickContactForm from '../components/QuickContactForm';

const GOLD = '#c9a96e';
const CREAM = '#f5f0e8';
const GRAY = '#9ca3af';
const CARD_BG = '#0f0f0f';
const BORDER = 'rgba(201,169,110,0.2)';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un vidéaste mariage en Bretagne ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nos formules vont de 890 € (Essentielle, film 4 min) à 1790 € (Cinéma, drone, journée complète, film 7 min). Un devis personnalisé est toujours gratuit.' },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce qui est inclus dans le tarif ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Toutes nos formules incluent le contrat signé, l\'acompte sécurisé, la musique licenciée, la livraison numérique HD et un lien de visionnage privé. La clé USB gravée est incluse à partir de la formule Prestige.' },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des frais de déplacement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pas de frais de déplacement dans les départements 35, 44 et 56. Pour les mariages en dehors de la Bretagne, un forfait kilométrique peut s\'appliquer. Contactez-nous pour un devis.' },
    },
  ],
};

const FORMULES = [
  {
    name: 'Essentielle',
    price: '890',
    accroche: 'L\'essentiel de votre mariage, filmé avec soin',
    cadreurs: '1 cadreur',
    film: 'Film highlights 4 min',
    livraison: '8 semaines',
    items: [
      'Film highlights cinématographique 4 min',
      'Cérémonie filmée intégralement',
      'Montage professionnel',
      '1 musique licenciée',
      'Livraison numérique HD',
      'Lien de visionnage privé',
      'Contrat signé + acompte sécurisé',
    ],
    non: [
      'Film intégral de la journée',
      'Drone',
      'Clé USB',
    ],
  },
  {
    name: 'Prestige',
    price: '1 290',
    popular: true,
    accroche: 'Le meilleur rapport qualité/souvenir',
    cadreurs: '1 cadreur',
    film: 'Film 5 min + film intégral',
    livraison: '6 semaines',
    items: [
      'Film highlights cinématographique 5 min',
      'Film intégral (cérémonie + vin d\'honneur)',
      'Cérémonie filmée intégralement',
      'Montage cinématographique soigné',
      '2 musiques licenciées',
      'Livraison numérique HD',
      'Lien de visionnage privé',
      'Clé USB gravée avec votre date',
      'Contrat signé + acompte sécurisé',
    ],
    non: [
      'Drone',
    ],
  },
  {
    name: 'Cinéma',
    price: '1 790',
    accroche: 'L\'expérience cinématographique ultime',
    cadreurs: '1 cadreur',
    film: 'Film 7 min + film intégral complet',
    livraison: '6 semaines',
    items: [
      'Film cinématographique 7 min',
      'Film intégral de toute la journée',
      'Présence de A à Z (préparatifs → soirée)',
      'Drone (selon autorisations)',
      'Son ambiance professionnel',
      'Séquence préparatifs incluse',
      '3 musiques licenciées',
      'Livraison numérique HD',
      'Lien de visionnage privé',
      'Clé USB + poster tirage photo offert',
      'Contrat signé + acompte sécurisé',
    ],
    non: [],
  },
  {
    name: 'Sur mesure',
    price: 'Sur devis',
    accroche: 'Un mariage hors-norme mérite une formule unique',
    cadreurs: 'Sur mesure',
    film: 'Format sur mesure',
    livraison: 'À définir',
    items: [
      'Formule entièrement personnalisée',
      'Durée de présence adaptée',
      'Courts-métrages et format long',
      'Drone systématique',
      'Live streaming de la cérémonie',
      'Mariage à l\'étranger ou en île',
      'Budget minimum : 2 000 €',
    ],
    non: [],
  },
];

const COMPARAISON = [
  { label: 'Film highlights', ess: '4 min', pre: '5 min', cin: '7 min', sur: 'Sur mesure' },
  { label: 'Film intégral', ess: '—', pre: 'Cérémonie + vin d\'honneur', cin: 'Journée complète', sur: 'Sur mesure' },
  { label: 'Présence', ess: 'Cérémonie + réception', pre: 'Cérémonie + vin d\'honneur', cin: 'Journée complète (12h)', sur: 'Sur mesure' },
  { label: 'Drone', ess: '—', pre: '—', cin: '✓', sur: '✓' },
  { label: 'Clé USB', ess: '—', pre: '✓', cin: '✓ + poster', sur: '✓' },
  { label: 'Délai livraison', ess: '8 semaines', pre: '6 semaines', cin: '6 semaines', sur: 'À définir' },
  { label: 'Frais déplacement 35/44/56', ess: 'Offerts', pre: 'Offerts', cin: 'Offerts', sur: 'À définir' },
];

export default function Tarifs() {
  return (
    <Layout
      title="Tarifs Vidéaste Mariage Bretagne | Mariage Bretagne Films — 890€ à 1790€"
      description="Tarifs et formules vidéaste mariage en Bretagne (35, 44, 56). Formule Essentielle 890€, Prestige 1290€, Cinéma 1790€. Devis gratuit. Aucun frais caché."
      canonical="/tarifs-videaste-mariage"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px', textAlign: 'left' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Formules & Tarifs</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Tarifs 2025–2026
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Formules & Tarifs{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Vidéaste Mariage</span>
          </h1>
          <p style={{ fontSize: '17px', color: GRAY, lineHeight: '1.7', marginBottom: '16px' }}>
            Des formules claires, des tarifs transparents, aucune surprise. À partir de 890 € pour un film de mariage cinématographique en Bretagne (35, 44, 56).
          </p>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>Devis personnalisé gratuit · Réponse sous 24h · Acompte de 30 % à la réservation</p>
        </div>
      </section>

      {/* FORMULES */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {FORMULES.map((f, i) => (
            <div key={i} style={{
              background: f.popular ? 'linear-gradient(160deg, #141008, #0f0f0f)' : CARD_BG,
              border: f.popular ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
              borderRadius: '10px',
              padding: '32px 26px',
              position: 'relative',
              transform: f.popular ? 'scale(1.02)' : 'none',
            }}>
              {f.popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: GOLD, color: '#080808', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  La plus populaire
                </div>
              )}
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: f.popular ? GOLD : GRAY, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '6px' }}>{f.name}</div>
              <div style={{ fontSize: '36px', color: CREAM, fontFamily: 'monospace', fontWeight: '300', marginBottom: '4px' }}>
                {f.price === 'Sur devis' ? <span style={{ fontSize: '24px' }}>Sur devis</span> : <>{f.price} <span style={{ fontSize: '16px', color: GRAY }}>€</span></>}
              </div>
              <div style={{ fontSize: '13px', color: GRAY, marginBottom: '6px' }}>{f.cadreurs} · {f.film}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '20px', paddingBottom: '20px', borderBottom: `1px solid ${BORDER}`, fontStyle: 'italic' }}>{f.accroche}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {f.items.map((item, j) => (
                  <div key={j} style={{ fontSize: '13px', color: GRAY, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: GOLD, flexShrink: 0, marginTop: '1px' }}>✓</span> {item}
                  </div>
                ))}
              </div>
              {f.non.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: `1px solid rgba(201,169,110,0.1)` }}>
                  {f.non.map((item, j) => (
                    <div key={j} style={{ fontSize: '13px', color: '#4b5563', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ flexShrink: 0 }}>—</span> {item}
                    </div>
                  ))}
                </div>
              )}
              <a href="#contact" style={{ display: 'block', marginTop: '24px', background: f.popular ? 'linear-gradient(135deg, #c9a96e, #a07840)' : 'transparent', border: f.popular ? 'none' : `1px solid ${BORDER}`, color: f.popular ? '#080808' : GOLD, padding: '12px', borderRadius: '6px', fontSize: '14px', fontWeight: f.popular ? '700' : '400', textAlign: 'center', textDecoration: 'none' }}>
                Demander un devis
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>Comparatif des formules</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '14px 16px', color: GOLD, fontWeight: '400', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px', borderBottom: `1px solid ${BORDER}` }}>PRESTATIONS</th>
                  {['Essentielle', 'Prestige ⭐', 'Cinéma', 'Sur mesure'].map((h, i) => (
                    <th key={i} style={{ textAlign: 'center', padding: '14px 16px', color: i === 1 ? GOLD : GRAY, fontWeight: '400', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px', borderBottom: `1px solid ${BORDER}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARAISON.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(201,169,110,0.03)' }}>
                    <td style={{ padding: '12px 16px', color: GRAY, borderBottom: `1px solid rgba(201,169,110,0.08)` }}>{row.label}</td>
                    {[row.ess, row.pre, row.cin, row.sur].map((val, j) => (
                      <td key={j} style={{ padding: '12px 16px', textAlign: 'center', color: val === '—' ? '#374151' : j === 1 ? GOLD : GRAY, borderBottom: `1px solid rgba(201,169,110,0.08)`, fontFamily: val === '✓' || val === '—' ? 'monospace' : 'inherit', fontSize: val === 'Offerts' || val === 'À définir' ? '12px' : '14px' }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: '16px 16px', color: GRAY, fontWeight: '400' }}>Tarif</td>
                  {['890 €', '1 290 €', '1 790 €', 'Sur devis'].map((val, j) => (
                    <td key={j} style={{ padding: '16px 16px', textAlign: 'center', color: j === 1 ? GOLD : CREAM, fontFamily: 'monospace', fontWeight: j === 1 ? '700' : '400', fontSize: '16px' }}>
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INCLUS DANS TOUTES LES FORMULES */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>Dans toutes les formules, sans exception</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { icon: '📋', title: 'Contrat signé', text: 'Un contrat détaillé signé dès la réservation. Conditions claires, sans surprise.' },
            { icon: '🔒', title: 'Acompte sécurisé', text: '30 % à la réservation par virement. Le reste au rendu du film.' },
            { icon: '🎵', title: 'Musique licenciée', text: 'Musiques choisies ensemble avec licences d\'utilisation incluses. Pas de droits à payer.' },
            { icon: '📦', title: 'Livraison numérique', text: 'Lien de téléchargement HD privé. Vous gardez votre film pour toujours.' },
            { icon: '🛡️', title: 'Assurance pro', text: 'Responsabilité civile professionnelle + assurance matériel sur chaque mariage.' },
            { icon: '📞', title: 'Suivi personnalisé', text: 'Un interlocuteur unique de la réservation à la livraison du film.' },
          ].map((r, i) => (
            <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '28px 22px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{r.icon}</div>
              <h3 style={{ fontSize: '15px', color: GOLD, fontWeight: '400', marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.7' }}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ TARIFS */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Questions sur les tarifs</h2>
          {[
            { q: 'Y a-t-il des frais de déplacement ?', a: 'Aucun frais de déplacement dans les départements 35, 44 et 56. Pour les mariages à l\'extérieur de la Bretagne, un forfait kilométrique de 0,50 €/km au-delà de 100 km s\'applique — toujours indiqué dans le devis.' },
            { q: 'Peut-on personnaliser une formule ?', a: 'Oui. Nos formules sont un point de départ, pas une contrainte. Vous souhaitez ajouter une heure, inclure le drone dans la formule Prestige, ou combiner deux formules pour différentes parties de la journée ? Parlez-nous-en.' },
            { q: 'Quand régler le solde ?', a: 'L\'acompte de 30 % est versé à la signature du contrat. Le solde de 70 % est réglé à la livraison du film, quand vous êtes satisfait du résultat.' },
            { q: 'Que se passe-t-il si nous devons annuler ?', a: 'L\'acompte de 30 % sécurise la réservation et reste acquis en cas d\'annulation tardive (moins de 3 mois avant le mariage). Pour une annulation plus de 3 mois avant, l\'acompte est remboursé intégralement. Tout est précisé dans le contrat.' },
            { q: 'Puis-je voir des exemples de films avant de réserver ?', a: 'Absolument. Nous partageons des extraits de films lors du premier échange. Des films complets sont disponibles sur demande (avec l\'accord des mariés concernés).' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '22px 0' }}>
              <h3 style={{ fontSize: '15px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
            </div>
          ))}
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link href="/combien-coute-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Guide complet du prix d'un vidéaste mariage →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <div>
              <img
                src="/images/about/eymeric-videaste-mariage-bretagne.webp"
                alt="Eymeric, vidéaste mariage — répond personnellement sous 24h"
                loading="lazy"
                style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', objectPosition: 'top', aspectRatio: '4/5', marginBottom: '28px', display: 'block' }}
              />
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Devis gratuit en 24h</h2>
              <p style={{ fontSize: '15px', color: GRAY, lineHeight: '1.7' }}>
                Vous écrivez directement à Eymeric — pas un formulaire anonyme. Indiquez votre date, le lieu et la formule qui vous intéresse.
              </p>
            </div>
            <div>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
