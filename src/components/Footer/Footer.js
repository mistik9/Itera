import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Footer.css';

function Footer() {
  const currentDate = new Date().getFullYear();

  return (
        <footer className="footer">
            <Link to="/">
                <img className="footer__logo" src={logo} alt="Лого" />
            </Link>
            <p className="footer__copyright">{`© ${currentDate}`}</p>
        </footer>
  );
}
export default Footer;
