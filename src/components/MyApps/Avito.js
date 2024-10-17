import React from 'react';
import { Link } from 'react-router-dom';
import Sector from '../Sector/Sector';
import { descAvito } from '../../utils/const';

function AvitoApp() {
  const decsItem = descAvito.list?.map((i) => (
    <li key={i.text} className="my-app__list-item">
      <p className="my-app__text">{i.text}</p>
    </li>
  ));

  return (
    <div className="my-app">
      <p className="my-app__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
      <ul className="my-app__list">
        {descAvito.list_name}
        {decsItem}
      </ul>
      <h4 className="my-app__subtitle">
        Все обновления приложения вы можете посмотреть в разделе:
        <Link className="my-app__navlink" to="/news">
          Новости
        </Link>
      </h4>

      <Sector />
    </div>
  );
}

export default AvitoApp;
