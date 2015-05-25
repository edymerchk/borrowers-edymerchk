import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Friend', {
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(model);
});


test('fullName joins first and last name', function(assert) {
  var model = this.subject({firstName: 'Luis', lastName: 'Laverde'});
  assert.equal(model.get('fullName'), 'Luis Laverde');

  Ember.run(function() {
    model.set('firstName', 'Edymerchk');
  });

  assert.equal(model.get('fullName'), 'Edymerchk Laverde', 'Updates fullName');
});


test('articles relationship', function(assert) {
  var klass = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
