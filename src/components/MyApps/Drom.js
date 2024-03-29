import React from "react";
import Sector from "../Sector/Sector";
import { updates_drom } from "../../utils/const";
import Fix from "../Fix/Fix";

function DromApp({ handleClick, isDesc }) {

    return (
        <div className="my-app">

            <p className="my-app__text">Данное приложение подойдёт продавцам запчастей и продавцам автомобилей.</p>
            <p className="my-app__text">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
            <ul className="my-app__list">
                <li className="my-app__list-item"><span className="my-app__text-span">Диалоги</span> По каждому диалогу на Дром создается сделка, в которую предается: товар по которому написал пользователь (картинка, название, описание), ссылка на объявление, ссылка на профиль пользователя, название сделки обновляется в соответствии с названием товара. При отправке нескольких изображений, отправка происходит одним сообщением.</li>
                <li className="my-app__list-item"><span className="my-app__text-span">Сделки</span> По каждой заключенной сделке на Дром создается сделка на портале Битрикс24, куда переносятся данные по отправке заказа и товары.</li>
                <li className="my-app__list-item"><span className="my-app__text-span">Товары</span> Все товары из диалогов и сделок попадают в Битрикс24. При установке приложения, для них создаётся отдельный раздел в каталоге.</li>
            </ul>
            <h4 className="my-app__subtitle">Обновления:</h4>
            {updates_drom.map(item =>
                <Fix
                    key={item.list_name}
                    title={item.list_name}
                    list={item.list}
                    text={item.text}
                />
            )}
            <Sector />
        </div>

    )
}

export default DromApp;