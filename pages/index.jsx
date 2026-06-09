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
  '@type': 'LocalBusiness',
  '@id': 'https://videaste-mariage-nantes-vannes.agence-dclik.fr',
  name: 'Mariage Bretagne Films',
  description: 'Vidéaste mariage professionnel en Bretagne. Films cinématographiques dans l\'Ille-et-Vilaine (35), la Loire-Atlantique (44) et le Morbihan (56).',
  url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr',
  telephone: '+33782739245',
  email: 'contact@agence-dclik.fr',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  openingHours: 'Mo-Sa 09:00-19:00',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
    { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
    { '@type': 'AdministrativeArea', name: 'Morbihan' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    postalCode: '35000',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.1173, longitude: -1.6778 },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '53',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules vidéo mariage',
    itemListElement: [
      { '@type': 'Offer', name: 'Formule Essentielle', price: '890', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Formule Prestige', price: '1290', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Formule Cinéma', price: '1790', priceCurrency: 'EUR' },
    ],
  },
};

const TESTIMONIALS = [
  {
    author: 'Marie & Thomas',
    date: 'Juin 2024 · Château de la Bourbansais, Ille-et-Vilaine',
    text: 'Le film est arrivé un dimanche soir. On a tout regardé debout dans la cuisine, en pleurant. Vous avez capté des moments dont on n\'avait même pas conscience sur le moment — les regards échangés, les mots de nos parents. Merci.',
    rating: 5,
  },
  {
    author: 'Camille & Lucas',
    date: 'Août 2024 · Île-aux-Moines, Golfe du Morbihan',
    text: 'On n\'était pas certains d\'investir dans la vidéo. Aujourd\'hui c\'est clairement le poste dont on est le plus contents. Nos amis croient qu\'on a tourné un court-métrage professionnel.',
    rating: 5,
  },
  {
    author: 'Léa & Antoine',
    date: 'Mai 2024 · Domaine de l\'Épinay, Loire-Atlantique',
    text: 'Nos parents ont regardé le film trois fois dans la même soirée. C\'est le meilleur indicateur qu\'on puisse vous donner. Discret le jour J, résultat bluffant à la livraison.',
    rating: 5,
  },
];

const PROCESS = [
  { n: '01', title: 'Premier échange', text: 'On discute de votre vision, du lieu, de l\'ambiance souhaitée. Appel découverte gratuit, sans engagement, pour se connaître avant de signer quoi que ce soit.' },
  { n: '02', title: 'Préparation', text: 'On se retrouve avant le grand jour : programme, moments clés, coordination avec votre photographe. Rien n\'est laissé au hasard.' },
  { n: '03', title: 'Le jour J filmé', text: 'Présence discrète de la préparation jusqu\'à la soirée. Deux corps caméra en simultané pour ne rater aucun moment, même les plus fugaces.' },
  { n: '04', title: 'Votre film livré', text: 'Montage soigné avec la musique choisie ensemble. Film remis en 6 à 10 semaines via lien privé HD, puis sur clé USB gravée avec votre date.' },
];

const FORMULES = [
  {
    name: 'Essentielle',
    price: '890',
    duration: 'Film highlights 4 min',
    included: ['Film highlights 4 min', 'Cérémonie complète', 'Montage professionnel', 'Musique licenciée', 'Livraison numérique HD', 'Livraison en 8 semaines'],
  },
  {
    name: 'Prestige',
    price: '1 290',
    duration: 'Film 5 min + intégral',
    popular: true,
    included: ['Film highlights 5 min', 'Film intégral (cérémonie + vin d\'honneur)', 'Montage cinématographique', '2 musiques licenciées', 'Livraison numérique HD', 'Livraison en 6 semaines', 'Clé USB gravée offerte'],
  },
  {
    name: 'Cinéma',
    price: '1 790',
    duration: 'Journée complète · Film 7 min',
    included: ['Film cinématographique 7 min', 'Film intégral journée complète', 'Présence préparatifs → soirée', 'Drone (selon autorisation)', 'Son ambiance professionnel', 'Clé USB + tirage poster', 'Livraison en 6 semaines'],
  },
];

