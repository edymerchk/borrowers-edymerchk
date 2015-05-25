import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail:   Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save: function () {
      if (this.get('isValid')){
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });

      } else {
        this.set('errorMessage', 'Error!! you have to fill al the fields!');
      }
    },
    cancel: function () {
      return true;
    }
  }
});
