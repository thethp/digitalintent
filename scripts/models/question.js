define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Question = Backbone.Model.extend({
    defaults: {
      message: 'Loading...',
      display_date: '',
      user_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pacifier_for_newborn,_2015-07-12.jpg/225px-Pacifier_for_newborn,_2015-07-12.jpg'
    },

    initialize: function() {
      var createdDate = new Date(this.attributes.created_dt);
      this.set('display_date', this.formatDate(createdDate));

      if(this.attributes.poster.picture !== null) {
        this.set('user_img', this.attributes.poster.picture);
      }
    },

    formatDate: function(createdDate) {
      var secsAway = Math.floor(new Date().getTime()/1000 - createdDate.getTime()/1000);

      var interval = Math.floor(secsAway/31536000);
      if (interval > 1) {
        return interval+' year ago';
      }

      interval = Math.floor(secsAway/2592000);
      if (interval > 1) {
        return interval+'months ago';
      }

      interval = Math.floor(secsAway/86400);
      if (interval >= 1) {
        return interval+' days ago';
      }

      interval = Math.floor(secsAway/3600);
      if (interval >= 1) {
        return interval+' hours ago';
      }

      interval = Math.floor(secsAway/60);
      if (interval > 1) {
        return interval+' minutes ago';
      }

      return Math.floor(secsAway)+' seconds ago';
    }

  });

  return Question;
});