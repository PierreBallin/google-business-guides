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
      description: 'Vidéaste mariage Nantes. Films de mariage cinématographiques à Nantes et en Loire-Atlantique. Château des Ducs, vignobles, lofts de l\'Île de Nantes.',
      url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-nantes',
      telephone: '+33782739245',
      priceRange: '€€',
      areaServed: { '@type': 'City', name: 'Nantes' },
      address: { '@type': 'PostalAddress', addressLocality: 'Nantes', postalCode: '44000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '11' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr' },
        { '@type': 'ListItem', position: 2, name: 'Loire-Atlantique (44)', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-loire-atlantique' },
        { '@type': 'ListItem', position: 3, name: 'Vidéaste mariage Nantes', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-nantes' },
      ],
    },
  ],
};

const LIEUX = [
  'Château de la Ferrière (Montbert)',
  'Domaine de l\'Épinay (La Chevrolière)',
  'Château des Ducs de Bretagne — Nantes',
  'Île de Nantes — Lieux de réception',
  'Vignobles de Muscadet (Vertou, Vallet)',
  'Bords de Loire (Trentemoult)',
  'Château de Clisson (44)',
];

export default function Nantes() {
  return (
    <Layout
      title="Vidéaste Mariage Nantes (44) | Studio Lumière Mariage — Devis Gratuit"
      description="Vidéaste mariage Nantes (44). Films cinématographiques à Nantes et en Loire-Atlantique. Château des Ducs, vignobles du Muscadet, Île de Nantes. Formules 890€ à 1790€."
      canonical="/videaste-mariage-nantes"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <img src="/images/hero/hero-mariage-nantes.webp" alt="Vidéaste mariage Nantes — film cinématographique Loire-Atlantique (44)" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(8,6,6,0.85) 0%, rgba(8,8,8,0.78) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '90px 20px 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/videaste-mariage-loire-atlantique" style={{ color: GOLD }}>Loire-Atlantique (44)</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Nantes</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Nantes — Loire-Atlantique (44)
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Nantes</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Château des Ducs, bords de Loire, Île de Nantes, vignobles du Muscadet… Nous filmons vos mariages à Nantes et dans tout le 44 avec un regard cinématographique unique.
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
        </div>
      </section>

      {/* CONTENU */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Nantes, ville mariage d'exception</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              La richesse cinématographique de la Cité des Ducs
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Nantes est une ville de contrastes qui se prête merveilleusement bien aux films de mariage : l'architecture médiévale du Château des Ducs de Bretagne côtoie les lofts industriels de l'Île de Nantes, et les bords de Loire à Trentemoult offrent des panoramas à couper le souffle.</p>
              <p>À 20-40 minutes de la ville, les domaines viticoles du Muscadet (Vallet, Vertou) et les châteaux comme celui de la Ferrière à Montbert offrent un cadre de réception exceptionnel avec une lumière qui fait rêver les vidéastes.</p>
              <p>Nous connaissons Nantes dans ses moindres recoins — les lumières de la Cathédrale en fin de journée, les reflets de Loire au couchant, les ruelles pavées du Bouffay. Votre film nantais sera une œuvre à part entière.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux que nous maîtrisons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LIEUX.map((lieu, i) => (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: GRAY, display: 'flex', gap: '10px' }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>◆</span> {lieu}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Témoignages de mariés nantais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {[
              { author: 'Claire & Baptiste', lieu: 'Domaine de l\'Épinay, La Chevrolière', text: 'Mariage dans un domaine de La Chevrolière avec un coucher de soleil sur la Loire. Les images sont d\'une beauté cinématographique rare. On ne se lasse pas de les regarder, des années après.', rating: 5 },
              { author: 'Sophie & Hugo', lieu: 'Bords de Loire, Trentemoult', text: 'Studio Lumière a su capturer l\'ambiance très particulière de notre mariage à Trentemoult. Discrets, créatifs, professionnels — le trio gagnant pour un film de mariage exceptionnel.', rating: 5 },
              { author: 'Manon & Théo', lieu: 'Vignobles, Vallet (44)', text: 'Notre mariage dans les vignes du Muscadet filmé à la perfection. Les couleurs dorées des vignes à l\'automne sont sublimées. On a l\'impression de revivre chaque instant.', rating: 5 },
            ].map((t, i) => (
              <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '28px 24px' }}>
                <div style={{ color: GOLD, fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>{'★'.repeat(t.rating)}</div>
                <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.8', marginBottom: '16px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ fontSize: '13px', color: CREAM }}>{t.author}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '3px' }}>{t.lieu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 20px', maxWidth: '760px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '40px' }}>Questions — Vidéaste mariage Nantes</h2>
        {[
          { q: 'Filmez-vous dans les salles de réception de Nantes ?', a: 'Oui, nous intervenons dans toutes les salles de Nantes et de sa métropole. Nous conseillons également des lieux moins connus mais exceptionnels en Loire-Atlantique sur simple demande.' },
          { q: 'Proposez-vous des formules pour les petits mariages civils à Nantes ?', a: 'Absolument. Notre formule Essentielle (à partir de 890 €) est parfaitement adaptée aux mariages intimes ou civils. Elle inclut un film highlights de 4 minutes et la cérémonie complète.' },
          { q: 'Couvrez-vous les mariages en banlieue de Nantes ?', a: 'Oui, sans supplément pour l\'agglomération nantaise (Rezé, Saint-Herblain, Vertou, La Chapelle-sur-Erdre, Orvault, etc.). Pour les lieux plus éloignés dans le 44, contactez-nous pour un devis personnalisé.' },
        ].map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '20px 0' }}>
            <h3 style={{ fontSize: '15px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
            <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* LIENS */}
      <section style={{ background: '#0a0a0a', padding: '48px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/videaste-mariage-loire-atlantique">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>← Tous les mariages en Loire-Atlantique (44)</div>
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Votre mariage à Nantes</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Partagez votre date et le lieu. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Nantes (44)" />
        </div>
      </section>
    </Layout>
  );
}
