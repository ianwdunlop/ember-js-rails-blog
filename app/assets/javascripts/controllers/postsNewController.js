App.PostsNewController=Ember.ObjectController.extend({
	save: function(post) {
          var me = this;
                post.get("store").commit();
          post.on('didCreate', function() {
		me.get('target').transitionTo('posts.index');
          });
	}
});
