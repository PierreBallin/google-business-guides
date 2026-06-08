import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const BRAND = 'Mariage Bretagne Films';
const PHONE = '+33 7 82 73 92 45';
const EMAIL = 'contact@agence-dclik.fr';
const BASE_URL = 'https://videaste-mariage-nantes-vannes.agence-dclik.fr';

const NAV = [
  { href: '/tarifs-videaste-mariage', label: 'Formules & Tarifs' },
  { href: '/videaste-mariage-ille-et-vilaine', label: '35 — Ille-et-Vilaine' },
  { href: '/videaste-mariage-loire-atlantique', label: '44 — Loire-Atlantique' },
  { href: '/videaste-mariage-morbihan', label: '56 — Morbihan' },
];

const FOOTER_DEPTS = [
  { href: '/videaste-mariage-ille-et-vilaine', label: 'Vidéaste mariage Ille-et-Vilaine (35)' },
  { href: '/videaste-mariage-loire-atlantique', label: 'Vidéaste mariage Loire-Atlantique (44)' },
  { href: '/videaste-mariage-morbihan', label: 'Vidéaste mariage Morbihan (56)' },
];

const FOOTER_CITIES = [
  { href: '/videaste-mariage-rennes', label: 'Vidéaste mariage Rennes' },
  { href: '/videaste-mariage-nantes', label: 'Vidéaste mariage Nantes' },
  { href: '/videaste-mariage-vannes', label: 'Vidéaste mariage Vannes' },
];

const FOOTER_RESSOURCES = [
  { href: '/tarifs-videaste-mariage', label: 'Formules & tarifs' },
  { href: '/combien-coute-videaste-mariage', label: 'Combien coûte un vidéaste ?' },
  { href: '/comment-choisir-videaste-mariage', label: 'Comment choisir son vidéaste ?' },
];

export { BRAND, PHONE, EMAIL, BASE_URL };

export default function Layout({ children, title, description, canonical, schema }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cta = document.querySelector('.float-cta');
    if (!cta) return;
    const onScroll = () => cta.classList.toggle('visible', window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="hDlbAAF7ErMhG1u1RgEYwKKcsOJIGZJOxpFhPiDeVMk" />
        <link rel="canonical" href={fullCanonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>

      {/* Navigation */}
      <nav style={{ background: 'rgba(8,8,8,0.96)', borderBottom: '1px solid rgba(201,169,110,0.2)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0 }} onClick={() => setMenuOpen(false)}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#c9a96e', fontWeight: '400', letterSpacing: '0.3px' }}>
              Mariage Bretagne <span style={{ color: '#f5f0e8' }}>Films</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links">
            {NAV.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#9ca3af', fontSize: '13px', letterSpacing: '0.2px', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#c9a96e'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}
              >
                {link.label}
              </Link>
            ))}
            <a href="#contact" className="nav-cta-desktop" style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '9px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>
              Demander un devis
            </a>
          </div>

          {/* Mobile right side: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="#contact" className="nav-cta-mobile" onClick={() => setMenuOpen(false)} style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '8px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>
              Devis
            </a>
            <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen
                ? <span style={{ fontSize: '22px', lineHeight: 1 }}>✕</span>
                : <span style={{ fontSize: '22px', lineHeight: 1 }}>☰</span>
              }
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#9ca3af', fontSize: '15px', padding: '12px 0', borderBottom: '1px solid rgba(201,169,110,0.08)', display: 'block' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: '14px', background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '13px', borderRadius: '4px', fontSize: '15px', fontWeight: '700', textAlign: 'center' }}
          >
            Demander un devis gratuit
          </a>
        </div>
      </nav>

      <a href="#contact" className="float-cta" onClick={() => setMenuOpen(false)}>
        Vérifier ma date — Devis gratuit →
      </a>

      <main>{children}</main>

      {/* Footer */}
      <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,169,110,0.12)', padding: '56px 20px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>

            <div>
              <div style={{ fontSize: '17px', color: '#c9a96e', fontFamily: 'Georgia, serif', marginBottom: '14px' }}>Mariage Bretagne Films</div>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.8', marginBottom: '16px' }}>
                Vidéaste mariage professionnel en Bretagne.<br />
                Ille-et-Vilaine · Loire-Atlantique · Morbihan
              </p>
              <div style={{ fontSize: '13px', color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={{ color: '#9ca3af' }}>📞 {PHONE}</a>
                <a href={`mailto:${EMAIL}`} style={{ color: '#9ca3af' }}>✉️ {EMAIL}</a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'monospace' }}>Départements</div>
              {FOOTER_DEPTS.map(l => (
                <div key={l.href} style={{ marginBottom: '10px' }}>
                  <Link href={l.href} style={{ color: '#6b7280', fontSize: '13px' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#c9a96e'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'monospace' }}>Villes</div>
              {FOOTER_CITIES.map(l => (
                <div key={l.href} style={{ marginBottom: '10px' }}>
                  <Link href={l.href} style={{ color: '#6b7280', fontSize: '13px' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#c9a96e'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'monospace' }}>Ressources</div>
              {FOOTER_RESSOURCES.map(l => (
                <div key={l.href} style={{ marginBottom: '10px' }}>
                  <Link href={l.href} style={{ color: '#6b7280', fontSize: '13px' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#c9a96e'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '24px', textAlign: 'center', fontSize: '12px', color: '#374151' }}>
            © 2026 Mariage Bretagne Films · Vidéaste mariage Bretagne (35, 44, 56) · Tous droits réservés
          </div>
        </div>
      </footer>
    </>
  );
}
