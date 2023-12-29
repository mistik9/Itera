import React from "react";
import { NavLink } from "react-router-dom";
import app from "../../image/app.svg";
import "./MyApps.css"




function MyApps() {

  return (

    <section className="section my-apps" id="my-apps">
      <h2 className="section__title">Наши приложения</h2>
      <div className="my-apps__container">
        <div className="my-apps__item">
          <img className="my-apps__img" src={app} alt="иконка"/>
          <p className="section__text">Интеграция диалогов, товаров, объявлений о продаже автомобилей и сделок на сайте Дром с порталом Битрикс24.</p>

          <NavLink to="/dromApp" className="section__link">Подробнее 	&#8594;</NavLink>
        </div>
        <div className="my-apps__item">
          <img className="my-apps__img" src={app} alt="иконка"/>
          <p className="section__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
          <NavLink to="/avitoApp" className="section__link">Подробнее 	&#8594;</NavLink>
        </div>
      </div>

    </section>

  )
}
export default MyApps;