import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Shows = new Mongo.Collection('shows');

if (Meteor.isServer) {
  Meteor.publish('shows', () => Shows.find());
}

Meteor.methods({
  ShowsGet(page = 1, limit = 20) {
    const result = HTTP.get(`https://api-staging.trakt.tv/shows/popular?page=${page}&limit=${limit}`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
      },
    });

    return result.data;
  },
});

export default Shows;
