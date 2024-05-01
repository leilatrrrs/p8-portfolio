import React from "react";
import { NavLink } from "react-router-dom"
import "../style/header.scss"

function Header () {
    return (
        <div className="header">
            <NavLink to="/">
              <img src="/images/logolt.png" alt="" />
            </NavLink>

            <input type='checkbox' id='check' />

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/project">Projects</NavLink></li>
                    <li><a href="https://www.linkedin.com/in/leila-torres-8115422ab/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/leilatrrrs"  target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </ul>
            
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </div>
    )
}

export default Header;