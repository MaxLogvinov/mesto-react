import React from 'react';

function ImagePopup(props) {
  return (
    <section
      className={`popup popup-photo popup_type_photo ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup-photo__container popup-photo__container_type_photo">
        <button
          type="button"
          className="popup__close-button popup-photo__close-button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup-photo__image popup-photo__image_type_photo"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup-photo__title popup-photo__title_type_photo">
          {props.card.name}
        </p>
      </div>
    </section>
  );
}

export default ImagePopup;
