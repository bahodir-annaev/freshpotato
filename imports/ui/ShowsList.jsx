import React from 'react';
import Show from './Show';

const ShowsList = ({ shows }) => {
  const list = shows.map((show, index) => <Show show={show} number={index + 1} />);

  return <div>{list}</div>;
};

export default ShowsList;
