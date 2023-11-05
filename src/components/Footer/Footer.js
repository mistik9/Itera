import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {

    return (
        <footer className="footer">
            <Link to="/">
                <img className="footer__logo" src={logo} alt="Лого" />
            </Link>
            <Nav />
            <p className="footer__copyright">&#169;2023</p>
        </footer>
    )
}
export default Footer;