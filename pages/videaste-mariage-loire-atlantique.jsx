import Link from 'next/link';
import Layout from '../components/Layout';

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
      description: 'Vidéaste mariage Loire-Atlantique (44). Films cinématographiques à Nantes, La Baule, Guérande, Saint-Nazaire, Pornic et partout dans le département.',
      url: 'https://studio-lumiere-mariage.fr/videaste-mariage-loire-atlantique',
      telephone: '+33600000000',
      priceRange: '€€',
      areaServed: { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      address: { '@type': 'PostalAddress', addressLocality: 'Nantes', postalCode: '44000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '14' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://studio-lumiere-mariage.fr' },
        { '@type': 'ListItem', position: 2, name: 'Vidéaste mariage Loire-Atlantique', item: 'https://studio-lumiere-mariage.fr/videaste-mariage-loire-atlantique' },
      ],
    },
  ],
};

const CITIES_44 = [
  { href: '/videaste-mariage-nantes', name: 'Nantes', tag: 'Capitale des Ducs' },
  { name: 'La Baule', tag: 'Côte Atlantique' },
  { name: 'Guérande', tag: 'Cité médiévale' },
  { name: 'Saint-Nazaire', tag: 'Port atlantique' },
  { name: 'Pornic', tag: 'Côte de Jade' },
  { name: 'Ancenis', tag: 'Val de Loire' },
  { name: 'Châteaubriant', tag: 'Pays de la Mée' },
  { name: 'Clisson', tag: 'Cité italienne' },
];

const LIEUX_44 = [
  'Château de la Ferrière (Montbert)',
  'Domaine de l\'Épinay (La Chevrolière)',
  'Vignobles de Muscadet (Vertou, Vallet)',
  'Château de Clisson (Loire-Atlantique)',
  'Baie de La Baule (Anse de Pornichet)',
  'Château des Ducs de Bretagne (Nantes)',
  'Île de Nantes — friches et lofts',
];

const TEMOIGNAGES = [
  {
    author: 'Julie & Romain',
    lieu: 'Domaine de l\'Épinay, La Chevrolière',
    text: 'Notre mariage dans un domaine viticole de Loire-Atlantique a été filmé avec une finesse exceptionnelle. La lumière dorée des vignes dans le film est à couper le souffle. Merci pour ce trésor.',
    rating: 5,
  },
  {
    author: 'Pauline & Alexis',
    lieu: 'Bord de mer, La Baule',
    text: 'Mariage en bord de mer à La Baule avec un coucher de soleil magique. Studio Lumière a capté chaque instant avec un sens du détail remarquable. Le film est notre plus beau souvenir.',
    rating: 5,
  },
  {
    author: 'Marion & Clément',
    lieu: 'Nantes — Centre ville',
    text: 'Une équipe à l\'écoute, créative et ultra professionnelle. Ils ont su s\'intégrer discrètement tout en capturant toutes les émotions de notre journée nantaise. Résultat bluffant.',
    rating: 5,
  },
];

