import React from "react";
import "./Faq.css";
import ImgPopup from "../ImgPopup/ImgPopup";
// import { HashLink as Link } from 'react-router-hash-link';
import { Link, useLocation } from "react-router-dom";


function Faq({ title, text, list, id, support, support_wa }) {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const location = useLocation().pathname


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
   
            <Link className="faq__link" to={`#${id}`}>
                <div className="faq__block" onClick={onShow}>
                    <div className={`faq__icon ${visible ? "faq__icon_minus" : ""}`} id={id}> </div>
                    <h4 className="faq__subtitle">{title}</h4>
                </div>
            </Link>
            {visible ?
                (<ul className="faq__list" >
                    {list?.map((i) => (
                        <li key={i.text} className="faq__list-item" >
                            <p className="faq__text">{i.text}</p>
                            {i.link ? <img className="faq__img" src={i.link} alt="скриншот" onClick={onClickImg}></img> : null}
                        </li>
                    ))}
                    {text}
                    <div className="faq__support">
                    {support ? <a className="section__icon section__icon_tg" href={support} target="_blank" rel="noreferrer"></a> : null}
                    {support_wa ? <a className="section__icon section__icon_wa" href={support_wa} target="_blank" rel="noreferrer"></a> : null}
                    </div>
                </ul>) : null}
            <ImgPopup selectedItem={selectedItem} onclose={closePopup} isPopupOpen={isPopupOpen} />
        </div >

    )
}

export default Faq;