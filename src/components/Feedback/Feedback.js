import React from 'react';
import './Feedback.css';
import bx from '../../image/bitrix24_partner.png';

function Feedback() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = `'https://cdn-ru.bitrix24.ru/b27494460/crm/form/loader_6.js'  ?${Date.now() / 180000 || 0}`;
    script.async = true;
    script.setAttribute('data-b24-form', 'inline/6/0ggjxc');
    script.setAttribute('data-skip-moving', 'true');
    const feedback = document.getElementById('feedback');
    feedback.prepend(script);
    return () => {
      feedback.removeChild(script);
    };
  }, []);

  return (
        <section className="feedback" id="feedback">

            <div className="feedback__contact">
            <img className="feedback__bx" src={bx} alt="Битрикс24 партнер" />
                <p className="feedback__text">
                    Расскажите о проекте, задайте вопросы — мы будем рады помочь вам
                </p>
                <a className="section__link" href="mailto:info@newitera.ru">info@newitera.ru</a>
                <a className="section__link" href="tel:+79958454368">+7 995 845 43 68</a>
                <div className="feedback__social-icons">
                    <a className="section__icon section__icon_wa" href="https://wa.me/79958454368?text=" target="_blank"
                        rel="noreferrer"/>

                    <a className="section__icon section__icon_tg" href="https://t.me/+79958454368" target="_blank"
                        rel="noreferrer"/>
                </div>
            </div>
        </section>

  );
}
export default Feedback;
