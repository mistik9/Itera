import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function DromLayout() {
    return (
        <div>
            <div className="my-app__title-container">
                <img className="my-app__img" src="https://util.1c-bitrix.ru/upload/bx24vendor/041/x3xkkj346ylpawnf1yab9ikp99u6genv/250-250.png" alt="иконка"></img>
                <h3 className="my-app__title">ДРОМ: чаты, сделки, товары</h3>
                <p className="my-app__text">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.drom_chaty_sdelki_tovary/" target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <div className="my-app__menu">
                <NavLink to="/drom-app/" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Описание</NavLink>
                <NavLink to="/drom-app/faq" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Вопросы и ответы
                </NavLink>
            </div>
            <Outlet />
        </div>

    )
};

export default DromLayout;
