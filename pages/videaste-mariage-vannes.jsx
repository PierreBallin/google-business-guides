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
      description: 'Vidéaste mariage Vannes. Films cinématographiques à Vannes, Golfe du Morbihan, presqu\'île de Rhuys. Spécialiste du 56.',
      url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-vannes',
      telephone: '+33782739245',
      priceRange: '€€',
      areaServed: { '@type': 'City', name: 'Vannes' },
      address: { '@type': 'PostalAddress', addressLocality: 'Vannes', postalCode: '56000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '9' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr' },
        { '@type': 'ListItem', position: 2, name: 'Morbihan (56)', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-morbihan' },
        { '@type': 'ListItem', position: 3, name: 'Vidéaste mariage Vannes', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-vannes' },
      ],
    },
  ],
};

const LIEUX = [
  'Remparts et vieille ville de Vannes',
  'Île-aux-Moines — Golfe du Morbihan',
  'Château de Kerlévenan (Sarzeau)',
  'Presqu\'île de Rhuys (Saint-Gildas)',
  'Domaine de Kervéguen (Pluneret)',
  'Port de Vannes au coucher de soleil',
  'Île d\'Arz (Golfe du Morbihan)',
];

export default function Vannes() {
  return (
    <Layout
      title="Vidéaste Mariage Vannes (56) | Studio Lumière Mariage — Golfe du Morbihan"
      description="Vidéaste mariage Vannes (56). Films cinématographiques à Vannes, Golfe du Morbihan, Île-aux-Moines, presqu'île de Rhuys. Formules 890€ à 1790€. Devis gratuit."
      canonical="/videaste-mariage-vannes"
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
            <span style={{ color: GRAY }}>Vannes</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Vannes — Morbihan (56)
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Vannes</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Vieille ville médiévale, Golfe du Morbihan, presqu'île de Rhuys, Île-aux-Moines… Vannes et ses alentours offrent un cadre de mariage unique au monde. Nous le filmeons à la hauteur de sa beauté.
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
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Vannes — la cité des Vénètes</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Un décor médiéval face au plus beau golfe de France
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Vannes est l'une des plus belles cités médiévales de Bretagne. Ses remparts fleuris, ses maisons à colombages et son port d'où partent les ferries pour les îles du Golfe en font un décor de mariage absolument unique.</p>
              <p>À quelques minutes de la ville, le Golfe du Morbihan — véritable mer intérieure ponctuée de 365 îles — offre des perspectives visuelles que peu de vidéastes ont la chance de filmer. Nous connaissons chaque îlot, chaque lumière, chaque marée du Golfe.</p>
              <p>La presqu'île de Rhuys, Saint-Gildas-de-Rhuys, l'Île-aux-Moines : autant de lieux magiques où votre mariage deviendra un film mémorable à chaque plan.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux phares autour de Vannes</div>
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
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Témoignages de mariés vannetais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {[
              { author: 'Aurélie & Yann', lieu: 'Presqu\'île de Rhuys, Sarzeau', text: 'Un film de mariage qui capture l\'essence du Golfe du Morbihan. Chaque image est un tableau. Studio Lumière a compris notre amour pour la Bretagne et l\'a retranscrit avec une beauté rare.', rating: 5 },
              { author: 'Isabelle & François', lieu: 'Vieux Vannes — Remparts', text: 'Mariage dans les ruelles pavées de Vannes. Notre vidéaste a su capter la magie médiévale des remparts fleuris tout en préservant la spontanéité de chaque moment. Magique.', rating: 5 },
              { author: 'Alice & Guillaume', lieu: 'Île-aux-Moines, Golfe du Morbihan', text: 'Se marier sur une île du Golfe est déjà extraordinaire. Le film que Studio Lumière en a tiré l\'est encore plus. Les images aériennes du Golfe depuis le drone sont à couper le souffle.', rating: 5 },
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
        <Link href="/videaste-mariage-lorient">
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>Vidéaste mariage Lorient →</div>
        </Link>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Votre mariage à Vannes</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Partagez votre date et le lieu envisagé. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Vannes (56)" />
        </div>
      </section>
    </Layout>
  );
}
