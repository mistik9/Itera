import React from "react";
import { NavLink } from "react-router-dom";
import app from "../../image/app.svg";
import "./MyApps.css"




function MyApps() {

  return (
    <section className="section my-apps" id="my-apps">
      <h2 className="section__title">Наши приложения</h2>
      <div className="my-apps__container">
        <NavLink to="/drom-app" className="section__link">
          <div className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <p className="section__text">Интеграция диалогов, товаров, объявлений о продаже автомобилей и сделок на сайте Дром с порталом Битрикс24.</p>
            <p className="section__text_sm"> Подробнее 	&#8594;</p>
          </div>
        </NavLink>
        <NavLink to="/avito-app" className="section__link" >
          <div className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <p className="section__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
            <p className="section__text_sm"> Подробнее 	&#8594;</p>
          </div>
        </NavLink>
        <NavLink to="/autoload" className="section__link" >
          <div className="my-apps__item">
            <img className="my-apps__img" src={app} alt="иконка" />
            <p className="section__text">Aвтозагрузка товаров или услуг с портала Битрикс24 на Avito.</p>
            <p className="section__text_sm"> Подробнее 	&#8594;</p>
          </div>
        </NavLink>
      </div>
    </section>
  )
}
export default MyApps;