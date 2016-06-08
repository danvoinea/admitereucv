Handlebars.registerHelper('phone', function(object) {
    return object.replace(/\D/g,'');
});
