import { useState } from 'react';

const GOLD = '#c9a96e';
const CREAM = '#f5f0e8';
const GRAY = '#9ca3af';
const BORDER = 'rgba(201,169,110,0.2)';
const EMAIL = 'contact@agence-dclik.fr';
const PHONE = '+33 7 82 73 92 45';

const inputStyle = {
  background: '#111',
  border: `1px solid ${BORDER}`,
  borderRadius: '6px',
  padding: '14px 16px',
  color: CREAM,
  fontSize: '14px',
  fontFamily: 'Georgia, serif',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

export default function QuickContactForm({ locationHint = '' }) {
  const [form, setForm] = useState({ email: '', date: '', lieu: locationHint, message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) {
      errs.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Format d\'email invalide (ex : prenom@exemple.fr).';
    }
    if (!form.date) {
      errs.date = 'Veuillez indiquer votre date de mariage.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(errs => ({ ...errs, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = `Demande devis mariage${form.date ? ' — ' + form.date : ''}`;
    const body = [
      `Email : ${form.email}`,
      form.date ? `Date de mariage : ${form.date}` : '',
      form.lieu ? `Lieu de réception : ${form.lieu}` : '',
      form.message ? `Message : ${form.message}` : '',
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 24px', background: 'rgba(201,169,110,0.06)', border: `1px solid ${BORDER}`, borderRadius: '10px', maxWidth: '420px', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', marginBottom: '12px', color: GOLD }}>✓</div>
        <p style={{ color: CREAM, fontSize: '15px', marginBottom: '10px' }}>Votre messagerie s'est ouverte.</p>
        <p style={{ color: GRAY, fontSize: '13px', lineHeight: '1.6' }}>
          Si elle ne s'est pas ouverte, écrivez-nous à{' '}
          <a href={`mailto:${EMAIL}`} style={{ color: GOLD }}>{EMAIL}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <input
          name="email"
          type="email"
          placeholder="Votre email *"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : BORDER }}
        />
        {errors.email && (
          <span style={{ fontSize: '12px', color: '#ef4444', paddingLeft: '4px' }}>{errors.email}</span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '11px', color: GRAY, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'monospace', paddingLeft: '2px' }}>
          Date du mariage *
        </label>
        <input
          name="date"
          type="date"
          value={form.date}
          min={today}
          onChange={handleChange}
          style={{ ...inputStyle, colorScheme: 'dark', borderColor: errors.date ? '#ef4444' : BORDER }}
        />
        {errors.date && (
          <span style={{ fontSize: '12px', color: '#ef4444', paddingLeft: '4px' }}>{errors.date}</span>
        )}
      </div>

      <input
        name="lieu"
        type="text"
        placeholder={locationHint ? `Lieu de réception (${locationHint})` : 'Lieu de réception (commune, salle, domaine…)'}
        value={form.lieu}
        onChange={handleChange}
        style={inputStyle}
      />

      <textarea
        name="message"
        placeholder="Votre message ou vos questions (optionnel)"
        value={form.message}
        onChange={handleChange}
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
      />

      <button
        type="submit"
        style={{ background: 'linear-gradient(135deg, #c9a96e, #a07840)', color: '#080808', padding: '15px', borderRadius: '6px', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer', letterSpacing: '0.3px' }}
      >
        Vérifier ma disponibilité →
      </button>

      <p style={{ fontSize: '12px', color: '#4b5563', textAlign: 'center', margin: 0, lineHeight: '1.6' }}>
        Ou appelez-nous :{' '}
        <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={{ color: GOLD }}>{PHONE}</a>
      </p>
    </form>
  );
}
