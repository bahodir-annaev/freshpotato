import React from 'react';
import allGenres from '/imports/api/genres';

const GenresFilter = ({ genres, handleChange }) => {
  const genresInternal = allGenres
    .map(genre => Object.assign(
      {},
      genre,
      { selected: genres.some(g => g === genre.slug) }
    ));

  const checkboxes = genresInternal.map(genre => (
    <div>
      <label htmlFor={`ch-${genre.slug}`}>
        <input
          id={`ch-${genre.slug}`}
          type="checkbox"
          defaultChecked={genre.selected}
          onChange={() => handleChange(genre.slug)}
        />
        {genre.name}
      </label>
    </div>
  ));

  return (
    <div className="filter_genres">
      {checkboxes}
    </div>
  );
};

export default GenresFilter;
