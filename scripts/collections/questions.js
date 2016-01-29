define(['underscore', 'backbone', 'models/question'], function(_, Backbone, Question) {
  'use strict';

	var Questions = Backbone.Collection.extend({
		model: Question,

		url: function() {
			var searchString = (this.last() === undefined) ? '' : '/'+this.last().attributes.uuid;
			return 'http://api.smartmom.co/v2/post' + searchString;
			//return 'questions.json';
		},

		parse: function(response) {
			return response.posts;
		}

	});

  return new Questions();
});