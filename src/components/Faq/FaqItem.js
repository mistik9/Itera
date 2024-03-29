import React from "react";
import ImgPopup from "../ImgPopup/ImgPopup";
import { useParams, useNavigate } from "react-router-dom";


function FaqItem({ faq }) {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    function closePopup() {
        setIsPopupOpen(false)
    }

    function onClickImg(e) {
        setIsPopupOpen(true)
        setSelectedItem(e.target.src)
    }

    return (
        <>
            {faq?.filter((item) => item.id === id).map((item) => (
                <div key={item.id}>
                    <div className="faq__block" key={item.id} onClick={() => navigate(-1)}>
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
                            {item?.support ? <a className="section__icon section__icon_tg" href={support} target="_blank" rel="noreferrer"></a> : null}
                            {item?.support_wa ? <a className="section__icon section__icon_wa" href={support_wa} target="_blank" rel="noreferrer"></a> : null}
                        </div>
                    </ul>
                </div>
            ))}
            <ImgPopup selectedItem={selectedItem} onclose={closePopup} isPopupOpen={isPopupOpen} />
        </>
    )
};

export default FaqItem;
