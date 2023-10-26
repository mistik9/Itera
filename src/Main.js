import React from "react";
import app from "./image/app.svg"

function Main() {

    return (
        <main class="main">
        <section class="lead section">
          <div class="d1">
            <div class="d2">
              <div class="d3">
                <div class="d4">
                  <div class="d5">
                    <div class="d6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 class="lead__title">ITera</h1>
          <p class="lead__subtitle">Открой новые возможности</p>
        </section>
        <section class="section left">
          <div class="d11">
            <div class="d21">
              <div class="d31">
                <div class="d41">
                  <div class="d51">
                    <div class="d61"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article>
            <p class="section__text">
              Компания ITera специализируется на разработке актуального
              программного обеспечения для бизнеса.
            </p>
            <p class="section__text">
              Мы предлагаем широкий спектр решений, которые помогут вашей компании
              эффективно работать в современных условиях.
            </p>
            <p class="section__text">
              Наша команда опытных разработчиков гарантирует высокое качество
              наших продуктов и оперативное реагирование на запросы клиентов.
            </p>
          </article>
        </section>
        <section class="section section_right">
          <div class="d11">
            <div class="d21">
              <div class="d31">
                <div class="d41">
                  <div class="d51">
                    <div class="d61"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article>
            <p class="section__text">
              Компания ITera специализируется на разработке актуального
              программного обеспечения для бизнеса.
            </p>
            <p class="section__text">
              Мы предлагаем широкий спектр решений, которые помогут вашей компании
              эффективно работать в современных условиях.
            </p>
            <p class="section__text">
              Наша команда опытных разработчиков гарантирует высокое качество
              наших продуктов и оперативное реагирование на запросы клиентов.
            </p>
          </article>
        </section> 
     <section class="section feedback">
          <form class="feedback__form" novalidate="novalidate">
            <h2 class="section__title">Оставить заявку</h2>
            <label class="feedback__label">Имя</label>
            <input class="feedback__input" type="name" placeholder="Олег" />
            <label class="feedback__label">Почта</label>
            <input class="feedback__input" type="email" placeholder="example@yandex.ru" />
            <label class="feedback__label">Телефон</label>
            <input class="feedback__input" type="tel" placeholder="+7(999)999-99-99" />
            <label class="feedback__label">
              <input class="feedback__checkbox" type="checkbox" /> Принимаю
              условия политики конфиденциальности</label>
            <button class="feedback__btn" type="submit" disabled="">
              Отправить
            </button>
          </form>
          <div class="feedback__contact">
            <p class="section__text">
              Расскажите о пректе, задайте вопросы — мы будем рады помочь вам
            </p>
            <a class="section__link" href="mailto:info@newitera.ru">info@newitera.ru</a>
            <a class="section__link" href="tel:+79958454368">+7 995 845 43 68</a>
            <div class="feedback__social-icons">
              <a class="feedback__icon feedback__icon_wa" href="https://wa.me/79958454368?text=" target="_blank"
                rel="noreferrer"></a>
    
              <a class="feedback__icon feedback__icon_tg" href="https://t.me/+79958454368" target="_blank"
                rel="noreferrer"></a>
            </div>
          </div>
        </section>
        <section class="section app">
          <h2 class="section__title">Наши приложения</h2>
          <div class="app__container">
          <div class="app__item">
            <img class="app__img" src={app}/>
            <p class="section__text">Интеграция диалогов, товаров, объявлений о продаже автомобилей и сделок на сайте Дром с порталом Битрикс24.</p>
            <a class="section__link" href="#" target="_blank">Подробнее 	&#8594;</a>
          </div>
          <div class="app__item">
            <img class="app__img" src={app}/>
            <p class="section__text">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
            <a class="section__link" href="#" target="_blank">Подробнее 	&#8594;</a>
          </div>
        </div>
        </section>
      </main>

    )
}

export default Main;