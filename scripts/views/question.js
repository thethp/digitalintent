define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';

  var question = Backbone.View.extend({
    attributes: {
      class: 'question'
    },

    initialize: function(){
      this.render();
    },

    render: function() {
      var template = _.template($('#question').html(), this.model.toJSON());
      return this.$el.html(template);
    }

  });  

  return question;
});