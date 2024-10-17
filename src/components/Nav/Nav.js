import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';
import { motion } from 'framer-motion';

function Nav({ isNavOpen, openMenu, setIsNavOpen }) {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },

    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <nav className="nav">
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }} className={`nav__list ${!isNavOpen ? '' : 'nav__list_shown'}`}>
        <motion.p variants={textAnimation} custom={1} onClick={() => setIsNavOpen(false)}>
          <Link className="nav__link" to="/#about">
            О компании
          </Link>
        </motion.p>
        <motion.p variants={textAnimation} custom={2} onClick={() => setIsNavOpen(false)}>
          {' '}
          <Link className="nav__link" to="/#my-apps">
            Наши приложения
          </Link>
        </motion.p>
        <motion.p variants={textAnimation} custom={3} onClick={() => setIsNavOpen(false)}>
          {' '}
          <Link className="nav__link" to="/bitrix">
            Битрикс24
          </Link>
        </motion.p>
        <motion.p variants={textAnimation} custom={4} onClick={() => setIsNavOpen(false)}>
          {' '}
          <Link className="nav__link" to="/news">
            Новости
          </Link>
        </motion.p>
        <motion.p variants={textAnimation} custom={5} onClick={() => setIsNavOpen(false)}>
          {' '}
          <Link className="nav__link" to="/#feedback">
            Контакты
          </Link>
        </motion.p>
      </motion.div>
      <button className={`nav__burger ${!isNavOpen ? '' : 'nav__burger_close'}`} onClick={openMenu}>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_first'}`}></div>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_second'}`}></div>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_third'}`}></div>
      </button>
    </nav>
  );
}
export default Nav;
