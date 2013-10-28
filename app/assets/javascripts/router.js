App.Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
  });
  this.resource('post', { path: '/posts/:post_id' }, function() {
    this.resource('comments', function() {
      this.route('new');
    });
    this.route('comment', { path: 'comments/:comment_id'});
  });
});
App.PostsRoute=Ember.Route.extend({
  model: function(){
    return this.get('store').find('post');
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

App.PostsIndexRoute=Ember.Route.extend({
  model: function(){
    return this.modelFor('posts');
  }
});

App.PostsNewRoute=Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', null);
    controller.set('text', null);
  }, 
  model: function(){
  }

});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('post', params.post_id);
  }
});
