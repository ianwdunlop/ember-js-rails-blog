//App.PostAdapter = DS.Adapter.extend({
//  find: function(store, type, id) {
//    // return a promise inside of which is the callback which either resolves with the retrieved data or rejects with the status
//    var promise = new Ember.RSVP.Promise(function(resolve, reject){
//      store.find('post', id).then(;
//      resolve(compoundResult);
//    });
//    return promise;
//  }
//});
App.ApplicationSerializer = DS.ActiveModelSerializer.extend({});
