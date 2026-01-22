import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <section className="contact-content">
        <h1>Me contacter</h1>
        
        <div className="contact-intro">
          <p>Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter !</p>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <h3>📧 Email</h3>
            <a href="mailto:monmail@gmail.com">monmail@gmail.com</a>
          </div>

          <div className="info-item">
            <h3>📱 Téléphone</h3>
            <p>+33 x xx xx xx xx</p>
          </div>

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
      </section>
    </div>
  );
}

export default Contact;
