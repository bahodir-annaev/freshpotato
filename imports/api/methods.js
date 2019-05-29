import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'Shows.get': (page = 1, limit = 20, query) => {
    const result = HTTP.get(`https://api.trakt.tv/shows/popular?extended=full&page=${page}&limit=${limit}${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'de64c3330a2c65524146fc13df6f79b4daa28d51ae57c1cb46000f749d47a365',
        // 'f59c83906e11f6219cc22ecba45b736fcfb11c9ddef9f51352ebdd9aba98de6c',
      },
    });

    return result;
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
