import React from 'react';
import Show from './Show';

const ShowsList = ({ shows }) => {
  const list = shows.map((show, index) => <Show show={show} number={index + 1} />);

  return (
    <div className="shows-list">
      <div className="shows-list_item shows-list_header">
        <div>No.</div>
        <div>Title</div>
        <div>Year</div>
        <div>Genres</div>
        <div>Rating</div>
        <div>Status</div>
      </div>
      {shows.length !== 0 ? list : 'No data to display!'}
    </div>
  );
};

export default ShowsList;
