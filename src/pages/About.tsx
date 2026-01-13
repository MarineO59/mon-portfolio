import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-content">
        <h1>À propos de moi</h1>

        <div className="about-section">
          <h2>Qui suis-je ?</h2>
          <p>Mon parcours est une suite de défis relevés avec passion. Après 7 ans en tant qu'aide-soignante en chirurgie orthopédique à Lille, j'ai appris la rigueur, la gestion du stress et l'importance du travail d'équipe en milieu critique.

            En 2018, j'ai traversé l'Atlantique pour relever un défi créatif : la boulangerie-pâtisserie au Québec. En tant que tourière spécialisée à Montréal et Québec, j'ai affiné mon sens de la précision, de la patience et de l'organisation millimétrée.

            Pourquoi le développement web ?
            Aujourd'hui, je transpose cette discipline et ce goût pour la conception technique dans le monde du numérique. Actuellement en bootcamp Fullstack à la Wild Code School, je développe des applications robustes avec une approche axée sur la résolution de problèmes.

            Mon futur horizon : Le DevOps chez Airbus
            Mon objectif est clair : après un stage cet été, je souhaite intégrer la formation Concepteur d'applications spécialisation DevOps en alternance (18 mois). Passionnée par l'optimisation et les processus, je vise à rejoindre les équipes d'Airbus à Toulouse pour contribuer à des projets d'envergure aéronautique.
          </p>
        </div>

        <div className="about-section">
          <h2>Formation</h2>
          <p>Période,Expérience,Ce que j'en retire
            2025 - 2026,Wild Code School,"Développement Fullstack (JS, React, Node)"
            2018 - 2025,Pâtisserie (Canada),Spécialisation tourière : Patience et technique
            2011 - 2018,Santé (Lille),Aide-soignante en chirurgie : Rigueur et humanité
          </p>
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

      </section>
    </div>
  );
}

export default About;