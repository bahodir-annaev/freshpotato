import React from 'react';

const QueryFilter = ({ query, handleChange }) => (
  <div>
    <input placeholder="Search" value={query} onChange={handleChange()} />
  </div>
);

export default QueryFilter;
