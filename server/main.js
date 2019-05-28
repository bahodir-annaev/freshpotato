import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import Shows from '../imports/api/shows';
import '/imports/api/methods.js';


function loadShows() {
  const result = HTTP.get('https://api-staging.trakt.tv/shows/popular?limit=50', {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
    },
  });

  result.data.forEach(show => Shows.insert(show));
}

Meteor.startup(() => {
  Shows.remove({});
  loadShows();
});
