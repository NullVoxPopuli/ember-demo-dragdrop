import Ember from "ember";

export
default Ember.Component.extend( {
  classNames: [ 'draggable-item' ],
  classNameBindings: [
    'isDragging'
  ],
  isDraggable: 'true',

  attributeBindings: [
    'isDraggable:draggable'
  ],

  /* set in init */
  applicationController: null,

  init: function () {
    this._super();
    this.set( 'applicationController',
      this.container.lookup( 'controller:application' )
    );
  },

  dragStart: function (event ) {
    this.get( 'applicationController' ).addEventMessage(
      'dragStart'
    );

    var dragData = {
      elementId: this.get( 'elementId' )
    };

    event.dataTransfer.setData(
      'application/json', // first argument is data type
      JSON.stringify( dragData ) // can only transfer strings
    );
  },

  drag: function () {
    this.get( 'applicationController' ).addEventMessage(
      'drag'
    );
  },

  dragEnd: function () {
    this.get( 'applicationController' ).addEventMessage(
      'dragEnd'
    );

    this.set( 'isDragging', false );
  }
} );