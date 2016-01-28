define(['underscore', 'backbone', 'models/question'], function(_, Backbone, Question) {
  'use strict';

	var Questions = Backbone.Collection.extend({
		model: Question,
		url: 'http://api.smartmom.co/v2/post',
		parse: function(response) {
			return response.posts;
		}
	});

  return new Questions();
});