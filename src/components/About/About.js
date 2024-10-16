import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from '../Circle/Circle';
import './About.css';

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const pictureAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};
function About() {
  return (
    <>
      <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }} className="lead section" id="about">
        <div className="d1">
          <div className="d2">
            <div className="d3">
              <div className="d4">
                <div className="d5">
                  <motion.div variants={pictureAnimation} custom={1} className="d6"></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.h1 variants={textAnimation} custom={1} className="lead__title">
          ITera
        </motion.h1>
        <motion.p variants={textAnimation} custom={2} className="lead__subtitle">
          Открой новые возможности
        </motion.p>
      </motion.section>
      <section className="section " id="about">
        <Circle />
        <article className="section__article">
          <p className="section__text">Компания ITera специализируется на разработке актуального программного обеспечения для бизнеса в Битрикс24.</p>
          <p className="section__text">Мы предлагаем широкий спектр решений, которые помогут вашей компании эффективно работать в современных условиях.</p>
          <p className="section__text">
            Наша команда опытных разработчиков гарантирует высокое качество наших продуктов и оперативное реагирование на запросы клиентов.
          </p>
        </article>
      </section>
      <section className="section section_right">
        <Circle />
        <article className="section__article">
          <p className="section__text">Мы занимаемся разработкой приложений и интеграций для CRM.</p>
          <p className="section__text">Наше основное направление - интеграции с маркетплейсами и торговыми площадками.</p>
        </article>
      </section>
    </>
  );
}
export default About;
