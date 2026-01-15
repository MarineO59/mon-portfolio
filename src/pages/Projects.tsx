import { useState, useEffect } from 'react';
import './Projects.css';

// Interface pour typer un projet
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

function Projects() {
  // États avec types
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch au chargement du composant
  useEffect(() => {
    fetch('/src/datas.json')
      .then(response => response.json())
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors du fetch:', error);
        setLoading(false);
      });
  }, []);

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="projects">
        <p>Chargement des projets...</p>
      </div>
    );
  }

  // Affichage des projets
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