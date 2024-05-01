import React from "react";

    function CardGrid() {
      return (
        <div className="skills-container">
          <div className="skills-title">
            <h3>Front-End</h3>
            <div className="title-line"></div> 
          </div>
    
          <div className="card">
            <div className="skills-card">
              <img src="/images/html.png" alt="logo html" />
              HTML
            </div>
    
            <div className="skills-card">
              <img src="/images/css.png" alt="logo css" />
              CSS
            </div>
    
            <div className="skills-card">
              <img src="/images/js.png" alt="logo js" />
              JavaScript
            </div>
    
            <div className="skills-card">
              <img src="/images/react.png" alt="logo react" />
              React
            </div>    
    
            <div className="skills-card">
              <img src="/images/sass.png" alt="logo sass" />
              Sass
            </div>
          </div>
    
          <div className="skills-title">
            <h3>Back-End</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
              <img src="/images/nodejs.png" alt="logo nodejs" />
              nodeJs
            </div>
            <div className="skills-card">
              <img src="/images/express-1.png" alt="logo express" />
              express
            </div>
          </div>
    
          <div className="skills-title">
            <h3>DataBase</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
            <img src="/images/mongo.png" alt="logo mongodb" />
                MongoDb
            </div>
          </div>
    
          <div className="skills-title">
            <h3>Design</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
              <img src="/images/figma.png" alt="logo figma" />
              Figma
            </div>
          </div>
          
        </div>
      );
    }
    
    export default CardGrid;
    