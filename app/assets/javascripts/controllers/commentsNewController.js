App.CommentsNewController=Ember.ObjectController.extend({
	needs: 'post',
	text: null,
	
	save: function() {
      var me = this;
	  var post = this.get('controllers.post.content');
	  var comment = this.get('store').createRecord('comment', { post: post, text: this.get('text') });
      comment.save().then(function(comment){
        me.get('target').transitionTo('post.index');
      });
	}
});
