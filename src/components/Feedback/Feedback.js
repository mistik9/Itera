import React from "react";
import "./Feedback.css"

function Feedback() {

    // function handleSubmit (e) {
    //     e.preventDefault()

    // }

    return (
        <section className="section feedback" id="feedback">
            <form className="feedback__form" action="mailto:info@newitera.ru" enctype="text/plain">
                <h2 className="section__title">Оставить заявку</h2>
                <label className="feedback__label">Имя</label>
                <input className="feedback__input" type="name" placeholder="Олег" required/>
                <label className="feedback__label">Почта</label>
                <input className="feedback__input" type="email" placeholder="example@yandex.ru" required/>
                <label className="feedback__label">Телефон</label>
                <input className="feedback__input" type="tel" placeholder="+7(999)999-99-99" required/>
                <label className="feedback__label">
                    <input className="feedback__checkbox" type="checkbox" required/> Принимаю
                    условия политики конфиденциальности</label>
                <button className="feedback__btn" type="submit" disabled="">
                    Отправить
                </button>
            </form>
            <div className="feedback__contact">
                <p className="feedback__text">
                    Расскажите о пректе, задайте вопросы — мы будем рады помочь вам
                </p>
                <a className="section__link" href="mailto:info@newitera.ru">info@newitera.ru</a>
                <a className="section__link" href="tel:+79958454368">+7 995 845 43 68</a>
                <div className="feedback__social-icons">
                    <a className="feedback__icon feedback__icon_wa" href="https://wa.me/79958454368?text=" target="_blank"
                        rel="noreferrer"></a>

                    <a className="feedback__icon feedback__icon_tg" href="https://t.me/+79958454368" target="_blank"
                        rel="noreferrer"></a>
                </div>
            </div>
        </section>

    )
}
export default Feedback;