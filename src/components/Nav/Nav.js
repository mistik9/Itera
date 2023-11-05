import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"

function Nav() {
    const location = useLocation();

    return (
        <nav className="nav">
            {location.pathname === "/" ? (
                <>
                    <a className="nav__link" href="#about">О компании</a>
                    <a className="nav__link" href="#my-apps">Наши приложения</a>
                    <a className="nav__link" href="#feedback">Контакты</a>
                </>
            ) : (
                <>
                    <Link className="nav__link" to="/#about">О компании</Link>
                    <Link className="nav__link" to="/#my-apps">Наши приложения</Link>
                    <Link className="nav__link" to="/#feedback">Контакты</Link>
                </>

            )
            }
        </nav>

    )
}
export default Nav