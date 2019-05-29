import React from 'react';
import Show from './Show';

const ShowsList = ({ shows }) => {
  const list = shows.map((show, index) => <Show show={show} number={index + 1} />);

  return <div>{shows.length !== 0 ? list : 'No data to display!'}</div>;
};

export default ShowsList;
