import { Meteor } from 'meteor/meteor';
import '/imports/api/methods.js';

const REQUEST_SHOWS = 'REQUEST_SHOWS';
const LOAD_SHOWS = 'LOAD_SHOWS';
const DO_FILTER = 'DO_FILTER';
const DO_SORT = 'DO_SORT';
const REQUEST_NEXT_PAGE = 'REQUEST_NEXT_PAGE';
const LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE';
const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';

export const actionTypes = {
  REQUEST_SHOWS,
  LOAD_SHOWS,
  DO_FILTER,
  DO_SORT,
  REQUEST_NEXT_PAGE,
  SET_PAGE_LIMIT,
  LOAD_NEXT_PAGE,
};

// Actions
export const requestShows = () => ({
  type: REQUEST_SHOWS,
});

export const loadShows = result => ({
  type: LOAD_SHOWS,
  shows: result.data,
  metadata: {
    total_items: result.headers['x-pagination-item-count'],
    total_pages: result.headers['x-pagination-page-count'],
  },
});

export const doFilter = filter => ({
  type: DO_FILTER,
  filter,
});

export const doSort = sort => ({
  type: DO_SORT,
  sort,
});

export const requestNextPage = currentPage => ({
  type: REQUEST_NEXT_PAGE,
  nextPage: currentPage + 1,
});

export const loadNextPage = result => ({
  type: LOAD_NEXT_PAGE,
  shows: result.data,
});

export const setPageLimit = limit => ({
  type: SET_PAGE_LIMIT,
  limit,
});

// Helpers
const getFilterQueryString = filter => {
  let queryString = '';
  if (filter.query) {
    queryString += `&query=${filter.query}`;
  }
  if (filter.years) {
    queryString += `&years=${filter.years}`;
  }
  if (filter.genres && filter.genres.length > 0) {
    queryString += `&genres=${filter.genres.join(',')}`;
  }

  return queryString;
};

const getShowsRequestPromise = ({ pageLimit, currentPage, filter }) => {
  const query = getFilterQueryString(filter);

  return new Promise((resolve, reject) => {
    Meteor.call('Shows.get', currentPage, pageLimit, query, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

// Thunks
export const fetchShows = () => (dispatch, getState) => {
  dispatch(requestShows());

  const callPromise = getShowsRequestPromise(getState());

  return callPromise.then(result => dispatch(loadShows(result)));
};

export const fetchFilteredShows = filter => dispatch => {
  dispatch(doFilter(filter));
  return dispatch(fetchShows());
};

export const fetchNextPage = () => (dispatch, getState) => {
  dispatch(requestNextPage(getState().currentPage));

  const callPromise = getShowsRequestPromise(getState());

  return callPromise.then(result => dispatch(loadNextPage(result)));
};
