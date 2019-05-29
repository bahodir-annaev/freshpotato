import React from 'react';

const Show = ({ show, number }) => (
  <div className="show-item">
    <div>{number}</div>
    <div>{show.title}</div>
    <div>{show.year}</div>
    <div><Genres genres={show.genres} /></div>
    <div>{show.rating}</div>
  </div>
);

const Genres = ({ genres }) => (
  <div>
    {
      genres.map(genre => <span className="genre-pill">{genre}</span>)
    }
  </div>
);

export default Show;
