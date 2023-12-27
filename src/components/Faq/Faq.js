import React from "react";
import "./Faq.css";
import ImgPopup from "../ImgPopup/ImgPopup";



function Faq({ title, text, list }) {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);


    function closePopup() {
        setIsPopupOpen(false)
    }

    function onShow() {
        setVisible(!visible)
    }

    function onClickImg(e) {
        setIsPopupOpen(true)
        setSelectedItem(e.target.src)
    }


    return (
        <div className="faq">

            <div className="faq__block" onClick={onShow}>
                <div className={`faq__icon ${visible ? "faq__icon_minus" : ""}`} > </div>
                <h4 className="faq__subtitle">{title}</h4>
            </div>
            {visible ?
                (<ul className="faq__list" >
                    {list?.map((i) => (
                        <li key={i.text} className="faq__list-item">
                            <p className="faq__text">{i.text}</p>
                            {i.link ? <img className="faq__img" src={i.link} alt="скриншот" onClick={onClickImg}></img> : null}
                        </li>
                    ))}
                    {text}
                </ul>) : null}
            <ImgPopup selectedItem={selectedItem} onclose={closePopup} isPopupOpen={isPopupOpen} />
        </div >

    )
}

export default Faq;