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
      description: 'Vidéaste mariage Saint-Malo. Films cinématographiques dans la cité corsaire : intra-muros, plages du Sillon, Dinard, Côte d\'Émeraude.',
      url: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-saint-malo',
      telephone: '+33782739245',
      priceRange: '€€',
      areaServed: { '@type': 'City', name: 'Saint-Malo' },
      address: { '@type': 'PostalAddress', addressLocality: 'Saint-Malo', postalCode: '35400', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '7' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr' },
        { '@type': 'ListItem', position: 2, name: 'Ille-et-Vilaine (35)', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-ille-et-vilaine' },
        { '@type': 'ListItem', position: 3, name: 'Vidéaste mariage Saint-Malo', item: 'https://videaste-mariage-nantes-vannes.agence-dclik.fr/videaste-mariage-saint-malo' },
      ],
    },
  ],
};

const LIEUX = [
  'Intra-muros de Saint-Malo — Remparts',
  'Plages du Sillon & plage de l\'Éventail',
  'Grand Bé au coucher de soleil',
  'Dinard — Villas belle époque',
  'Saint-Lunaire & Saint-Briac-sur-Mer',
  'Fort Solidor (Saint-Servan)',
  'Bords de Rance (Dinard / Saint-Malo)',
];

export default function SaintMalo() {
  return (
    <Layout
      title="Vidéaste Mariage Saint-Malo (35) | Studio Lumière Mariage — Cité Corsaire"
      description="Vidéaste mariage Saint-Malo (35). Films dans la cité corsaire : intra-muros, plages du Sillon, Dinard, Côte d'Émeraude. Mariage bord de mer. Formules 890€ à 1790€."
      canonical="/videaste-mariage-saint-malo"
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
            <span style={{ color: GRAY }}>Saint-Malo</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Saint-Malo — Côte d'Émeraude (35)
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Saint-Malo</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            La cité corsaire, ses remparts, ses plages et sa lumière atlantique unique : Saint-Malo est l'un des plus beaux décors de mariage en Bretagne. Nous le filmeons avec la passion qu'il mérite.
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
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>La cité corsaire filmée</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Saint-Malo : quand la mer embellit chaque image
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Saint-Malo est une ville qui photographie et se filme comme aucune autre en France. La lumière rasante sur les remparts granitiques, les reflets de marée sur les plages du Sillon, l'horizon marin à perte de vue depuis le Grand Bé — chaque angle est une carte postale.</p>
              <p>Nous maîtrisons les contraintes spécifiques du mariage maritime : lumière changeante selon la marée et la météo, vent côtier sur le son, accès aux zones réglementées de l'intra-muros. Notre matériel étanche nous permet de filmer dans toutes les conditions.</p>
              <p>De l'autre côté de la Rance, Dinard avec ses villas belle époque et ses plages élégantes offre un contraste magnifique avec la rigueur granitique de Saint-Malo — parfait pour un film qui raconte deux visages de la même côte.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux mythiques du secteur</div>
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
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>Témoignages — mariages à Saint-Malo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {[
              { author: 'Mélanie & Christophe', lieu: 'Intra-muros de Saint-Malo', text: 'Se marier dans les remparts de Saint-Malo avec un ciel d\'orage dramatique — Studio Lumière en a fait quelque chose de sublime. Ce film est notre plus grand trésor.', rating: 5 },
              { author: 'Lucie & Arnaud', lieu: 'Plage du Sillon, Saint-Malo', text: 'Mariage en bord de mer, coucher de soleil sur le Sillon. Notre vidéaste a été là au bon endroit au bon moment pour chaque instant. Un regard exceptionnel sur notre journée.', rating: 5 },
              { author: 'Emma & Thomas', lieu: 'Dinard, bords de Rance', text: 'De Dinard à Saint-Malo, notre film capture la magie de toute la Côte d\'Émeraude. La séquence en vedette traversant la Rance est juste époustouflante.', rating: 5 },
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
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '40px' }}>Questions — Vidéaste mariage Saint-Malo</h2>
        {[
          { q: 'Peut-on filmer dans l\'intra-muros de Saint-Malo ?', a: 'Oui, avec les autorisations nécessaires pour les prises de vue professionnelles. Certaines zones nécessitent une autorisation municipale que nous demandons en amont. Le résultat — remparts, ruelles pavées, cathédrale — en vaut largement la démarche.' },
          { q: 'Gérez-vous les mariages par mauvais temps à Saint-Malo ?', a: 'C\'est notre spécialité ! La lumière bretonne sous la pluie ou avec un ciel chargé est souvent plus cinématographique qu\'un ciel bleu uniforme. Nous équipons tout notre matériel de protections imperméables. Votre film sera beau quoi qu\'il arrive.' },
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
          <Link href="/videaste-mariage-rennes">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 24px', fontSize: '14px', color: GRAY, cursor: 'pointer' }}>Vidéaste mariage Rennes →</div>
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Votre mariage à Saint-Malo</h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Indiquez votre date et le lieu envisagé. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Saint-Malo (35)" />
        </div>
      </section>
    </Layout>
  );
}
