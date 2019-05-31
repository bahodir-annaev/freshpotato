import React from 'react';

const Show = ({ show, number }) => (
  <div className="shows-list_item">
    <div>{number}</div>
    <div>{show.title}</div>
    <div>{show.year}</div>
    <div><Genres genres={show.genres} /></div>
    <div style={{ textAlign: 'right' }}>{show.rating.toFixed(2)}</div>
    <div>{show.status}</div>
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
