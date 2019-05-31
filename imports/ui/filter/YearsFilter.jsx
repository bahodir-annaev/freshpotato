import React from 'react';

const YearsFilter = ({ years, handleChange }) => (
  <div className="filter_years">
    <input style={{ margin: '0 4px 0 0', width: '60%' }} placeholder="Years" type="text" id="years" value={years} onChange={handleChange} />
    <span style={{ fontStyle: 'italic', fontSize: '10px' }}>e.i 2000-2005 or 1997</span>
  </div>
);

export default YearsFilter;
