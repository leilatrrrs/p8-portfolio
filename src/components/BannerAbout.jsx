import React from "react";

function BannerAbout({isHome}) {
    
    return (
        <div className="about">
        <h2>About</h2>
      
        <p>Hello ! Je suis Leila Torres, développeuse web en herbe. 🌿</p>
        <br />
        <p>Après l'obtention de ma licence de musicologie et quelques années dans le monde du travail, 
        j'ai décidé en 2023 de me reconvertir dans le domaine du développement web en intégrant la formation
        "Développeur Web" d'Openclassrooms.</p>
        <br />
        <p>De nature curieuse, j'aime apprendre ainsi que découvrir de nouveaux horizons. C'est pourquoi j'ai décidé 
            de me plonger dans le monde du web.🖥️
        </p>
        {isHome && (
        <div className="btn-container">
            <a href="/About" class="button"> Learn more</a>
        </div>
        )}
        </div>
    )
}

export default BannerAbout