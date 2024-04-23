import React from "react";
import Sector from "../Sector/Sector";
import Faq from "../Faq/Faq";
import Fix from "../Fix/Fix";
import { faq_autoload, about_autoload, desc_autoload, updates_autoload } from "../../utils/const";


function Autoload() {
    let decsItem = desc_autoload.list?.map((i) => <li key={i.text} className="my-app__list-item">{i.text}</li>)

    return (
  
          
            <div className="my-app">
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
            </div>
       
    )
}

export default Autoload;