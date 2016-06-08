Template.contactsShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('facultate', Router.current().params._id);
      console.log('subscribed facultatte');
  }.bind(this));
};


Template.contactsShow.rendered = function () {
    console.log('rendered');
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};



Template.contactsShow.helpers({
  facultate: function () {
      console.log('return facultate');
    return Facultati.findOne({_id: Router.current().params._id});
  },

  activeLabel: function () {
    if (this.details.active) {
      return '<i class="ion-checkmark-circled"></i> Active';
    } else {
      return '<i class="ion-minus-circled"></i> Inactive';
    }
  }
});

Template.contactsShow.events({
  'click [data-action=fake]': function (event, template) {
    event.preventDefault();
    console.log('Gotcha!');
  }
});
