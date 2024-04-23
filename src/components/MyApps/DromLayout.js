import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../SEO/SEO";

function DromLayout() {
    const title = "ДРОМ: чаты, сделки, товары"
    const description = "Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей."
    const href = "https://www.bitrix24.ru/apps/app/integrationpart.drom_chaty_sdelki_tovary/"

    return (
        <>
        <SEO 
    title={title}
    description={description}
    image={href}
    />
            <div className="my-app__title-container">
                <img className="my-app__img" src="https://util.1c-bitrix.ru/upload/bx24vendor/041/x3xkkj346ylpawnf1yab9ikp99u6genv/250-250.png" alt="иконка"></img>
                <h3 className="my-app__title">{title}</h3>
                <p className="my-app__text">{description}</p>
                <a href= {href} target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <div className="my-app__menu">
                <NavLink to="/drom-app/" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Описание</NavLink>
                <NavLink to="/drom-app/faq" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Вопросы и ответы
                </NavLink>
            </div>
            <Outlet />
        </>

    )
};

export default DromLayout;
