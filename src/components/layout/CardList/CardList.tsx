import React from 'react';
import { ICard, CardListProps } from '../../types/interfaces';
import Card from '../../blocks/Card';

import './CardList.scss';

const CardList = ({ cards, guestSessionId, syncMovieRating }: CardListProps) => (
  <main className="movie-list">
    {cards.length ? (
      cards.map((card: ICard) => (
        <Card key={card.id} {...card} guestSessionId={guestSessionId} syncMovieRating={syncMovieRating} />
      ))
    ) : (
      <h2 className="empty">There are no results for your request.</h2>
    )}
  </main>
);

export default CardList;
