import React from 'react';

const YearsFilter = ({ years, handleChange }) => (
  <label htmlFor="years">
    Years
    <input type="text" id="years" value={years} onChange={handleChange()} />
  </label>
);

export default YearsFilter;
