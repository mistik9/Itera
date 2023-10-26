import React from "react";
import Nav from "./Nav";
import logo from "../src/logoza/logoza-ru-hd-light.png"

function Header() {

    return (
        <header class="header">
            <img class="header__logo" src={logo} alt="Лого" />
            <Nav />
        </header>

    )
}
export default Header;