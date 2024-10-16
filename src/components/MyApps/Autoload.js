/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import Sector from '../Sector/Sector';
import { aboutAutoload, descAutoload } from '../../utils/const';

function Autoload() {
  const decsItem = descAutoload.list?.map((i) => (
    <li key={i.text} className="my-app__list-item">
      <p className="my-app__text">{i.text}</p>
    </li>
  ));

  return (
    <div className="my-app">
      <p className="my-app__text">{aboutAutoload}</p>
      <ul className="my-app__list">
        {descAutoload.list_name}
        {decsItem}
      </ul>
      <p className="my-app__text">
        * Чтобы пользоваться данным приложением, на Авито у Вас должен быть подключен соответствующий тариф, включающий Автозагрузку.
      </p>
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

export default Autoload;
