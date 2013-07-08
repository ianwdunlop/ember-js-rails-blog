App.CommentsNewController=Ember.ObjectController.extend({
	needs: 'post',
	text: null,
	
	save: function() {
                var me = this;
		var post = this.get('controllers.post.content');
		var comment = App.Comment.createRecord({ post: post, text: this.get('text') });
                comment.on('didCreate', function() {
                  me.get('target').transitionTo('post.index');
                });
                comment.get("store").commit();
	}
});
