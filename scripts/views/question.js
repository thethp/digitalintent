define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';

  var question = Backbone.View.extend({
    attributes: {
      class: 'question'
    },

    template: _.template($('#question').html()),

    initialize: function(){
      this.render();
    },

    render: function() {
      return this.$el.html(this.template(this.model.toJSON()));;
    }

  });  

  return question;
});