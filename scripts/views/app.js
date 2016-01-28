define(['jquery', 'underscore', 'backbone', 'collections/questions', 'views/question'], function($, _, Backbone, Questions, QuestionView) {
  'use strict';

  var app = Backbone.View.extend({
    el: 'body',
    initialize: function() {
      this.render();
    },

    render: function() {
      this.listenTo(Questions, 'reset sort', this.handleQuestions);      
      Questions.fetch({reset: true});
    },

    handleQuestions: function() {
      this.$el.empty();
      Questions.each(this.addQuestion, this);
    },

    addTweet: function(tweet) {
      var questionView = new QuestionView({model: Question});
      this.$el.append(tweetView.render());
    }

  });

  return app;
});
