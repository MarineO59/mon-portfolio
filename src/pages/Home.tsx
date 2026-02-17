import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-cockpit">
            {/* Effet d'écran cathodique / Lignes de scan par-dessus tout */}
            <div className="scanlines"></div>

            <div className="hud-container">
                {/* --- ÉCRAN LATÉRAL GAUCHE --- */}
                <aside className="hud-panel left-panel">
                    <div className="tech-box">
                        <span className="label">SYS_PRÉFÉRENCE</span>
                        <span className="value">BACK-END / LOGIQUE</span>
                    </div>
                    <div className="tech-box">
                        <span className="label">STACK_PRINCIPALE</span>
                        <span className="value">REACT & TSX</span>
                    </div>
                    <div className="tech-box">
                        <span className="label">MÉTHODE_APP</span>
                        <span className="value">VIBE_CODING</span>
                    </div>
                </aside>

                {/* --- CONSOLE CENTRALE (Ton profil) --- */}
                <main className="hud-center">
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
                        {/* Ta photo avec un filtre hologramme en CSS */}
                        <img src="/MarineAvatar.png" alt="MarineAvatar" className="profile-photo" />
                    </div>

                    <div className="text-console">
                        <h1>Salut, je suis <span className="highlight">Marine</span></h1>
                        <h2>Concepteur Développeur d'application</h2>
                        <p>Objectif : Alternance spécialité DevOps</p>
                    </div>

                    <Link to="/projects" className="cta-button">INITIER SÉQUENCE : PROJETS</Link>
                </main>

                {/* --- ÉCRAN LATÉRAL DROIT --- */}
                <aside className="hud-panel right-panel">
                    <div className="tech-box align-right">
                        <span className="label">CIBLE_GÉO</span>
                        <span className="value">TOULOUSE & ALENTOURS</span>
                    </div>
                    <div className="tech-box align-right">
                        <span className="label">STATUT_RÉSEAU</span>
                        <span className="value highlight-pulse">EN RECHERCHE</span>
                    </div>
                    
                    {/* Petites barres de chargement décoratives */}
                    <div className="data-bars">
                        <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
                        <div className="bar"><div className="fill" style={{ width: '40%' }}></div></div>
                        <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Home;