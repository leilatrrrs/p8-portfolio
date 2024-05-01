import React from "react";

function GalleryProjects({isHome}) {
    return (
        <div className="projects">
                <h2>Projects</h2>

                <div className="container-projects">
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/sophiebluel.webp" alt="site de Sophie Bluel" />
                                <div className="intro">
                                    <h3>Sophie Bluel</h3>
                                    <p>Création d'une page web dynamique avec JavaScript pour une architecte d'intérieur.</p>
                                        <a href="https://github.com/leilatrrrs/p3-sophie-bluel.git" target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/kasa.webp" alt="Site Kasa" />
                                <div className="intro">
                                    <h3>Kasa</h3>
                                    <p>Création d'une application web de location immobilière avec React.</p>
                                        <a href="https://github.com/leilatrrrs/projet-6-kasa.git"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/monvieuxgrimoire.webp" alt="Site Mon vieux grimoire" />
                                <div className="intro">
                                    <h3>Mon vieux grimoire</h3>
                                    <p>Développement du back end d'un site de notation de livre.</p>
                                        <a href="https://github.com/leilatrrrs/projet-7-mon-vieux-grimoire.git"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
               
                    {!isHome && (
                        <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/booki.webp" alt="Site Bookie" />
                                <div className="intro">
                                    <h3>Booki</h3>
                                    <p> Création de la page d'accueil d'une agence de voyage avec HTML & CSS.</p>
                                        <a href="https://leilatrrrs.github.io/projet-2-booki/"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                        </div> 
                        )} 
                    {!isHome && (
                        <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/nina.webp" alt="Site Nina Carducci" />
                                <div className="intro">
                                    <h3>Nina Carducci</h3>
                                    <p>Réalisation du débuggage et de l'optimisation d'un site de photographe.</p>
                                        <a href="https://leilatrrrs.github.io/projet5-nina-carducci/"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                        </div> 
                        )} 
                </div>

                {isHome && (
                    <div className="btn-container">
                        <a href="/project" class="button"> Learn more</a>
                    </div>
                )}
        </div>
    )
}

export default GalleryProjects