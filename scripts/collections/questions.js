define(['underscore', 'backbone', 'models/question'], function(_, Backbone, Question) {
  'use strict';

	var Questions = Backbone.Collection.extend({
		model: Question,
		url: 'questions.json',
		parse: function(response) {
			return response.posts;
		}
	});

  return new Questions();
});