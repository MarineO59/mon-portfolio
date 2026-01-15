import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1> Salut, je suis <span className="highlight"> Marine </span></h1>
                <h2>Développeuse web Full Stack Junior</h2>
                <p> Passionnée par le développement web et en constante apprentissage.</p>
                <Link to="/projects" className="cta-button">Voir mes projets</Link>
            </section>
        </div>
    );
}

export default Home;