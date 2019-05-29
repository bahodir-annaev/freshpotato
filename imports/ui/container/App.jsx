import React from 'react';
import { connect } from 'react-redux';
import { fetchNextPage } from '/imports/state/actions';
import ShowsList from '../presentation/ShowsList';
import Header from './Header';

const App = ({ shows, fetchNextPage }) => (
  <div>
    <Header />
    <ShowsList shows={shows} />
    <button type="button" onClick={fetchNextPage}>Load more!</button>
  </div>
);

const mapStateToProps = state => ({ shows: state.shows });

export default connect(mapStateToProps, { fetchNextPage })(App);
