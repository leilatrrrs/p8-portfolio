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
              <img src="/images/html.png" alt="" />
              HTML
            </div>
    
            <div className="skills-card">
              <img src="/images/css.png" alt="" />
              CSS
            </div>
    
            <div className="skills-card">
              <img src="/images/js.png" alt="" />
              JavaScript
            </div>
    
            <div className="skills-card">
              <img src="/images/react.png" alt="" />
              React
            </div>    
    
            <div className="skills-card">
              <img src="/images/sass.png" alt="" />
              Sass
            </div>
          </div>
    
          <div className="skills-title">
            <h3>Back-End</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
              <img src="/images/nodejs.png" alt="" />
              nodeJs
            </div>
            <div className="skills-card">
              <img src="/images/express-1.png" alt="" />
              express
            </div>
          </div>
    
          <div className="skills-title">
            <h3>DataBase</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
            <img src="/images/mongo.png" alt="" />
                MongoDb
            </div>
          </div>
    
          <div className="skills-title">
            <h3>Design</h3>
            <div className="title-line"></div>
          </div>
    
          <div className="card">
            <div className="skills-card">
              <img src="/images/figma.png" alt="" />
              Figma
            </div>
          </div>
        </div>
      );
    }
    
    export default CardGrid;
    