const DEPTS = [
  { dept: '35', name: 'Ille-et-Vilaine', href: '/videaste-mariage-ille-et-vilaine', cities: 'Rennes · Saint-Malo · Fougères · Vitré · Dinard', desc: 'Châteaux bretons, cité intra-muros de Saint-Malo, domaines de caractère.' },
  { dept: '44', name: 'Loire-Atlantique', href: '/videaste-mariage-loire-atlantique', cities: 'Nantes · La Baule · Guérande · Saint-Nazaire · Pornic', desc: 'Vignobles du Muscadet, côte atlantique, Château des Ducs, élégance nantaise.' },
  { dept: '56', name: 'Morbihan', href: '/videaste-mariage-morbihan', cities: 'Vannes · Auray · Quiberon · Carnac · La Trinité-sur-Mer', desc: 'Golfe du Morbihan, presqu\'île de Quiberon, vieille ville médiévale de Vannes.' },
];

export default function Home() {
  return (
    <Layout
      title="Vidéaste Mariage Bretagne | Mariage Bretagne Films — 35, 44, 56"
      description="Vidéaste mariage professionnel en Bretagne. Films cinématographiques dans l'Ille-et-Vilaine (35), Loire-Atlantique (44) et Morbihan (56). Formules de 890€ à 1790€. Devis gratuit."
      canonical="/"
      schema={schema}
    >
      {/* HERO — plein écran, cinématographique */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100svh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <img
          src="/images/hero/hero-mariage-bretagne.webp"
          alt="Film de mariage cinématographique en Bretagne — Mariage Bretagne Films"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(5,4,4,0.88) 0%, rgba(8,8,8,0.72) 55%, rgba(8,8,6,0.88) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '120px 20px 100px', textAlign: 'center', width: '100%' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>

            <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.28)', padding: '6px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '32px', textTransform: 'uppercase' }}>
              <span className="pulse-dot" />
              Bretagne · 35, 44 &amp; 56
            </div>

            <h1 className="hero-h1" style={{ fontSize: 'clamp(36px, 6.5vw, 70px)', fontWeight: '400', color: CREAM, margin: '0 0 10px', lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              Votre mariage filmé
            </h1>
            <h1 className="hero-h1" style={{ fontSize: 'clamp(36px, 6.5vw, 70px)', fontWeight: '400', color: GOLD, fontStyle: 'italic', margin: '0 0 28px', lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              comme il le mérite.
            </h1>

            <p className="hero-sub" style={{ fontSize: 'clamp(17px, 2.8vw, 22px)', color: '#d4cfc8', margin: '0 0 16px', fontStyle: 'italic', lineHeight: '1.4', letterSpacing: '0.2px' }}>
              Discret le jour J. Inoubliable pour toujours.
            </p>
            <p className="hero-desc" style={{ fontSize: '16px', color: GRAY, maxWidth: '560px', margin: '0 auto 44px', lineHeight: '1.75' }}>
              Des films de mariage cinématographiques en Bretagne — des images que vous revivrez des centaines de fois, avec exactement les mêmes frissons qu'au premier visionnage.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '16px 38px', borderRadius: '4px', fontSize: '16px', fontWeight: '700', letterSpacing: '0.3px', display: 'inline-block' }}>
                Vérifier ma date — Gratuit
              </a>
              <Link href="/tarifs-videaste-mariage" style={{ border: '1px solid rgba(201,169,110,0.4)', color: GOLD, padding: '16px 30px', borderRadius: '4px', fontSize: '15px', display: 'inline-block' }}>
                Voir les formules
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.45 }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, #c9a96e)' }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(201,169,110,0.1)', padding: '32px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '20px', textAlign: 'center' }}>
          {[
            { n: '50+', l: 'mariages filmés' },
            { n: '5,0 ★', l: 'note Google' },
            { n: '< 24h', l: 'délai de réponse' },
            { n: '6 sem.', l: 'délai de livraison' },
            { n: '0 €', l: 'de frais cachés' },
          ].map((s, i) => (
            <div key={i} className="reveal" style={{ borderLeft: i > 0 ? '1px solid rgba(201,169,110,0.1)' : 'none' }}>
              <div className="stat-number">{s.n}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIE BENTO */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Nos réalisations</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>Films de mariage en Bretagne</h2>
          <p style={{ fontSize: '14px', color: GRAY, marginTop: '12px' }}>Chaque mariage a sa lumière, son émotion, son histoire.</p>
        </div>
        <div className="gallery-bento reveal">
          {[
            { src: '/images/hero/hero-mariage-bretagne.webp', alt: 'Film mariage cinématographique Bretagne', label: 'Bretagne — film mariage' },
            { src: '/images/hero/hero-mariage-nantes.webp', alt: 'Vidéaste mariage Nantes Loire-Atlantique', label: 'Nantes (44)' },
            { src: '/images/hero/hero-mariage-vannes.webp', alt: 'Vidéaste mariage Vannes Morbihan', label: 'Vannes (56)' },
            { src: '/images/hero/hero-mariage-ille-et-vilaine.webp', alt: 'Vidéaste mariage Ille-et-Vilaine', label: 'Ille-et-Vilaine (35)' },
            { src: '/images/hero/hero-mariage-loire-atlantique.webp', alt: 'Vidéaste mariage Loire-Atlantique', label: 'Loire-Atlantique (44)' },
            { src: '/images/hero/hero-mariage-morbihan.webp', alt: 'Vidéaste mariage Morbihan Golfe', label: 'Morbihan (56)' },
          ].map((item, i) => (
            <div key={i} style={{ position: 'relative', background: CARD_BG }}>
              <img
                src={item.src}
                alt={item.alt}
                loading={i < 3 ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.65))', padding: '28px 16px 14px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(245,240,232,0.9)', letterSpacing: '0.3px' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>De la réservation à la livraison</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>4 étapes, zéro surprise</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2px' }}>
            {PROCESS.map((step, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: CARD_BG, borderTop: `2px solid ${i === 0 ? GOLD : BORDER}`, padding: '32px 24px' }}>
                <div style={{ fontSize: '40px', fontFamily: 'monospace', color: 'rgba(201,169,110,0.18)', fontWeight: '700', marginBottom: '14px', lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ fontSize: '16px', color: GOLD, fontWeight: '400', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.75' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section id="formules" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Formules & tarifs</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>Des films à partir de 890 €</h2>
            <p style={{ fontSize: '15px', color: GRAY, marginTop: '14px' }}>Contrat signé · Musique licenciée · Livraison HD · Zéro frais caché</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
            {FORMULES.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{
                background: f.popular ? 'linear-gradient(160deg, #141008, #0f0f0f)' : CARD_BG,
                borderTop: f.popular ? `2px solid ${GOLD}` : `2px solid rgba(201,169,110,0.15)`,
                padding: '36px 28px',
                position: 'relative',
              }}>
                {f.popular && (
                  <div style={{ position: 'absolute', top: '-1px', right: '24px', background: GOLD, color: '#080808', fontSize: '10px', fontWeight: '700', padding: '4px 12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    La plus choisie
                  </div>
                )}
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: f.popular ? GOLD : GRAY, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '8px' }}>{f.name}</div>
                <div style={{ fontSize: '42px', color: CREAM, fontFamily: 'monospace', fontWeight: '300', marginBottom: '4px', lineHeight: 1 }}>{f.price} <span style={{ fontSize: '18px', color: GRAY }}>€</span></div>
                <div style={{ fontSize: '13px', color: GRAY, marginBottom: '28px', paddingBottom: '20px', borderBottom: `1px solid ${BORDER}` }}>{f.duration}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {f.included.map((item, j) => (
                    <li key={j} style={{ fontSize: '13px', color: GRAY, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: GOLD, flexShrink: 0, marginTop: '2px' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary" style={{ display: 'block', background: f.popular ? 'linear-gradient(135deg, #c9a96e, #a07840)' : 'transparent', border: f.popular ? 'none' : `1px solid ${BORDER}`, color: f.popular ? '#080808' : GOLD, padding: '13px', borderRadius: '4px', fontSize: '14px', fontWeight: f.popular ? '700' : '400', textAlign: 'center' }}>
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/tarifs-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Voir le comparatif complet des formules →
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Ils nous ont fait confiance</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM }}>Ce que disent nos mariés</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: CARD_BG, borderTop: `2px solid rgba(201,169,110,0.15)`, padding: '36px 28px' }}>
                <div style={{ color: GOLD, fontSize: '16px', marginBottom: '20px', letterSpacing: '3px' }}>{'★'.repeat(t.rating)}</div>
                <p style={{ fontSize: '15px', color: '#c5bfb5', lineHeight: '1.8', marginBottom: '24px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ fontSize: '13px', color: CREAM, fontWeight: '400' }}>{t.author}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GÉOGRAPHIE */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Zone d'intervention</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>3 départements bretons, 0 frais de déplacement</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {DEPTS.map((d, i) => (
            <Link key={i} href={d.href}>
              <div className={`reveal reveal-d${i + 1}`} style={{ background: CARD_BG, borderTop: `2px solid rgba(201,169,110,0.15)`, padding: '36px 28px', cursor: 'pointer', transition: 'border-color 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'rgba(201,169,110,0.15)'; }}>
                <div style={{ fontSize: '48px', fontFamily: 'monospace', color: 'rgba(201,169,110,0.2)', fontWeight: '700', lineHeight: 1, marginBottom: '14px' }}>{d.dept}</div>
                <h3 style={{ fontSize: '18px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>{d.name}</h3>
                <p style={{ fontSize: '12px', color: GOLD, marginBottom: '12px', letterSpacing: '0.4px' }}>{d.cities}</p>
                <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>{d.desc}</p>
                <div style={{ marginTop: '24px', fontSize: '13px', color: GOLD }}>Voir les mariages dans ce département →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Notre engagement</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM }}>Ce qui nous rend différents</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
            {[
              { label: 'Matériel double', text: 'Deux corps caméra sur chaque mariage. Si l\'un tombe en panne, la journée continue. Aucun couple ne nous a jamais attendu pour ça.', img: '/images/materiel/sony-alpha7iv-videaste-mariage-bretagne.webp', imgAlt: 'Sony Alpha 7 IV — boîtier utilisé pour filmer les mariages en Bretagne' },
              { label: 'Contrat & acompte', text: 'Votre date est sécurisée dès la signature du contrat. Les conditions sont claires, sans fine print et sans surprise à la livraison.' },
              { label: 'Assurance pro', text: 'Responsabilité civile professionnelle et assurance matériel. Vous n\'avez pas à vous en préoccuper — c\'est notre affaire.' },
              { label: '50+ mariages en Bretagne', text: 'On connaît les lumières du Golfe en soirée, les châteaux du 35 au crépuscule, les vignes du 44 à l\'automne. C\'est dans les films.' },
            ].map((r, i) => (
              <div key={i} className={`reveal reveal-d${i % 3 + 1}`} style={{ background: CARD_BG, borderTop: `2px solid rgba(201,169,110,0.15)`, overflow: 'hidden' }}>
                {r.img && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={r.img} alt={r.imgAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                )}
                <div style={{ padding: '32px 24px' }}>
                  <h3 style={{ fontSize: '15px', color: GOLD, fontWeight: '400', marginBottom: '12px' }}>{r.label}</h3>
                  <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.75' }}>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Questions fréquentes</div>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: '400', color: CREAM }}>Vos questions, nos réponses</h2>
          </div>
          {[
            { q: 'Combien coûte un vidéaste mariage en Bretagne ?', a: 'Comptez entre 890 € et 1 790 € selon la durée de présence et les livrables inclus. Notre formule Prestige à 1 290 € est la plus choisie. Devis personnalisé toujours gratuit.' },
            { q: 'Dois-je réserver tôt ?', a: 'En Bretagne, les samedis de mai à septembre partent 12 à 18 mois à l\'avance. En dehors de la haute saison, des disponibilités existent sur un délai plus court. Vérifiez votre date sans attendre.' },
            { q: 'Le drone est-il inclus ?', a: 'Le drone est inclus dans la formule Cinéma (1 790 €), sous réserve d\'autorisation préfectorale. Certains sites classés ou espaces aériens contrôlés peuvent l\'interdire — nous vérifions systématiquement en amont.' },
            { q: 'Dans quel délai je reçois mon film ?', a: 'Entre 6 et 10 semaines selon la formule. Vous recevez d\'abord un lien de visionnage privé HD, puis votre film sur clé USB gravée avec votre date de mariage.' },
          ].map((item, i) => (
            <div key={i} className="reveal" style={{ borderBottom: `1px solid ${BORDER}`, padding: '24px 0' }}>
              <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
            </div>
          ))}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/combien-coute-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Guide complet du prix d'un vidéaste mariage →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 20px 100px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '20px' }}>Parlons de votre mariage</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '400', color: CREAM, marginBottom: '16px', lineHeight: '1.25' }}>
              Votre date est-elle<br />encore disponible ?
            </h2>
            <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.7' }}>
              Indiquez votre date et le lieu envisagé. Réponse garantie sous 24h.
            </p>
          </div>
          <div className="reveal">
            <QuickContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
