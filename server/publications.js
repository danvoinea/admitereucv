Meteor.publish('facultati', function() {
  return Facultati.find({},{sort: {nume: 1}});
});

Meteor.publish('facultate', function(_id) {
  return Facultati.find({_id: _id});
});

