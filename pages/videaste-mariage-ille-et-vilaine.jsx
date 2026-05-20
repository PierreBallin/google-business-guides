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
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Studio Lumière Mariage',
      description: 'Vidéaste mariage Ille-et-Vilaine (35). Films cinématographiques à Rennes, Saint-Malo, Fougères, Vitré, Dinard et partout dans le département.',
      url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-ille-et-vilaine',
      telephone: '+33782739245',
      priceRange: '€€',
      areaServed: { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      address: { '@type': 'PostalAddress', addressLocality: 'Rennes', postalCode: '35000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '28' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr' },
        { '@type': 'ListItem', position: 2, name: 'Vidéaste mariage Ille-et-Vilaine', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-ille-et-vilaine' },
      ],
    },
  ],
};

const CITIES_35 = [
  { href: '/videaste-mariage-rennes', name: 'Rennes', tag: 'Capitale bretonne' },
  { href: '/videaste-mariage-saint-malo', name: 'Saint-Malo', tag: 'Cité corsaire' },
  { name: 'Fougères', tag: 'Château médiéval' },
  { name: 'Vitré', tag: 'Cité de caractère' },
  { name: 'Dinard', tag: 'Côte d\'Émeraude' },
  { name: 'Redon', tag: 'Pays de Vilaine' },
  { name: 'Cesson-Sévigné', tag: 'Agglomération rennaise' },
  { name: 'Bruz', tag: 'Sud Rennes' },
];

const LIEUX_35 = [
  'Château de la Bourbansais (Pleuguen)',
  'Château des Rochers-Sévigné (Vitré)',
  'Domaine de la Rolandière (Thouarcé)',
  'Manoir de la Hazaie (Pléven)',
  'Cité intra-muros de Saint-Malo',
  'Bords de Rance (Dinard / Saint-Malo)',
  'Fôret de Paimpont (Brocéliande)',
];

const TEMOIGNAGES = [
  {
    author: 'Anaëlle & Mathieu',
    lieu: 'Château de la Bourbansais, Pleuguen',
    text: 'Nous avions rêvé d\'un film de mariage qui capte l\'âme du château. Studio Lumière a dépassé toutes nos attentes. Les images du parc au crépuscule sont à couper le souffle. Un souvenir impérissable.',
    rating: 5,
  },
  {
    author: 'Solène & Pierre',
    lieu: 'Intra-muros de Saint-Malo',
    text: 'Mariage dans les remparts de Saint-Malo avec un temps capricieux, mais notre vidéaste a su en faire une force. La lumière dramatique du ciel breton dans le film est juste magnifique.',
    rating: 5,
  },
  {
    author: 'Charlotte & Florian',
    lieu: 'Rennes — Centre ville',
    text: 'RAS sur la communication, la ponctualité, la discrétion le jour J. Et le résultat... on a pleuré en découvrant le film. Nos proches aussi. Merci du fond du cœur.',
    rating: 5,
  },
];

