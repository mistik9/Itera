import React, {} from "react";
import { Outlet  } from "react-router-dom";
import SEO from "../SEO/SEO";
import Navigation from "./Navigation";

function AvitoJobLayout ()  {
    const title = "Avito: отклики и вакансии";
    const description = "Чат, номер телефона кандидата, отклик и резюме в одном лиде или сделке портала Битрикс24.";
     const href = "";


    return (

        <>
            <SEO
                title={title}
                description={description}
                image={href}
            />
            <div className="my-app__title-container">
                <img className="my-app__img" src="//util.1c-bitrix.ru/upload/bx24vendor/79b/h6uy1w7mfdv1hfb9uduq2kf91vzm0z4p/лого2.png" alt="иконка"></img>
                <h3 className="my-app__title">{title}</h3>
                <p className="my-app__text">{description}</p>
                {/* <a href={href} target="_blank" rel="noreferrer" className="my-app__link">Ссылка на приложение </a> */}
            </div>

            <Navigation />
            <Outlet />

        </>
    )
};

export default AvitoJobLayout;
