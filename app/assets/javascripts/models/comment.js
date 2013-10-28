App.Comment = DS.Model.extend({
  post: DS.belongsTo('post'),
  text: DS.attr('string')
});
