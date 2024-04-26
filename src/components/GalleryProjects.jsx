import React from "react";

function GalleryProjects() {
    return (
        <div className="projects">
                <h2>Projects</h2>
               {/*  <div className="img-projects">
                    <img src="../images/sophiebluel.JPG" alt="" />
                    <img src="../images/kasa.JPG" alt="" />
                    <img src="../images/monvieuxgrimoire.JPG" alt="" />
                </div>  */}
                <div className="container-projects">
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/sophiebluel.JPG" alt="" />
                                <div className="intro">
                                    <h3>Sophie Bluel</h3>
                                    <p>Création d'une page web dynamique avec JavaScript pour une architecte d'intérieur.</p>
                                        <a href="https://github.com/leilatrrrs/p3-sophie-bluel.git" target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/kasa.JPG" alt="" />
                                <div className="intro">
                                    <h3>Kasa</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, 
                                        adipisicing elit. Suscipit voluptatem
                                        doloribus ea alias eos neque inventore
                                        tempore praesentium.</p>
                                        <a href="https://github.com/leilatrrrs/projet-6-kasa.git"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
                    <div className="container-card">
                        <div className="card-projects">
                            <img src="/images/monvieuxgrimoire.JPG" alt="" />
                                <div className="intro">
                                    <h3>Mon vieux grimoire</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, 
                                        adipisicing elit. Suscipit voluptatem
                                        doloribus ea alias eos neque inventore
                                        tempore praesentium.</p>
                                        <a href="https://github.com/leilatrrrs/projet-7-mon-vieux-grimoire.git"target="_blank"> Voir le projet</a>
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="btn-container">
                <a href="/project" class="button"> Learn more</a>
                </div>
        </div>
    )
}

export default GalleryProjects