export default function IlleEtVilaine() {
  return (
    <Layout
      title="Vidéaste Mariage Ille-et-Vilaine (35) | Studio Lumière Mariage — Rennes, Saint-Malo"
      description="Vidéaste mariage Ille-et-Vilaine (35). Films cinématographiques à Rennes, Saint-Malo, Fougères, Vitré, Dinard. Formules 890€ à 1790€. Devis gratuit sous 24h."
      canonical="/videaste-mariage-ille-et-vilaine"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Ille-et-Vilaine (35)</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Département 35 — Bretagne
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Ille-et-Vilaine</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Basés en Ille-et-Vilaine, nous filmeons vos mariages à Rennes, Saint-Malo, Fougères, Vitré, Dinard et dans l'ensemble du département 35. Films cinématographiques, formules de 890 € à 1 790 €.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '14px 30px', borderRadius: '4px', fontSize: '15px', fontWeight: '700' }}>
              Vérifier ma date
            </a>
            <Link href="/tarifs-videaste-mariage" style={{ border: '1px solid rgba(201,169,110,0.4)', color: GOLD, padding: '14px 28px', borderRadius: '4px', fontSize: '14px' }}>
              Voir les formules
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(201,169,110,0.1)', padding: '24px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', textAlign: 'center' }}>
          {[
            { n: '28+', l: 'mariages filmés en 35' },
            { n: '5 ★', l: 'note Google' },
            { n: '100%', l: 'prestation garantie' },
            { n: '< 24h', l: 'réponse à votre demande' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '22px', fontWeight: '700', color: GOLD, fontFamily: 'monospace', marginBottom: '4px' }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENU LOCAL */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Notre expertise locale</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Votre mariage en Ille-et-Vilaine, filmé par un expert du département
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>L'Ille-et-Vilaine offre un cadre exceptionnel pour les mariages : des châteaux médiévaux dans un écrin de verdure, la magie de la cité corsaire de Saint-Malo, les bords de Rance à Dinard, ou les paysages mystérieux de la forêt de Brocéliande.</p>
              <p>Nous connaissons chaque lieu de réception du département 35 : ses lumières naturelles, ses contraintes logistiques, les meilleurs spots pour les prises de vue. Cette expertise locale se traduit directement dans la qualité de votre film.</p>
              <p>Que votre mariage soit intime ou grandiose, en manoir ou en mairie, nous adaptons notre approche à votre histoire. Notre priorité : capturer les émotions vraies, pas des poses figées.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux que nous connaissons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LIEUX_35.map((lieu, i) => (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: GRAY, display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>◆</span> {lieu}
                </div>
              ))}
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', fontStyle: 'italic' }}>Et tous les lieux du département 35 sur demande.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Zone d'intervention</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Toutes les communes du 35</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {CITIES_35.map((city, i) => (
              city.href ? (
                <Link key={i} href={city.href}>
                  <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '20px 18px', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; }}>
                    <div style={{ fontSize: '15px', color: CREAM, marginBottom: '4px', fontWeight: '400' }}>{city.name}</div>
                    <div style={{ fontSize: '12px', color: GOLD }}>{city.tag}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>Page dédiée →</div>
                  </div>
                </Link>
              ) : (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '20px 18px' }}>
                  <div style={{ fontSize: '15px', color: CREAM, marginBottom: '4px' }}>{city.name}</div>
                  <div style={{ fontSize: '12px', color: GOLD }}>{city.tag}</div>
                </div>
              )
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: GRAY, marginTop: '28px' }}>
            Intervention dans tout le département 35 sans frais de déplacement supplémentaires.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px' }}>Ils nous ont confié leur mariage en 35</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Témoignages de mariés d'Ille-et-Vilaine</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {TEMOIGNAGES.map((t, i) => (
            <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '30px 26px' }}>
              <div style={{ color: GOLD, fontSize: '16px', marginBottom: '14px', letterSpacing: '2px' }}>{'★'.repeat(t.rating)}</div>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8', marginBottom: '18px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ fontSize: '13px', color: CREAM }}>{t.author}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{t.lieu}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ LOCALE */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Questions sur la vidéo mariage en Ille-et-Vilaine</h2>
          </div>
          {[
            {
              q: 'Couvrez-vous tout le département 35 ?',
              a: 'Oui, nous intervenons dans toutes les communes d\'Ille-et-Vilaine sans supplément de déplacement. Que ce soit à Rennes, Saint-Malo, Fougères, Vitré, Redon ou en commune rurale, le tarif reste identique.'
            },
            {
              q: 'Travaillez-vous avec des châteaux et domaines du 35 ?',
              a: 'Absolument. Nous avons déjà filmé dans les plus beaux lieux de réception du département : Château de la Bourbansais, Château des Rochers-Sévigné, Manoir de la Hazaie, et de nombreux domaines privés. Chaque lieu a ses particularités que nous connaissons bien.'
            },
            {
              q: 'Peut-on filmer un mariage en bord de mer en 35 ?',
              a: 'Bien sûr. La Côte d\'Émeraude (Dinard, Saint-Lunaire, Saint-Briac) et les remparts de Saint-Malo offrent des décors exceptionnels pour un film de mariage mémorable. Nous maîtrisons la lumière maritime et les contraintes liées au vent et à la marée.'
            },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '22px 0' }}>
              <h3 style={{ fontSize: '15px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTRES DEPTS */}
      <section style={{ padding: '56px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', color: GRAY }}>Vous êtes dans un autre département breton ?</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            { href: '/videaste-mariage-loire-atlantique', label: 'Vidéaste mariage Loire-Atlantique (44)', dept: '44' },
            { href: '/videaste-mariage-morbihan', label: 'Vidéaste mariage Morbihan (56)', dept: '56' },
          ].map((d, i) => (
            <Link key={i} href={d.href}>
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '24px', textAlign: 'center', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; }}>
                <div style={{ fontSize: '28px', color: 'rgba(201,169,110,0.3)', fontFamily: 'monospace', fontWeight: '700', marginBottom: '8px' }}>{d.dept}</div>
                <div style={{ fontSize: '14px', color: GRAY }}>{d.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>
            Votre mariage en Ille-et-Vilaine
          </h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Indiquez-nous votre date et le lieu envisagé en 35. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Ille-et-Vilaine (35)" />
        </div>
      </section>
    </Layout>
  );
}
