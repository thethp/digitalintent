define(['jquery', 'underscore', 'backbone', 'collections/questions', 'views/question'], function($, _, Backbone, Questions, QuestionView) {
  'use strict';

  var app = Backbone.View.extend({
    el: 'body',

    initialize: function() {
      this.render();
    },

    events: {
      'click .next-button': 'moreMessages'
    },

    render: function() {
      this.listenTo(Questions, 'reset', this.handleQuestions);      
      Questions.fetch({reset: true});
    },

    handleQuestions: function() {
      $('#questionHolder').empty();
      Questions.each(this.addQuestion, this);
    },

    addQuestion: function(question) {
      var questionView = new QuestionView({model: question});
      $('#questionHolder').append(questionView.render());
    },

    moreMessages: function() {
      Questions.fetch({reset: true});
    }

  });

  return app;
});
