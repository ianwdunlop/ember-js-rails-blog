App.CommentsNewController=Ember.ObjectController.extend({
	needs: 'post',
	text: null,
	
  actions: {
	save: function() {
      var me = this;
	  var post = this.get('controllers.post.content');
	  var comment = this.get('store').createRecord('comment', { post: post, text: this.get('text') });
      comment.save().then(function(comment){
        //post.reload();
        post.get('comments').pushObject(comment);
        me.get('target').transitionTo('post');
      });
	}
  }
});
