import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description courte du projet 1",
      technologies: ["React", "CSS"],
      github: "https://github.com/ton-username/projet1",
      demo: "https://demo-projet1.com"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description courte du projet 2",
      technologies: ["JavaScript", "HTML"],
      github: "https://github.com/ton-username/projet2",
      demo: "https://demo-projet2.com"
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description courte du projet 3",
      technologies: ["Node.js", "React"],
      github: "https://github.com/ton-username/projet3",
      demo: "https://demo-projet3.com"
    }
  ];

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Démo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;