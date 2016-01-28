define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Question = Backbone.Model.extend({
    defaults: {
      uuid: '',
      message: 'Loading...',
      thumbnail: '',
      picture: '',
      reply_count: 0,
      created_dt: '',
      user_img: '',
      user_firstname: '',
      user_lastname: ''
    },

    render: function() {
      var template = _.template($('#question').html(), this.model.toJSON());
      return this.$el.html(template);
    }
  });

  return Question;
});

  /*
    formatDate: function(createdDate) {
      var secsAway = Math.floor(new Date().getTime()/1000 - createdDate.getTime()/1000);

      var interval = Math.floor(secsAway/31536000);
      if (interval > 1) {
        return interval+' years ago';
      }

      interval = Math.floor(secsAway/2592000);
      if (interval > 1) {
        return interval+'mnthss ago';
      }

      interval = Math.floor(secsAway/86400);
      if (interval >= 1) {
        return interval+' days ago';
      }

      interval = Math.floor(secsAway/3600);
      if (interval >= 1) {
        return interval+' hrs ago';
      }

      interval = Math.floor(secsAway/60);
      if (interval > 1) {
        return interval+' mins ago';
      }

      return Math.floor(secsAway)+' secs ago';
    },
*/