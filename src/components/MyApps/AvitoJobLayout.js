import React, {} from "react";
import { Outlet  } from "react-router-dom";
import SEO from "../SEO/SEO";
import Navigation from "./Navigation";
import logo from "../../image/1.png"


function AvitoJobLayout ()  {
    const title = "Avito: отклики и вакансии";
    const description = "Чат, номер телефона кандидата, отклик и резюме в одном лиде или сделке портала Битрикс24.";
     const href = "https://newitera.bitrix24.ru/market/detail/integrationpart.avito_otkliki_i_vakansii/";


    return (

        <>
            <SEO
                title={title}
                description={description}
                image={href}
            />
            <div className="my-app__title-container">
                <img className="my-app__img" src={logo} alt="иконка"></img>
                <h3 className="my-app__title">{title}</h3>
                <p className="my-app__text">{description}</p>
                <a href={href} target="_blank" rel="noreferrer" className="my-app__link">Ссылка на приложение </a>
            </div>

            <Navigation />
            <Outlet />

        </>
    )
};

export default AvitoJobLayout;
