App.PostListInnerView = Ember.View.extend({
  tagName: 'div',
  templateName: 'posts/inner',
  classNames: ['card'],
  classNameBindings: ['isFlipped:flipped'],
  isFlipped: false,
  click: function() {
	if (this.get('isFlipped')) {
		this.set('isFlipped', false);
	} else {
		this.set('isFlipped', true);
	}
  }
});