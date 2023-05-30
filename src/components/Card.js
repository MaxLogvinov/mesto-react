import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__card" key={props.cardId}>
      <button type="button" className="elements__delete-button"></button>
      <div
        className="elements__image"
        style={{ backgroundImage: `url(${props.link})` }}
        alt={props.name}
        onClick={handleClick}
      ></div>
      <div className="elements__card-content">
        <h2 className="elements__name">{props.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like"></button>
          <p className="elements__like-counter">{props.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
