import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <button className="notfound__btn" onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className="notfound__img"></div>
    </div>
  );
}

export default PageNotFound;
