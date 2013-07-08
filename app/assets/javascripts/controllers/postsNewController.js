App.PostsNewController=Ember.ObjectController.extend({

  title: null,
  text: null,

  save: function(post) {
    var me = this;
    var post = App.Post.createRecord({ title: this.get('text'), text: this.get('text') });
    post.on('didCreate', function() {
      me.get('target').transitionTo('posts.index');
    });
    post.get('store').commit();
  }
});
