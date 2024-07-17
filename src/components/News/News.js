import React from "react";
import { NavLink } from "react-router-dom";
import "./News.css"
import { updates_autoload, updates_avito, updates_drom, updates_avitojob } from "../../utils/const";

function News() {
    const autoload = updates_autoload.map(i => ({ title: i.title = "Avito: автозагрузка", period: i.list_name, list: i.list }));
    const avito = updates_avito.map(i => ({ title: i.title = "Avito: чаты и товары", period: i.list_name, list: i.list }));
    const drom = updates_drom.map(i => ({ title: i.title = "ДРОМ: чаты, сделки, товары", period: i.list_name, list: i.list }));
    const avitojob = updates_avitojob.map(i => ({ title: i.title = "Avito: отклики и вакансии", period: i.list_name, list: i.list }));
    const resArr = avito.concat(autoload, drom, avitojob)

    const resArrConverted = resArr.sort(function (a, b) {
        let aa = a.period.split('.').reverse().join()
        let bb = b.period.split('.').reverse().join()
        return aa < bb ? 1 : (aa > bb ? -1 : 0)

    })


    return (
        <div className="news">
 
            <h2 className="news__title">Новости</h2>
            <ul className="news__list">
                {resArrConverted.map((i) =>
                    <li className="news__list-item">
                        <p className="news__list-period">{i.period}</p>
                        {i.title === "Avito: автозагрузка" ?
                            <NavLink to="/autoload" className="news__list-title">{i.title}</NavLink> :
                            i.title === "Avito: чаты и товары" ?
                                <NavLink to="/avito-app" className="news__list-title">{i.title}</NavLink> :
                                i.title === "ДРОМ: чаты, сделки, товары" ?
                                    <NavLink to="/drom-app" className="news__list-title" >{i.title}</NavLink> :
                                    <NavLink to="/avitojob" className="news__list-title" >{i.title}</NavLink>
                        }
                        {i.list?.map(el => <p className="news__text">{el.text}</p>)}
                    </li>
                )}
            </ul>
        </div>
    )
};

export default News;
