import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm ';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: card.name,
      link: card.link,
    });
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          textSaveButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_name"
            id="name"
            name="userName"
            placeholder="Введите имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-error popup__input-error_type_name"></span>
          <input
            type="text"
            className="popup__input popup__input_type_occupation"
            id="occupation"
            name="userDescription"
            placeholder="Введите профессию"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error occupation-error popup__input-error_type_occupation"></span>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          textSaveButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_place"
            id="place"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error place-error"></span>
          <input
            id="link"
            name="link"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            required
            type="url"
          />
          <span className="popup__input-error link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          textSaveButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input popup__input_type_avatar"
            id="avatar"
            name="avatar"
            placeholder="Введите ссылку"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error avatar-error popup__input-error_type_avatar"></span>
        </PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />

        {/* <section className="popup popup-delete popup_type_delete">
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <h2 className="popup__title popup__title_type_delete">
              Вы уверены?
            </h2>
            <form
              name="popup__form-delete"
              className="popup__form popup__form_type_delete"
            >
              <button
                type="submit"
                className="popup__save-button popup__save-button_type_delete"
              >
                Да
              </button>
            </form>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default App;
