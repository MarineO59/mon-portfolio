import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-content">
        <h1>À propos de moi</h1>

        <div className="about-section">
          <h2>Qui suis-je ?</h2>

          <p> <strong>De la précision du geste à la rigueur du code</strong></p>
          <p> <strong>Développeuse Web & Mobile Fullstack en formation | Future Conceptrice DevOps</strong></p>
          <p>Mon parcours est une suite de défis relevés avec passion. Après 7 ans en tant qu'aide-soignante en chirurgie orthopédique à Lille, j'ai appris la rigueur, la gestion du stress et l'importance du travail d'équipe en milieu critique.</p>
          <p>En 2018, j'ai traversé l'Atlantique pour relever un défi créatif : la boulangerie-pâtisserie au Québec. En tant que tourière spécialisée à Montréal et Québec, j'ai affiné mon sens de la précision, de la patience et de l'organisation millimétrée.</p>
          <p> <strong>Pourquoi le développement web ?</strong> </p>
          <p> Aujourd'hui, je transpose cette discipline et ce goût pour la conception technique dans le monde du numérique. Actuellement en bootcamp Fullstack à la Wild Code School, je développe des applications robustes avec une approche axée sur la résolution de problèmes.</p>
          <p> <strong> Mon futur horizon : Le DevOps chez Airbus</strong></p>
          <p>  Mon objectif est clair : après un stage cet été, je souhaite intégrer la formation Concepteur d'applications spécialisation DevOps en alternance (18 mois). Passionnée par l'optimisation et les processus, je vise à rejoindre les équipes d'Airbus à Toulouse pour contribuer à des projets d'envergure aéronautique.</p>

        </div>

        <div className="about-section">
          <h2>Formation</h2>

          <div className="formation-item">
            <p className="formation-categorie"> <strong>Période</strong> | Expérience | Ce que j'en retire</p>
            <br />
            <p className="annee"> <strong>2025 - 2026</strong> | Wild Code School | "Développement Fullstack (JS, React, Node)"</p>
            <p className="titre-formation"> <strong>2018 - 2025</strong> | Pâtisserie (Canada) | Spécialisation tourière : Patience et technique</p>
            <p className="acquis"> <strong>2011 - 2018</strong> | Santé (Lille) | Aide-soignante en chirurgie : Rigueur et humanité</p>

          </div>
        </div>

        <div className="about-section">
          <h2>Compétences techniques</h2>
          <ul className="skills-list">
            <li>HTML / CSS</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

      </section >
    </div >
  );
}

export default About;