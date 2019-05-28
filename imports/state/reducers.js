import { actionTypes } from './actions';

const initialState = {
  shows: [],
  filter: {},
  sort: undefined,
  currentPage: 1,
  pageLimit: 20,
  isLoading: false,
};

const showsReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case actionTypes.REQUEST_SHOWS:
      console.log(action);
      return Object.assign({}, state, {
        isLoading: true,
        currentPage: 1,
      });

    case actionTypes.LOAD_SHOWS:
      console.log(action);
      return Object.assign({}, state, {
        isLoading: false,
        shows: action.shows,
      });

    case actionTypes.DO_FILTER:
      console.log(action);
      return Object.assign({}, state, {
        filter: action.filter,
      });

    case actionTypes.DO_SORT:
      return Object.assign({}, state, {
        filter: action.sort,
      });

    case actionTypes.SET_PAGE_LIMIT:
      return Object.assign({}, state, {
        pageLimit: action.limit,
      });

    case actionTypes.REQUEST_NEXT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.nextPage,
        isLoading: true,
      });

    case actionTypes.LOAD_NEXT_PAGE:
      return Object.assign({}, state, {
        shows: [...state.shows, ...action.shows],
        isLoading: false,
      });

    default:
      return state;
  }
};

export default showsReducer;
