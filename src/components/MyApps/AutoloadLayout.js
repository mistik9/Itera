import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SEO from "../SEO/SEO";
import Navigation from "./Navigation";

function AutoloadLayout() {
  const title = "Avito: автозагрузка"
  const description = "Выгружайте Ваши объявления на Avito из Битрикс24 автоматически."
  const href = "https://www.bitrix24.ru/apps/app/integrationpart.avito_avtozagruzka/"
  return (
    <>
      <SEO
        title={title}
        description={description}
        image={href}
      />

      <div className="my-app__title-container">
        <img className="my-app__img" src="//util.1c-bitrix.ru/upload/bx24vendor/892/h01fm2n4a26e3n8eam3h15h8ckldh4n1/Autoload.png?1709203801464" alt="иконка"></img>
        <h3 className="my-app__title">{title}</h3>
        <p className="my-app__text">{description}</p>
        <a href={href} target="_blank" rel="noreferrer" className="my-app__link">Ссылка на приложение </a>
      </div>
      <Navigation />
      <Outlet />
    </>
  )
};

export default AutoloadLayout;
