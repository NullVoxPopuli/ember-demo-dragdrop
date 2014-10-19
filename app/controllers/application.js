import Ember from "ember";

export
default Ember.ArrayController.extend( {
  events: Ember.A(),

  init: function () {
    this._super();
    this.addEventMessage( 'Application initted...' );
  },

  addEventMessage: function ( message ) {
    var events = this.get( 'events' );
    events.push( message );
    this.set( 'events', events );
  },

  eventMessages: function () {
    return this.get( 'events' );
  }.property('events')



} );