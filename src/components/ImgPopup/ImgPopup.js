import React from "react";
import "./ImgPopup.css";

function ImgPopup({selectedItem,  onclose, isPopupOpen }) {
 

  return (
    <section className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container popup__container_image">
        <button className="popup__close" type="button" onClick={onclose}></button>
        <img className="popup__image" src={selectedItem} alt="скриншот" />
        <p className="popup__disc"></p>
      </div>
    </section>
  )
}

export default ImgPopup;