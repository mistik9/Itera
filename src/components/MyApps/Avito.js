import React from "react";
import Sector from "../Sector/Sector";
import Faq from "../Faq/Faq";
import Fix from "../Fix/Fix";
import { faq_avito, desc_avito, updates_avito } from "../../utils/const";

function AvitoApp({ handleClick, isDesc }) {
    let decsItem = desc_avito.list?.map((i) => <li key={i.text} className="my-app__list-item">{i.text}</li>)

    return (
        <div className="my-app">
            <div className="my-app__title-container">
                <img className="my-app__img" src="//util.1c-bitrix.ru/upload/bx24vendor/79b/h6uy1w7mfdv1hfb9uduq2kf91vzm0z4p/лого2.png" alt="иконка"></img>
                <h3 className="my-app__title">Avito: чаты и товары</h3>
                <p className="my-app__text">Подключает диалоги Avito к открытым линиям, переносит данные из Avito в Битрикс24 исходя из настроек пользователя.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.avito_chaty_sdelki_tovary/" target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <div className="my-app__menu">
                <div className={`my-app__menu-item my-app__link  ${isDesc ? "my-app__link_active" : ""} `} onClick={handleClick}>
                    Описание</div>
                <div className={`my-app__menu-item my-app__link ${isDesc ? "" : "my-app__link_active"} `} onClick={handleClick}>
                    Вопросы и ответы
                </div>
            </div>
            {isDesc ? (
                <>
                    <p className="my-app__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
                    <ul className="my-app__list">{desc_avito.list_name}
                        {decsItem}
                    </ul>
                    <h4 className="my-app__subtitle">Обновления:</h4>
                    {updates_avito.map(item =>
                        <Fix
                            key={item.list_name}
                            title={item.list_name}
                            list={item.list}
                            text={item.text}
                        />
                    )}
                    <Sector />
                </>
            ) : (
                <div className="" >
                    {faq_avito.map(item =>
                        <Faq
                            key={item.id}
                            title={item.title}
                            list={item.list}
                            text={item.text}
                            id={item.id}
                            support={item.support}
                            support_wa ={item.support_wa}


                        />)}
                </div>
            )}
        </div>
    )
}

export default AvitoApp;