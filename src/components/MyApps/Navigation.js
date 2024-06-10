import { NavLink } from "react-router-dom";
import React from "react";



function Navigation() {

    return (
        <div className="nav__menu">
            <NavLink to="./" className={({ isActive }) => isActive ? "nav__menu-item nav__link nav__link_active" : "nav__menu-item nav__link "} end> Описание </NavLink>
            <NavLink to="./faq" className={({ isActive }) => isActive ? "nav__menu-item nav__link nav__link_active" : "nav__menu-item nav__link "}>Вопросы и ответы</NavLink>
        </div>

    )
}
export default Navigation
