App.Post=DS.Model.extend({
  comments: DS.hasMany('comment', { async: true }),
  title: DS.attr('string'),
  text: DS.attr('string')
});
