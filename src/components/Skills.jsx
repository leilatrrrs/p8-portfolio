import React from "react";
import CardGrid from "./CardGrid";

function Skills() {
    return (
        <div className="skills">
        <h2>Skills</h2>
        <CardGrid/>
        <div className="btn-container">
                <a href="/projects" class="button"> Learn more</a>
                </div>
               
        </div>
    )
}

export default Skills