import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import App from '/imports/ui/App';
import Shows from '/imports/api/shows';

const AppContainer = withTracker(() => {
  Meteor.subscribe('shows');
  return {
    shows: Shows.find()
      .fetch(),
  };
})(App);

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('react-target'));
});
