Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('contacts', {
    path: '/'
  });

    this.route('despre', {
    path: '/despre'
    });

    this.route('acte', {
    path: '/acte'
    });

    this.route('calendar', {
    path: '/calendar'
    });

  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
});
