import React from "react";
import Nav from "./Nav";
import logo from "../src/logoza/logoza-ru-hd-light.png"

function Footer() {

    return (
        <footer class="footer">
            <img class="footer__logo" src={logo} alt="Лого" />
            <Nav />
            <p class="footer__copyright">&#169;2023</p>
        </footer>
    )
}
export default Footer;