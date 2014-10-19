import Ember from "ember";

export
default Ember.Component.extend( {
  classNames: [ 'dropzone' ],
  layout: Ember.Handlebars.compile( "Drop it like it's hot." ),

  classNameBindings: [ 'isDraggedOver' ],

  /* set in init */
  applicationController: null,

  init: function () {
    this._super();
    this.set(
      'applicationController',
      this.container.lookup( 'controller:application' )
    );
    this.get( 'applicationController' ).addEventMessage(
      'Dropzone initted...'
    );
  },

  dragEnter: function () {
    this.get( 'applicationController' ).addEventMessage(
      'dragEnter'
    );
  },

  dragLeave: function () {
    this.get( 'applicationController' ).addEventMessage(
      'dragLeave'
    );
  },

  dragOver: function ( event ) {
    /* prevent default to let ember handle the drop */
    event.preventDefault();
    this.get( 'applicationController' ).addEventMessage(
      'dragOver'
    );
  },

  drop: function ( event ) {
    this.get( 'applicationController' ).addEventMessage(
      'drop'
    );

    var dragData = JSON.parse( event.dataTransfer.getData( 'application/json' ) );

    var draggedView = Ember.View.views[ dragData.elementId ];
  }

} );