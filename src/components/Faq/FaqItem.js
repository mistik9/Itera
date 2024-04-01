import React from "react";
import ImgPopup from "../ImgPopup/ImgPopup";
import { useParams, useNavigate, useLocation } from "react-router-dom";


function FaqItem({ faq }) {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const path = useLocation().pathname.replace(/[^\/]+$/, '');//обрезать последнюю часть url


    function closePopup() {
        setIsPopupOpen(false)
    }

    function onClickImg(e) {
        setIsPopupOpen(true)
        setSelectedItem(e.target.src)
    }

    return (
        <div className="faq">
            {faq?.filter((item) => item.id === id).map((item) => (

                <div key={item.id}>
                    <div className="faq__block" key={item.id} onClick={() => navigate(`${path}`)}>
                        <div className="faq__icon faq__icon_minus" > </div>
                        <h4 className="faq__subtitle">{item.title}</h4>
                    </div>
                    <ul className="faq__list" >
                        {item?.list?.map((i, index) => (
                            <li key={i.text} className="faq__list-item">
                                <p className="faq__text">{i.text}</p>
                                {i.link ? <img className="faq__img" src={i.link} alt="скриншот" onClick={onClickImg}></img> : null}
                            </li>
                        ))}
                        {item?.text}
                        <div className="faq__support">
                            {item.support && <a className="section__icon section__icon_tg" href="https://t.me/+79958454368" target="_blank" rel="noreferrer"></a>}
                            {item.support_wa && <a className="section__icon section__icon_wa" href="https://wa.me/79958454368?text=" target="_blank" rel="noreferrer"></a>}
                        </div>
                    </ul>
                </div>
            ))}
            <ImgPopup selectedItem={selectedItem} onclose={closePopup} isPopupOpen={isPopupOpen} />
        </div>
    )
};

export default FaqItem;
