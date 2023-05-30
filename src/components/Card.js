import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__card" key={card._id}>
      <button type="button" className="elements__delete-button"></button>
      <div
        className="elements__image"
        style={{ backgroundImage: `url(${card.link})` }}
        alt={card.name}
        onClick={handleClick}
      ></div>
      <div className="elements__card-content">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like"></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
