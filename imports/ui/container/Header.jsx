import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../presentation/SearchBar';
import { fetchFilteredShows } from '../../state/actions';

const Header = ({ filter, doFilter }) => (
  <div className="header">
    <div><h2 style={{ margin: 0 }}>FreshPotato</h2></div>
    <SearchBar query={filter.query} doFilter={doFilter} />
  </div>
);

export default connect(state => ({ filter: state.filter }), { doFilter: query => fetchFilteredShows({ query }) })(Header);
