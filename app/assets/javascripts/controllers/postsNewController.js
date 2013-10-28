App.PostsNewController=Ember.ObjectController.extend({

  title: null,
  text: null,

  save: function(post) {
    var me = this;
    var post = this.get('store').createRecord('post', { title: this.get('title'), text: this.get('text') });
    post.save().then(function(post) {
      me.get('target').transitionTo('posts.index');
    });
  }
});
