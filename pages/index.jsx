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
    date: 'Juin 2024 · Château de la Bourbansais, 35',
    text: 'Studio Lumière a su capter chaque émotion avec une sensibilité rare. Notre film de mariage est d\'une beauté à couper le souffle. On le regarde encore et encore, les larmes aux yeux. Un immense merci.',
    rating: 5,
  },
  {
    author: 'Camille & Lucas',
    date: 'Août 2024 · Golfe du Morbihan, 56',
    text: 'Professionnel, discret, créatif. Les images du coucher de soleil sur le Golfe sont époustouflantes. La livraison a été rapide et le film dépasse toutes nos attentes. Je recommande à 1000%.',
    rating: 5,
  },
  {
    author: 'Léa & Antoine',
    date: 'Mai 2024 · Vignobles, Loire-Atlantique (44)',
    text: 'Nous avons choisi Studio Lumière après avoir vu leur portfolio et nous n\'avons pas été déçus. La qualité cinématographique est incomparable. Nos proches ne savent pas s\'ils pleurent ou sourient en regardant le film.',
    rating: 5,
  },
];

const PROCESS = [
  { n: '01', title: 'Premier échange', text: 'On discute de votre vision, du lieu, de l\'ambiance souhaitée. Appel découverte gratuit et sans engagement pour se connaître avant de signer.' },
  { n: '02', title: 'Préparation & rencontre', text: 'On se retrouve avant le grand jour pour affiner le programme, repérer les moments clés, coordonner avec votre photographe et vos familles.' },
  { n: '03', title: 'Le jour J filmé', text: 'Présence discrète de la préparation à la soirée. Deux caméras (selon formule) pour ne rien manquer, même si vous êtes séparés.' },
  { n: '04', title: 'Votre film livré', text: 'Montage soigné avec musique choisie ensemble. Film remis en 6 à 10 semaines via lien privé, puis sur clé USB gravée avec votre date.' },
];

const FORMULES = [
  { name: 'Essentielle', price: '890', duration: '1 cadreur · 4 min de highlights', included: ['Film highlights 4 min', 'Cérémonie complète', 'Montage professionnel', 'Musique licenciée', 'Livraison en 8 semaines'] },
  { name: 'Prestige', price: '1 290', duration: '1 cadreur · Film 5 min + intégral', popular: true, included: ['Film highlights 5 min', 'Film intégral (cérémonie + vin d\'honneur)', 'Cérémonie complète', 'Montage cinématographique', '2 musiques licenciées', 'Livraison en 6 semaines', 'Clé USB gravée offerte'] },
  { name: 'Cinéma', price: '1 790', duration: '2 cadreurs · Film 7 min + intégral', included: ['Film cinématographique 7 min', 'Film intégral (journée complète)', '2 cadreurs (angles multiples)', 'Drone (selon autorisation)', 'Son ambiance professionnel', 'Séquence préparatifs', 'Livraison en 6 semaines', 'Clé USB + tirage poster'] },
];

const REASSURANCES = [
  { icon: '🎥', title: 'Matériel de backup', text: 'Deux corps d\'appareils photo + son de secours sur chaque mariage. Zéro risque de panne le jour J.' },
  { icon: '📋', title: 'Contrat signé', text: 'Contrat détaillé signé à la réservation, acompte sécurisé, conditions claires. Aucune mauvaise surprise.' },
  { icon: '🛡️', title: 'Assurance professionnelle', text: 'Responsabilité civile professionnelle et assurance du matériel. Vous êtes couverts dans tous les cas.' },
  { icon: '🎬', title: '50+ mariages filmés', text: 'Expérience de 50+ mariages en Bretagne : châteaux, plages, domaines viticoles, salles de réception.' },
];

const DEPTS = [
  { dept: '35', name: 'Ille-et-Vilaine', href: '/videaste-mariage-ille-et-vilaine', cities: 'Rennes · Saint-Malo · Fougères · Vitré · Dinard', desc: 'Châteaux bretons, cité intra-muros de Saint-Malo, domaines de caractère.' },
  { dept: '44', name: 'Loire-Atlantique', href: '/videaste-mariage-loire-atlantique', cities: 'Nantes · La Baule · Guérande · Saint-Nazaire · Pornic', desc: 'Vignobles du Muscadet, côte atlantique, Château des Ducs, élégance nantaise.' },
  { dept: '56', name: 'Morbihan', href: '/videaste-mariage-morbihan', cities: 'Vannes · Lorient · Auray · Quiberon · Carnac', desc: 'Golfe du Morbihan, presqu\'île de Quiberon, vieille ville médiévale de Vannes.' },
];

