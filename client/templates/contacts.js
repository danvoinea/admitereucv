Template.contacts.created = function () {
  this.autorun(function () {
      console.log('presubscirbe fac');
    this.subscription = Meteor.subscribe('facultati');
      console.log('subscribed fac');
  }.bind(this));
};


Template.contacts.rendered = function () {
    console.log('rendered');
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
    console.log('rendered end');
};


Template.contacts.helpers({
  facultati: function () {
      console.log('return fac');
    return Facultati.find({},{sort: {nume: 1}});
      console.log('found');
  }
});

