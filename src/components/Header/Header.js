import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../image/logo.png"
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Лого" />
            </Link>
            <Nav />
        </header>
    )
}
export default Header;