export default function Home() {
  return (
    <Layout
      title="Vidéaste Mariage Bretagne | Mariage Bretagne Films — 35, 44, 56"
      description="Vidéaste mariage professionnel en Bretagne. Films cinématographiques dans l'Ille-et-Vilaine (35), Loire-Atlantique (44) et Morbihan (56). Formules de 890€ à 1790€. Devis gratuit."
      canonical="/"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 60%, #0a0a05 100%)', padding: '100px 20px 90px', textAlign: 'center', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '28px', textTransform: 'uppercase' }}>
            Ille-et-Vilaine · Loire-Atlantique · Morbihan
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2', letterSpacing: '-0.5px' }}>
            Vidéaste Mariage en{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Bretagne</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: GRAY, margin: '0 0 12px', fontStyle: 'italic', lineHeight: '1.5' }}>
            Votre histoire. Filmée pour toujours.
          </p>
          <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Nous créons des films de mariage cinématographiques qui transmettent l'émotion exacte du moment — des frissons de la préparation aux larmes de joie sur la piste de danse.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '16px 36px', borderRadius: '4px', fontSize: '16px', fontWeight: '700', letterSpacing: '0.3px' }}>
              Demander un devis gratuit
            </a>
            <Link href="/tarifs-videaste-mariage" style={{ border: '1px solid rgba(201,169,110,0.4)', color: GOLD, padding: '16px 32px', borderRadius: '4px', fontSize: '15px' }}>
              Voir les formules
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(201,169,110,0.1)', padding: '28px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', textAlign: 'center' }}>
          {[
            { n: '50+', l: 'mariages filmés en Bretagne' },
            { n: '5 ★', l: 'note moyenne Google' },
            { n: '3', l: 'départements couverts' },
            { n: '< 24h', l: 'délai de réponse' },
            { n: '100%', l: 'clients satisfaits' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: GOLD, fontFamily: 'monospace', marginBottom: '4px' }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Comment ça se passe</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>4 étapes pour votre film de mariage</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '24px' }}>
          {PROCESS.map((step, i) => (
            <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '32px 24px' }}>
              <div style={{ fontSize: '36px', fontFamily: 'monospace', color: 'rgba(201,169,110,0.25)', fontWeight: '700', marginBottom: '12px', lineHeight: 1 }}>{step.n}</div>
              <h3 style={{ fontSize: '16px', color: GOLD, fontWeight: '400', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.7' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULES */}
      <section id="formules" style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Formules & tarifs</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>Des films à partir de 890 €</h2>
            <p style={{ fontSize: '15px', color: GRAY, marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>Toutes formules incluent contrat signé, musique licenciée et livraison numérique HD.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {FORMULES.map((f, i) => (
              <div key={i} style={{
                background: f.popular ? 'linear-gradient(160deg, #141008, #0f0f0f)' : CARD_BG,
                border: f.popular ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
                borderRadius: '10px',
                padding: '32px 28px',
                position: 'relative',
                transform: f.popular ? 'scale(1.02)' : 'none',
              }}>
                {f.popular && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: GOLD, color: '#080808', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    La plus choisie
                  </div>
                )}
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: f.popular ? GOLD : GRAY, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '8px' }}>{f.name}</div>
                <div style={{ fontSize: '38px', color: CREAM, fontFamily: 'monospace', fontWeight: '300', marginBottom: '4px' }}>{f.price} <span style={{ fontSize: '18px', color: GRAY }}>€</span></div>
                <div style={{ fontSize: '13px', color: GRAY, marginBottom: '24px', paddingBottom: '20px', borderBottom: `1px solid ${BORDER}` }}>{f.duration}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {f.included.map((item, j) => (
                    <li key={j} style={{ fontSize: '13px', color: GRAY, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: GOLD, flexShrink: 0, marginTop: '1px' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/tarifs-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Voir le détail complet des formules →
            </Link>
          </div>
        </div>
      </section>

      {/* GÉOGRAPHIE */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Zone d'intervention</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>Disponible dans 3 départements bretons</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {DEPTS.map((d, i) => (
            <Link key={i} href={d.href}>
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '36px 28px', cursor: 'pointer', transition: 'all 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '42px', fontFamily: 'monospace', color: 'rgba(201,169,110,0.3)', fontWeight: '700', lineHeight: 1, marginBottom: '12px' }}>{d.dept}</div>
                <h3 style={{ fontSize: '18px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>{d.name}</h3>
                <p style={{ fontSize: '12px', color: GOLD, marginBottom: '12px', letterSpacing: '0.5px' }}>{d.cities}</p>
                <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>{d.desc}</p>
                <div style={{ marginTop: '20px', fontSize: '13px', color: GOLD }}>Voir plus →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GALERIE PHOTOS */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Nos réalisations</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, lineHeight: '1.3' }}>Extraits de films de mariage en Bretagne</h2>
          <p style={{ fontSize: '14px', color: GRAY, marginTop: '12px', maxWidth: '480px', margin: '12px auto 0' }}>Chaque film est unique, comme chaque couple. Voici un aperçu de notre univers cinématographique.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {[
            { label: 'Cérémonie en château — Ille-et-Vilaine (35)', ratio: '56%' },
            { label: 'Vignobles du Muscadet — Loire-Atlantique (44)', ratio: '56%' },
            { label: 'Coucher de soleil — Golfe du Morbihan (56)', ratio: '56%' },
            { label: 'Préparatifs de la mariée — Nantes', ratio: '56%' },
            { label: 'Vin d\'honneur au bord de mer — Saint-Malo', ratio: '56%' },
            { label: 'Première danse — Vannes', ratio: '56%' },
          ].map((item, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: item.ratio, background: CARD_BG, border: `1px dashed rgba(201,169,110,0.25)`, borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '20px' }}>
                <div style={{ fontSize: '28px', opacity: 0.3 }}>🎬</div>
                <span style={{ fontSize: '12px', color: 'rgba(201,169,110,0.5)', textAlign: 'center', lineHeight: '1.5', letterSpacing: '0.3px' }}>{item.label}</span>
                <span style={{ fontSize: '10px', color: '#374151', fontFamily: 'monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>Photo à venir</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Ils nous ont fait confiance</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM }}>Ce que disent nos mariés</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '32px 28px' }}>
                <div style={{ color: GOLD, fontSize: '18px', marginBottom: '16px', letterSpacing: '2px' }}>{'★'.repeat(t.rating)}</div>
                <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8', marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ fontSize: '13px', color: CREAM, fontWeight: '400' }}>{t.author}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASSURANCES */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Pourquoi nous choisir</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM }}>Vous méritez une totale sérénité</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {REASSURANCES.map((r, i) => (
            <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{r.icon}</div>
              <h3 style={{ fontSize: '15px', color: GOLD, fontWeight: '400', marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.7' }}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section style={{ background: '#0a0a0a', padding: '80px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Questions fréquentes</div>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: '400', color: CREAM }}>Vos questions, nos réponses</h2>
          </div>
          {[
            { q: 'Combien coûte un vidéaste mariage en Bretagne ?', a: 'Comptez entre 800 € et 2 000 € selon le nombre de cadreurs, la durée et les livrables. Notre formule Essentielle débute à 890 €, la formule Cinéma à 1 790 €. Un devis personnalisé est toujours gratuit.' },
            { q: 'Dois-je réserver tôt mon vidéaste mariage ?', a: 'En Bretagne, les weekends de mai à septembre partent très vite. Comptez idéalement 12 à 18 mois à l\'avance pour les dates de haute saison. Une réservation avec acompte sécurise votre date définitivement.' },
            { q: 'Le drone est-il inclus ?', a: 'Les prises de vue aérienne par drone sont disponibles dans la formule Cinéma, sous réserve d\'autorisation préfectorale. Certains lieux (espaces aériens contrôlés, sites classés) peuvent l\'interdire. Nous vérifions chaque lieu en amont.' },
            { q: 'Dans quel délai je reçois mon film ?', a: 'Entre 6 et 10 semaines selon la formule. Vous recevez un lien de visionnage privé HD, puis votre film sur clé USB gravée avec votre date de mariage.' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '24px 0' }}>
              <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/combien-coute-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '20px' }}>Parlons de votre mariage</div>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: '400', color: CREAM, marginBottom: '16px', lineHeight: '1.3' }}>
            Votre date est-elle encore disponible ?
          </h2>
          <p style={{ fontSize: '16px', color: GRAY, marginBottom: '40px', lineHeight: '1.7' }}>
            Envoyez-nous votre date et le lieu envisagé. Réponse garantie sous 24h pour vérifier la disponibilité et vous envoyer une proposition sur mesure.
          </p>
          <QuickContactForm />
        </div>
      </section>
    </Layout>
  );
}
