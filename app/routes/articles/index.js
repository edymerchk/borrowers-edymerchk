import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    showReturned: {
      refreshModel: true
    }
  },
  model: function(params) {
    var articles =  this.modelFor('friends/show').get('articles');
    if (articles.get('isFulfilled')) {
      articles.reload();
    }

    if(!params.showReturned){
      return articles.filterBy('state', 'borrowed');
    }
    return articles;
  },
  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
