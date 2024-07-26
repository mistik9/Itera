import React from "react";
import Sector from "../Sector/Sector";
import { Link } from "react-router-dom";
import { about_avitojob, desc_avitojob } from "../../utils/const";

function AvitoJob ()  {
    const decsItem = desc_avitojob.list?.map((i, index) => <li key={index} className="my-app__list-item"><p className="my-app__text">{i.text}</p></li>)

    return (
  
          
            <div className="my-app">
                <p className="my-app__text">{about_avitojob}</p>
                <ul className="my-app__list">{desc_avitojob.list_name}
                    {decsItem}
                </ul>
                <h4 className="my-app__subtitle">Все обновления приложения вы можете посмотреть в разделе:<Link className="my-app__navlink" to="/news">Новости</Link></h4>

                <Sector />
            </div>
    )
};

export default AvitoJob;
