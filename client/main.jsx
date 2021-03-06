import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from '/imports/ui/container/App';
import showsReducer from '/imports/state/reducers';
import { fetchShows } from '/imports/state/actions';
import '/imports/api/methods.js';

const store = createStore(
  showsReducer,
  applyMiddleware(thunk)
);

Meteor.startup(() => {
  render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    document.getElementById('react-target')
  );
});

store.dispatch(fetchShows());