export default function LoireAtlantique() {
  return (
    <Layout
      title="Vidéaste Mariage Loire-Atlantique (44) | Studio Lumière Mariage — Nantes, La Baule"
      description="Vidéaste mariage Loire-Atlantique (44). Films cinématographiques à Nantes, La Baule, Guérande, Saint-Nazaire, Pornic. Formules 890€ à 1790€. Devis gratuit sous 24h."
      canonical="/videaste-mariage-loire-atlantique"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Loire-Atlantique (44)</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Département 44 — Loire-Atlantique
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Loire-Atlantique</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Nous filmons vos mariages à Nantes, La Baule, Guérande, Saint-Nazaire, Pornic et dans tout le département 44. Vignobles, littoral atlantique, châteaux et domaines de caractère.
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
            { n: '14+', l: 'mariages filmés en 44' },
            { n: '5 ★', l: 'note Google' },
            { n: '100%', l: 'clients satisfaits' },
            { n: '< 24h', l: 'réponse garantie' },
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
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>La Loire-Atlantique filmée</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              Vignobles, mer et châteaux : la richesse du 44
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>La Loire-Atlantique est un terrain de jeu extraordinaire pour les vidéastes mariage. Entre les vignobles ensoleillés du Muscadet à l'est, la Côte de Jade à l'ouest et la majesté nantaise, chaque mariage est un paysage unique.</p>
              <p>Nous connaissons les domaines viticoles qui jouent la lumière dorée d'automne aussi bien que les plages de La Baule au couchant d'été. Cette connaissance terrain se traduit dans des images qui racontent non seulement votre histoire, mais aussi votre terroir.</p>
              <p>Nantes offre par ailleurs un terrain cinématographique exceptionnel : l'architecture historique du Château des Ducs, les lignes modernes de l'Île de Nantes, les bords de Loire au gré des saisons.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux phares du 44</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LIEUX_44.map((lieu, i) => (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: GRAY, display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>◆</span> {lieu}
                </div>
              ))}
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', fontStyle: 'italic' }}>Et tous les lieux du département 44 sur demande.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Toutes les communes du 44</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {CITIES_44.map((city, i) => (
              city.href ? (
                <Link key={i} href={city.href}>
                  <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '20px 18px', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; }}>
                    <div style={{ fontSize: '15px', color: CREAM, marginBottom: '4px' }}>{city.name}</div>
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
            Intervention dans tout le département 44 sans frais de déplacement supplémentaires.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Témoignages de mariés de Loire-Atlantique</h2>
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
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: '400', color: CREAM, textAlign: 'center', marginBottom: '48px' }}>
            Questions sur la vidéo mariage en Loire-Atlantique
          </h2>
          {[
            {
              q: 'Intervenez-vous sur toute la Loire-Atlantique ?',
              a: 'Oui, sans frais de déplacement supplémentaires dans tout le 44 : de Nantes à La Baule, de Guérande à Pornic, de Châteaubriant à Clisson. Pour les lieux en dehors du département, un forfait kilométrique peut s\'appliquer — contactez-nous.'
            },
            {
              q: 'Filmez-vous des mariages dans les vignobles de Muscadet ?',
              a: 'Oui, et c\'est l\'une de nos spécialités en Loire-Atlantique ! La lumière d\'automne dans les vignes offre des images cinématographiques incomparables. Nous travaillons avec plusieurs domaines à Vallet, Vertou et dans la zone de Clisson.'
            },
            {
              q: 'Prenez-vous en charge des mariages mixtes ou interculturels à Nantes ?',
              a: 'Absolument. Nantes est une ville multiculturelle et nous avons filmé des mariages de toutes les traditions. Notre approche documentaire nous permet de capturer l\'authenticité de chaque culture avec respect et précision.'
            },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '22px 0' }}>
              <h3 style={{ fontSize: '15px', color: CREAM, fontWeight: '400', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: GRAY, lineHeight: '1.8' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIENS CROISÉS */}
      <section style={{ padding: '56px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', color: GRAY }}>Vous êtes dans un autre département ?</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            { href: '/videaste-mariage-ille-et-vilaine', label: 'Vidéaste mariage Ille-et-Vilaine (35)', dept: '35' },
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
            Votre mariage en Loire-Atlantique
          </h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Indiquez-nous votre date et le lieu envisagé dans le 44. Réponse garantie sous 24h.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px', margin: '0 auto 24px' }}>
            <input placeholder="Votre email" type="email" style={{ background: '#111', border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '14px 16px', color: CREAM, fontSize: '14px', fontFamily: 'Georgia, serif', outline: 'none' }} />
            <input placeholder="Date de mariage & lieu en 44" style={{ background: '#111', border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '14px 16px', color: CREAM, fontSize: '14px', fontFamily: 'Georgia, serif', outline: 'none' }} />
            <button style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '15px', borderRadius: '6px', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
              Vérifier ma disponibilité
            </button>
          </div>
          <p style={{ fontSize: '13px', color: '#4b5563' }}>contact@studio-lumiere-mariage.fr · 06 XX XX XX XX</p>
        </div>
      </section>
    </Layout>
  );
}
