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
      description: 'Vidéaste mariage Lorient. Films cinématographiques à Lorient, Groix, côte des Mégalithes, Hennebont, Pont-Scorff et dans le Morbihan.',
      url: 'https://studio-lumiere-mariage.fr/videaste-mariage-lorient',
      telephone: '+33600000000',
      priceRange: '€€',
      areaServed: { '@type': 'City', name: 'Lorient' },
      address: { '@type': 'PostalAddress', addressLocality: 'Lorient', postalCode: '56100', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '6' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://studio-lumiere-mariage.fr' },
        { '@type': 'ListItem', position: 2, name: 'Morbihan (56)', item: 'https://studio-lumiere-mariage.fr/videaste-mariage-morbihan' },
        { '@type': 'ListItem', position: 3, name: 'Vidéaste mariage Lorient', item: 'https://studio-lumiere-mariage.fr/videaste-mariage-lorient' },
      ],
    },
  ],
};

const LIEUX = [
  'Île de Groix (traversée en ferry)',
  'Château de Kernével (Larmor-Plage)',
  'Abbaye de Bon Repos (Côtes d\'Armor)',
  'Pont-Scorff — Vieux bourg médiéval',
  'Hennebont — Remparts et abbaye',
  'Port de Lorient & base sous-marine',
  'Plages de Larmor-Plage',
];

export default function Lorient() {
  return (
    <Layout
      title="Vidéaste Mariage Lorient (56) | Studio Lumière Mariage — Groix, Morbihan"
      description="Vidéaste mariage Lorient (56). Films cinématographiques à Lorient, Groix, Larmor-Plage, Hennebont, Pont-Scorff. Formules 890€ à 1790€. Devis gratuit sous 24h."
      canonical="/videaste-mariage-lorient"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/videaste-mariage-morbihan" style={{ color: GOLD }}>Morbihan (56)</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Lorient</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Lorient — Morbihan (56)
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Lorient</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Lorient, Groix, Larmor-Plage, Hennebont, Pont-Scorff… La deuxième ville du Morbihan et ses environs offrent des décors de mariage variés et spectaculaires. Nous les filmeons avec talent.
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

      {/* CONTENU */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lorient et ses environs</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Du port atlantique à l'île de Groix — un mariage hors du commun
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Lorient et son agglomération surprennent souvent par la richesse de leurs décors : la mer omniprésente avec Larmor-Plage et son front de mer, l'île de Groix accessible en 45 minutes de traversée, les bourgs médiévaux de Pont-Scorff et Hennebont.</p>
              <p>L'île de Groix, avec ses plages uniques de sable rouge ferrugineux, ses falaises spectaculaires et sa lumière atlantique pure, est un décor de mariage que très peu de vidéastes ont la chance de filmer. Nous gérons la logistique de A à Z pour ces mariages insulaires d'exception.</p>
              <p>Lorient accueille chaque août le Festival Interceltique, une célébration de la culture bretonne qui influence profondément l'identité de la ville — et parfois des mariages. Nous connaissons cette culture, et la respectons dans chaque film.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux de prédilection</div>
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
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Témoignages — mariages à Lorient et en pays de Groix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {[
              { author: 'Cécile & Mathis', lieu: 'Île de Groix — Plage de Locmaria', text: 'Un mariage sur Groix était notre rêve. Studio Lumière a géré tout l\'aspect logistique et le film de notre journée sur l\'île est simplement époustouflant. Le rouge des plages, la lumière atlantique...', rating: 5 },
              { author: 'Fanny & Jérémy', lieu: 'Larmor-Plage, front de mer', text: 'Mariage en bord de mer à Larmor-Plage avec une lumière de fin d\'été absolument magique. Notre vidéaste a su capter chaque instant. Le film dépasse toutes nos attentes.', rating: 5 },
              { author: 'Céline & Nicolas', lieu: 'Pont-Scorff — Bourg médiéval', text: 'Le vieux bourg de Pont-Scorff pour cadre de notre mariage, Studio Lumière pour le filmer. Le résultat est un film d\'une beauté authentique et intemporelle. Merci infiniment.', rating: 5 },
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

      {/* LIENS */}
      <section style={{ padding: '48px 20px', maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/videaste-mariage-morbihan">
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>← Tous les mariages dans le Morbihan (56)</div>
        </Link>
        <Link href="/videaste-mariage-vannes">
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>Vidéaste mariage Vannes →</div>
        </Link>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Votre mariage à Lorient</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Partagez votre date et le lieu. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Lorient (56)" />
        </div>
      </section>
    </Layout>
  );
}
