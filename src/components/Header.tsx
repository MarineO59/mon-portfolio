import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;