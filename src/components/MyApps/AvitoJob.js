import React from "react";
import Sector from "../Sector/Sector";

import Fix from "../Fix/Fix";
import { about_avitojob, desc_avitojob, updates_avitojob } from "../../utils/const";

function AvitoJob ()  {
    const decsItem = desc_avitojob.list?.map((i, index) => <li key={index} className="my-app__list-item">{i.text}</li>)

    return (
  
          
            <div className="my-app">
                <p className="my-app__text">{about_avitojob}</p>
                <ul className="my-app__list">{desc_avitojob.list_name}
                    {decsItem}
                </ul>


                {/* <h4 className="my-app__subtitle">Обновления:</h4> */}
                {updates_avitojob.map(item =>
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
};

export default AvitoJob;
