import React from 'react';

const handleEnter = (event, callback) => {
  if (event.nativeEvent.keyCode === 13) {
    callback(event.target.value);
  }
};

const SearchBar = ({ query, doFilter }) => (
  <div>
    <input placeholder="Search" defaultValue={query} onKeyUp={event => handleEnter(event, doFilter)} />
  </div>
);

export default SearchBar;
