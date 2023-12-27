import { NavLink } from "react-router-dom";
import React from "react";



function Nav() {
    return (
        <div className="nav">
            <ul className="nav__list" >
                <li className="nav__list-item">
                    <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? "nav__link_active" : ""}`}> Описание </NavLink>
                  
                </li>
                <li className="nav__list-item">
                    <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? "nav__link_active" : ""}`}>Вопросы и ответы</NavLink>
              
                </li>
               
       
            </ul>

        </div>

    )
}
export default Nav
