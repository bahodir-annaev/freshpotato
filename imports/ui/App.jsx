import React from 'react';
import { connect } from 'react-redux';
import ShowsList from './ShowsList';
import { fetchNextPage } from '/imports/state/actions';

const App = ({ shows, fetchNextPage }) => (
  <div>
    <ShowsList shows={shows} />
    <button type="button" onClick={fetchNextPage}>Load more!</button>
  </div>
);

const mapStateToProps = state => ({ shows: state.shows });

export default connect(mapStateToProps, { fetchNextPage })(App);
