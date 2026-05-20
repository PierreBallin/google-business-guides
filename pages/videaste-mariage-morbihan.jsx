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
      description: 'Vidéaste mariage Morbihan (56). Films cinématographiques à Vannes, Lorient, Auray, Quiberon, Carnac et dans tout le département.',
      url: 'https://studio-lumiere-mariage.fr/videaste-mariage-morbihan',
      telephone: '+33600000000',
      priceRange: '€€',
      areaServed: { '@type': 'AdministrativeArea', name: 'Morbihan' },
      address: { '@type': 'PostalAddress', addressLocality: 'Vannes', postalCode: '56000', addressCountry: 'FR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '11' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://studio-lumiere-mariage.fr' },
        { '@type': 'ListItem', position: 2, name: 'Vidéaste mariage Morbihan', item: 'https://studio-lumiere-mariage.fr/videaste-mariage-morbihan' },
      ],
    },
  ],
};

const CITIES_56 = [
  { href: '/videaste-mariage-vannes', name: 'Vannes', tag: 'Golfe du Morbihan' },
  { href: '/videaste-mariage-lorient', name: 'Lorient', tag: 'Côte des Mégalithes' },
  { name: 'Auray', tag: 'Presqu\'île' },
  { name: 'Quiberon', tag: 'Bout du monde' },
  { name: 'Carnac', tag: 'Mégalithes & plages' },
  { name: 'Pontivy', tag: 'Centre Bretagne' },
  { name: 'La Trinité-sur-Mer', tag: 'Village de voile' },
  { name: 'Ploërmel', tag: 'Pays de Brocéliande' },
];

const LIEUX_56 = [
  'Île aux Moines — Golfe du Morbihan',
  'Presqu\'île de Rhuys (Saint-Gildas)',
  'Château de Kerlévenan (Sarzeau)',
  'Domaine de Kervéguen (Pluneret)',
  'Port de La Trinité-sur-Mer',
  'Plages de Quiberon (côte sauvage)',
  'Vieille ville médiévale de Vannes',
];

const TEMOIGNAGES = [
  {
    author: 'Aurélie & Yann',
    lieu: 'Presqu\'île de Rhuys, Golfe du Morbihan',
    text: 'Un mariage face au Golfe du Morbihan, filmé avec une sensibilité rare. Les images du coucher de soleil sur l\'île de Groix depuis la terrasse sont à couper le souffle. On vit ce moment chaque fois qu\'on regarde le film.',
    rating: 5,
  },
  {
    author: 'Élodie & Maxime',
    lieu: 'Vieux Vannes — Remparts',
    text: 'Nous voulions un film qui capture l\'âme médiévale de Vannes. Studio Lumière a compris notre vision dès le premier échange. Le résultat est au-delà de nos espérances. Nos parents ont pleuré en le voyant.',
    rating: 5,
  },
  {
    author: 'Amandine & Kevin',
    lieu: 'La Trinité-sur-Mer, bord de mer',
    text: 'Mariage en bord de mer à La Trinité, avec la flotte de voiliers en arrière-plan. Nos vidéastes ont su capter chaque moment avec une précision et une créativité incroyables. Film livré en 7 semaines.',
    rating: 5,
  },
];

export default function Morbihan() {
  return (
    <Layout
      title="Vidéaste Mariage Morbihan (56) | Studio Lumière Mariage — Vannes, Lorient, Auray"
      description="Vidéaste mariage Morbihan (56). Films cinématographiques à Vannes, Lorient, Auray, Quiberon, Carnac. Golfe du Morbihan, châteaux bretons. Formules 890€ à 1790€."
      canonical="/videaste-mariage-morbihan"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Morbihan (56)</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Département 56 — Morbihan
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Vidéaste Mariage{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Morbihan</span>
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, maxWidth: '680px', lineHeight: '1.7', marginBottom: '32px' }}>
            Golfe du Morbihan, presqu'île de Quiberon, vieille ville de Vannes, mégalithes de Carnac… Nous filmons vos mariages dans les plus beaux cadres du département 56.
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
            { n: '11+', l: 'mariages filmés en 56' },
            { n: '5 ★', l: 'note Google' },
            { n: 'Drone', l: 'vues aériennes du Golfe' },
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
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Le Morbihan filmé</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM, lineHeight: '1.35', marginBottom: '20px' }}>
              La mer, les îles, les pierres levées — le Morbihan enchanté
            </h2>
            <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Le Morbihan est sans doute le département de France qui offre le plus grand nombre de décors de mariage uniques au monde : le Golfe et ses 365 îles, la côte sauvage de Quiberon, les alignements de Carnac, la cité médiévale de Vannes — chaque lieu a une âme propre.</p>
              <p>Nous maîtrisons les spécificités techniques de ces environnements : lumière maritime changeante, vent côtier, contraintes d'accès aux îles et nécessité de backups techniques. Votre film sera immaculé quoi que la Bretagne décide côté météo.</p>
              <p>Les prises de vue par drone (formule Cinéma) révèlent la beauté du Golfe du Morbihan comme aucun angle au sol ne peut le faire. Sous réserve d'autorisation préfectorale que nous gérons en amont.</p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '16px' }}>Lieux phares du 56</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LIEUX_56.map((lieu, i) => (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: GRAY, display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>◆</span> {lieu}
                </div>
              ))}
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', fontStyle: 'italic' }}>Et tous les lieux du département 56 sur demande.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Toutes les communes du 56</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {CITIES_56.map((city, i) => (
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
            Intervention dans tout le Morbihan sans frais supplémentaires. Accès aux îles géré en amont.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ padding: '72px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Témoignages de mariés du Morbihan</h2>
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
            Questions sur la vidéo mariage dans le Morbihan
          </h2>
          {[
            {
              q: 'Filmez-vous les mariages sur les îles du Golfe du Morbihan ?',
              a: 'Oui, avec anticipation logistique. Pour un mariage sur l\'Île-aux-Moines, l\'Île d\'Arz ou une autre île du Golfe, nous préparons le transport du matériel, les horaires de ferry et les autorisations nécessaires. La beauté des images en vaut largement l\'effort.'
            },
            {
              q: 'Le drone est-il possible au Golfe du Morbihan ?',
              a: 'Le Golfe est une zone à réglementation spécifique (espace naturel protégé, trafic maritime). Nous effectuons les démarches de déclaration auprès de la préfecture et de la DGAC. Dans la majorité des cas, les vols sont autorisés avec demande préalable — ce que nous gérons entièrement.'
            },
            {
              q: 'Comment gérez-vous la météo capricieuse du Morbihan ?',
              a: 'La lumière bretonne est dramatique et cinématographique — même sous la pluie ! Nous équipons tout notre matériel de protections imperméables et avons développé une approche créative qui transforme les conditions météo en atout visuel. Votre film sera beau quoi qu\'il arrive.'
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
            { href: '/videaste-mariage-loire-atlantique', label: 'Vidéaste mariage Loire-Atlantique (44)', dept: '44' },
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
            Votre mariage dans le Morbihan
          </h2>
          <p style={{ fontSize: '15px', color: GRAY, marginBottom: '32px', lineHeight: '1.7' }}>
            Partagez-nous votre date et le lieu envisagé dans le 56. Réponse garantie sous 24h.
          </p>
          <QuickContactForm locationHint="Morbihan (56)" />
        </div>
      </section>
    </Layout>
  );
}
