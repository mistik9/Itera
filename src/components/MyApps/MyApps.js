import React from "react";
import { NavLink } from "react-router-dom";
import app from "../../image/app.svg";
import "./MyApps.css";
import {motion} from "framer-motion"

const textAnimation ={
  hidden: {
    y: -200,
    opacity:0,
  },
  visible: custom =>({
    y:0,
    opacity:1,
    transition: {delay: custom* 0.3}
  }),
}
const blockAnimation ={
  hidden: {
    y: 50,
    opacity:0,
  },
  visible: custom =>({
    y:0,
    opacity:1,
    transition: {delay: custom * 0.2}
  }),
}




function MyApps() {

  return (
    < motion.section  
    initial="hidden"
    whileInView="visible"
    viewport={{ amount:0.3, once: true}}
    className="section my-apps" id="my-apps">
      <motion.h2 custom={1} variants={textAnimation} className="section__title">Наши приложения</motion.h2>
      <div className="my-apps__container">
        <NavLink to="/drom-app" className="section__link">
          <motion.div variants={blockAnimation} custom={1} className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <h4 className="my-apps__subtitle">ДРОМ: чаты, сделки, товары </h4>
            <p className="my-apps__text ">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
            <p className="section__text section__text_sm"> Подробнее 	&#8594;</p>
          </motion.div>
        </NavLink>
        <NavLink to="/avito-app" className="section__link" >
          <motion.div variants={blockAnimation} custom={2} className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <h4 className="my-apps__subtitle">Avito: чаты и товары </h4>
            <p className="my-apps__text ">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
            <p className="section__text section__text_sm"> Подробнее 	&#8594;</p>
          </motion.div>
        </NavLink>
        <NavLink to="/autoload" className="section__link" >
          < motion.div variants={blockAnimation} custom={3} className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <h4 className="my-apps__subtitle">Avito: автозагрузка</h4>
            <p className="my-apps__text ">Aвтозагрузка товаров или услуг с портала Битрикс24 на Avito.</p>
            <p className="section__text section__text_sm"> Подробнее 	&#8594;</p>
          </motion.div>
        </NavLink>
      </div>
    </motion.section>
  )
}
export default MyApps;