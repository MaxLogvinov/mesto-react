import React from 'react';

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={`popup__form-${props.name}`}
          className="popup__form"
          noValidate
        >
          {props.children}
          <button
            type="submit"
            className={`popup__save-button popup__save-button_type_${props.name} popup__save-button_valid`}
          >
            {props.textSaveButton}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
