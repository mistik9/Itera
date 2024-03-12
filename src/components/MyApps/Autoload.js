import React from "react";
import Sector from "../Sector/Sector";
import Faq from "../Faq/Faq";
import Fix from "../Fix/Fix";
import { faq_autoload, about_autoload, desc_autoload, updates_autoload } from "../../utils/const";

function Autoload({ handleClick, isDesc }) {
    let decsItem = desc_autoload.list?.map((i) => <li key={i.text} className="my-app__list-item">{i.text}</li>)

    return (
        <div className="my-app">
            <div className="my-app__title-container">
                <img className="my-app__img" src="//util.1c-bitrix.ru/upload/bx24vendor/892/h01fm2n4a26e3n8eam3h15h8ckldh4n1/Autoload.png?1709203801464" alt="иконка"></img>
                <h3 className="my-app__title">Avito: автозагрузка</h3>
                <p className="my-app__text">Выгружайте Ваши объявления на Avito из Битрикс24 автоматически.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.avito_avtozagruzka/" target="_blank" className="my-app__link">Ссылка на приложение </a>
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
                    <p className="my-app__text">{about_autoload}</p>
                    <ul className="my-app__list">{desc_autoload.list_name}
                        {decsItem}
                    </ul>
                    <p className="my-app__text">
                    * Чтобы пользоваться данным приложением, на Авито у Вас должен быть подключен соответствующий тариф, включающий Автозагрузку.
                    </p>

                    {/* <h4 className="my-app__subtitle">Обновления:</h4> */}
                    {updates_autoload.map(item =>
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
                    {faq_autoload.map(item =>
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

export default Autoload;