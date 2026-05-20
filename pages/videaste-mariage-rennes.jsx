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
      description: 'Vidéaste mariage Rennes. Films de mariage cinématographiques à Rennes et dans toute l\'Ille-et-Vilaine. Devis gratuit.',
      url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-rennes',
      telephone: '+33782739245',
      priceRange: '€€',
      areaServed: { '@type': 'City', name: 'Rennes' },
      address: { '@type': 'PostalAddress', addressLocality: 'Rennes', postalCode: '35000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '19' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr' },
        { '@type': 'ListItem', position: 2, name: 'Ille-et-Vilaine (35)', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-ille-et-vilaine' },
        { '@type': 'ListItem', position: 3, name: 'Vidéaste mariage Rennes', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-rennes' },
      ],
    },
  ],
};

const LIEUX = [
  'Château de la Bourbansais (Pleuguen, 35)',
  'Château des Rochers-Sévigné (Vitré)',
  'Les Bruyères (Saint-Erblon)',
  'Domaine de la Magnolière (Orgères)',
  'Vieux Rennes — Parlement de Bretagne',
  'Parc du Thabor',
  'Bords de Vilaine (Rennes)',
];

export default function Rennes() {
  return (
    <Layout
      title="Vidéaste Mariage Rennes (35) | Studio Lumière Mariage — Devis Gratuit"
      description="Vidéaste mariage Rennes (35). Films cinématographiques à Rennes et dans toute l'Ille-et-Vilaine. Châteaux, domaines, mariages urbains. Formules 890€ à 1790€. Devis gratuit."
      canonical="/videaste-mariage-rennes"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/videaste-mariage-ille-et-vilaine" style={{ color: GOLD }}>Ille-et-Vilaine (35)</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Rennes</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Rennes — Ille-et-Vilaine (35)
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Rennes</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Basés à Rennes, nous filmons votre mariage en Ille-et-Vilaine avec un sens aigu du détail et de l'émotion. Vieux Rennes, châteaux bretons, domaines de caractère — nous connaissons chaque lieu.
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
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Vidéaste mariage à Rennes</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Rennes, capitale bretonne aux mille visages
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Rennes offre une palette remarquable de décors pour un mariage filmé : le Vieux Rennes avec ses maisons à colombages, le Parlement de Bretagne, les bords de Vilaine au cœur de la ville, et le magnifique Parc du Thabor.</p>
              <p>À moins d'une heure de la capitale bretonne, les châteaux et domaines de l'Ille-et-Vilaine attendent vos invités : Château de la Bourbansais, Château des Rochers-Sévigné à Vitré, manoirs de caractère perdus dans les bocages bretons.</p>
              <p>Notre studio est basé à Rennes. Nous connaissons chaque prestataire, chaque traiteur, chaque lieu de réception du département — et cette connaissance fine se traduit dans la fluidité de votre journée filmée.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Nos lieux de prédilection</div>
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
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Ce que disent nos mariés rennais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {[
              { author: 'Inès & Nicolas', lieu: 'Vieux Rennes, Parlement de Bretagne', text: 'Mariage au cœur du Vieux Rennes avec des images qui capturent absolument toute la magie de la cité bretonne. Un film précieux qu\'on chérit pour toujours.', rating: 5 },
              { author: 'Laure & Thomas', lieu: 'Château de la Bourbansais, Pleuguen', text: 'Studio Lumière a su transformer chaque moment de notre mariage au château en une scène cinématographique. Leurs yeux captent ce que les autres ratent. Extraordinaire.', rating: 5 },
              { author: 'Noémie & Julien', lieu: 'Parc du Thabor, Rennes', text: 'Nous voulions un film élégant pour notre mariage au Thabor. On a été bluffés par la qualité des images et la discrétion totale de l\'équipe pendant la journée.', rating: 5 },
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
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '40px' }}>Questions fréquentes — Vidéaste mariage Rennes</h2>
        {[
          { q: 'Quel est le délai pour réserver un vidéaste mariage à Rennes ?', a: 'Pour un mariage en haute saison (mai–septembre) à Rennes, réservez au minimum 12 à 18 mois à l\'avance. Les samedis de juin et septembre sont les premiers à partir. Un acompte de 30 % sécurise définitivement votre date.' },
          { q: 'Intervenez-vous aussi en dehors de Rennes ?', a: 'Absolument. Nous couvrons tout le département 35 et les départements voisins (44, 56). Pour Rennes et sa métropole (Bruz, Cesson-Sévigné, Saint-Grégoire), le déplacement est inclus sans supplément.' },
          { q: 'Proposez-vous un rendez-vous avant le mariage ?', a: 'Oui, un entretien préparatoire est inclus dans toutes nos formules. On échange sur votre vision, le planning de la journée, la coordination avec vos autres prestataires et le style de montage souhaité.' },
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
          <Link href="/videaste-mariage-ille-et-vilaine">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>← Tous les mariages en Ille-et-Vilaine (35)</div>
          </Link>
          <Link href="/videaste-mariage-saint-malo">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>Vidéaste mariage Saint-Malo →</div>
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Votre mariage à Rennes</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Partagez votre date et le lieu envisagé. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Rennes (35)" />
        </div>
      </section>
    </Layout>
  );
}
