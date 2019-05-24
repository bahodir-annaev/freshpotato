import React from 'react';

const Show = ({ show, number }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '30px 300px 50px' }}>
    <div>{number}</div>
    <div>{show.title}</div>
    <div>{show.year}</div>
  </div>
);

export default Show;
