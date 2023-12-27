import React from "react";
import Sector from "../Sector/Sector";

function DromApp({handleClick, isDesc}) {



    return (
        <div className="my-app">
            <div className="my-app__title-container">
                <img className="my-app__img" src="https://util.1c-bitrix.ru/upload/bx24vendor/041/x3xkkj346ylpawnf1yab9ikp99u6genv/250-250.png" alt="icon"></img>
                <h3 className="my-app__title">ДРОМ: чаты, сделки, товары</h3>
                <p className="my-app__text">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.drom_chaty_sdelki_tovary/" target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <ul className="my-app__links-list">
                <li className="my-app__link" onClick={handleClick}>
                    <h3>Описание</h3> </li>
                <li className="my-app__link" onClick={handleClick}>
                    <h3 >Вопросы и ответы</h3>
                </li>
            </ul>
            <p className="my-app__text">Данное приложение подойдёт продавцам запчастей и продавцам автомобилей.</p>
            <p className="my-app__text">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
            <ul className="my-app__list">
                <li className="my-app__list-item"><span className="my-app__text-span">Диалоги</span> По каждому диалогу на Дром создается сделка, в которую предается: товар по которому написал пользователь (картинка, название, описание), ссылка на объявление, ссылка на профиль пользователя, название сделки обновляется в соответствии с названием товара. При отправке нескольких изображений, отправка происходит одним сообщением.</li>
                <li className="my-app__list-item"><span className="my-app__text-span">Сделки</span> По каждой заключенной сделке на Дром создается сделка на портале Битрикс24, куда переносятся данные по отправке заказа и товары.</li>
                <li className="my-app__list-item"><span className="my-app__text-span">Товары</span> Все товары из диалогов и сделок попадают в Битрикс24. При установке приложения, для них создаётся отдельный раздел в каталоге.</li>
            </ul>
            <Sector />
        </div>

    )
}

export default DromApp;