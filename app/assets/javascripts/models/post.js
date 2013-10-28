App.Post=DS.Model.extend({
  comments: DS.hasMany('comment'),
  title: DS.attr('string'),
  text: DS.attr('string')
});
