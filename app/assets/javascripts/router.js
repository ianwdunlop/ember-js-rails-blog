App.Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
  });
  this.resource('post', { path: '/posts/:post_id' }, function() {
    this.route('new');
    this.resource('comments', function() {
      this.route('new');
    });
    this.route('comment', { path: 'comments/:comment_id'});
  });
});
App.PostsIndexRoute=Ember.Route.extend({
  model: function(){
    return App.Post.find();
  }
});

App.PostIndexRoute=Ember.Route.extend({
  model: function(params) {
    return this.modelFor('post');
  }
});

App.CommentsNewRoute=Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('text', null);
  }	
});

App.PostsNewRoute=Ember.Route.extend({
  model: function(){
    return App.Post.createRecord();
  }
});
