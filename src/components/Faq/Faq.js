import React from "react";
import "./Faq.css";
import FaqItem from "./FaqItem";
import { Link } from "react-router-dom";

function Faq({ faq }) {

    const renderFaq = faq?.map(item => (
        <Link className="faq__link" to={`${item.id}`} key={item.id}>
            <div className="faq__block">
                <div className="faq__icon"> </div>
                <h4 className="faq__subtitle">{item.title}</h4>
            </div>
            <FaqItem item={item} />
        </Link>
    ))

    return (
        <div className="faq">
            {faq ? (renderFaq) : (
                <div className="my-app__title-container" >
                    <h4 className="my-app__subtitle">Здесь пусто. Пока что...</h4>
                </div >
            )}
        </div >

    )
}

export default Faq;