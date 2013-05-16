App.CommentsNewController=Ember.ObjectController.extend({
	needs: 'post',
	text: null,
	
	save: function() {
		var post = this.get('controllers.post.content');
		var comment = App.Comment.createRecord({ post: post, text: this.get('text') });
                comment.get("store").commit();
		this.get('target').transitionTo('post.index');
	}
});
