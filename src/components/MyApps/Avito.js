import React from "react";
import Sector from "../Sector/Sector";
import Faq from "../Faq/Faq";
import Fix from "../Fix/Fix";
import { desc_avito, updates_avito } from "../../utils/const";

function AvitoApp() {
    let decsItem = desc_avito.list?.map((i) => <li key={i.text} className="my-app__list-item">{i.text}</li>)

    return (
        <div className="my-app">
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
        </div>
    )
}

export default AvitoApp;