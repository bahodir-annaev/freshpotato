import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';

// const AppContainer = withTracker(() => {
//   Meteor.subscribe('shows');
//   return {
//     shows: Shows.find()
//       .fetch(),
//   };
// })(App);

Meteor.call('Shows.get', (error, result) => {
  Meteor.startup(() => {
    render(<App shows={result} />, document.getElementById('react-target'));
  });
});
