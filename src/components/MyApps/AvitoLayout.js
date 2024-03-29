import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AvitoLayout() {

    return (
        <div>
            <div className="my-app__title-container">
                <img className="my-app__img" src="//util.1c-bitrix.ru/upload/bx24vendor/79b/h6uy1w7mfdv1hfb9uduq2kf91vzm0z4p/лого2.png" alt="иконка"></img>
                <h3 className="my-app__title">Avito: чаты и товары</h3>
                <p className="my-app__text">Подключает диалоги Avito к открытым линиям, переносит данные из Avito в Битрикс24 исходя из настроек пользователя.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.avito_chaty_sdelki_tovary/" target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <div className="my-app__menu">
                <NavLink to="/avito-app/" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Описание</NavLink>
                <NavLink to="/avito-app/faq" className={({ isActive }) => isActive ? "my-app__menu-item my-app__link my-app__link_active" : "my-app__menu-item my-app__link "} >
                    Вопросы и ответы
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
};

export default AvitoLayout;
