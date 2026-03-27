import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mkopgayp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      <section className="contact-content">
        <h1>Me contacter</h1>

        <div className="contact-intro">
          <p>Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter !</p>
        </div>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {status === 'success' && <p className="form-feedback success">Message envoyé ! Je vous répondrai bientôt.</p>}
            {status === 'error' && <p className="form-feedback error">Une erreur est survenue. Veuillez réessayer.</p>}
          </form>

          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Localisation</h3>
              <p>France</p>
            </div>

            <div className="info-item">
              <h3>🔗 Réseaux</h3>
              <div className="social-links">
                <a href="https://github.com/MarineO59" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/marine-opsommer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
