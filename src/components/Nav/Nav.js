import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav">
            <Link className="nav__link" to="/#about">О компании</Link>
            <Link className="nav__link" to="/#my-apps">Наши приложения</Link>
            <Link className="nav__link" to="/news">Новости</Link>
            <Link className="nav__link" to="/#feedback">Контакты</Link>
            
        </nav>
    )
}
export default Nav