import React from 'react';
import { connect } from 'react-redux';
import { fetchNextPage, fetchFilteredShows } from '/imports/state/actions';
import Filter from './Filter';
import ShowsList from '../presentation/ShowsList';
import Header from './Header';

const App = ({
  shows,
  filter,
  fetchNextPage,
  fetchFilteredShows,
}) => (
  <div>
    <Header />
    <Filter filter={filter} doFilter={fetchFilteredShows} />
    <ShowsList shows={shows} />
    <button type="button" onClick={fetchNextPage}>Load more!</button>
  </div>
);

const mapStateToProps = state => ({ shows: state.shows, filter: state.filter });

export default connect(mapStateToProps, { fetchNextPage, fetchFilteredShows })(App);
