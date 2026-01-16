import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="profile-wrapper">
                    <div className="hud-segments">
                        {/* Groupe 1 : 0-80° */}
                        {[...Array(30)].map((_, i) => (
                            <div key={`g1-${i}`} className="segment" style={{ transform: `translateX(-50%) rotate(${i * 2}deg)` }}></div>
                        ))}

                        {/* Groupe 2 : 100-180° */}
                        {[...Array(60)].map((_, i) => (
                            <div key={`g2-${i}`} className="segment" style={{ transform: `translateX(-50%) rotate(${100 + i * 2}deg)` }}></div>
                        ))}
                    </div>
                    <div className="hud-circle hud-2"></div>
                    <div className="hud-circle hud-3"></div>
                    <img src="/MarineAvatar.png" alt="MarineAvatar" className="profile-photo" />
                </div>
                <h1> Salut, je suis <span className="highlight"> Marine </span></h1>
                <h2>Développeuse web Full Stack Junior</h2>
                <p> Passionnée par le développement web et en constante apprentissage.</p>
                <Link to="/projects" className="cta-button">Voir mes projets</Link>
            </section>
        </div>
    );
}

export default Home;