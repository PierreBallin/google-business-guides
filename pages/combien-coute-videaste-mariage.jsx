import Link from 'next/link';
import Layout from '../components/Layout';
import QuickContactForm from '../components/QuickContactForm';

const GOLD = '#c9a96e';
const CREAM = '#f5f0e8';
const GRAY = '#9ca3af';
const CARD_BG = '#0f0f0f';
const BORDER = 'rgba(201,169,110,0.2)';

const faqItems = [
  { q: 'Quel est le prix moyen d\'un vidéaste mariage en Bretagne ?', a: 'En Bretagne (35, 44, 56), le prix d\'un vidéaste mariage professionnel se situe généralement entre 800 € et 2 500 €. La fourchette basse (800–1 000 €) correspond à un film highlights de 3–5 minutes avec un seul cadreur. La fourchette haute (1 800–2 500 €) inclut le drone, un film intégral de la journée complète et des livrables premium (clé USB, tirage). Notre formule Prestige à 1 290 € est la plus populaire, car elle offre le meilleur rapport qualité/souvenir.' },
  { q: 'Que comprend le prix d\'un vidéaste mariage ?', a: 'Un tarif complet de vidéaste mariage professionnel inclut : le déplacement sur le lieu (souvent offert en local), les heures de présence le jour J (en général 8 à 12h), le matériel professionnel (caméras, micros, éclairage, drone), le montage du film (20 à 40 heures de travail en post-production), les licences musicales, la livraison numérique et parfois une clé USB. Attention : certains vidéastes facturent des suppléments pour le son, le drone ou le déplacement. Demandez toujours un devis détaillé.' },
  { q: 'Pourquoi existe-t-il de si grandes différences de prix ?', a: 'Plusieurs facteurs expliquent les écarts tarifaires : l\'expérience du vidéaste (un débutant vs. 5+ ans de carrière), la qualité du matériel (caméras mirrorless pro vs. entrée de gamme), le temps de montage (de 10h à 60h+), et les livrables inclus. Un prix très bas (< 600 €) doit interpeller : contrat ? assurance pro ? matériel de backup ? Un vidéaste professionnel investit lourdement dans son équipement et sa formation — ce coût se reflète dans le tarif.' },
  { q: 'Doit-on réserver son vidéaste mariage longtemps à l\'avance ?', a: 'Oui, fortement. En Bretagne, les weekends de mai à septembre partent 12 à 18 mois à l\'avance pour les prestataires reconnus. Si votre date est dans moins de 6 mois, il peut encore y avoir des disponibilités, mais le choix sera limité. La réservation se fait via un contrat signé et un acompte de 30 % qui sécurise définitivement la date. Ne tardez pas !' },
  { q: 'La vidéo de mariage vaut-elle le prix ?', a: 'C\'est la question que beaucoup de couples se posent. La réponse des mariés qui ont fait appel à un vidéaste est quasi-unanime : c\'est le poste qui leur procure le plus d\'émotion lors du visionnage. Les photos capturent un instant ; la vidéo capture le mouvement, les voix, les rires, les larmes — les sons et textures de votre journée. Des études montrent que les couples qui n\'ont pas prévu de vidéo regrettent très souvent ce choix. Avec une formule à partir de 890 €, l\'investissement est souvent relativisé face à la durée de vie du souvenir.' },
  { q: 'Faut-il choisir le même prestataire pour la photo et la vidéo ?', a: 'Non, ce n\'est pas une obligation — et dans la plupart des cas, ce n\'est pas conseillé. Les photographes et vidéastes ont des techniques, des regards et des approches différents. Ce qui compte : que les deux prestataires communiquent bien et se respectent le jour J. Un bon vidéaste professionnel a l\'habitude de travailler en binôme avec le photographe. Présentez-les l\'un à l\'autre en amont.' },
  { q: 'Le drone est-il inclus dans le prix ?', a: 'Cela dépend de la formule. Dans notre gamme, le drone est inclus dans la formule Cinéma (1 790 €). Pour les formules Essentielle et Prestige, une option drone peut être ajoutée selon la faisabilité sur votre lieu (certains espaces aériens sont réglementés). Les vols de drone nécessitent des autorisations préfectorales que nous gérons en amont.' },
  { q: 'Y a-t-il des frais cachés ?', a: 'Non, chez Mariage Bretagne Films, les tarifs affichés sont des prix tout compris pour les mariages en Bretagne (35, 44, 56). Pas de supplément pour le déplacement dans ces trois départements, pas de frais de son ou de backup caché. Si votre lieu est en dehors de notre zone d\'intervention habituelle, un forfait kilométrique transparent vous est indiqué dans le devis dès le premier contact.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function PrixVideaste() {
  return (
    <Layout
      title="Combien Coûte un Vidéaste Mariage en Bretagne ? | Guide des Prix 2025–2026"
      description="Combien coûte un vidéaste mariage en Bretagne (35, 44, 56) ? Prix moyens, ce qui est inclus, pourquoi les tarifs varient, drone, frais de déplacement. Guide complet 2026."
      canonical="/combien-coute-videaste-mariage"
      schema={schema}
    >
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0808 0%, #080808 100%)', padding: '80px 20px 70px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '32px' }}>
            <Link href="/" style={{ color: GOLD }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: GRAY }}>Guide des prix</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px', color: GOLD, marginBottom: '24px', textTransform: 'uppercase' }}>
            Guide complet 2025–2026
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '400', color: CREAM, margin: '0 0 16px', lineHeight: '1.2' }}>
            Combien coûte un vidéaste mariage en{' '}
            <span style={{ color: GOLD, fontStyle: 'italic' }}>Bretagne ?</span>
          </h1>
          <p style={{ fontSize: '17px', color: GRAY, maxWidth: '680px', lineHeight: '1.7' }}>
            Prix moyens, ce qui est inclus, différences de tarifs, drone, frais cachés… Tout ce que vous devez savoir avant de choisir votre vidéaste mariage en Ille-et-Vilaine (35), Loire-Atlantique (44) ou Morbihan (56).
          </p>
        </div>
      </section>

      {/* RÉSUMÉ RAPIDE */}
      <section style={{ padding: '56px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: '12px', padding: '32px 28px', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: GOLD, fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '16px' }}>Résumé rapide</div>
          <h2 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: '400', color: CREAM, marginBottom: '16px' }}>Prix d'un vidéaste mariage en Bretagne (35, 44, 56)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              { fourchette: '800 € – 1 000 €', label: 'Entrée de gamme', desc: '1 cadreur, film 3–4 min, livrables basiques' },
              { fourchette: '1 000 € – 1 500 €', label: 'Milieu de gamme', desc: '1 cadreur, film 5 min + intégral, clé USB' },
              { fourchette: '1 500 € – 2 500 €', label: 'Haut de gamme', desc: 'Drone, journée complète, film 7 min + intégral' },
              { fourchette: '2 500 € +', label: 'Premium / sur mesure', desc: 'Format sur mesure, live streaming, mariage à l\'étranger' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#080808', border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '16px', color: GOLD, fontFamily: 'monospace', marginBottom: '6px', fontWeight: '600' }}>{r.fourchette}</div>
                <div style={{ fontSize: '13px', color: CREAM, marginBottom: '6px' }}>{r.label}</div>
                <div style={{ fontSize: '12px', color: GRAY }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 20px 80px', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: '400', color: CREAM }}>Toutes vos questions sur le prix du vidéaste mariage</h2>
        </div>
        {faqItems.map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, padding: '28px 0' }}>
            <h2 style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: CREAM, fontWeight: '400', marginBottom: '14px', lineHeight: '1.4' }}>{item.q}</h2>
            <p style={{ fontSize: '15px', color: GRAY, lineHeight: '1.85' }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* NOTRE POSITIONNEMENT */}
      <section style={{ background: '#0a0a0a', padding: '72px 20px', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '400', color: CREAM }}>Nos formules : prix & transparence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Essentielle', price: '890 €', detail: '1 cadreur · Film 4 min · Cérémonie complète', href: '/tarifs-videaste-mariage' },
              { name: 'Prestige', price: '1 290 €', popular: true, detail: '1 cadreur · Film 5 min + intégral · Clé USB', href: '/tarifs-videaste-mariage' },
              { name: 'Cinéma', price: '1 790 €', detail: 'Journée complète · Drone · Film 7 min + intégral', href: '/tarifs-videaste-mariage' },
            ].map((f, i) => (
              <Link key={i} href={f.href}>
                <div style={{ background: CARD_BG, border: f.popular ? `1px solid ${GOLD}` : `1px solid ${BORDER}`, borderRadius: '10px', padding: '24px 20px', cursor: 'pointer', position: 'relative' }}>
                  {f.popular && <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: GOLD, color: '#080808', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px', whiteSpace: 'nowrap' }}>POPULAIRE</div>}
                  <div style={{ fontSize: '14px', color: GRAY, fontFamily: 'monospace', marginBottom: '6px' }}>{f.name}</div>
                  <div style={{ fontSize: '24px', color: CREAM, fontFamily: 'monospace', marginBottom: '8px' }}>{f.price}</div>
                  <div style={{ fontSize: '12px', color: GRAY, lineHeight: '1.6' }}>{f.detail}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/tarifs-videaste-mariage" style={{ color: GOLD, fontSize: '14px', borderBottom: '1px solid rgba(201,169,110,0.3)', paddingBottom: '2px' }}>
              Voir le détail complet des formules →
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE SECONDAIRE */}
      <section style={{ padding: '56px 20px', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', color: GRAY }}>Pour aller plus loin</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <Link href="/comment-choisir-videaste-mariage">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '11px', color: GOLD, fontFamily: 'monospace', letterSpacing: '1px', marginBottom: '10px' }}>GUIDE PRATIQUE</div>
              <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>Comment choisir son vidéaste mariage ?</h3>
              <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>Les critères essentiels, les questions à poser, les red flags à éviter. Notre guide complet.</p>
              <div style={{ marginTop: '14px', fontSize: '13px', color: GOLD }}>Lire le guide →</div>
            </div>
          </Link>
          <a href="#contact">
            <div style={{ background: 'linear-gradient(160deg, #141008, #0f0f0f)', border: `1px solid ${GOLD}`, borderRadius: '10px', padding: '24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '11px', color: GOLD, fontFamily: 'monospace', letterSpacing: '1px', marginBottom: '10px' }}>GRATUIT & SANS ENGAGEMENT</div>
              <h3 style={{ fontSize: '16px', color: CREAM, fontWeight: '400', marginBottom: '8px' }}>Demandez votre devis personnalisé</h3>
              <p style={{ fontSize: '13px', color: GRAY, lineHeight: '1.6' }}>Date, lieu, formule souhaitée — on vous répond sous 24h avec un devis complet et transparent.</p>
              <div style={{ marginTop: '14px', fontSize: '13px', color: GOLD }}>Demander un devis →</div>
            </div>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '72px 20px', background: 'linear-gradient(160deg, #0a0908, #080808)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <div>
              <img
                src="/images/about/eymeric-videaste-mariage-bretagne.webp"
                alt="Eymeric, vidéaste mariage — répond personnellement sous 24h"
                loading="lazy"
                style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', objectPosition: 'top', aspectRatio: '4/5', marginBottom: '28px', display: 'block' }}
              />
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '400', color: CREAM, marginBottom: '14px' }}>Un devis gratuit sous 24h</h2>
              <p style={{ fontSize: '15px', color: GRAY, lineHeight: '1.7' }}>
                Vous écrivez directement à Eymeric — pas un formulaire anonyme. Indiquez votre date, le lieu et vos attentes.
              </p>
            </div>
            <div>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
