Facultati = new Meteor.Collection('facultati');
Ground.Collection(Facultati);


Facultati.attachSchema(new SimpleSchema({
    'nume': {
        type: String,
        label: 'Nume',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Nume'
        },
        max: 200
    },
    'descriere': {
        type: String,
        label: 'Descriere',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Descriere'
        },
        max: 2000
    },
    'admitere': {
        type: String,
        label: 'Admitere',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Admitere'
        },
        max: 2000
    },
    'web': {
        type: String,
        label: 'Website',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Website'
        },
        max: 200
    },
    'telefon': {
        type: String,
        label: 'Telefon',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Telefon'
        },
        max: 200
    },
    'specializari': {
        type: [Object],
    },
    "specializari.$.nume": {
        type: String
    },
    "specializari.$.descriere": {
        type: String
    },
    "specializari.$.specializari": {
        type: [Object]
    },
    "specializari.$.specializari.$.nume": {
        type: String
    },
    "specializari.$.specializari.$.descriere": {
        type: String
    }
}));


/*
Contacts.before.insert(function (userId, doc) {
    var gender = Random.choice(['men', 'women']);
    var num = _.random(0, 50);
    doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});
 */