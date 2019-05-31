import React from 'react';

const QueryFilter = ({ query, handleChange }) => (
  <div className="filter_search">
    <input className="search-input" placeholder="Search" value={query} onChange={handleChange} />
  </div>
);

export default QueryFilter;
