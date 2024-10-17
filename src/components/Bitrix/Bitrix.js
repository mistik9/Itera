import React from 'react';
import './Bitrix.css';
import bitrix from '../../image/980x247.png';

function Bitrix() {
  return (
    <div className="section bitrix">
      <h2 className="section__title">Возможности Битрикс24</h2>
      <p className="section__text">
        Битрикс24 — это онлайн-сервис, в котором собраны все нужные инструменты для работы компании и управления бизнесом. Перенесите в единое пространство и
        автоматизируйте все рабочие коммуникации, продажи, проекты и бизнес-процессы.
      </p>
      <ul className="bitrix__list">
        <li className="bitrix__list-item">
          <span className="bitrix__span">CRM</span>
        </li>
        <li className="bitrix__list-item">
          Базовый инструмент для автоматизации продаж и маркетинга. Ведите всю клиентскую базу в одном месте, подключив все каналы продаж: телефон, сайт, почту,
          соцсети и мессенджеры.
        </li>
        <li className="bitrix__list-item">
          <span className="bitrix__span">Открытые линии</span>
        </li>
        <li className="bitrix__list-item">
          Открытые линии в Битрикс24 собирают сообщения со всех каналов, распределяют их по очереди, маршрутизируют между сотрудниками и все это в режиме
          реального времени.
        </li>
        <li className="bitrix__list-item">
          <span className="bitrix__span">Совместная работа</span>
        </li>
        <li className="bitrix__list-item">
          Новый уровень совместной работы всей компании. Пригласите сотрудников в единый онлайн-офис, повторяющий структуру вашей компании.
        </li>
        <li className="bitrix__list-item">
          <span className="bitrix__span">Задачи и проекты</span>
        </li>
        <li className="bitrix__list-item">
          Организуйте эффективную работу над задачами и проектами в удобном таск-трекере. Делегируйте, управляйте сроками, назначайте ответственных, создавайте
          шаблоны задач.
        </li>
        <li className="bitrix__list-item">
          <span className="bitrix__span">Автоматизация</span>
        </li>
        <li className="bitrix__list-item">
          Автоматизируйте всё, что мешает двигаться вперед — рутинные задачи, работу со сделками, согласование договоров, оплату счетов, отчетность.
        </li>
      </ul>
      <a href="https://www.bitrix24.ru/?p=17063680" alt="Битрикс24">
        <img className="bitrix__img" src={bitrix} alt="Битрикс24" />
      </a>
    </div>
  );
}

export default Bitrix;