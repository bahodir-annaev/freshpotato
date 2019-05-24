import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Shows = new Mongo.Collection('shows');

if (Meteor.isServer) {
  Meteor.publish('shows', () => Shows.find());
}

export default Shows;
