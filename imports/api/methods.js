import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'Shows.get': (page = 1, limit = 20, query) => {
    const result = HTTP.get(`https://api-staging.trakt.tv/shows/popular?page=${page}&limit=${limit}${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
      },
    });

    return result;
  },
  'Shows.search': query => {
    const result = HTTP.get(`https://api.trakt.tv/search/movie?query=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
      },
    });

    return result.data;
  },
  'Show.getDetail': id => {
    const result = HTTP.get(`https://api.trakt.tv/shows/${id}?extended=full`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
      },
    });

    return result.data;
  },
});
