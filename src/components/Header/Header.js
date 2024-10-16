import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import logo from '../../image/logo.png';
import './Header.css';

function Header({ isNavOpen, openMenu, setIsNavOpen }) {
  return (
        <header className="header">
            <Link to="/">
                <img className={!isNavOpen ? 'header__logo' : 'header__logo header__logo_hidden' }src={logo} alt="Лого" />
            </Link>
            <Nav isNavOpen={isNavOpen} openMenu={openMenu} setIsNavOpen={setIsNavOpen}/>
        </header>
  );
}
export default Header;
