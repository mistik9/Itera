import React from "react";
import Sector from "../Sector/Sector";

function AvitoApp() {

    return (
        <div className="my-app">
            <div className="my-app__title-container">
                <img className="my-app__icon" src="//util.1c-bitrix.ru/upload/bx24vendor/79b/h6uy1w7mfdv1hfb9uduq2kf91vzm0z4p/лого2.png" alt="icon"></img>
                <h3 className="my-app__title">Avito: чаты и товары</h3>
                <p className="my-app__text">Подключает диалоги Avito к открытым линиям, переносит данные из Avito в Битрикс24 исходя из настроек пользователя.</p>
                <a href="https://www.bitrix24.ru/apps/app/integrationpart.avito_chaty_sdelki_tovary/" target="_blank" className="my-app__link">Ссылка на приложение </a>
            </div>
            <h4 className="my-app__subtitle">Описание</h4>
            <p className="my-app__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
            <ul className="my-app__list">Главные преимущества приложения:
                <li className="my-app__list-item">Простота подключения! Подключение в несколько кликов!</li>
                <li className="my-app__list-item">Возможность отправлять фото из Битрикс24 в диалог на Avito</li>
                <li className="my-app__list-item">Загрузка данных из Avito на портал Битрикс24, в соответствии с пользовательскими настройками</li>
                <li className="my-app__list-item">Название и иконка диалога в открытых линиях соответствует объявлению, в которое пишет клиент</li>
            </ul>
            <p className="my-app__text">Для подключения приложения перейдите в контакт центр и выберите коннектор "Avito: чаты и товары"</p>
            <p className="my-app__text">Для настройки приложения откройте любую сделку и в верхнем меню выберите "Авито - Настройки"</p>
            <ul className="my-app__list">Обратите внимание:
                <li className="my-app__list-item">Установить приложение может только администратор портала</li>
                <li className="my-app__list-item">Отправка документов и видео на данный момент невозможна</li>
            </ul>
            <h4>Обновления:</h4>
            <ol className="my-app__list">Август 2023г:
                <li className="my-app__list-item">исправлена ошибка смены заголовка и иконки чата для порталов работающих по схеме лиды + CRM</li>
                <li className="my-app__list-item">добавлено автоматическое редактирование цитаты, которую пользователь отправляет из портала в читабельный формат</li>
                <li className="my-app__list-item">добавлена автоматическая отчистка тегов(b, br), которые Avito не распознаёт</li>
            </ol>
            <ol className="my-app__list">Сентябрь 2023г:
                <li className="my-app__list-item">Добавлена передача данных в лиды для порталов, работающих по схеме лиды+сделки</li>
                <li className="my-app__list-item">Настройки приложения теперь доступны в карточке лида, а не только в карточке сделки</li>
                <li className="my-app__list-item">В настройках приложения можно выбрать, в какие поля лида записывать данные</li>
            </ol>
            <ol className="my-app__list">Октябрь 2023г:
                <li className="my-app__list-item">Добавлена поддержка нескольких аккаунтов на портал</li>
            </ol>
            <Sector />
        </div>

    )
}

export default AvitoApp;