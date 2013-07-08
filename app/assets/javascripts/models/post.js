App.Post=DS.Model.extend({
  comments: DS.hasMany('App.Comment'),
  title: DS.attr('string'),
  text: DS.attr('string')
});
