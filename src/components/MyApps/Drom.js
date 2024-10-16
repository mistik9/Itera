import React from 'react';
import { Link } from 'react-router-dom';
import Sector from '../Sector/Sector';

function DromApp() {
  return (
    <div className="my-app">
      <p className="my-app__text">Данное приложение подойдёт продавцам запчастей и продавцам автомобилей.</p>
      <p className="my-app__text">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
      <ul className="my-app__list">
        <li className="my-app__list-item">
          <span className="my-app__text-span">Диалоги</span>
          <p className="my-app__text">
            {' '}
            По каждому диалогу на Дром создается сделка, в которую предается: товар по которому написал пользователь (картинка, название, описание), ссылка на
            объявление, ссылка на профиль пользователя, название сделки обновляется в соответствии с названием товара. При отправке нескольких изображений,
            отправка происходит одним сообщением.
          </p>
        </li>
        <li className="my-app__list-item">
          <span className="my-app__text-span">Сделки</span>
          <p className="my-app__text">
            {' '}
            По каждой заключенной сделке на Дром создается сделка на портале Битрикс24, куда переносятся данные по отправке заказа и товары.
          </p>
        </li>
        <li className="my-app__list-item">
          <span className="my-app__text-span">Товары</span>
          <p className="my-app__text">
            {' '}
            Все товары из диалогов и сделок попадают в Битрикс24. При установке приложения, для них создаётся отдельный раздел в каталоге.
          </p>
        </li>
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

export default DromApp;
